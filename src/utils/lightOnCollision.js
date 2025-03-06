export const lightOnCollision = (event) => {
    const scene = document.querySelector("a-scene");
    const light = scene.querySelector('#light-music');
    const color =  event.target.getAttribute('color');
    if (light.hasAttribute('animation')) {
        light.removeAttribute('animation');
    }
    light.setAttribute('color', color);
    light.setAttribute('animation', 'property: intensity; from: 2; to: 0; dur: 1000; easing: linear');
    setTimeout(() => {
        light.removeAttribute('animation');
    }, 1000);
};