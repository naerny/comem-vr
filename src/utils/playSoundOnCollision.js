export const playSoundOnCollision = (event) => {
    const soundEl = event.target;
    soundEl.components.sound.playSound();    
    // console.log("source: " , event.target.getAttribute('sound'));    
    // event.detail.withEl.setAttribute('sound', event.target.getAttribute('sound'));
    // console.log("target: " , event.detail.withEl);
};