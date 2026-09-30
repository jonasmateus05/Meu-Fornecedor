import { theme } from '../config/theme'

// Variáveis CSS do tema. Usadas no navegador (App) e no build (pré-renderização), para as cores já virem no HTML.
export const themeVariables = (): Record<string, string> => ({
  '--brand-primary': theme.brand.primary,
  '--brand-primary-dark': theme.brand.primaryDark,
  '--brand-primary-light': theme.brand.primaryLight,
  '--cta-color': theme.cta.color,
  '--cta-dark': theme.cta.dark,
  '--cta-light': theme.cta.light,
  '--background-section': theme.background.section,
  '--background-card-featured': theme.background.cardFeatured,
  '--background-card-light': theme.background.cardLight,
  '--highlight-background': theme.highlight.background,
  '--highlight-border': theme.highlight.border,
  '--highlight-text': theme.highlight.text,
})

export const themeStyleTag = () => `<style>:root{${Object.entries(themeVariables()).map(([key, value]) => `${key}:${value}`).join(';')}}</style>`
