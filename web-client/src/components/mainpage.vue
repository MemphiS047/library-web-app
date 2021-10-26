<template>
  <div>
    <navbar/>
    <secondarynavbar/>
  </div>
</template>
<script>
import navbar from "./navbar.vue";
import secondarynavbar from "./secondarynavbar.vue";
export default {
  name: 'mainpage',
  components: {
    navbar,
    secondarynavbar
  },
};
</script>

<style> 
html {
  background-color: #f0f0f0 !important;
}
</style>
