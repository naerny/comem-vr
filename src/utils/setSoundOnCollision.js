export const setSoundOnCollision = (event) => {
    const soundEl = event.target;
    soundEl.components.sound.playSound();
    event.detail.withEl.setAttribute('sound', event.target.getAttribute('sound'));    
};