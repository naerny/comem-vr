<script setup>
import { ref } from 'vue';
import { playSoundOnCollision } from '../utils/playSoundOnCollision';

const handleCollision = (event) => {
   
    if(event.detail.withEl.classList.contains('drumstick')) {
        playSoundOnCollision(event);
    }
};

</script>

<template>
    <a-entity>
        <a-box id="box-grabbable" class="music-item" :color="tempColor" scale="0.15 0.15 0.15" position="-.5 1.4 -.3" clickable outline-on-event
            simple-grab obb-collider @obbcollisionstarted="handleCollision"></a-box>

        <a-sphere id="sphere-grabbable" class="music-item" :color="tempColor" scale="0.1 0.1 0.1" position="0 1.4 -.3" clickable
            outline-on-event simple-grab obb-collider @obbcollisionstarted="handleCollision"></a-sphere>

        <a-cone id="cone-grabbable" class="music-item" :color="tempColor" scale="0.15 0.15 0.15" position=".5 1.4 -.3" clickable
        outline-on-event simple-grab obb-collider></a-cone>
    </a-entity>




</template>

<style scoped></style>