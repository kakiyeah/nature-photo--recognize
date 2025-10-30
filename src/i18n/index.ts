import * as Localization from 'expo-localization'
import i18next, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'

// Basic resource bundles. Extend as you migrate strings from UI.
const resources = {
  en: {
    common: {
      appTitle: 'Horizon View',
      language: 'Language',
      english: 'English',
      chinese: 'Chinese',
      japanese: 'Japanese',
      switchLanguage: 'Switch Language',
    },
  },
  zh: {
    common: {
      appTitle: '地平线视界',
      language: '语言',
      english: '英语',
      chinese: '中文',
      japanese: '日语',
      switchLanguage: '切换语言',
    },
  },
  ja: {
    common: {
      appTitle: 'ホライズンビュー',
      language: '言語',
      english: '英語',
      chinese: '中国語',
      japanese: '日本語',
      switchLanguage: '言語を切り替え',
    },
  },
}

const getInitialLanguage = (): string => {
  const locale = Localization.getLocales?.()[0]?.languageCode || 'en'
  if (locale.startsWith('zh')) return 'zh'
  if (locale.startsWith('ja')) return 'ja'
  return 'en'
}

const options: InitOptions = {
  compatibilityJSON: 'v4',
  resources,
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common'],
  lng: getInitialLanguage(),
  interpolation: { escapeValue: false },
}

// Initialize once on import
if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init(options)
}

export default i18next
