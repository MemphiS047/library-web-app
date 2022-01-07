<template>
  <div class="container reservationDiv">
    <div class="row">
      <div class="d-flex justify-content-center calendarFlexBox">
        <div class="calendarWidthDiv">
          <v-calendar
            is-expanded
            :columns="2"
            :attributes="attributes"
            @dayclick="dayClicked"
          />
        </div>
      </div>
    </div>
    <h5 class="CalendarAvailableTitle">{{currentDate}}</h5>
    <div class="row">
      <reservationSection :reservedDates="mapped_times" :date="selectedDay" />
    </div>
  </div>
</template>

<script>
import reservationSection from "./reservationSection.vue";
import axios from "axios";
export default {
  data() {
    return {
      selectedDay: null,
      currentDate: null,
      queryResult: [],
      reservedList: null,
      mapped_times: {
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
      },
    };
  },
  name: "reservationMainPage",
  components: {
    reservationSection,
  },
  methods: {
    mapReservedTimes() {
      const mapped_times_keys = Object.keys(this.mapped_times);
      // const mapped_times_values = Object.values(this.mapped_times)
      console.log("LENGTH" + this.queryResult["queryLst"].length);
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
      console.log("MAPPED ITEMS");
      console.log(this.mapped_times);
    },
    dayClicked(day) {
      this.selectedDay = day.id;
      console.log(this.selectedDay);
      this.getReservedRooms(this.selectedDay);
      this.currentDate = day.ariaLabel;
    },
    getReservedRooms(day) {
      this.mapped_times = {
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
      };
      console.log("RECIEVED DAY" + day);
      /* var queryResult = []; */
      /* var flag = false; */
      axios
        .get("http://192.168.0.24:5000/api/managereserveroom", {
          params: { selectDay: day },
        })
        .then((response) => {
          //   const result = JSON.parse(JSON.stringify(response.data));
          //   result["queryLst"].forEach((element) => {
          //     this.queryResult.push({
          //       room_id: element.room_id,
          //       start_time: element.start_time
          //     });
          //   });
          //  let element;
          //   for(let i = 0; i < this.queryResult.length; i++ ) {
          //     element = this.queryResult[i]["start_time"];
          //     if(element == 2) {
          //       this.flag = true;
          //     }
          //   }
          //   console.log(this.$props.date);
          this.queryResult = response.data;
          console.log("Printing out reserved rooms");
          this.mapReservedTimes();
        });
      /* return this.flag; */
    },
  },
  mounted: function () {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    date = date.toString();
    this.currentDate = date;
    console.log("CURRENT DATE" + date);
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
</style>
