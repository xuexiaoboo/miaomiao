<template>
  <div class="scroll" ref="scroll">
    <slot></slot>  <!-- 组件插槽 -->
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",

  mounted() {
    new BScroll(this.$refs.scroll, {
      tap: true //让tap点击事件生效
    });
  }
};
</script>

<style>
.scroll {
  height: 100%;
}
</style>