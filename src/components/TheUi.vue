<script setup>
import '../aframe/simple-drop.js';
import '../aframe/visibility.js'
import '../aframe/outline.js';
import UiShapePicker from './UiShapePicker.vue';
import UiColorPicker from './UiColorPicker.vue';
import UiSoundPicker from './UiSoundPicker.vue';
import { onMounted } from 'vue';


// const createBox = () => {
//     console.log('createBox');
//     const box = document.createElement('a-box');
//     box.setAttribute('id', `instrument-${getInstrumentsSize() + 1}`);
//     box.setAttribute('color', 'red');
//     box.setAttribute('depth', '0.3');
//     box.setAttribute('width', '0.3');
//     box.setAttribute('height', '0.3');
//     box.setAttribute('position', '0 1.5 -5');
//     box.setAttribute('clickable');
//     box.setAttribute('outline-on-event');
//     box.setAttribute('simple-grab');
//     document.querySelector('#instuments-container').appendChild(box);
//     console.log('getInstrumentsSize', getInstrumentsSize());


// };

// const getInstrumentsSize = () => {
//     return document.querySelector('#instuments-container').childElementCount;
// };

// const shapeSelector = () => {
//     const selector = document.querySelectorAll('.selector');
//     document.addEventListener('click', (e) => {
//         if (e.target.classList.contains('selector')) {
//             console.log('selector', e.target);
//             selector.forEach((el) => {
//                 el.classList.remove('selected');
//             });
//             e.target.classList.add('selected');
//         }
//     });

// };
</script>

<template>
    <a-entity id="hud" position="0 0 0">

        <UiShapePicker />
        <UiColorPicker />
        <UiSoundPicker />

        <!-- <a-entity id="hud__shapeSelect" position="-.5 0 .15">
            <a-text value="Select shape" scale=".3 .3 .3" position="0 0 0" align="center"></a-text>
            <a-entity id="hud__selectSquare" position="-.15 -.10 0">
                <a-circle class="selector selected" color="#CCC" radius=".03" position="0 0 0" clickable
                    outline-on-event></a-circle>
                <a-circle class="" color="red" radius=".02" position="0 0 .01"></a-circle>
                <a-text value="Square" scale=".3 .3 .3" position=".03 0 0" align="left"></a-text>
            </a-entity>
            <a-entity id="hud__selectSphere" position="-.15 -.20 0">
                <a-circle class="selector selected" color="#CCC" radius=".03" position="0 0 0" clickable
                    outline-on-event></a-circle>
                <a-circle class="" visible="false" color="red" radius=".02" position="0 0 .01"></a-circle>
                <a-text value="Sphere" scale=".3 .3 .3" position=".03 0 0" align="left"></a-text>
            </a-entity>
        </a-entity>

        <a-entity id="hud__addblock" position="0 0 .15">
            <a-text value="New block" scale=".3 .3 .3" position="0 0 0" align="center"></a-text>
            <a-box color="red" depth="0" width=".15" height=".15" position="0 -.15 0" clickable outline-on-event
                @click="createBox()"></a-box>
        </a-entity>
        <a-box class="hud__background" color="green" depth="0" width="2" position="0 0 0"></a-box> -->

    </a-entity>

</template>

<style scoped></style>