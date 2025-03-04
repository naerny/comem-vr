export const setSoundOnCollision = (event) => {
    const soundEl = event.target;
    soundEl.components.sound.playSound();
    // console.log("source: " , event.target.getAttribute('sound'));    
    event.detail.withEl.setAttribute('sound', event.target.getAttribute('sound'));
    
    // event.detail.withEl.setAttribute('sound', {poolSize: 10});
    console.log(event.target.getAttribute('sound'));   
};