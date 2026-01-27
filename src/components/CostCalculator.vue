<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Modal Header -->
      <div class="bg-gradient-to-r from-primary to-primary-dark p-6 rounded-t-3xl">
        <div class="flex items-center justify-between">
          <h3 class="text-3xl font-bold text-white">Cost Calculator</h3>
          <button
            @click="closeModal"
            class="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <p class="text-white/90 mt-2">Estimate the total cost for your volunteer experience</p>
      </div>

      <!-- Modal Content -->
      <div class="p-8 space-y-8">
        <!-- Days Selection -->
        <div>
          <label class="block text-lg font-semibold text-gray-800 mb-4">
            How many days will you volunteer?
          </label>
          <div class="flex items-center gap-4">
            <button
              @click="decreaseDays"
              :disabled="days <= minDays"
              class="w-12 h-12 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors flex items-center justify-center text-2xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              -
            </button>
            <input
              v-model.number="days"
              type="number"
              :min="minDays"
              :max="maxDays"
              class="w-28 text-center text-3xl font-bold text-primary border-2 border-primary rounded-lg py-2"
            />
            <button
              @click="increaseDays"
              :disabled="days >= maxDays"
              class="w-12 h-12 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors flex items-center justify-center text-2xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              +
            </button>
            <span class="text-xl text-gray-600 ml-4">days</span>
          </div>
          <p class="text-sm text-gray-500 mt-2">
            Approximately <span class="font-semibold">{{ weeks }}</span> weeks
            <span v-if="days < minDays" class="text-red-600 block mt-1">
              ⚠️ Minimum stay is {{ minDays }} days (2 weeks)
            </span>
          </p>
        </div>

        <!-- Cost Breakdown -->
        <div class="bg-gray-50 rounded-2xl p-6 space-y-4">
          <div class="flex justify-between items-center text-lg">
            <span class="text-gray-700">Base rate per day:</span>
            <span class="font-semibold text-gray-800">${{ baseRate }} USD</span>
          </div>
          <div class="flex justify-between items-center text-lg">
            <span class="text-gray-700">Number of days:</span>
            <span class="font-semibold text-gray-800">{{ days }}</span>
          </div>
          <div class="border-t-2 border-gray-300 pt-4 mt-4">
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-gray-800">Total Cost:</span>
              <span class="text-4xl font-bold text-primary">${{ totalCost }}</span>
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
          <h3 class="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            What's Included:
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Accommodation at the conservation site</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Three vegetarian meals per day</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Training and guidance from staff members</span>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>All conservation activities and materials</span>
            </li>
          </ul>
          <p class="mt-4 text-sm text-gray-600 italic">
            Note: Transportation to/from the site and personal expenses are not included.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';

const baseRate = 40;
const minDays = 14; // Minimum 2 weeks
const maxDays = 84; // Maximum 12 weeks

const days = ref(14);
const isOpen = ref(false);

const weeks = computed(() => {
  return Math.round(days.value / 7 * 10) / 10;
});

const totalCost = computed(() => {
  return days.value * baseRate;
});

// Enforce minimum days
watch(days, (newValue: number) => {
  if (newValue < minDays) {
    days.value = minDays;
  } else if (newValue > maxDays) {
    days.value = maxDays;
  }
});

const decreaseDays = () => {
  if (days.value > minDays) {
    days.value--;
  }
};

const increaseDays = () => {
  if (days.value < maxDays) {
    days.value++;
  }
};

const closeModal = () => {
  isOpen.value = false;
};

// Listen for open event from Astro page
onMounted(() => {
  window.addEventListener('open-calculator', () => {
    isOpen.value = true;
  });
});
</script>

<style scoped>
.text-primary {
  color: #0e7490;
}

.bg-primary {
  background-color: #0e7490;
}

.bg-primary-dark {
  background-color: #0c5f7a;
}

.from-primary {
  --tw-gradient-from: #0e7490;
}

.to-primary-dark {
  --tw-gradient-to: #0c5f7a;
}

.border-primary {
  border-color: #0e7490;
}

.bg-primary\/5 {
  background-color: rgba(14, 116, 144, 0.05);
}

.bg-primary\/10 {
  background-color: rgba(14, 116, 144, 0.1);
}
</style>
