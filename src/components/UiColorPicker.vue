<script setup>
import { lightOnCollision } from '../utils/lightOnCollision';
import { playSound } from '../utils/playSound';
const getColorfromCollision = (event, color) => {
    
    if(event.detail.withEl.classList.contains('music-item')) {
        event.detail.withEl.setAttribute('color', color);
        lightOnCollision(event);   
        playSound(event);     
    }        
};
</script>

<template>
    <a-entity position="-.2 0 1.2" rotation="0 80 0">
        <a-sphere class="color-switcher" color="#ff6467" scale=".1 .1 .1" position=".15 1.2 -1.1" obb-collider sound="src: url(assets/sounds/confirm.mp3); autoplay: false; poolSize: 10;"
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#ffba00" scale=".1 .1 .1" position=".5 1.2 -1.1" obb-collider sound="src: url(awssets/sounds/confirm.mp3); autoplay: false; poolSize: 10;"
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#9ae600" scale=".1 .1 .1" position=".85 1.2 -1.1" obb-collider sound="src: url(assets/sounds/confirm.mp3); autoplay: false; poolSize: 10;"
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#00d492" scale=".1 .1 .1" position=".15 1.55 -1.05" obb-collider sound="src: url(assets/sounds/confirm.mp3); autoplay: false; poolSize: 10;"
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#00d3f2" scale=".1 .1 .1" position=".5 1.55 -1.05" obb-collider sound="src: url(assets/sounds/confirm.mp3); autoplay: false; poolSize: 10;"
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#51a2ff" scale=".1 .1 .1" position=".85 1.55 -1.05" obb-collider sound="src: url(assets/sounds/confirm.mp3); autoplay: false; poolSize: 10;"
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#a684ff" scale=".1 .1 .1" position=".15 1.9 -.9" obb-collider sound="src: url(assets/sounds/confirm.mp3); autoplay: false; poolSize: 10;"
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#ed6bff" scale=".1 .1 .1" position=".5 1.9 -.9" obb-collider sound="src: url(assets/sounds/confirm.mp3); autoplay: false; poolSize: 10;"
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#ff637e" scale=".1 .1 .1" position=".85 1.9 -.9" obb-collider sound="src: url(assets/sounds/confirm.mp3); autoplay: false; poolSize: 10;"
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-entity position=".5 .9 -1" rotation="-75 0 0">
            <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: 02; align:center;" scale="4 4 4"
                position="0 .08 0"></a-entity>
            <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: Colorize it; align:center;"
                scale="2 2 2" position="0 -.05 0"></a-entity>
            <a-plane color="#62748e" height=".5" width="1" position="0 0 0"></a-plane>
        </a-entity>

    </a-entity>

</template>

<style scoped></style>