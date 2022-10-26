<script setup>
import { reactive } from 'vue';

const props = defineProps({
  lng: Number,
  lat: Number,
  mapboxToken: String
});

const userLocation = reactive({
  lng: null,
  lat: null
})

const directions = reactive({});

const successCallback = (position) => {
  userLocation.lng = position.coords.longitude;
  userLocation.lat = position.coords.latitude;
  console.log('location set');
};

const errorCallback = (error) => {
  console.log(error);
};


const getLocation = () => {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

const getDirections = () => {
  console.log(userLocation);
  if (userLocation.lng && userLocation.lat) {
    const directions = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${userLocation.lng},${userLocation.lat};${props.lng},${props.lat}?geometries=geojson&access_token=${props.mapboxToken}`, {
      method: 'GET'
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        directions.value = data.routes;
      })
      .finally(() => console.log(directions.value))
  } else {
    console.log('user location not set!');
  }
}

</script>

<template>
  <div>
    <button @click="getLocation">Get Location</button>
    <button @click="getDirections">Get Directions</button>
  </div>
</template>