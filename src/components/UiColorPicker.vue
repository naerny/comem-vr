<script setup>
const getColorfromCollision = (event, color) => {
    console.log('Collision started:', event.detail);
    event.detail.withEl.setAttribute('color', color);
    console.log('Additional parameter:', color);
};
</script>

<template>
   <a-entity
   position="0 0 1"
   rotation="0 90 0">
    <a-sphere class="color-switcher" color="#DE4807" scale=".1 .1 .1" position=".25 1.3 -1" obb-collider @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

    <a-sphere class="color-switcher" color="#07DEB6" scale=".1 .1 .1" position=".5 1.3 -1" obb-collider @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))" ></a-sphere>

    <a-sphere class="color-switcher" color="#0768DE" scale=".1 .1 .1" position=".75 1.3 -1" obb-collider @obbcollisionstarted="(event) => getColorfromCollision(event, event.target.getAttribute('color'))"></a-sphere>

    <a-plane position=".6 1.1 -1.05" color="#404040" height=".5" width="1" rotation="-75 0 0"></a-plane>

</a-entity>
        
</template>

<style scoped></style>