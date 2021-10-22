<template>
  <div id="container-box">
    <header class="header-box">111</header>
    <div class="warpper-box">
      <left-box />
      <center-box />
      <right-box />
    </div>
  </div>
</template>

<script>
import LeftBox from "./left.vue";
import RightBox from "./right.vue";
import CenterBox from "./center.vue";
export default {
  components: {
    LeftBox,
    CenterBox,
    RightBox,
  },
};
</script>

<style>
.header-box {
  height: 60px;
  background-color: #ccc;
}
.warpper-box {
  display: flex;
  height: calc(100vh - 60px);
  background-color: #eceff8;
}
</style>
