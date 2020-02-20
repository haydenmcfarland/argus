<template>
  <iframe :width="width" :height="height" :src="url" scrolling="no"></iframe>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Monitor',
  props: {
    url: String,
    width: {
      type: String,
    },
    height: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style scoped lang="scss">
iframe {
  border: 0;
  overflow: hidden;
  background:url('../assets/loader.gif') center center no-repeat;
}
</style>
