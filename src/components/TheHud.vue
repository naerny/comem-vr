<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log('TheHud mounted');
});
</script>

<template>
    <a-entity id="hud"
    position="0 1.65 -.2">        
        <a-entity id="hud__addblock" position="0 0 .15">
            <a-text value="New block" scale=".3 .3 .3" position="0 0 0" align="center"></a-text>
            <a-box color="red" depth="0" width=".15" height=".15" position="0 -.15 0" clickable outline-on-event></a-box>
        </a-entity>
        <a-box class="hud__background" color="green" depth="0" width="2" position="0 0 0"></a-box>
    </a-entity>

</template>

<style scoped></style>