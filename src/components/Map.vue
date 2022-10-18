<script setup>
import { ref, onMounted } from 'vue';
import mapboxgl from 'mapbox-gl';

const props = defineProps({
  mapboxToken: String,
  locations: Object
})

const mapEl = ref(0);

onMounted(() => {
  mapboxgl.accessToken = props.mapboxToken;

  const map = new mapboxgl.Map({
    container: mapEl.value,
    style: 'mapbox://styles/ryantrimble/cl9e8jyv1000714mn53xwzomz',
    center: [-76.8455223, 40.3117409],
    zoom: 11,
  });

  const ritterPopup = new mapboxgl.Popup({
    offset: 25
  })
    .setHTML(`
        <div style="padding: 0.5rem">
          <strong class="marker-name">Ritter Insurance Marketing</strong>
        </div>
      `)

  const ritterMarker = new mapboxgl.Marker({
    color: '#0C3F70'
  })
    .setLngLat([-76.8455222, 40.3117409])
    .setPopup(ritterPopup)
    .addTo(map)

  props.locations.map(marker => {
    const popup = new mapboxgl.Popup({
      offset: 25,
    })
      .setHTML(`
        <div style="padding: 0.5rem">
          <div>
            <strong style="color: ${marker.color};">${marker.title}</strong> 
          </div>
          ${marker.address ? `<address style="margin-top: 0.25rem; width: 20ch;">${marker.address}</address>` : ''}
          ${marker.type ? `<div style="margin-top: 0.25rem">${marker.type}</div>` : ''}
        </div>
      `)

    new mapboxgl.Marker({
      color: marker.color
    })
      .setLngLat([marker.lng, marker.lat])
      .setPopup(popup)
      .addTo(map)
  })
})

</script>
<template>
  <div class="map"
       ref="mapEl"
       title="Restaurants Map">
  </div>
</template>