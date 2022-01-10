<template>
  <div class="positionResourceDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <span class="openPositionTitle">{{ jobTitle }}</span>
          </div>
          <div class="row">
            <div class="qualificationsDiv">
              <h5>Job Description</h5>
              <hr />
              <ul class="list-group">
                <li class="list-group-item positionPageListGroup border-0">
                  {{ jobDescription }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="d-flex justify-content-end">
              <span class="openPositionTitle">Job ID: {{this.$props.jobId}}</span>
            </div>
          </div>
          <div class="row openPositionButtonCol">
            <div
              class="d-flex flex-column-reverse align-items-end bd-hghlight openPositionButtonSection"
            >
            <input v-if="$store.state.is_authenticated" class="form-check-input" type="radio" name="jobAppRadioBtn" v-bind:id="jobId" v-bind:value="jobId"> 

              <!-- <button
                v-if="is_defualt && $store.state.is_authenticated"
                id="applyButton"
                class="defaultBtn"
                @click="apply"
              >
                Apply
              </button>
              <button
                v-if="is_applied"
                id="applyButton"
                class="appliedBtn"
                @click="apply"
                disabled
              >
                Applied
              </button>
              <button
                v-if="is_blocked"
                id="applyButton"
                class="blockedBtn"
                @click="apply"
                disabled
              >
                Disabled
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "profilepageItemSection",
  props: [
    "jobId",
    "jobTitle",
    "payment",
    "jobDescription",
    "jobApplicationUid",
    "appliedJob",
  ],
  data() {
    return {
      is_defualt: true,
      is_applied: false,
      is_applied_job_stlying: false,
      is_blocked: false,
    };
  },
  methods: {
    change_style() {
      this.is_defualt = false;
      if (this.$props.appliedJob == this.$props.jobId) {
        this.is_applied = true;
      } else {
        this.is_blocked = true;
      }
    },
    apply() {
      console.log(this.$store.state.userid);
      axios
        .post("http://127.0.0.1:5000/api/apply", {
          job_id: this.$props.jobId,
          user_id: this.$store.state.userid,
          respond: "waiting",
        })
        .then((res) => {
          console.log(res.data);
          console.log("Deneme");
          this.$router.push(this.$route.query.redirect || "/openpositions");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted: function () {
    console.log("Auth status " + this.$store.state.is_authenticated);
    if (this.$store.state.is_authenticated == false) {
      this.is_defualt = true;
      this.is_applied = false;
      this.is_blocked = false;
    } else {
      if (this.$props.jobApplicationUid != "N/A") {
        this.is_defualt = false;
        if (this.$props.appliedJob == this.$props.jobId) {
          this.is_applied = true;
        } else {
          this.is_blocked = true;
        }
      } else {
        this.is_applied = false;
        this.is_blocked = false;
        this.is_defualt = true;
      }
    }
    console.log("A: " + this.is_applied);
    console.log("B: " + this.is_blocked);
    console.log("C: " + this.is_defualt);
  },
};
</script>

<style>
.openPositionButtonCol {
  height: 200px;
}
.openPositionButtonSection {
  height: 100%;
}
.defaultBtn {
  width: 107px;
  height: 50px;
  background-color: #0d1e63 !important;
  color: #ffff;
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}

.appliedBtn {
  width: 107px;
  height: 50px;
  background-color: #1e9924 !important;
  color: #ffff;
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}

.blockedBtn {
  width: 107px;
  height: 50px;
  background-color: #757575 !important;
  color: rgb(187, 187, 187);
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}

.openPositionLocationTitle {
  width: 200px;
}
h5 {
  font-weight: 400;
  padding: 0px !important;
}
.qualificationsDiv {
  margin-top: 35px !important;
  padding: 0px;
}
.qualificationsSpan {
  padding: 0px;
}
.positionPageListGroup {
  background-color: transparent !important;
  font-family: "Manjari";
  padding: 0px 0px 0px 0px !important;
  color: white;
}
.resourceSectionFlex {
  margin-top: 5px;
}
#retrunButton {
  width: 107px;
  height: 50px;
  background-color: #630d0d !important;
  color: #ffff;
  font-size: 20px;
  font-weight: normal;

  background: #ffff;
  border: 1px solid #0d1e63;
  box-sizing: border-box;
  border-radius: 15px;
  border-style: solid;
}
.positionResourceDiv {
  width: 100%;
  height: 100%;
  padding: 20px !important;
  margin-top: 20px !important;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #0d1e63;
  color: white;
}
.resourceAuthor {
  width: 419px;
  height: 27px;
  left: 27px;
  top: 39px;
  padding: 0px 10px 0px 10px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
  color: #000000;
}

.openPositionTitle {
  color: white !important;
  margin-top: 20px;
  width: auto !important;
  height: 27px;
  top: 39px;
  padding: 0px 0px 0px 0px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 27px;
  color: #000000;
}
</style>
