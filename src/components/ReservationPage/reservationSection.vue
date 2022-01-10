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
              @click="reserveRoom('09')"
              :disabled="reservedDates['09']"
            >
              {{ buttonText("09") }}
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
              {{ buttonText("10") }}
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
              {{ buttonText("11") }}
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
              {{ buttonText("12") }}
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
              {{ buttonText("13") }}
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
              {{ buttonText("14") }}
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
              {{ buttonText("15") }}
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
              {{ buttonText("16") }}
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
    reserveRoom(hour) {
      this.err_messages["err_room_full"] = "";
      axios
        .post("http://192.168.0.24:5000/api/managereserveroom", {
          room_id: 1,
          reservedBy: this.$store.state.userid,
          length: 1,
          start_time: `${this.$props.date} ${hour}`,
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
      this.$props.reservedDates[hour] = true;
    },
    buttonText(hr) {
      if (this.$props.reservedDates[hr] == true) {
        return "Not Available"
      }
      else {
        return "Reserve";
      }
    },
  },
};
</script>

<style scoped>
.resourceSectionFlex {
  margin-top: 5px;
}
#reserveButton {
  width: 143px;
  height: 50px;
  color: #0d1e63;
  font-size: 20px;
  font-weight: normal;
  background: white;
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
  background-color: #0d1e63;
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
  color: white;
}
button[disabled=disabled], button:disabled {
    background-color: gray !important;
    color: white !important;
}
/* button:active {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset !important,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset !important;
} */
</style>
