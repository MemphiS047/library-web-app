<template>
  <div>
    <p>{{ dt }}</p>
  </div>
</template>

<script>
export default {
  name: "announcementFullPage",
  data() {
    return {
      dt: "",
    };
  },
  created() {
    this.dt = this.$route.params.data;
  },
};
</script>

<style scoped>
p{
    margin-top: 200px;
}
</style>
