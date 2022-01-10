<template>
  <div class="container reservationDiv">
    <div class="row">
      <div class="d-flex justify-content-center calendarFlexBox">
        <div class="calendarWidthDiv">
          <v-calendar
            is-expanded
            :columns="2"
            :attributes="attrs"
            @dayclick="dayClicked"
            :min-date='new Date()'
          />
        </div>
      </div>
    </div>
    <h5 class="CalendarAvailableTitle">{{currentDate}}</h5>
    <h5 class="info">Please select a time to reserve the workroom.</h5>
    <div class="row">
      <reservationSection :reservedDates="mapped_times" :date="selectedDay" />
    </div>
  </div>
</template>

<script>
import reservationSection from "./reservationSection.vue";
import axios from "axios";
import moment from "moment";//npm install --save moment
export default {
  data() {
    return {
      selectedDay: null,
      currentDate: null,
      queryResult: [],
      reservedList: null,
      mapped_times: {
        "09": false,
        "10": false,
        "11": false,
        "12": false,
        "13": false,
        "14": false,
        "15": false,
        "16": false,
      },
      attrs: [
        {
          key: 'today',
          dot: true,
          dates: new Date(),
        },
      ],
    };
  },
  name: "reservationMainPage",
  components: {
    reservationSection,
  },
  methods: {
    disableAllButtons() {
      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth() + 1;
      if(month < 10 || day < 10){day = "0" + day.toString();month = "0" + month.toString()}
      var date =
      today.getFullYear() +
      "-" +
      month +
      "-" +
      day;
      date = date.toString();
      const mapped_times_keys = Object.keys(this.mapped_times);    
      if (moment(this.selectedDay).isBefore(date) == true) {
        for (let i = 0; i < mapped_times_keys.length; i++) {
          this.mapped_times[mapped_times_keys[i]] = true;
        }       
      }
    }, 
    mapReservedTimes() {
      const mapped_times_keys = Object.keys(this.mapped_times);
      for (let j = 0; j < this.queryResult["queryLst"].length; j++) {
        for (let i = 0; i < mapped_times_keys.length; i++) {
          if (
            this.queryResult["queryLst"][j]["start_time"] ==
            mapped_times_keys[i]
          ) {
            this.mapped_times[
              this.queryResult["queryLst"][j]["start_time"]
            ] = true;
          }
        }
      }
      this.disableAllButtons();
    },
    dayClicked(day) {
      this.selectedDay = day.id;
      console.log(this.selectedDay);
      this.getReservedRooms(this.selectedDay);
      this.currentDate = day.ariaLabel;
    },
    getReservedRooms(day) {
      this.mapped_times = {
        "09": false,
        "10": false,
        "11": false,
        "12": false,
        "13": false,
        "14": false,
        "15": false,
        "16": false,
      };
      axios
        .get("http://127.0.0.1:5000/api/managereserveroom", {
          params: { selectDay: day },
        })
        .then((response) => {
          this.queryResult = response.data;
          this.mapReservedTimes();
          var today = new Date();
          if (day == moment(today).format('YYYY-MM-DD')) {
            var hours = today.getHours();
            const mapped_times_keys = Object.keys(this.mapped_times);
            for (let i = 0; i < mapped_times_keys.length; i++) {
              if (parseInt(mapped_times_keys[i]) <= hours) {
                this.mapped_times[mapped_times_keys[i]] = true;
              }
            }
          }
          console.log(day);
          console.log(this.mapped_times);
        });
    },
  },
  mounted: function () {
    var months=new Array();
    months[1]="Ocak";
    months[2]="Şubat";
    months[3]="Mart";
    months[4]="Nisan";
    months[5]="Mayıs";
    months[6]="Haziran";
    months[7]="Temmuz";
    months[8]="Ağustos";
    months[9]="Eylül";
    months[10]="Ekim";
    months[11]="Kasım";
    months[12]="Aralık";
    var dayname=new Array();
    dayname[0]="Pazar";
    dayname[1]="Pazartesi";
    dayname[2]="Salı";
    dayname[3]="Çarşamba";
    dayname[4]="Perşembe";
    dayname[5]="Cuma";
    dayname[6]="Cumartesi";
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    if(month < 10 || day < 10){day = "0" + day.toString();month = "0" + month.toString()} 
    var date =
      year +
      "-" +
      (month) +
      "-" +
      day;
    date = date.toString();
    this.currentDate = parseInt(day) + " " + months[parseInt(month)] + " " + today.getFullYear() + " " + dayname[today.getDay()];
    
    var sdate =
    year +
    "-" +
    month +
    "-" +
    day;
    this.selectedDay = sdate.toString();
    this.getReservedRooms(date);
  },
};
</script>

<style>
.CalendarAvailableTitle {
  margin-top: 20px;
  font-size: 20px;
  color: rgb(129, 129, 129);
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
}
.calendarFlexBox {
  padding: 0px;
  margin-top: 100px;
}
.calendarWidthDiv {
  width: 900px !important;
}
.reservationDiv {
  width: 900px;
  margin-bottom: 50px;
  position: relative;
  padding-bottom: 35px;
}
.info {
  margin-top: 20px;
  font-size: 20px;
  color: #000000;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
}
</style>
