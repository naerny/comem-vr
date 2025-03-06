<script setup>
import { ref } from 'vue';
import '../aframe/listen-to.js'
import '../aframe/event-set.js'
import { playSound } from '../utils/playSound';
import { lightOnCollision } from '../utils/lightOnCollision';
import { spawnMusicItem, spawnItems } from '../utils/spawnMusicItem.js';

const handleCollision = (event) => {
    if (event.detail.withEl.classList.contains('drumstick')) {
        playSound(event);
        lightOnCollision(event);        
    }
};

const handleDrop = (event) => {
    spawnMusicItem(event, handleCollision);
    playSound(event);
}
</script>

<template>
    <a-entity id="instuments-container">
        <a-box :id="spawnItems.box.id" :class="spawnItems.box.class" :type="spawnItems.box.type" :color="tempColor"
            :scale="spawnItems.box.scale" :position="spawnItems.box.pos" clickable outline-on-event
            sound__grab="src: url(assets/sounds/pick.mp3); autoplay: false; poolSize: 10;"
            sound__drop="src: url(assets/sounds/drop.mp3); autoplay: false; poolSize: 10;" simple-grab obb-collider
            @obbcollisionstarted="handleCollision" listen-to__grab="target: #box-grabbable; event: grab; emit: taken"
            listen-to__drop="target: #box-grabbable; event: drop; emit: untaken" @grab="playSound($event)"
            @drop="handleDrop($event)">
            >
        </a-box>

        <a-sphere :id="spawnItems.sphere.id" :class="spawnItems.sphere.class" :type="spawnItems.sphere.type"
            :color="tempColor" :scale="spawnItems.sphere.scale" :position="spawnItems.sphere.pos" clickable
            outline-on-event sound__grab="src: url(assets/sounds/pick.mp3); autoplay: false; poolSize: 10;"
            sound__drop="src: url(assets/sounds/drop.mp3); autoplay: false; poolSize: 10;" simple-grab obb-collider
            @obbcollisionstarted="handleCollision" listen-to__grab="target: #sphere-grabbable; event: grab; emit: taken"
            listen-to__drop="target: #sphere-grabbable; event: drop; emit: untaken" @grab="playSound($event)"
            @drop="handleDrop($event)">
        </a-sphere>

        <a-cone :id="spawnItems.cone.id" :class="spawnItems.cone.class" :type="spawnItems.cone.type" :color="tempColor" :scale="spawnItems.cone.scale" :position="spawnItems.cone.pos" clickable outline-on-event
            sound__grab="src: url(assets/sounds/pick.mp3); autoplay: false; poolSize: 10;"
            sound__drop="src: url(assets/sounds/drop.mp3); autoplay: false; poolSize: 10;" simple-grab obb-collider
            @obbcollisionstarted="handleCollision"
             listen-to__drop="target: #cone-grabbable; event: drop; emit: untaken" @grab="playSound($event)"
            @drop="handleDrop($event)"
            >
        </a-cone>

        <a-entity position="0 1.1 -.35" type="cone" rotation="-75 0 0">
            <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: 01; align:center;" scale="4 4 4"
                position="0 .08 0"></a-entity>
            <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: Pick your gear; align:center;"
                scale="2 2 2" position="0 -.05 0"></a-entity>
            <a-plane color="#62748e" height=".5" width="1.5"></a-plane>
        </a-entity>


    </a-entity>




</template>

<style scoped></style>