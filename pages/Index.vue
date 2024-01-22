<script setup lang="ts">
import { ref } from "vue";
import CardGallery from "./components/CardGallery.vue";
import CardRow from "./components/CardRow.vue";

interface DummyDataProps {
  id: number,
  profile: {
    picture_url: string;
    name: string;
  };
  estimated_price: string;
  floor_price: string;
  acquisition_price: string;
  acquisition_date: string;
}

const isVisibleCardGallery: Ref<boolean> = ref(true);
const dummyData: Ref<DummyDataProps[]> = ref([
  {
    id: 1,
    profile: {
      picture_url:
        "https://people.com/thmb/MEwPeJpP-KIPhhqws_AbUVulhHI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(730x230:732x232)/Chinstrap-Penguins-naps-120123-tout1-5b59ad36aa7546dca71ff986013d5136.jpg",
      name: "PudgyPenguins #37_",
    },
    estimated_price: "1.0.13",
    floor_price: "1.880",
    acquisition_price: "0.0006",
    acquisition_date: "Jan 9, 2022",
  },
  {
    id: 2,
    profile: {
      picture_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIiWRe8105Kfq7MPIVn_Qs7Sqg3R7dow2RkcaI4c3m6ptVWNjSUbbPRqbg99jk3oIQ9wA&usqp=CAU",
      name: "PudgyPenguins #38_",
    },
    estimated_price: "3.0.13",
    floor_price: "1.980",
    acquisition_price: "0.000",
    acquisition_date: "Jan 10, 2022",
  },
  {
    id: 3,
    profile: {
      picture_url:
        "https://img-new.cgtrader.com/items/4559873/93a02c1984/large/penguins-of-madagascar-3d-model-93a02c1984.jpg",
      name: "PudgyPenguins #39_",
    },
    estimated_price: "2.0.13",
    floor_price: "1.780",
    acquisition_price: "0.400",
    acquisition_date: "Jan 11, 2022",
  },
  {
    id: 4,
    profile: {
      picture_url: "https://pbs.twimg.com/media/DZX8P8RW4AEygwX.jpg",
      name: "PudgyPenguins #39_",
    },
    estimated_price: "2.0.13",
    floor_price: "1.780",
    acquisition_price: "0.400",
    acquisition_date: "Jan 11, 2022",
  },
]);

const changeCardStatus = () => {
  isVisibleCardGallery.value = !isVisibleCardGallery.value;
};
</script>

<template>
  <main class="h-screen set-bg">
    <div class="mx-auto flex flex-col">
      <div class="self-end flex items-center justify-center space-x-4 mb-4">
        <label for="switch style"> Switch Style </label>
        <InputSwitch
          label="changeCardStyle"
          @click="changeCardStatus"
          :modelValue="isVisibleCardGallery"
        />
      </div>

      <div>
        <transition name="fade" mode="out-in">
          <div
            v-if="isVisibleCardGallery"
            class="flex flex-wrap items-center justify-center md:justify-between space-y-4"
          >
            <CardGallery :cardDetail="dummyData" />
          </div>
          <div
            v-else
            class="flex flex-col flex-wrap items-center justify-between space-y-4"
          >
            <CardRow :cardDetail="dummyData" />
          </div>
        </transition>
      </div>
    </div>
  </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-border-color {
  border-color: #c6c5db;
}

.second-border-color {
  border-color: #7771a6;
  color: #7771a6;
}

.main-text-color {
  color: #a7a5b1;
}

.second-text-color {
  color: #5b5b5b;
}
</style>
