<script setup>
</script>

<template>
   <a-entity
   position="0 0 1"
   rotation="0 90 0">
    <a-sphere class="color-switcher" color="red" scale="0.3 0.3 0.3" position=".3 1.7 -1.8" clickable outline-on-event
        simple-grab></a-sphere>

    <a-sphere class="color-switcher" color="green" scale="0.3 0.3 0.3" position="1.25 1.7 -1.8" clickable
        outline-on-event simple-grab></a-sphere>

    <a-sphere class="color-switcher" color="blue" scale="0.3 0.3 0.3" position="2.3 1.7 -1.8"></a-sphere>

</a-entity>
        
</template>

<style scoped></style>