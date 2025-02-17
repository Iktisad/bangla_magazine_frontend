<template>
  <header
    class="hidden md:block bg-gradient-to-r from-amber-50 to-light-blue shadow font-cormorant"
  >
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center p-2"
    >
      <button @click="home">
        <img
          src="../assets/img/logo.png"
          alt="logo"
          class="h-24 w-24 lg:h-44 lg:w-full lg:object-cover"
        />
      </button>
      <h1 class="text-4xl md:text-4xl lg:text-6xl font-bold text-center">
        <span class="text-midnight-sapphire text-gradient text-shadow">
          B.A.N.G.L.A.
        </span>
      </h1>

      <div class="flex space-x-4 md:space-x-6 mt-4 md:mt-0 relative">
        <!-- Dropdown for language selection -->
        <div class="relative w-full">
          <select
            v-model="currentLanguage"
            class="block w-full px-4 py-2 pr-10 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-blue-500 outline-none focus:border-blue-500 sm:text-sm text-gray-700"
          >
            <option v-for="lang in languages" :key="lang" :value="lang">
              {{ lang.toUpperCase() }}
            </option>
          </select>
          <!-- Dropdown icon -->
          <div
            class="absolute inset-y-0 right-3 flex items-center pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div class="hidden">
          <button
            class="relative group"
            @mouseover="showTooltip('facebook')"
            @mouseleave="hideTooltip"
          >
            <img
              src="../assets/svg/facebook.svg"
              alt="facebook"
              class="w-8 h-8"
            />
            <div
              v-if="tooltip === 'facebook'"
              class="absolute bottom-full mb-2 px-2 py-1 text-sm bg-gray-800 text-white rounded"
            >
              Coming Soon
            </div>
          </button>

          <button
            class="relative group"
            @mouseover="showTooltip('instagram')"
            @mouseleave="hideTooltip"
          >
            <img
              src="../assets/svg/instagram.svg"
              alt="instagram"
              class="w-8 h-8"
            />
            <div
              v-if="tooltip === 'instagram'"
              class="absolute bottom-full mb-2 px-2 py-1 text-sm bg-gray-800 text-white rounded"
            >
              Coming Soon
            </div>
          </button>

          <button
            class="relative group"
            @mouseover="showTooltip('youtube')"
            @mouseleave="hideTooltip"
          >
            <img
              src="../assets/svg/youtube.svg"
              alt="youtube"
              class="w-8 h-8"
            />
            <div
              v-if="tooltip === 'youtube'"
              class="absolute bottom-full mb-2 px-2 py-1 text-sm bg-gray-800 text-white rounded"
            >
              Coming Soon
            </div>
          </button>

          <button
            class="relative group"
            @mouseover="showTooltip('twitter')"
            @mouseleave="hideTooltip"
          >
            <img
              src="../assets/svg/twitter.svg"
              alt="twitter"
              class="w-8 h-8"
            />
            <div
              v-if="tooltip === 'twitter'"
              class="absolute bottom-full mb-2 px-2 py-1 text-sm bg-gray-800 text-white rounded"
            >
              Coming Soon
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { i18nState, setLanguage } from "@/translations.js";

export default {
  name: "Header",
  data() {
    return {
      tooltip: null, // Initialize tooltip as null

      languages: ["en", "bn", "fr"], // Available languages
    };
  },
  computed: {
    currentLanguage: {
      get() {
        return i18nState.currentLanguage; // Sync with global reactive state
      },
      set(value) {
        setLanguage(value); // Update global language
      },
    },
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    showTooltip(button) {
      this.tooltip = button; // Set the current tooltip to the button name
    },
    hideTooltip() {
      this.tooltip = null; // Clear the tooltip on mouse leave
    },
  },
};
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #280b8b, rgb(100, 100, 230));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-shadow {
  color: rgb(37, 44, 95);
  text-shadow: 2px 2px 4px rgba(46, 33, 191, 0.3);
}
</style>
