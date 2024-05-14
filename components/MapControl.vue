<script setup lang="ts">
import maplibregl from 'maplibre-gl';

const { map, zoomIn, zoomOut, getLocation } = useMapStore()

onMounted(() => {
    // if (map) {
    //     map.addControl(
    //         new maplibregl.GeolocateControl({
    //             positionOptions: {
    //                 enableHighAccuracy: true
    //             },
    //             trackUserLocation: true
    //         })
    //     );
    // }
})

</script>

<template>
    <div class="absolute top-2 right-2">
        <div class="flex flex-col gap-3">
            <!-- zoom in button -->
            <button @click="zoomIn"
                class="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full bg-opacity-70 hover:bg-opacity-100">
                <Icon name="mdi:plus" />
            </button>
            <!-- zoom out button -->
            <button @click="zoomOut"
                class="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full bg-opacity-70 hover:bg-opacity-100">
                <Icon name="mdi:minus" />
            </button>
            <!-- get location button -->
            <button @click="getLocation"
                class="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full bg-opacity-70 hover:bg-opacity-100">
                <Icon name="mdi:crosshairs-gps" />
            </button>
        </div>
    </div>
</template>