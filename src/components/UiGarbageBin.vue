<script setup>
import { deleteItem, undoDeleteItem } from '../utils/deleteItem';
import '../aframe/listen-to.js';
const handleCollision = (event) => {
    console.log('Collision started:', event);
    deleteItem(event)
}

const handleDrop = (event) => {
    deleteItem(event)
}

const handleGrab = (event) => {
    undoDeleteItem()
}

</script>

<template>
    <a-entity
    position="1 .8 -.15"
    rotation="0 45 0">
        <a-box
        id="drop-zone-right"        
        position="0 0 0"
        opacity=".5"
        scale=".3 .3 .3"
        color="red"
        clickable
        outline-on-event></a-box>

        <a-entity id="drop-zone-right-spot" position="0 0 0" scale=".3 .3 .3" rotation="90 0 0"
            listen-to="target: #drop-zone-right;" simple-grab-drop-zone 
            sound="src: url(assets/sounds/delete.mp3); autoplay: false; poolSize: 10;"
            @drop="handleDrop($event)"
            @undrop="handleGrab($event)"></a-entity>

            <a-box
        id="drop-zone-anim"        
        position="0 0 0"
        opacity=".5"
        scale=".31 0 .31"
        color="red"
       ></a-box>
    </a-entity>
</template>

<style scoped></style>