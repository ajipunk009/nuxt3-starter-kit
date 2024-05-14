<template>
    <button class="flex items-start gap-2">
        <Switch v-model="isShow" />
        <div>Toggle Circle Layer</div>
    </button>
</template>

<script setup>
const { map, getGeoJsonData, toggleLayer } = useMapStore();

const isShow = ref(true);

watch(isShow, (value) => {
    toggleLayer('circle-marker', value);
});

onMounted(() => {
    if (map) {
        map.on('load', () => {
            getGeoJsonData().then((res) => {
                const geoJsonData = res

                map.addSource('circle-marker-geojson', {
                    type: 'geojson',
                    data: geoJsonData,
                });

                map.addLayer({
                    id: 'circle-marker',
                    type: 'circle',
                    source: 'circle-marker-geojson',
                    paint: {
                        'circle-radius': ["get", "radius"],
                        'circle-color': '#007cbf',
                        'circle-stroke-color': '#fff',
                        'circle-stroke-width': 2,
                    },
                    filter: ['==', 'name', 'Circle Marker'],
                });
            })
        });
    }
})
</script>