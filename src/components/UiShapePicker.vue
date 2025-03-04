<script setup>
import { ref } from 'vue';
import '../aframe/listen-to.js'
import '../aframe/event-set.js'
import { playSoundOnCollision } from '../utils/playSoundOnCollision';
import { lightOnCollision } from '../utils/lightOnCollision';

const handleCollision = (event) => {
    if(event.detail.withEl.classList.contains('drumstick')) {
        playSoundOnCollision(event);
        lightOnCollision(event);
    }
};

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
    cone: ".5 1.4 -.3",
};

const spawnMusicItem = (event) => {
    console.log('event', event);
    const droppedItem = event.detail.el;
    const itemType = droppedItem.getAttribute('type');
    const instContainer = document.querySelector('#instuments-container');
    const instruments = instContainer.children;
    const instCount = instruments.length;
    const instByType = Array.from(instruments).filter(inst => inst.getAttribute('type') === itemType);

    if(droppedItem.getAttribute('position') === spawnItems[itemType].pos) {
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
    <a-entity
    id="instuments-container">
        <a-box
        :id="spawnItems.box.id"
        :class="spawnItems.box.class"
        :type="spawnItems.box.type"
        :color="tempColor"
        :scale="spawnItems.box.scale"
        :position="spawnItems.box.pos"
        clickable
        outline-on-event
        simple-grab obb-collider @obbcollisionstarted="handleCollision"
        listen-to__grab="target: #box-grabbable; event: grab; emit: taken"
        listen-to__drop="target: #box-grabbable; event: drop; emit: untaken"
        @drop="spawnMusicItem">
        >   
        </a-box>

        <a-sphere
        :id="spawnItems.sphere.id"
        :class="spawnItems.sphere.class"
        :type="spawnItems.sphere.type"
        :color="tempColor"
        :scale="spawnItems.sphere.scale"
        :position="spawnItems.sphere.pos"
        clickable
        outline-on-event
        simple-grab
        obb-collider 
        @obbcollisionstarted="handleCollision"
        listen-to__grab="target: #sphere-grabbable; event: grab; emit: taken"
        listen-to__drop="target: #sphere-grabbable; event: drop; emit: untaken"
        @drop="spawnMusicItem">
        </a-sphere>

        <a-cone
        id="cone-grabbable"
        class="music-item"
        :color="tempColor"
        scale="0.15 0.15 0.15"
        :position="spawnItems.cone"
        clickable
        outline-on-event simple-grab obb-collider @obbcollisionstarted="handleCollision">
        <a-light color="red" position="0 0 0" intensity="0"></a-light>
    </a-cone>

    <a-entity position="0 1.1 -.35" type="cone" rotation="-75 0 0">
        <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: 01; align:center;" scale="4 4 4" position="0 .08 0"></a-entity>
        <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: Pick your gear; align:center;" scale="2 2 2" position="0 -.05 0"></a-entity>
        <a-plane  color="#404040" height=".5" width="1.5" ></a-plane>
    </a-entity>

        
    </a-entity>




</template>

<style scoped></style>