import React from 'react'
import { Provider } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { store } from '@/app/store'
import RootRouter from '@/routers/root-router'
import '@/i18n'
import LanguageSwitcher from '@/components/language-switcher'

const App = () => {
  return (
    // <React.StrictMode>
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootRouter />
        <LanguageSwitcher />
      </GestureHandlerRootView>
    </Provider>
    // </React.StrictMode>
  )
}

export default App
