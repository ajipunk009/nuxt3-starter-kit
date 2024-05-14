<template>
    <button @click="toggleLayer">Toggle Vector Tiles Layer</button>
</template>

<script setup>
const { map } = useMapStore();

const toggleLayer = () => {
    const visibility = map.getLayoutProperty('vector-tiles-layer', 'visibility');
    map.setLayoutProperty('vector-tiles-layer', 'visibility', visibility === 'visible' ? 'none' : 'visible');
};

onMounted(() => {
    if (map) {
        map.on('load', () => {
            map.addLayer({
                id: 'vector-tiles-layer',
                type: 'raster',
                source: {
                    type: 'raster',
                    tiles: ['https://rami.bmkg.go.id/api/windtemp_get/wafc/WT/snow/850/202405121800/202405131200/{z}/{x}/{y}.png'],
                    tileSize: 256,
                },
                layout: {
                    visibility: 'visible',
                },
            });
        });
    }
})
</script>