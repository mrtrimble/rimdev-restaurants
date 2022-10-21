<script setup>
import StarRating from '../components/StarRating.vue';
import Icon from '../components/Icon.vue';
import { computed } from 'vue';

const props = defineProps({
  title: String,
  address: String,
  rating: Number,
  tags: Array,
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

        <!-- <svg v-if="props.type == 'brewery'"
             xmlns="http://www.w3.org/2000/svg"
             viewbox="0 0 48 48"
             height="48"
             width="48">
          <path
                d="M15.5 39h15V17.5H26q-1.4 0-2.35.775-.95.775-2.15 2.125-1.3 1.45-2.85 2.55-1.55 1.1-3.15 1.5Zm-3 3V24.4q-2.6-.7-4.55-2.65Q6 19.8 6 17q0-2.65 1.525-4.7 1.525-2.05 3.925-2.85 1.15-2.4 3.425-3.9T20 4.05q1.75 0 3.275.6t2.775 1.6q.5-.1.95-.175Q27.45 6 28 6q3.3 0 5.65 2.35Q36 10.7 36 14q0 1.1-.45 2.2T34.4 18H39q1.25 0 2.125.875T42 21v14q0 1.25-.875 2.125T39 38h-5.5v4ZM9 17q0 1.9 1.55 3.2 1.55 1.3 3.45 1.3 1.6 0 2.9-.875 1.3-.875 2.65-2.525 1.15-1.4 2.75-2.5t3.7-1.1h7q0-2.25-1.325-3.875T28 9q-.9 0-1.775.275l-.875.275-.95-.8q-.9-.8-2.05-1.25-1.15-.45-2.35-.45-1.75 0-3.35.9t-2.35 2.5l-.7 1.5-1.6.55q-1.3.45-2.15 1.775Q9 15.6 9 17Zm24.5 18H39V21h-5.5Zm-18 4h15Z" />
        </svg>
        <svg v-else
             xmlns="http://www.w3.org/2000/svg"
             viewbox="0 0 48 48">
          <path
                d="m8.25 42-2.1-2.1 21-21q-1.1-2.4-.5-4.975.6-2.575 2.85-4.825 2.25-2.2 5.45-2.825T40.2 7.7q2.1 2.1 1.425 5.25T38.6 18.5q-2.05 2.1-4.575 2.75-2.525.65-4.725-.3l-3.35 3.35 15.6 15.6-2.1 2.1-15.6-15.6Zm6.25-17.55L8.55 18.5Q6 15.95 5.9 12.45q-.1-3.5 2.3-6.2L20.45 18.5Z" />
        </svg> -->
      </span>
    </div>
    <h3>{{props.title}}</h3>
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

