<script setup>
import StarRating from '../components/StarRating.vue';
import Icon from '../components/Icon.vue';
import { computed } from 'vue';

const props = defineProps({
  type: String
})

const typeClass = computed(() => {
  return props.type.toLowerCase();
})

</script>

<template>
  <div class="card"
      :class="typeClass">
    <div class="card-head">
      <span class="icon">
        <Icon :type="props.type" />
      </span>
    </div>
    
      <slot></slot>
    
  </div>
</template>

