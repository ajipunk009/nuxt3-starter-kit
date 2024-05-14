<template>
  <button class="flex items-start gap-2">
    <Switch v-model="isShow" />
    <div>Custom Marker</div>
  </button>
</template>

<script setup>
import customMarker from '@/assets/custom-marker.png';
const { map, getGeoJsonData, toggleLayer } = useMapStore();

const isShow = ref(true);

watch(isShow, (value) => {
  toggleLayer('custom-marker', value);
});

onMounted(() => {
  if (map) {
    map.on('load', () => {
      getGeoJsonData().then((res) => {
        const geoJsonData = res

        map.loadImage(customMarker).then((res) => {
          map.addImage('custom-marker', res.data)

          map.addSource('custom-marker-geojson', {
            type: 'geojson',
            data: geoJsonData,
          });

          map.addLayer({
            id: 'custom-marker',
            type: 'symbol',
            source: 'custom-marker-geojson',
            layout: {
              'icon-image': 'custom-marker',
              'icon-size': 0.05,
              'icon-allow-overlap': true,
              'visibility': 'visible',
            },
            filter: ['==', 'name', 'Custom Image Marker'],
          });
        })
      })
    });
  }
})
</script>

<style>
.custom-marker {
  background-size: cover;
}
</style>