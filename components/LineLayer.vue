<template>
    <button class="flex items-start gap-2">
        <Switch v-model="isShow" />
        <div>Line Layer</div>
    </button>
</template>

<script setup>
const { map, getGeoJsonData, toggleLayer } = useMapStore();

const isShow = ref(true);

watch(isShow, (value) => {
    toggleLayer('linestring-layer', value);
});

onMounted(() => {
    if (map) {
        map.on('load', () => {
            getGeoJsonData().then((res) => {
                const geoJsonData = res

                map.addSource('linestring-geojson', {
                    type: 'geojson',
                    data: geoJsonData,
                });

                map.addLayer({
                    id: 'linestring-layer',
                    type: 'line',
                    source: 'linestring-geojson',
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    paint: {
                        'line-color': ["get", "lineColor"],
                        'line-width': 4,
                    },
                    filter: ['==', '$type', 'LineString'],
                });
            })
        });
    }
})
</script>