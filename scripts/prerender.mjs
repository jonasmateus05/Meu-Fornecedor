// Gera o HTML da página no build (pré-renderização), para o conteúdo e a imagem principal
// aparecerem antes do JavaScript terminar de carregar.
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const htmlPath = path.join(root, 'dist', 'index.html')
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render, themeStyle } = await import(pathToFileURL(serverEntry).href)
const appHtml = render()
const html = await fs.readFile(htmlPath, 'utf8')
if (!html.includes('<div id="root"></div>')) throw new Error('Marcador <div id="root"></div> não encontrado em dist/index.html')
if (!html.includes('</head>')) throw new Error('</head> não encontrado em dist/index.html')
await fs.writeFile(htmlPath, html.replace('</head>', `${themeStyle()}</head>`).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`))
await fs.rm(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`Pré-renderização concluída (${Math.round(appHtml.length / 1024)} KB de HTML).`)
