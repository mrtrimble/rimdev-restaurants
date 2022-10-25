<script setup>
import { ref, onMounted } from 'vue';
import mapboxgl from 'mapbox-gl';
import StarRating from '../components/StarRating.vue';

const props = defineProps({
  mapboxToken: String,
  restaurant: Object
})

const mapEl = ref(0);

onMounted(() => {
  mapboxgl.accessToken = props.mapboxToken;

  const map = new mapboxgl.Map({
    container: mapEl.value,
    style: 'mapbox://styles/ryantrimble/cl9e8jyv1000714mn53xwzomz',
    center: [props.restaurant.lng, props.restaurant.lat],
    zoom: 14,
  });

  const restaurantPopup = new mapboxgl.Popup({
    offset: 25
  })
    .setHTML(`
        <div style="padding: 0.5rem">
          <div>
            <strong style="color: ${props.restaurant.color};">${props.restaurant.title}</strong> 
          </div>
          ${props.restaurant.address ? `<address style="margin-top: 0.25rem; width: 20ch;">${props.restaurant.address}</address>` : ''}
        </div>
      `)

  const restaurantMarker = new mapboxgl.Marker({
    color: props.restaurant.color
  })
    .setLngLat([props.restaurant.lng, props.restaurant.lat])
    .setPopup(restaurantPopup)
    .addTo(map)
})

</script>
<template>
  <div class="map"
       ref="mapEl"
       title="Restaurant Map">
  </div>
</template>