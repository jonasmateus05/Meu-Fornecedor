import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { captureAttributionParams } from './utils/attribution'
import { initializeTracking } from './utils/tracking'

captureAttributionParams()
initializeTracking()

const root = document.getElementById('root')!
const app = <StrictMode><App /></StrictMode>
// Se o HTML já veio pré-renderizado do build, só "ativa" a página; senão, renderiza do zero.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
