import { reactive } from "vue";

// Reactive state for the current language
export const i18nState = reactive({
    currentLanguage: "en", // Default language
});

const translationsCache = {}; // Cache for translations
export const activeTranslations = reactive({}); // Reactive active translations

// Dynamically load translations for a specific page and language using fetch
async function loadTranslations(page, language) {
    console.log("Attempting to load translations for:", { page, language });

    const cacheKey = `${page}_${language}`;
    if (translationsCache[cacheKey]) {
        console.log("Returning Cached Translation for:", cacheKey);
        return translationsCache[cacheKey];
    }

    try {
        
        const translationData = await import(`./assets/locales/${page}/${language}.json`);
        console.log(translationData)
       
       
        console.log("Here is translation data",translationData);
        translationsCache[cacheKey] = translationData; // Cache translations
        return translationData;
    } catch (error) {
        console.error(`Error loading translations for ${page} in ${language}:`, error);
        return {}; // Return empty object if translations cannot be loaded
    }
}

// Set translations for the current page
export async function setPageTranslations(page) {
    console.log("Page:", page);
    const translations = await loadTranslations(page, i18nState.currentLanguage);

    Object.assign(activeTranslations, translations); // Update active translations reactively
}

// Translate a specific key
export function translate(key) {
    console.log(key);
    return key.split('.').reduce((o, i) => (o ? o[i] : undefined), activeTranslations) || key;
}

// Update the current language
export function setLanguage(language) {
    i18nState.currentLanguage = language;
}
