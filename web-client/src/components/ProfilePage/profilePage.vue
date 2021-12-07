<template> 
<div>
    <navbar />
    <secondarynavbar />
</div>
</template>

<script>
import navbar from "./../navbar.vue";
import secondarynavbar from "./../secondarynavbar.vue";
export default {
  name: "profilePage",
  components: {
    navbar,
    secondarynavbar
  },
};
</script>

<style></style>
