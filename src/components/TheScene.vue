<script setup>
import { ref } from 'vue';

import TheCameraRig from './TheCameraRig.vue';
import TheHud from './TheUi.vue';
import '../aframe/tesselation-square.js';
import '../aframe/bloom.js'
import '../aframe/listen-to.js'
import '../aframe/event-set.js'

<<<<<<< HEAD
  import '../aframe/simple-grab.js';
  import '../aframe/outline.js';
=======
// import '../aframe/simple-grab.js';
import '../aframe/simple-grab.js';
import '../aframe/outline.js';
>>>>>>> tp-ocean

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
<<<<<<< HEAD
    background="color: black;"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
    xr-mode-ui="XRMode: xr"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
    outline
    simple-grab
  >
=======
  stats
  fog="type: linear; color: #191026; near: 1; far: 10"
  background="color: #191026"
  outline
  obb-collider="showColliders: false"
  simple-grab="allowMidAirDrop:true;">
>>>>>>> tp-ocean

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="dancefloor" src="assets/models/dancefloor.glb"></a-asset-item>
      <a-asset-item id="drumstick" src="assets/models/drumstick.glb"></a-asset-item>
      <img id="audio-texture" src="/assets/images/audio.png">
    </a-assets>

    <template v-if="allAssetsLoaded">

      <a-entity class="drumstick" id="drumstick_container1" position="-.1 1.4 1.9" rotation="0 0 0" scale=".03 .04 .03"
        clickable simple-grab geometry="primitive:box" material="visible:false" outline-on-event>

        <a-entity class="drumstick" position="0 0 0" scale="1 1 1" rotation="0 0 0" gltf-model="#drumstick" obb-collider
          listen-to__grab="target: #drumstick_container1; event: grab; emit: taken"
          listen-to__drop="target: #drumstick_container1; event: drop; emit: untaken"
          event-set__taken_rotation="event:taken; attribute: rotation; value: -90 0 0"
          event-set__untaken_rotation="event:untaken; attribute: rotation; value: -90 0 0"
          event-set__taken_position="event: taken; attribute: position; value: 0 0 -3"
          event-set__untaken_position="event: untaken; attribute: position; value: 0 0 0">
        </a-entity>
      </a-entity>

      <a-entity class="drumstick" id="drumstick_container2" position=".1 1.4 1.9" rotation="0 0 0" scale=".03 .04 .03"
        clickable simple-grab geometry="primitive:box" material="visible:false" outline-on-event>

        <a-entity class="drumstick" position="0 0 0" scale="1 1 1" rotation="0 0 0" gltf-model="#drumstick" obb-collider
          listen-to__grab="target: #drumstick_container2; event: grab; emit: taken"
          listen-to__drop="target: #drumstick_container2; event: drop; emit: untaken"
          event-set__taken_rotation="event:taken; attribute: rotation; value: -90 0 0"
          event-set__untaken_rotation="event:untaken; attribute: rotation; value: -90 0 0"
          event-set__taken_position="event: taken; attribute: position; value: 0 0 -3"
          event-set__untaken_position="event: untaken; attribute: position; value: 0 0 0">
        </a-entity>
      </a-entity>

      <a-entity light="type: ambient; color: #886187; intensity: .9;" position="0 1.7 0"></a-entity>
      <a-entity light="type: spot; intensity: 2.5; distance: 3; penumbra: 0.4; color: #ffb7b4;" position=".18 2.3 0.28"
        rotation="-90 0 0"></a-entity>
      <a-entity light="type: spot; intensity: 1.3; distance: 5.2; penumbra: 0.6; color: #f4eea9; angle:60;"
        position=".18 2.3 0.28" rotation="-90 0 0"></a-entity>
      <a-light id="light-music" color="red" position="0 2 0" intensity="0"></a-light>
      <a-entity light="type: spot; color: #DBAB1D; intensity: 3; angle:15; castshadow:true; penumbra:.8;"
        position=".25 4 .5" rotation="286.900 270 0"></a-entity>
      <a-entity light="type: spot; color: #DBAB1D; intensity: 3; angle:15; castshadow:true; penumbra:.8;"
        position="-.3 3.16 .5" rotation="286.900 90 0"></a-entity>
      <a-entity light="type: spot; color: #DBAB1D; intensity: 8; angle:25; castshadow:true; penumbra:1;"
        position="0 3.16 1.2" rotation="286.900 180 0"></a-entity>

      <a-ocean id="ocean1" color="#d600ff" position="0 -.5 0" width="100" depth="100" amplitude="0.2" density="100"
        amplitudeVariance="0.1"></a-ocean>
      <a-ocean id="ocean2" color="#00b8ff" position="0 -.5 0" width="100" depth="100" amplitude="0.05" density="100"
        amplitudeVariance="0.1"></a-ocean>

      <a-entity position="0 .01 1.5" rotation="-90 180 0">
        <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: 04; align:center;" scale="4 4 4"
          position="0 .08 0"></a-entity>
        <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: Set your stage; align:center;"
          scale="2 2 2" position="0 -.05 0"></a-entity>
        <a-plane color="#e2e8f0" height="1" width="2"></a-plane>
      </a-entity>

      <a-entity position="0 1.4 2" rotation="0 180 0">
        <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: 05; align:center;" scale="4 4 4"
          position="0 .08 0"></a-entity>
        <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: Let's play!; align:center;" scale="2 2 2"
          position="0 -.05 0"></a-entity>
      </a-entity>
      <a-entity class="dancefloor" position="0 0 0" rotation="0 0 0" gltf-model="#dancefloor" width="10" height="10"
        depth="10" scale="1 1 1">
      </a-entity>
      <a-circle color="#74d4ff" radius="5" rotation="-90 0 0"></a-circle>
      <!-- <a-plane color="#74d4ff" height="10" width="10" rotation="-90 0 0" position="0 0 0"></a-plane> -->


    </template>

    <TheCameraRig position="0 0 .5" />
    <TheHud />

  </a-scene>
</template>