<script setup>
import { playSoundOnCollision } from '../utils/playSoundOnCollision';
import { setSoundOnCollision } from '../utils/setSoundOnCollision';

const handleCollision = (event) => {
    if(event.detail.withEl.classList.contains('music-item')) {
        playSoundOnCollision(event);
        setSoundOnCollision(event);
    }
};

</script>

<template>
    <a-entity
   position=".2 0 .6"
   rotation="0 -90 0">
    <a-sphere class="sound-picker" scale=".1 .1 .1" position="-.35 1.3 -1.1" sound="src: url(assets/sounds/snare-drum.mp3); autoplay: false; poolSize: 10;"  obb-collider @obbcollisionstarted="handleCollision"></a-sphere>

    <a-sphere class="sound-picker" scale=".1 .1 .1" position="0 1.3 -1.1" sound="src: url(assets/sounds/kick.mp3); autoplay: false; poolSize: 10;" obb-collider @obbcollisionstarted="handleCollision" ></a-sphere>

    <a-sphere class="sound-picker" scale=".1 .1 .1" position=".35 1.3 -1.1" sound="src: url(assets/sounds/hi-hat.mp3); autoplay: false; poolSize: 10;" obb-collider @obbcollisionstarted="handleCollision"></a-sphere>

    <a-sphere class="sound-picker" scale=".1 .1 .1" position="-.35 1.55 -1" sound="src: url(assets/sounds/bell.mp3); autoplay: false; poolSize: 10;"  obb-collider @obbcollisionstarted="handleCollision"></a-sphere>

    <a-sphere class="sound-picker" scale=".1 .1 .1" position="0 1.55 -1" sound="src: url(assets/sounds/crash.mp3); autoplay: false; poolSize: 10;" obb-collider @obbcollisionstarted="handleCollision" ></a-sphere>

    <a-sphere class="sound-picker" scale=".1 .1 .1" position=".35 1.55 -1" sound="src: url(assets/sounds/tom.mp3); autoplay: false; poolSize: 10;" obb-collider @obbcollisionstarted="handleCollision"></a-sphere>

    <a-sphere class="sound-picker" scale=".1 .1 .1" position="-.35 1.8 -.9" sound="src: url(assets/sounds/triangle.mp3); autoplay: false; poolSize: 10;"  obb-collider @obbcollisionstarted="handleCollision"></a-sphere>

    <a-sphere class="sound-picker" scale=".1 .1 .1" position="0 1.8 -.9" sound="src: url(assets/sounds/hee-hee.mp3); autoplay: false; poolSize: 10;" obb-collider @obbcollisionstarted="handleCollision" ></a-sphere>

    <a-sphere class="sound-picker" scale=".1 .1 .1" position=".35 1.8 -.9" sound="src: url(assets/sounds/windows-error.mp3); autoplay: false; poolSize: 10;" obb-collider @obbcollisionstarted="handleCollision"></a-sphere>

    <a-entity position="0 1.1 -1" rotation="-75 0 0">
        <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: 03; align:center;" scale="4 4 4" position="0 .08 0"></a-entity>
        <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: Make it sound; align:center;" scale="2 2 2" position="0 -.05 0"></a-entity>
        <a-plane  color="#404040" height=".5" width="1" ></a-plane>
    </a-entity>

</a-entity>
</template>

<style scoped>
</style>