export const lightOnCollision = (event) => {
    const scene = document.querySelector("a-scene");
    const light = scene.querySelector('#light-music');
    const color =  event.target.getAttribute('color');
    // light.setAttribute('intensity', 1);
    //check if light has animation attribute
    if (light.hasAttribute('animation')) {
        light.removeAttribute('animation');
    }
    light.setAttribute('color', color);
    light.setAttribute('animation', 'property: intensity; from: 1; to: 0; dur: 1000; easing: linear');
    setTimeout(() => {
        light.removeAttribute('animation');
    }, 1000);

    // for (let index = 1; index > 0; index++) {
    //     light.setAttribute('intensity', index-0.1);
    //     // index-=0.1;
    //     // setTimeout(() => {
           
    //     // }, 100);
        
    // }
};