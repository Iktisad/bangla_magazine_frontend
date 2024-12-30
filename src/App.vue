<template>
  <MainLayout />
</template>

<script>
import { reactive, provide } from "vue";
import MainLayout from "./views/MainLayout.vue";
export default {
  name: "App",
  setup() {
    const languageState = reactive({
      currentLang: "en", // Default language
      setLanguage(lang) {
        languageState.currentLang = lang;
      },
    });

    provide("languageState", languageState);

    return {};
  },
  components: {
    MainLayout,
  },
};
</script>
<style scoped>
body {
  font-family: "Roboto", sans-serif;
}
</style>
