
import {TweenLite} from "gsap/TweenMax";
export default  function getDelay (p, delays, delayCounter) {
    if(p === 'prev'){
      const delay = delays[delayCounter - 1];
      delayCounter++;
      return delay;
    }
    const delay = delays[delayCounter];
    delayCounter++;
    return delay;
}
export const delayManager = (d, delays) => {
    if(delays.length === 0){
        delays.push(d);
    }else{
        delays.push(delays[delays.length - 1] + d);
    }
}
export const beginningAnimation = (animations, delays, delayCounter) => {
    for(const key in animations){
      const {element, duration, animation} = animations[key];
      if(duration > 0){
        delayManager(duration, delays);
      }
      TweenLite.to(element, duration, animation)
    }
  }