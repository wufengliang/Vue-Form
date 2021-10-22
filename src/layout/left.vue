<template>
  <div id="left-box">
    <div
      :is="config[name].button.tag"
      v-bind="transformValueToAttrs(config[name].button.attrs)"
    >
      按钮
    </div>
  </div>
</template>

<script>
import config from "@/config";
export default {
  data() {
    return {
      name: "antdv",
      config,
    };
  },
  methods: {
    transformValueToAttrs(array) {
      return array.reduce(
        (prev, next) => ((prev[next.key] = next.value), prev),
        {}
      );
    },
  },
};
</script>

<style scoped>
#left-box {
  box-sizing: border-box;
  flex-grow: 1;
  padding: 15px;
  border-right: 1px solid #e8e8e8;
  background-color: #fff;
}
</style>
