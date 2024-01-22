<script setup>
import QuestionMarkIcon from "~/components/QuestionMarkIcon.vue";

defineProps({
  cardDetail: {
    type: Array,
    required: true,
  },
});

const isValidValue = (value) => {
  if (parseFloat(value) !== 0) {
    return true;
  } else {
    return false;
  }
};
</script>

<template>
  <div
    class="font-light bg-white text-sm w-80 border main-border-color rounded-xl p-6"
    v-for="detail in cardDetail"
    :key="detail.id"
  >
    <div>
      <div class="flex flex-col items-center justify-center mb-10 mt-3">
        <div class="mb-4">
          <img
            class="w-44 h-44 object-cover rounded-2xl"
            :src="detail.profile.picture_url"
            :alt="detail.profile.name"
          />
        </div>
        <div class="text-neutral-700">
          <span
            ><b>{{ detail.profile.name }}</b></span
          >
        </div>
      </div>
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <div class="main-text-color flex items-center">
            <span>Estimated Price</span>

            <QuestionMarkIcon />
          </div>
          <div
            :class="
              isValidValue(detail.estimated_price)
                ? 'second-text-color font-medium'
                : 'text-neutral-500'
            "
          >
            <span> {{ detail.estimated_price }} </span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="main-text-color flex items-center">
            <span>Floor Price</span>

            <QuestionMarkIcon />
          </div>
          <div
            :class="
              isValidValue(detail.floor_price)
                ? 'second-text-color font-medium'
                : 'text-neutral-500'
            "
          >
            <span> {{ detail.floor_price }} </span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="main-text-color flex items-center">
            <span>Acquisition Price</span>

            <QuestionMarkIcon />
          </div>
          <div
            :class="
              isValidValue(detail.acquisition_price)
                ? 'second-text-color font-medium'
                : 'text-neutral-500'
            "
          >
            <span> {{ detail.acquisition_price }} </span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="main-text-color">
            <span>Acquisition Date</span>
          </div>
          <div class="second-text-color font-medium">
            <span> {{ detail.acquisition_date }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
