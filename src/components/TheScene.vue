<script setup>
import { ref } from 'vue';

import TheCameraRig from './TheCameraRig.vue';
import TheHud from './TheUi.vue';
import '../aframe/tesselation-square.js';
import '../aframe/bloom.js'
import { playSoundOnCollision } from '../utils/playSoundOnCollision';

// import '../aframe/simple-grab.js';
import '../aframe/simple-drop.js';
import '../aframe/outline.js';

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene stats fog="type: linear; color: #a3d0ed; near: 30; far: 60" background="color: #162456;" outline>

    <a-assets @loaded="allAssetsLoaded = true">
      
        <a-asset-item id="shapePickerHolder" src="assets/models/shapePicker.glb"></a-asset-item>
        <a-asset-item id="drumstick" src="assets/models/drumstick.glb"></a-asset-item>
        <img id="audio-texture" src="/assets/images/audio.png">
    </a-assets>

    <template v-if="allAssetsLoaded">

      <a-entity      
      class="drumstick"
        position="-.25 1.4 .85"        
        scale=".1 .1 .1"
        gltf-model="#drumstick"
        clickable
        outline-on-event
        simple-grab
        obb-collider>
        </a-entity>

      <a-entity
      class="shape-picker"
        position="-.7 .9 -.4"        
        scale=".0008 .0008 .0008"
        gltf-model="#shapePickerHolder">
        </a-entity>

        <a-entity
      class="shape-picker"
        position="-.2 .9 -.4"        
        scale=".0008 .0008 .0008"
        gltf-model="#shapePickerHolder">
        </a-entity>

        <a-entity
      class="shape-picker"
        position=".28 .9 -.4"        
        scale=".0008 .0008 .0008"
        gltf-model="#shapePickerHolder">
        </a-entity>
     
      <a-entity light="type: ambient; color: #886187; intensity: 1.3;" position="0 1.7 0"></a-entity>
      <a-entity light="type: spot; intensity: 2.5; distance: 3; penumbra: 0.4; color: #ffb7b4;"  position=".18 2.3 0.28" rotation="-90 0 0"></a-entity>

      <a-ocean width="100" depth="100" amplitude="0.2" density="100" amplitudeVariance="0.1"></a-ocean>
      <a-ocean width="100" depth="100" amplitude="0.05" density="100" amplitudeVariance="0.1"></a-ocean>

      <!-- <a-entity geometry="primitive: plane; height: 13.5; width: 6" position="0 0.01 -4.75" rotation="-90 0 0"
        data-role="nav-mesh" material="color: blue" visible="false"></a-entity> -->

      <a-entity
      id="instuments-container"
      position="0 0 0"
      ></a-entity>  

      <a-plane color="#CCC" height="10" width="10" rotation="-90 0 0" position="0 1 0"></a-plane>
       

    </template>

    <TheCameraRig />
    <TheHud />

  </a-scene>
</template>