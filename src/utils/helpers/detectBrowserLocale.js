export default function detectBrowserLocale(availableLanguages = ['en', 'vi']) {
  const locale =
    [
      ...(window.navigator.languages || []),
      window.navigator.language,
      window.navigator.browserLanguage,
      window.navigator.userLanguage,
      window.navigator.systemLanguage,
    ]
      .filter(Boolean)
      .map(language => language.substr(0, 2))
      .find(language => availableLanguages.includes(language)) || 'en';
  return locale;
}
