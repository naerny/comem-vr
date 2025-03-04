<script setup>
import { ref } from 'vue';
import '../aframe/listen-to.js'
import '../aframe/event-set.js'
import { playSoundOnCollision } from '../utils/playSoundOnCollision';
import { lightOnCollision } from '../utils/lightOnCollision';

const handleCollision = (event) => {
    if (event.detail.withEl.classList.contains('drumstick')) {
        playSoundOnCollision(event);
        lightOnCollision(event);
    }
};

const handleDrop = (event) => {
    spawnMusicItem(event);
    playSoundOnCollision(event);
}

const spawnItems = {
    box: {
        pos: "-.5 1.4 -.3",
        type: "box",
        id: "box-grabbable",
        class: "music-item",
        scale: "0.15 0.15 0.15",
    },
    sphere: {
        pos: "0 1.4 -.3",
        type: "sphere",
        id: "sphere-grabbable",
        class: "music-item",
        scale: "0.1 0.1 0.1",

    },
    cone: {
        pos: ".5 1.4 -.3",
        type: "cone",
        id: "cone-grabbable",
        class: "music-item",
        scale: "0.15 0.15 0.15",

    },
};

const spawnMusicItem = (event) => {
    console.log('event', event);
    const droppedItem = event.detail.el;
    const itemType = droppedItem.getAttribute('type');
    const instContainer = document.querySelector('#instuments-container');
    const instruments = Array.from(instContainer.children);
    const instrArr = Array.from(instruments);
    const instCount = instruments.length;
    const instByType = Array.from(instruments).filter(inst => inst.getAttribute('type') === itemType);
    let matchingCoordinates = false;

    instruments.forEach(inst => {
        Object.keys(spawnItems).forEach(type => {
            if (inst.getAttribute('position') === spawnItems[type].pos) {
                matchingCoordinates = true;
            }
        });
    });

    if (matchingCoordinates) {
        console.log('same position');
        return;
    } else {
        const newItem = document.createElement(`a-${itemType}`);
        newItem.setAttribute('position', spawnItems[itemType].pos);
        newItem.setAttribute('type', itemType);
        newItem.setAttribute('id', `${itemType}-grabbable_${instCount + 1}`);
        newItem.setAttribute('class', 'music-item');
        newItem.setAttribute('scale', spawnItems[itemType].scale);
        newItem.setAttribute('clickable', '');
        newItem.setAttribute('outline-on-event', '');
        newItem.setAttribute('simple-grab', '');
        newItem.setAttribute('obb-collider', '');
        newItem.setAttribute('listen-to__grab', `target: #${itemType}-grabbable; event: grab; emit: taken`);
        newItem.setAttribute('listen-to__drop', `target: #${itemType}-grabbable; event: drop; emit: untaken`);
        newItem.addEventListener('drop', spawnMusicItem);
        newItem.addEventListener('obbcollisionstarted', handleCollision);
        instContainer.insertAdjacentElement('beforeend', newItem);
        console.log('newItem', newItem);
    }
}

</script>

<template>
    <a-entity id="instuments-container">
        <a-box :id="spawnItems.box.id" :class="spawnItems.box.class" :type="spawnItems.box.type" :color="tempColor"
            :scale="spawnItems.box.scale" :position="spawnItems.box.pos" clickable outline-on-event
            sound__grab="src: url(assets/sounds/pick.mp3); autoplay: false; poolSize: 10;"
            sound__drop="src: url(assets/sounds/drop.mp3); autoplay: false; poolSize: 10;" simple-grab obb-collider
            @obbcollisionstarted="handleCollision" listen-to__grab="target: #box-grabbable; event: grab; emit: taken"
            listen-to__drop="target: #box-grabbable; event: drop; emit: untaken" @grab="playSoundOnCollision($event)"
            @drop="handleDrop($event)">
            >
        </a-box>

        <a-sphere :id="spawnItems.sphere.id" :class="spawnItems.sphere.class" :type="spawnItems.sphere.type"
            :color="tempColor" :scale="spawnItems.sphere.scale" :position="spawnItems.sphere.pos" clickable
            outline-on-event sound__grab="src: url(assets/sounds/pick.mp3); autoplay: false; poolSize: 10;"
            sound__drop="src: url(assets/sounds/drop.mp3); autoplay: false; poolSize: 10;" simple-grab obb-collider
            @obbcollisionstarted="handleCollision" listen-to__grab="target: #sphere-grabbable; event: grab; emit: taken"
            listen-to__drop="target: #sphere-grabbable; event: drop; emit: untaken" @grab="playSoundOnCollision($event)"
            @drop="handleDrop($event)">
        </a-sphere>

        <a-cone :id="spawnItems.cone.id" :class="spawnItems.cone.class" :type="spawnItems.cone.type" :color="tempColor" :scale="spawnItems.cone.scale" :position="spawnItems.cone.pos" clickable outline-on-event
            sound__grab="src: url(assets/sounds/pick.mp3); autoplay: false; poolSize: 10;"
            sound__drop="src: url(assets/sounds/drop.mp3); autoplay: false; poolSize: 10;" simple-grab obb-collider
            @obbcollisionstarted="handleCollision"
             listen-to__drop="target: #cone-grabbable; event: drop; emit: untaken" @grab="playSoundOnCollision($event)"
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