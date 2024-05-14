<template>
    <button class="flex items-start gap-2">
        <Switch v-model="isShow" />
        <div>Default Marker</div>
    </button>
</template>

<script setup>
import maplibregl from 'maplibre-gl';
const { map, getGeoJsonData } = useMapStore();

const markerRef = ref()
const isShow = ref(true);

const hideMarker = () => {
    markerRef.value.remove();
    markerRef.value = null;
}

const showMarker = () => {
    if (!markerRef.value) {
        getGeoJsonData().then((res) => {
            const geoJsonData = res

            geoJsonData.features.forEach((marker) => {
                if (marker.properties.name === 'Marker Default') {
                    const latlng = new maplibregl.LngLat(marker.geometry.coordinates[0], marker.geometry.coordinates[1]);

                    markerRef.value = new maplibregl.Marker()
                        .setLngLat(latlng).addTo(map);
                }
            });
        })
    }
}

watch(isShow, (value) => {
    if (markerRef.value) {
        hideMarker();
    } else {
        showMarker();
    }
});

onMounted(() => {
    if (map) {
        map.on('load', () => {
            showMarker();
        })
    }
})
</script>