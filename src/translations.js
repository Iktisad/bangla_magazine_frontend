import { reactive } from "vue";
// Static imports for JSON translations
import homeEn from "./assets/locales/home/en.json";
import homeBn from "./assets/locales/home/bn.json";
import homeFr from "./assets/locales/home/fr.json";


// Reactive state for the current language
export const i18nState = reactive({
    currentLanguage: "en", // Default language
});

const translationsCache = {}; // Cache for translations
export const activeTranslations = reactive({}); // Reactive active translations


// Static mapping of translations by page and language
const translations = {
    home: {
        en: homeEn,
        bn: homeBn,
        fr: homeFr,
    },
};

// Load translations for a specific page and language
async function loadTranslations(page, language) {
    console.log("Attempting to load translations for:", { page, language }); // Log inputs

    console.log("Translations Object:", JSON.stringify(translations, null, 2)); // Log translations structure

    const cacheKey = `${page}_${language}`;
    if (translationsCache[cacheKey]) {
        console.log("Returning Cached Translation for:", cacheKey);
        return translationsCache[cacheKey];
    }

    // Attempt to fetch translations
    const translationData = translations[page]?.[language];
    console.log("Fetched Translation Data for", cacheKey, ":", translationData);

    if (!translationData) {
        console.error(`No translations found for ${page} in ${language}`);
        return {}; // Return empty object if translations are missing
    }

    translationsCache[cacheKey] = translationData; // Cache translations
    return translationData;
}


// Set translations for the current page
export async function setPageTranslations(page) {
    console.log("Page: "+page)
    const translations = await loadTranslations(page, i18nState.currentLanguage);
  
    Object.assign(activeTranslations, translations); // Update active translations reactively
}

// Translate a specific key
export function translate(key) {
    return key.split('.').reduce((o, i) => (o ? o[i] : undefined), activeTranslations) || key;
}

// Update the current language
export function setLanguage(language) {
    i18nState.currentLanguage = language;
}
