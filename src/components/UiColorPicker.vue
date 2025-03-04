<script setup>
import { lightOnCollision } from '../utils/lightOnCollision';
const getColorfromCollision = (event, color) => {
    // console.log('Collision started:', event.detail);
    if(event.detail.withEl.classList.contains('music-item')) {
        event.detail.withEl.setAttribute('color', color);
        lightOnCollision(event);
        // const scene = document.querySelector("a-scene");        
        // const light = document.createElement("a-light");
        // light.setAttribute("color", color);
        // light.setAttribute("position", "0 0 0");
        // light.setAttribute("type", "ambient");
        // light.setAttribute("intensity", 1);
        // event.detail.withEl.appendChild(light);
    }        
};
</script>

<template>
    <a-entity position="0 0 1" rotation="0 90 0">
        <a-sphere class="color-switcher" color="#e7000b" scale=".1 .1 .1" position=".15 1.3 -1.1" obb-collider
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#e17100" scale=".1 .1 .1" position=".5 1.3 -1.1" obb-collider
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#5ea500" scale=".1 .1 .1" position=".85 1.3 -1.1" obb-collider
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#009966" scale=".1 .1 .1" position=".15 1.55 -1" obb-collider
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#0092b8" scale=".1 .1 .1" position=".5 1.55 -1" obb-collider
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#155dfc" scale=".1 .1 .1" position=".85 1.55 -1" obb-collider
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#7f22fe" scale=".1 .1 .1" position=".15 1.8 -.9" obb-collider
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#c800de" scale=".1 .1 .1" position=".5 1.8 -.9" obb-collider
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-sphere class="color-switcher" color="#ec003f" scale=".1 .1 .1" position=".85 1.8 -.9" obb-collider
            @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

        <a-entity position=".5 1.1 -1" rotation="-75 0 0">
            <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: 02; align:center;" scale="4 4 4"
                position="0 .08 0"></a-entity>
            <a-entity text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; value: Colorize it; align:center;"
                scale="2 2 2" position="0 -.05 0"></a-entity>
            <a-plane color="#404040" height=".5" width="1"></a-plane>
        </a-entity>

    </a-entity>

</template>

<style scoped></style>