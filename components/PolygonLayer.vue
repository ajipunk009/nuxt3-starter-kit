<template>
    <button class="flex items-start gap-2">
        <Switch v-model="isShow" />
        <div>Polygon Layer</div>
    </button>
</template>

<script setup>
const { map, getGeoJsonData, toggleLayer } = useMapStore();

const isShow = ref(true);

watch(isShow, (value) => {
    toggleLayer('polygon', value);
});

onMounted(() => {
    if (map) {
        map.on('load', () => {
            getGeoJsonData().then((res) => {
                const geoJsonData = res

                map.addSource('polygon-geojson', {
                    type: 'geojson',
                    data: geoJsonData,
                });

                map.addLayer({
                    id: 'polygon',
                    type: 'fill',
                    source: 'polygon-geojson',
                    paint: {
                        'fill-color': ["get", "fillColor"],
                        'fill-outline-color': ["get", "lineColor"],
                    },
                    filter: ['==', "$type", "Polygon"],
                });
            })
        });
    }
})
</script>