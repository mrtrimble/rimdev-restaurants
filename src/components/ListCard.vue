<script setup>
import StarRating from '../components/StarRating.vue';
import Icon from '../components/Icon.vue';
import { computed } from 'vue';

const props = defineProps({
  address: String,
  link: String,
  rating: Number,
  tags: Array,
  title: String,
  type: String
})

const typeClass = computed(() => {
  return props.type.toLowerCase();
})

</script>

<template>
  <li class="card"
      :class="typeClass">
    <div class="card-head">
      <span class="icon">
        <Icon :type="props.type" />
      </span>
    </div>
    <h3><a :href="props.link">{{props.title}}</a></h3>
    <StarRating v-if="props.rating"
                :rating="props.rating" />
    <address v-if="props.address">{{props.address}}</address>
    <div v-if="props.tags"
         class="tags">
      <span class="tag"
            v-for="tag in props.tags"
            :key="tag">
        {{tag}}
      </span>
    </div>
  </li>
</template>

