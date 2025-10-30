import React, { useCallback, useMemo } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import i18n from '@/i18n'
import { useTranslation } from 'react-i18next'

const SUPPORTED = ['zh', 'en', 'ja'] as const
type SupportedLang = (typeof SUPPORTED)[number]

const nextLang = (current: SupportedLang): SupportedLang => {
  const idx = SUPPORTED.indexOf(current)
  const nxt = (idx + 1) % SUPPORTED.length
  return SUPPORTED[nxt]
}

const languageLabel: Record<SupportedLang, string> = {
  en: 'EN',
  zh: '中',
  ja: '日',
}

export const LanguageSwitcher = () => {
  const { t } = useTranslation('common')
  const current = (i18n.language as SupportedLang) || 'en'
  const label = useMemo(() => languageLabel[current], [current])

  const onPress = useCallback(() => {
    const target = nextLang(current)
    i18n.changeLanguage(target)
  }, [current])

  return (
    <View style={styles.container} pointerEvents='box-none'>
      <Pressable style={styles.button} onPress={onPress} hitSlop={10}>
        <Text style={styles.text}>
          {t('switchLanguage')} · {label}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    right: 16,
    zIndex: 1000,
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
})

export default LanguageSwitcher
