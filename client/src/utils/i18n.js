const applicationLocales = ['en-us'];
const defaultLocale = 'en-us';

export const applicationLanguagesDropdown = [
    {value: 'en-us', label:'English (US)'},
    {value: 'it-it', label:'Italiano'}
];

export const getDefaultLocale = () => {
    const navigatorLanguage = navigator.language.toLowerCase();
    if (navigatorLanguage.indexOf('-') > 0) {
        return applicationLocales.includes(navigatorLanguage) ? navigatorLanguage : defaultLocale
    } 
    const languagePrefix = navigatorLanguage.substring(0, 2);
    const language = navigatorLanguage.find(lang => lang.indexOf(languagePrefix) >= 0)
    return language ?? defaultLocale
}