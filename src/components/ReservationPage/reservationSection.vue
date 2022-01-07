<template>
  <div class="reservationSectionDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <h5 class="reservationSectionTitle">09:00 am &#8594; 10:00 am</h5>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button
              id="reserveButton"
              @click="reserveRoom('9')"
              :disabled="reservedDates['9']"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="reservationSectionDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <h5 class="reservationSectionTitle">10:00 am &#8594; 11:00 am</h5>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button
              id="reserveButton"
              @click="reserveRoom('10')"
              :disabled="reservedDates['10']"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="reservationSectionDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <h5 class="reservationSectionTitle">11:00 am &#8594; 12:00 am</h5>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button
              id="reserveButton"
              @click="reserveRoom('11')"
              :disabled="reservedDates['11']"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="reservationSectionDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <h5 class="reservationSectionTitle">12:00 pm &#8594; 13:00 pm</h5>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button
              id="reserveButton"
              @click="reserveRoom('12')"
              :disabled="reservedDates['12']"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="reservationSectionDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <h5 class="reservationSectionTitle">13:00 pm &#8594; 14:00 pm</h5>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button
              id="reserveButton"
              @click="reserveRoom('13')"
              :disabled="reservedDates['13']"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="reservationSectionDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <h5 class="reservationSectionTitle">14:00 pm &#8594; 15:00 pm</h5>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button
              id="reserveButton"
              @click="reserveRoom('14')"
              :disabled="reservedDates['14']"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="reservationSectionDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <h5 class="reservationSectionTitle">15:00 pm &#8594; 16:00 pm</h5>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button
              id="reserveButton"
              @click="reserveRoom('15')"
              :disabled="reservedDates['15']"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="reservationSectionDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <h5 class="reservationSectionTitle">16:00 pm &#8594; 17:00 pm</h5>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-row-reverse bd-hghlight resourceSectionFlex">
            <button
              id="reserveButton"
              @click="reserveRoom('16')"
              :disabled="reservedDates['16']"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "reservationSection",
  data() {
    return {
      roomid: 1,
      userid: 1,
      length: 2,
      dateFromCalendar: this.$props.date,
      err_messages: {
        err_room_full: "",
      },
      flag: false,
      queryResult: [],
    };
  },
  props: ["date", "reservedDates"],
  methods: {
    // mapReservedTimes() {
    //   const mapped_times_keys = Object.keys(this.mapped_times)
    //   // const mapped_times_values = Object.values(this.mapped_times)
    //    for (let j = 0; j < this.$props.reservedDates.length; j++){
    //     for (let i = 0; i < mapped_times_keys; i++) {
    //       if(this.$props.reservedDates[j] == mapped_times_keys[i]){
    //         this.mapped_times[j] = true
    //       }
    //     }
    //   }
    //   console.log(this.mapped_times);
    // },
    // disableAllButtons() {
    //   for (const [key, value] of Object.entries(this.$props.reservedDates)) {
    //     this.$props.reservedDates[key] = true;
    //     console.log(value);
    //   }
    // },
    reserveRoom(hour) {
      this.err_messages["err_room_full"] = "";
      axios
        .post("http://192.168.0.24:5000/api/managereserveroom", {
          room_id: 1,
          reservedBy: this.$store.state.userid,
          length: 1,
          start_time: `${this.$props.date} ${hour}`
        })
        .then((res) => {
          if (res.data["message"] == "Room reserved successfully") {
            this.err_messages["err_room_full"] = "";
          } else {
            this.err_messages["err_room_full"] = res.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("DISABELING BUTTONS");
      // this.disableAllButtons();
      // console.log("PRINTING QUERY RECEIVED FROM PARENT COMP.");
      // console.log(this.$props.reservedDates);
    },
    // getReservedRooms() {
    //   /* var queryResult = []; */
    //   /* var flag = false; */
    //   axios
    //     .get("http://127.0.0.1:5000/api/managereserveroom", {
    //       params: { selectDay: this.$props.date },
    //     })
    //     .then((response) => {
    //       //   const result = JSON.parse(JSON.stringify(response.data));
    //       //   result["queryLst"].forEach((element) => {
    //       //     this.queryResult.push({
    //       //       room_id: element.room_id,
    //       //       start_time: element.start_time
    //       //     });
    //       //   });
    //       //  let element;
    //       //   for(let i = 0; i < this.queryResult.length; i++ ) {
    //       //     element = this.queryResult[i]["start_time"];
    //       //     if(element == 2) {
    //       //       this.flag = true;
    //       //     }
    //       //   }
    //       //   console.log(this.$props.date);
    //       this.queryResult = response.data;
    //       console.log("Printing out reserved rooms");
    //       console.log(this.queryResult);
    //     });
    //   /* return this.flag; */
    // },
    isAvailable() {
      // this.getReservedRooms();
      console.log(this.queryResult);
      let element;
      for (let i = 0; i < this.queryResult.length; i++) {
        element = this.queryResult[i]["start_time"];
        if (element == 22) {
          this.flag = true;
          return this.flag;
        }
      }
      return this.flag;
    },
  },
  // mounted: function () {
  //   this.getReservedRooms();
  // },
  /* computed: {
  isDisabled() {
    this.getReservedRooms();
    if(this.flag  == true) {
      console.log(this.flag);
      return true;
    }
    else {
      console.log(this.flag);
      return false;
    }
  }
} */
};
</script>

<style>
.resourceSectionFlex {
  margin-top: 5px;
}
#reserveButton {
  width: 107px;
  height: 50px;
  color: #0d1e63;
  font-size: 20px;
  font-weight: normal;
  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}
.reservationSectionDiv {
  width: 100%;
  height: 100px;
  padding: 20px !important;
  margin-top: 20px !important;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
.reservationSectionTitle {
  margin-top: 20px;
  width: 419px;
  height: 27px;
  left: 27px;
  top: 39px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
  color: #000000;
}
</style>
