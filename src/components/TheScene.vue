<script setup>
import { ref } from 'vue';

import TheCameraRig from './TheCameraRig.vue';
import TheHud from './TheHud.vue';
import '../aframe/tesselation-square.js';

// import '../aframe/simple-grab.js';
import '../aframe/simple-drop.js';
import '../aframe/outline.js';

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene stats fog="type: linear; color: #a3d0ed; near: 30; far: 60" background="color: #a3d0ed;" outline>

    <a-assets @loaded="allAssetsLoaded = true">

    </a-assets>

    <template v-if="allAssetsLoaded">
      <a-entity light="type: ambient; color: #445451"></a-entity>
      <a-entity light="type: point; intensity: 2" position="0 2 -10"></a-entity>

      <a-ocean width="100" depth="100" amplitude="0.2" density="100" amplitudeVariance="0.1"></a-ocean>
      <a-ocean width="100" depth="100" amplitude="0.05" density="100" amplitudeVariance="0.1"></a-ocean>

      <a-entity geometry="primitive: plane; height: 13.5; width: 6" position="0 0.01 -4.75" rotation="-90 0 0"
        data-role="nav-mesh" material="color: blue" visible="false"></a-entity>

      <a-entity tesselation-square="width: 10; depth: 10"></a-entity>
    </template>

    <a-plane color="#CCC" height="20" width="20" rotation="-90 0 0" position="0 1 0"></a-plane>

    <a-box
    id="box-left-grabbable"
    color="red"
    scale="0.3 0.3 0.3"
    position="0 1.5 -1"
    clickable
    outline-on-event
      simple-grab></a-box>

    <TheCameraRig />
    <TheHud />

  </a-scene>
</template>