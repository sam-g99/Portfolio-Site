<template>
  <section class="projects-section" id="projects">
    <div class="content">
      <div class="section-info">
        <p>
          Some
          <span>projects</span> I've worked on.
        </p>
      </div>
      <div class="projects">
        <div class="project" v-for="project in projects" v-bind:key="project.name">
          <!-- <div class="project-images">
                    <div class="inner">
                        <img src="https://placekitten.com/408/287" alt="kitten">
                        <img src="https://placekitten.com/408/287" alt="kitten">
          </div>-->
          <img v-bind:src="require(`@/assets/images/projects/${project.image}.svg`)" alt="kitten" />
          <h3>{{project.name}}</h3>
          <p>{{project.description}}</p>
          <div class="links">
            <a target="_blank" v-bind:href="project.live">View Live</a>
            <a v-if="project.code" target="_blank" v-bind:href="project.code">View Code</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      projects: [
        {
          name: "Ivel's Personal Training",
          mainLang: "Vue/Nuxt",
          description:
            "Landing page created for a client. Used Figma for designing and Nuxt for server-side rendering and webpack",
          live: "https://ivelspersonaltraining.com/",
          image: "ivel"
        },
        {
          name: "PSD Template",
          mainLang: "Vue/Nuxt",
          description:
            "Developed a site based on a free PSD template. Utilized Gulp and SCSS.",
          live: "https://upbeat-shockley-d4c443.netlify.com/",
          code: "https://github.com/sam-g99/Tajam-Template-Site-PSD",
          image: "psd"
        },
        {
          name: "Movie Site",
          mainLang: "React",
          description:
            "Movie site that connects to an API to display different types of info about a movie. Using React.",
          live: "https://elegant-hoover-031eef.netlify.com/",
          code: "https://github.com/sam-g99/Movie-API",
          image: "movie"
        },
        {
          name: "Time Zones Made Simple",
          mainLang: "React",
          description:
            "SPA that creates links that help people know when an event is happening in their time. Using React and Moment JS.",
          live: "https://priceless-goldberg-a9cfed.netlify.com/",
          code: "https://github.com/sam-g99/Time-Zones-Made-Simple",
          image: "time"
        },
        {
          name: "Quiz Time",
          mainLang: "MEVN Stack",
          description: "Make or take quizzes. Using Node JS and Vue/Vuex",
          code: "https://github.com/sam-g99/Quiz-Time",
          live: "https://serene-sands-41595.herokuapp.com/",
          image: "quiz"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
.skills {
  @include desktop-start {
    display: flex;
    flex-flow: row;
  }
}
.projects {
  width: 100%;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  align-items: center;
  @include desktop-start {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
  }
}
.project {
  display: flex;
  flex-flow: column;
  background: rgb(26, 26, 26);
  margin-top: 20px;
  margin: 5px;
  margin-top: 30px;
  box-shadow: 3px 3px 0px rgba(46, 46, 46, 0.418);
  @include breakpoint(460) {
    width: 415px;
  }
  @include desktop-start {
    flex-basis: calc(50% - 10px);
    flex-flow: column;
  }
  @include breakpoint(1220) {
    flex-basis: calc(33.33333333333333% - 10px);
    flex-flow: column;
  }
  img {
    width: 100%;
  }
  h3 {
    color: $offWhite;
    font-weight: 500;
    font-size: 8vw;
    padding: 10px;
    @include breakpoint(460) {
      font-size: 32px;
    }
    @include desktop-start {
      font-size: 30px;
    }
  }
  p {
    color: $offWhite;
    font-size: 5vw;
    padding: 10px;
    overflow: hidden;
    @include breakpoint(460) {
      font-size: 18px;
    }
    @include desktop-start {
      height: 92px;
      font-size: 20px;
    }
  }
  a {
    display: block;
    border-radius: 2px;
    border: 2px solid #ffffff;
    color: $offWhite;
    max-width: 200px;
    width: 100%;
    font-size: 6vw;
    padding: 10px;
    text-align: center;
    margin-top: 10px;
    text-decoration: none;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.192);
    &:nth-child(1) {
      max-width: 350px;
    }
    @include breakpoint(460) {
      font-size: 22px;
    }
    @include desktop-start {
      padding: 8px;
      font-size: 22px;
    }
    &:nth-child(2) {
      border-color: $blue;
      color: $blue;
    }
  }
}
.links {
  display: flex;
  padding: 5px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  a {
    @include horizontal-spacing(20px);
  }
}
// .project-images{
//     perspective: 1000px;
//     width:100%;
//     height: 300px;
//     .inner{
//         position: relative;
//         transition: transform 0.8s;
//         transform-style: preserve-3d;
//     }
//     &:hover .inner{
//         transform: rotateY(180deg)
//     }
//     img{
//             position: absolute;
//             backface-visibility: hidden;
//             &:last-of-type{
//                 transform: rotateY(180deg);
//             }
//     }
// }
</style>
