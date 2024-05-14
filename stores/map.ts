import { defineStore } from 'pinia'
import maplibre from 'maplibre-gl';
import geodataJson from '@/data/data.json'

interface MapState {
    map: maplibre.Map | null;
    geojsonSource: maplibre.GeoJSONSource | null;
    zoom: number;
}

export const useMapStore = defineStore('device', {
    state: (): MapState => ({
        map: null,
        geojsonSource: null,
        zoom: 4,
    }),
    actions: {
        async initMap(container: any) {
            const mapRef = new maplibre.Map({
                container: container,
                style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
                center: [117.4744, -2.5004],
                zoom: this.zoom,
            })

            // @ts-ignore
            this.map = mapRef;

            return mapRef;
        },
        async getGeoJsonData() {
            return geodataJson
        },
        toggleLayer(id: string, visibility: boolean) {
            if (this.map) {
                if (!visibility) {
                    this.map.setLayoutProperty(id, 'visibility', 'none');
                } else {
                    this.map.setLayoutProperty(id, 'visibility', 'visible');
                }
            }
        },
        zoomIn() {
            if (this.map) {
                this.map.zoomIn();
            }
        },
        zoomOut() {
            if (this.map) {
                this.map.zoomOut();
            }
        },
        getLocation() {
            if (this.map) {
                navigator.geolocation.getCurrentPosition((position) => {
                    if (this.map) {
                        this.map.flyTo({
                            center: [position.coords.longitude, position.coords.latitude],
                            zoom: 12,
                        });

                        const popup = new maplibre.Popup()
                            .setLngLat([position.coords.longitude, position.coords.latitude])
                            .setHTML('<h1>Kamu Ada Disini!</h1>')
                            // @ts-ignore
                            .addTo(this.map);

                        popup.on('close', () => {
                            // fly back to original position
                            this.map?.flyTo({
                                center: [117.4744, -2.5004],
                                zoom: 4,
                            });
                        });
                    }
                });
            }
        }
    }
})