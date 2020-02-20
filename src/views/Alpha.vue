<template>
  <div>
    <img class="logo" alt="Argus" src="../assets/logo.png" />
    <div class="column" v-for="i in urlGroups" :key="i">
      <div class="group" v-for="u in urls.slice((i - 1) * urlGroupSize, i * urlGroupSize)" :key="u">
        <Monitor :url="u" :width="tileWidth" :height="tileHeight"></Monitor>
      </div>
    </div>
  </div>
</template>

<script>
import Monitor from '@/components/Monitor.vue';

export default {
  name: 'Alpha',
  components: {
    Monitor,
  },
  methods: {
    calculateDimension(dimension) {
      return `${(dimension / this.urlGroupSize).toString()}px`;
    },
    refreshIframes() {
      Array(window.frames).forEach((f) => f.location.reload());
    },
  },
  computed: {
    tileWidth() {
      return this.calculateDimension(this.windowWidth);
    },
    tileHeight() {
      return this.calculateDimension(this.windowHeight);
    },
    urlGroups() {
      return Math.ceil(this.urls.length / this.urlGroupSize);
    },
  },
  created() {
    this.urls = Array(10).fill().map(() => 'https://www.vuejs.org');
    setInterval(this.refreshIframes, (this.refreshRate || 360) * 1000);
  },
  data() {
    return {
      refreshRate: 5,
      urlGroupSize: 4,
      urls: [],
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>

<style lang="scss">
.logo {
  width: 300px;
}
.group {
  float: left;
}
.column {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
