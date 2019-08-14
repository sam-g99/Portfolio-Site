<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";
html {
  background-color: #333333;
}
* {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto";
}

h2 {
  color: #dbdbdb;
  font-weight: 500;
  font-size: 25vw;
  text-shadow: 2px 2px 0px rgb(0, 202, 101);
  @include desktop-start {
    font-size: 120px;
  }
}
.content {
  width: 100%;
  max-width: 1400px;
  align-self: center;
}
section {
  display: flex;
  flex-flow: column;
  padding: 15px;
}
.section-info {
  margin-bottom: 40px;
  p,
  span {
    font-size: 8vw;
    color: white;
    font-weight: lighter;
    font-family: "Nunito Sans";

    @include breakpoint(460) {
      text-align: center;
      font-size: 30px;
    }
    @include desktop-start {
      text-align: left;
    }
    span {
      font-weight: normal;
    }
  }
}
</style>
