import { renderToString } from 'react-dom/server'
import App from './App'
import { themeStyleTag } from './utils/theme'

// Usado só no build: gera o HTML da página para ela aparecer antes do JavaScript carregar.
export function render() {
  return renderToString(<App />)
}

// Cores do tema já no <head>, para não aparecerem os tons padrão antes do JavaScript carregar.
export const themeStyle = themeStyleTag
