<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isactive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  methods: {
    itemClick() {
      // console.log("itemClick");
      this.$router.push(this.path);
    },
  },
  computed: {
    isactive() {
      // console.log(this.$route);
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveColor() {
      return this.isactive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  margin-top: 3px;
  vertical-align: middle;
  width: 24px;
  height: 24px;
}
.active {
  color: red;
}
</style>
