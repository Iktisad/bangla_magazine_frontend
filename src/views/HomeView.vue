<template>
  <section class="bg-white">
    <!-- Main Content -->
    <div class="md:container md:mx-auto p-4 md:p-6 flex-grow bg-white">
      <div class="h-auto bg-cover bg-center bg-white rounded-xl">
        <!-- Heading -->
        <div class="md:container md:mx-auto py-10 px-4 lg:px-32 space-y-3">
          <div
            class="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start space-y-6 lg:space-y-0"
          >
            <!-- Text on Left -->
            <div
              v-if="translationsLoaded"
              class="w-full lg:w-1/3 2xl:w-1/3 lg:mr-6"
            >
              <h2
                class="text-2xl md:text-3xl 2xl:text-5xl font-bold text-midnight-sapphire mb-6"
                :class="$t('default.font-primary')"
              >
                {{ $t("welcomeMessage.start") }}
                <span class="italic font-bold text-amber-600">{{
                  $t("welcomeMessage.end")
                }}</span>
              </h2>
              <blockquote class="fade-in">
                <svg
                  class="w-12 h-12 pr-2 text-honey-gold mb-2 sm:mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 290 290"
                  fill="currentColor"
                >
                  <path
                    d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z"
                  ></path>
                </svg>

                <p
                  class="text-sm md:text-base 2xl:text-lg pl-1 sm:pl-2 mb-4 text-gray-500"
                  :class="$t('default.font-secondary')"
                >
                  {{ $t("description") }}
                </p>
                <p
                  class="text-lg md:text-2xl 2xl:text-3xl font-bold text-amber-600"
                  :class="$t('default.font-primary')"
                >
                  {{ $t("tagline") }}
                </p>
              </blockquote>
              <div class="flex pt-4 lg:pt-14">
                <button @click="join" class="mr-2 cta-btn">
                  Join Our Network
                </button>
                <button @click="contribute" class="ml-2 cta-btn">
                  Contribute to the Magazine
                </button>
              </div>
            </div>
            <!-- SVG on Right -->
            <div
              class="w-full lg:w-2/3 2xl:w-2/3 flex justify-center mb-4 lg:ml-6"
            >
              <div class="parent-container">
                <!-- <img
                  src="../assets/img/bg-8.gif"
                  alt="SVG Image 1"
                  class="w-full h-auto"
                /> -->
                <img
                  src="../assets/img/collageNew1.png"
                  alt="SVG Image 1"
                  class="h-auto w-auto"
                />
                <div class="text-gray-500 text-sm text-center pt-3">
                  Photography By:
                  <span class="font-semibold"
                    >Ami Saha, Arindaam Das, Arunabha Dey, Avik Dhar, Moinak
                    Banerjee, Shafiq Imtiaz, Upasana Dasgupta, Subham Roy
                  </span>
                </div>
                <div class="text-gray-500 text-sm text-center pt-2">
                  Collage By:
                  <span class="font-semibold">Sanjana Sayeed </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wave-divider bg-regal-blue">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="fill-white"
        ></path>
      </svg>
    </div>
    <div class="bg-regal-blue pb-10 md:pb-20">
      <div class="md:container md:mx-auto px-4 lg:px-32 space-y-3">
        <div class="space-y-6 lg:space-y-0 lg:space-x-8 ml-4">
          <blockquote class="fade-in p-2">
            <svg
              class="w-10 h-10 text-midnight-sapphire mb-2 sm:mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 290 290"
              fill="currentColor"
            >
              <path
                d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z"
              ></path>
            </svg>
            <h2
              class="md:text-2xl text-xl font-semibold text-gray-600 text-center pb-4"
              :class="$t(`default.font-primary`)"
            >
              {{ $t("magazineIntro") }}
            </h2>
          </blockquote>

          <div class="pt-4">
            <img
              src="../assets/svg/blobs.svg"
              alt="SVG Image 1"
              class="w-full h-auto md:h-60 mt-4"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Cookie Consent Popup -->
    <CookieConsent />
  </section>
</template>

<script>
import CookieConsent from "../components/CookieConsent.vue";
import { i18nState, setPageTranslations, translate } from "@/translations.js";
export default {
  name: "HomeView",
  components: {
    CookieConsent,
  },
  data() {
    return {
      languages: ["en", "bn", "fr"],
      page: "home", // Explicit page scope
      translationsLoaded: false,
    };
  },
  computed: {
    currentLanguage() {
      return i18nState.currentLanguage; // Access global language state
    },
  },
  async created() {
    await this.loadTranslations();
  },
  watch: {
    currentLanguage: {
      immediate: true, // Watch language changes and reload translations
      handler() {
        this.loadTranslations();
      },
    },
  },

  methods: {
    contribute() {
      this.$router.push("/contribute/submission-form");
    },
    join() {
      this.$router.push("/contribute/join");
    },
    async loadTranslations() {
      console.log(
        "Loading translations for page:",
        this.page,
        "and language:",
        this.currentLanguage
      );
      try {
        const translations = await setPageTranslations(this.page);
        console.log(
          "Loaded Translations in Home.vue:",
          JSON.stringify(translations, null, 2)
        );
        this.translationsLoaded = true;
      } catch (error) {
        console.error("Error loading translations in Home.vue:", error);
        this.translationsLoaded = false;
      }
    },
    $t(key) {
      return translate(key);
    },
  },
};
</script>

<style scoped>
.cta-btn {
  @apply text-base border-2 border-yellow-400 px-4 py-2 mt-4 shadow-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out lg:hover:bg-gradient-to-r lg:hover:from-gray-50 lg:hover:to-white lg:hover:border-honey-gold lg:hover:text-honey-gold;
}

.wave-divider {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
}

@media (min-width: 768px) {
  .wave-divider svg {
    height: 150px;
  }
}
.founding-note {
  color: #1a202c;
}
.fade-in {
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

main {
  flex-grow: 1;
  position: relative;
}

body::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
  /* Hides the scrollbar in Webkit browsers */
}

/* Hide scrollbar for Edge and Internet Explorer */
@supports (-ms-overflow-style: none) {
  body {
    -ms-overflow-style: none;
  }
}
</style>
