<template>
  <section class="intro" id="home">
    <div class="content">
      <h1>
        Hey. I'm
        <span class="blue">Samuel Graham.</span>
      </h1>
      <p>I develop for the web.</p>
      <svg viewBox="0 0 754 523" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="754" height="523" fill="#424242" />
        <rect x="125" y="75" width="87" height="22" fill="white" />
        <rect x="43" y="75" width="56" height="22" fill="white" />
        <rect x="131" y="254" width="133" height="24" fill="#FF5C5C" />
        <rect x="45" y="255" width="56" height="21" fill="white" />
        <rect x="125" y="158" width="167" height="24" fill="#55B7FF" />
        <rect x="43" y="158" width="56" height="24" fill="#FF6060" />
        <rect x="264" y="344" width="201" height="22" fill="white" />
        <rect x="137" y="344" width="89" height="22" fill="#FF5C5C" />
        <rect x="43" y="344" width="56" height="22" fill="#55B7FF" />
        <rect x="137" y="425" width="109" height="22" fill="#55B7FF" />
        <rect x="43" y="425" width="56" height="22" fill="white" />
        <rect y="1" width="754" height="45" fill="#333333" />
      </svg>
      <div class="jump">
        <button id="skills-button">
          SKILLS
          <div class="underline"></div>
        </button>

        <button id="projects-button">
          PROJECTS
          <div class="underline"></div>
        </button>

        <button id="contact-button">
          CONTACT
          <div class="underline"></div>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import zenscroll from "zenscroll";
export default {
  mounted() {
    document.getElementById("skills-button").addEventListener("click", () => {
      console.log("cry");
      zenscroll.to(document.getElementById("skills"), 400);
    });
    document.getElementById("projects-button").addEventListener("click", () => {
      console.log("cry");
      zenscroll.to(document.getElementById("projects"), 500);
    });
    document.getElementById("contact-button").addEventListener("click", () => {
      console.log("cry");
      zenscroll.to(document.getElementById("contact"), 1000);
    });
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";

span {
  font-size: inherit;
}
.blue {
  color: $blue;
}
.red {
  color: $red;
}
.intro {
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  align-items: center;
  padding: 20px;
  min-height: 600px;
  @include desktop-start {
    padding: 30px;
    justify-content: center;
    height: 100vh;
  }
  .content {
    position: relative;
    max-width: 600px;
    @include desktop-start {
      width: 100%;
      max-width: 1400px;
    }
    h1 {
      color: white;
      font-weight: 400;
      font-size: 7.8vw;
      @include breakpoint(630) {
        font-size: 50px;
      }
      @include desktop-start {
        font-size: 45px;
      }
    }
    p {
      color: white;
      font-weight: 300;
      font-size: 6vw;
      margin-top: 0.5em;
      @include breakpoint(630) {
        font-size: 37px;
      }
      @include desktop-start {
        font-size: 32px;
      }
    }
    svg {
      width: 100%;
      height: auto;
      margin-top: 20px;
      max-width: 550px;
      @include desktop-start {
        position: absolute;
        width: 500px;
        height: auto;
        right: 0;
        top: 80px;
        margin-top: 0;
      }
      @include breakpoint(1060) {
        top: 0;
      }
    }
    .jump {
      display: flex;
      flex-flow: column;
      margin-top: 40px;
      button {
        @include vertical-spacing(20px);
        position: relative;
        background: none;
        border: none;
        align-self: flex-start;
        text-align: left;
        font-size: 10vw;
        font-weight: 300;
        color: white;
        outline: none;
        cursor: pointer;
        transition: transform 0.2s;
        @include breakpoint(630) {
          font-size: 63px;
        }
        @include desktop-start {
          font-size: 60px;
          &:hover {
            transform: scale(1.2);
          }
          &:active {
            transform: scale(1);
          }
          &:hover > .underline {
            background: $blue;
            transform: scale(1.02) translate(0px, -100%);
            height: 90%;
          }
        }
      }

      .underline {
        height: 1px;
        width: 100%;
        transform: translate(0px, -10px);
        z-index: -1;
        background: rgb(255, 255, 255);
        transition: width 0.3s, transform 0.3s, height 0.3s;
        position: absolute;
      }
    }
  }
}
</style>
