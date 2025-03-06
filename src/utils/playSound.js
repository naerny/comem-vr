export const playSound = (event) => {
    let soundEl;
    
    if(event.target.classList.contains('music-item') || event.target.classList.contains('drumstick')) {
        if(event.type === 'grab') {            
            soundEl = event.target.components.sound__grab;            
            soundEl.playSound();
        } else if(event.type === 'drop') {
            soundEl = event.target.components.sound__drop;            
            soundEl.playSound();            
        } else if (event.type === 'obbcollisionstarted') {
            soundEl = event.target.components.sound;
            soundEl.playSound();
        }
    } else {
        soundEl = event.target.components.sound;
        soundEl.playSound();
    }

    // soundEl = event.target.components.sound;
    //     soundEl.playSound();
};