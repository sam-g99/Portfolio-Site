<template>
  <nav v-bind:class="{open: open}">
    <div class="hamburger-icon" v-on:click="toggleNav">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h3 class="opacity" ref="title"> What would you like to check out?</h3>
      <ul ref="links">
        <li>Home</li>
        <li>Skills</li>
        <li> Projects </li>
        <li>Contact</li>
      </ul>
    <a href="https://github.com/sam-g99 " target="blank_" class="github opacity" ref="github"> My Github </a>
  </nav>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  data: () => {
    return{
      open: false,
      tweens: []
    }
  },
  methods:{
    navigationAnimation(){
      console.log(this.tweens);
      if(this.tweens.length !== 0){
        this.tweens.forEach( t => {
          console.log(t)
          if(t.reversed()){
            t.play()
          }else{
            t.reverse()
          }
        })
        return;
      }
      const el = {
        title: [this.$refs.links,this.$refs.github, this.$refs.title]
      }
      const delays = [];
      let delayCounter = 0;
      const delayManager = (d) => {
        if(delays.length === 0){
          delays.push(d);
        }else{
          delays.push(delays[delays.length - 1] + d);
        }
      }
      const getDelay = (p) => {
        if(p === 'prev'){
          const delay = delays[delayCounter - 1];
          delayCounter++;
          return delay;
        }
        const delay = delays[delayCounter];
        delayCounter++;
        return delay;
      }

      const animations = {
        screenOpacity: {
          element: el.title,
          duration: .2,
          animation: {opacity: 1}
        },
      }
      //Animation Functions
        for(const key in animations){
          const {element, duration, animation} = animations[key];
          if(duration > 0){
            delayManager(duration)
          }
          this.tweens.push(TweenLite.to(element, duration, animation));
        }
  },
  toggleNav(){
    this.open = !this.open;
    if(this.open){
      setTimeout(() => this.navigationAnimation(), 200);
    }else{
      this.navigationAnimation()
    }
  }
  }
}
</script>

<style <style lang="scss" scoped>
@import '@/assets/css/main.scss';
  a{
    text-decoration: none;
  }
  .opacity{
    opacity:0;
  }
  nav{
    display: flex;
    flex-flow: column;
    box-shadow: 3px 3px 0px rgba(59, 59, 59, 0.25);
    position: fixed;
    overflow:hidden;
    background-color: #4F4F4F;
    padding:.8em;
    padding-top:1em;
    padding-bottom:1em;
    width:55px;
    max-width: 1000px;
    height:48px;
    border-radius: 5px;
    top:20px;
    left:4%;
    z-index: 100;
    transition-duration: .3s;
    // HAMBURGER ICON
    .hamburger-icon{
      cursor:pointer;
      div{
        @include vertical-spacing(5px);
        width:30px;
        padding:1.5px;
        background: white;
        transition-duration: .1s;
      }
    }
    // TITLE 
    h3{
      position:absolute;
      top:15px;
      right:10px;
      display: none;
      font-size: 4.8vw;
      z-index: -1;
      color:white;
      font-weight: 400;
      @include breakpoint(400){
        font-size: 16px;
      }
    }
    // LINK ITEMS
    ul{
      color:white;
      list-style:none;
      text-align: center;
      opacity: 0;
      li{
        font-size: 8vw;
        padding-top:10px;
        padding-bottom:10px;
        border-bottom:solid 1px #696969;
        @include breakpoint(400){
          font-size: 32px;
        }
      }
    }
    // GITHUB BUTTON
    .github{
      background:white;
      color: #2c2c2c;
      font-weight: 600;
      padding:8px;
      border-radius: 100px;
      text-align:center;
      font-size: 5.7vw;
      margin:0 auto;
      width:100%;
      margin-top:20px;
      max-width:500px;
      @include breakpoint(400){
        font-size: 22.8px;
      }
    }
  }
  //Open Nav
  .open{
    width:90vw;
    height:260px;
    .hamburger-icon{
      div{
      &:first-child{
        transform: rotate(50deg) translate(7px, 4px);
      }
      &:nth-child(2){
        opacity:0;
      }
      &:last-child{
        transform: rotate(-44deg) translate(6px, -5px);
      }
      }
    }
  }
</style>
