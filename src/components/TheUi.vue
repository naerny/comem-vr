<script setup>
// import '../aframe/simple-drop.js';
import '../aframe/visibility.js'
import '../aframe/outline.js';
import UiShapePicker from './UiShapePicker.vue';
import UiColorPicker from './UiColorPicker.vue';
import UiSoundPicker from './UiSoundPicker.vue';
import UiGarbageBin from './UiGarbageBin.vue';
import { onMounted } from 'vue';

</script>

<template>
    <a-entity id="hud" position="0 0 0">

        <UiShapePicker />
        <UiColorPicker />
        <UiSoundPicker />
        <UiGarbageBin />
    </a-entity>

</template>

<style scoped></style>