<script setup lang="ts">
const mapStore = useMapStore()
const lineGeoJson = ref()

onMounted(() => {
  mapStore.getGeoJsonData().then((res) => {
    lineGeoJson.value = res
  })
})
</script>

<template>
  <div class="relative">
    <Map />
    <ClientOnly>
      <div class="absolute top-2 left-2 bg-black bg-opacity-80 p-5 rounded text-white text-sm">
        <div class="flex flex-col gap-2 items-start">
          <LineLayer />
          <DefaultMarker />
          <CustomMarker />
          <PolygonLayer />
          <CircleLayer />
          <!-- <VectorTilesLayer /> -->
        </div>
      </div>
    </ClientOnly>
    <MapControl />
  </div>
</template>
