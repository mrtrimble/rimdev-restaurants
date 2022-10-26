<script setup>
import { reactive } from 'vue';

const props = defineProps({
  lng: Number,
  lat: Number,
  mapboxToken: String
});

const state = reactive({
  userLocation: {},
  directions: {},
  steps: []
})

const successCallback = (position) => {
  state.userLocation.lng = position.coords.longitude;
  state.userLocation.lat = position.coords.latitude;
  console.log('location set');
};

const errorCallback = (error) => {
  console.log(error);
};

const getLocation = async () => {
  await navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

const getDirections = async () => {
  const url = new URL('https://api.mapbox.com/directions/v5/mapbox/driving/');
  url.pathname += `${state.userLocation.lng},${state.userLocation.lat};${props.lng},${props.lat}`;
  url.searchParams.append("overview", "simplified");
  url.searchParams.append("steps", "true");
  url.searchParams.append("access_token", props.mapboxToken);

  if (state.userLocation.lng && state.userLocation.lat) {
    const directions = await fetch(url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        state.directions = data.routes[0];
        state.steps = [...data.routes[0].legs[0].steps];
      })
      .finally(() => console.log(state.directions))
  } else {
    console.log('user location not set!');
  }
}

</script>

<template>
  <div>
    <button @click="getLocation">Get Location</button>
    <button @click="getDirections">Get Directions</button>

    <!-- {{ state.directions }} -->

    <!-- {{ state.steps }} -->
    <ul>
      <li v-for="step in state.steps">
        {{step.maneuver}}
      </li>
    </ul>
  </div>
</template>