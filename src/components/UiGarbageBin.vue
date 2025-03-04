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
    position=".8 1 -.5">
        <a-box
        id="drop-zone-right"        
        position="0 0 0"
        opacity=".5"
        scale=".3 .3 .3"
        color="red"
        clickable
        outline-on-event></a-box>

        <a-entity id="drop-zone-right-spot" position="0 0 0" scale=".3 .3 .3" rotation="90 0 0"
            listen-to="target: #drop-zone-right;" simple-grab-drop-zone @drop="handleDrop($event)"
            @undrop="handleGrab($event)"></a-entity>
    </a-entity>
</template>

<style scoped></style>