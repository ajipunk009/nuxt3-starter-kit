<template>
    <div ref="mapContainer" class="map-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const mapContainer = ref(null);
const { initMap } = useMapStore();

onMounted(() => {
    initMap(mapContainer.value)
});
</script>

<style>
.map-container {
    width: 100%;
    height: 100vh;
}
</style>