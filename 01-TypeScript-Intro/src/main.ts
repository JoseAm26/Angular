import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import './topics/01-Basic-types.ts'
// import './topics/02-objects-interfeces.ts'
// import './topics/03-funtions.ts'
// import './topics/04-homework-types.ts'
// import './topics/05-basic-destrucruring.ts'
// import './topics/06-function-destructuring.ts'
// import './topics/07-import-export.ts'
// import './topics/08-Clases.ts';
// import './topics/09-generics.ts'
// import './topics/10-decorators.ts'
import './topics/11-optional-chaining.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Hola mundo
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
