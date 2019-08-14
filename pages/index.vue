<template>
  <div>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <p> © 2019 </p>
  </div> 
</template>
<script>
import Intro from '~/components/pages/intro.vue'
import Skills from '~/components/pages/skills.vue'
import Projects from '~/components/pages/projects.vue'
import Contact from '~/components/pages/contact.vue'

import {TweenLite} from "gsap/TweenMax";

export default {
  components: {
    Intro,
    Skills,
    Projects,
    Contact
  },
  mounted () {
    const el = {
      container: this.$refs.container,
      screen: [this.$refs.screen]
    }
    const delays = [];
    let delayCounter = 0;

    // const animations = {
    //   screenPreset:{
    //     element: el.screen,
    //     duration: 0,
    //     animation: {y:-100}
    //   },
    //   screenOpacity: {
    //     element: el.screen,
    //     duration: .2,
    //     animation: {opacity: 1}
    //   },
    //   screenBounceIn: {
    //     element: el.screen,
    //     duration: 1,
    //     animation: {delay: functions.getDelay('prev', delays, delayCounter), y:0, ease: Elastic.easeOut.config(1, .3)}
    //   },
    //   screenBoxShadow: {
    //     element: el.screen,
    //     duration: .5,
    //     animation: {boxShadow: '10px 10px 0px rgba(124, 124, 124, 0.25)', delay: functions.getDelay('prev', delays, delayCounter)}
    //   }
    // }

    //Running the functions
    //functions.beginningAnimation(animations, delays, delayCounter);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
p{
  float:right;
  padding: 10px;
  color: white;
}
</style>

  

