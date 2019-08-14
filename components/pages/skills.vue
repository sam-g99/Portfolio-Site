<template>
  <section class="skills" id="skills">
    <div class="content">
      <div class="section-info">
        <p>
          The
          <span>skills</span> I use to bring ideas to life on the web!
        </p>
      </div>
      <div class="lists">
        <div class="list" v-for="list in lists" v-bind:key="list.title">
          <h3>{{list.title}}</h3>
          <p v-for="skill in list.skills" v-bind:key="skill">{{skill}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      lists: [
        {
          title: "Front End",
          skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Jquery",
            "React",
            "Vue",
            "Nuxt",
            "SASS/SCSS",
            "GSAP"
          ]
        },
        {
          title: "Build Tools",
          skills: ["Gulp", "Webpack"]
        },
        {
          title: "Back End",
          skills: ["Node JS", "MongoDB", "SQL"]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
.lists {
  @include vertical-spacing(50px);
  display: flex;
  flex-flow: column;
  color: white;
  @include desktop-start {
    flex-flow: row;
    width: 100%;
    margin: 0;
    @include horizontal-spacing(30px);
  }
}
.list {
  @include vertical-spacing(20px);
  display: flex;
  flex-flow: column;
  color: white;
  background: #3e3e3e;
  text-align: center;
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
  align-self: center;
  @include desktop-start {
    align-self: flex-start;
    margin-right: 10px;
    &:first-child {
      justify-self: flex-start;
    }
    &:nth-child(2) {
      margin-left: auto;
    }
    &:nth-child(3) {
      margin-left: auto;
      margin-right: 0;
    }
  }

  h3 {
    font-weight: 400;
    padding: 10px;
    font-size: 8vw;
    color: rgb(255, 255, 255);
    border-bottom: 1px solid #585858;
    width: 100%;
    @include breakpoint(460) {
      font-size: 36px;
    }
    @include desktop-start {
      font-size: 35px;
      @include horizontal-spacing(50px);
    }
  }
  p {
    padding: 10px;
    font-size: 7vw;
    font-weight: 300;
    @include breakpoint(460) {
      font-size: 32px;
    }
    @include desktop-start {
      font-size: 30px;
    }
  }
}
</style>
