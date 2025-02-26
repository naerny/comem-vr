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
    <a-sphere class="sound-picker" material="src: /assets/images/audio.png; color: #696969; roughness: 1; metalness: 0" scale=".1 .1 .1" position="-.25 1.3 -1" sound="src: url(assets/sounds/snare-drum.mp3); autoplay: false"  obb-collider @obbcollisionstarted="handleCollision"></a-sphere>

    <a-sphere class="color-switcher" material="src: #my-texture" scale=".1 .1 .1" position="0 1.3 -1" sound="src: url(assets/sounds/kick.mp3); autoplay: false" obb-collider @obbcollisionstarted="handleCollision" ></a-sphere>

    <a-sphere class="color-switcher" material="src: #my-texture" scale=".1 .1 .1" position=".25 1.3 -1" sound="src: url(assets/sounds/hi-hat.mp3); autoplay: false" obb-collider @obbcollisionstarted="handleCollision"></a-sphere>

</a-entity>
</template>

<style scoped>
</style>