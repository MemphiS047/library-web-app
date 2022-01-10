<template>
  <div class="resourceDiv">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <label class="resourceTitle">{{ title }}</label>
          </div>
          <div class="row snippetRow">
            <p class="resourceSnippet">{{ snippet }}</p>
          </div>
          <div>
            <label class="linkArticle"
              ><a class="aLinkHref" :href="link">Link</a></label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resourceSection",
  props: ["position", "title", "link", "snippet"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.aLinkHref {
  color: yellow;
}
.linkArticle {
  font-size: 15px;
}
.container {
  height: 100%;
}
.snippetRow {
  position: relative;
  width: 100% !important;
}
.resourceSectionFlex {
  margin-top: 5px;
}
#borrowButton {
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
.resourceDiv {
  width: 100%;
  height: 150px;
  padding: 20px !important;
  margin-top: 20px !important;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  border-color: white !important;
  background: #101c26;
}
.resourceSnippet {
  color: white !important;
}

.resourceTitle {
  width: 100%;
  height: 100%;
  left: 27px;
  top: 39px;
  padding: 0px 10px 0px 10px;
  font-family: Manjari;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
  color: white !important;
}
button[disabled=""],
button:disabled {
  background-color: rgb(255, 0, 0) !important;
}
button:disabled {
  background-color: red !important;
}
p {
  left: 69px !important;
}
</style>
