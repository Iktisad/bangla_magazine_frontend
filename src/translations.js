const translations = {
    currentLang: "en", // Default language
    loaded: {}, // Cache for loaded translations
};

// Load a translation file dynamically
async function loadTranslations(scope, lang) {
    if (translations.loaded[scope]?.[lang]) {
        // If translations are already loaded, return them
        return translations.loaded[scope][lang];
    }

    try {
        // Dynamically import the translation file
        const module = await import(`@/assets/locales/${scope}/${lang}.json`);
    
        translations.loaded[scope] = {
            ...translations.loaded[scope],
            [lang]: module,
        };
    
        return module;
    } catch (err) {
        console.error(`Failed to load ${lang} translations for ${scope}:`, err);
        return {};
    }
}

// Get a translation string by key
 function translate(scope, key) {
    const lang = translations.currentLang;
    const loadedScope = translations.loaded[scope]?.[lang];
    console.log(loadedScope);
    return loadedScope?.[key] || key; // Fallback to key if no translation is found
}

// Change the current language
function setLanguage(lang) {
    translations.currentLang = lang;
}

export { loadTranslations, translate, setLanguage };
