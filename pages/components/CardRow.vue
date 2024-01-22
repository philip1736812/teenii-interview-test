<script setup>
import QuestionMarkIcon from "~/components/QuestionMarkIcon.vue";

defineProps({
  cardDetail: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="w-full flex items-center bg-white px-5 py-3 rounded-lg set-min-width"
    v-for="detail in cardDetail"
    :key="detail.id"
  >
    <div class="flex w-full justify-between items-center text-sm">
      <div class="w-20 flex items-center justify-center">
        <span>
          <img
            class="w-12 h-12 object-cover rounded-lg"
            :src="detail.profile.picture_url"
            :alt="detail.profile.name"
          />
        </span>
      </div>
      <div class="w-5/12">
        <div class="flex items-center justify-start">
          <div class="mr-4">
            <img
              class="w-12 h-12 object-cover rounded-lg"
              :src="detail.profile.picture_url"
              :alt="detail.profile.name"
            />
          </div>
          <div class="text-neutral-700 font-light">
            <span>{{ detail.profile.name }}</span>
          </div>
        </div>
      </div>
      <div class="font-light">
        <span>{{ detail.estimated_price }}</span>
      </div>
      <div class="font-light flex items-center">
        <span class="mr-1">{{ detail.floor_price }}</span>
        <QuestionMarkIcon />
      </div>

      <div class="font-light flex items-center justify-end">
        <span class="mr-1">{{ detail.acquisition_price }}</span>
        <QuestionMarkIcon />
      </div>

      <div class="font-light flex items-center justify-end">
        {{ detail.acquisition_date }}
      </div>

      <div class="border rounded-md w-6 h-6 flex items-center justify-center">
        <font-awesome-icon icon="fa-brands fa-ethereum" />
      </div>
    </div>
  </div>
</template>

<style>
.set-min-width {
  min-width: 750px;
}
</style>
