import '../scss/style.scss'

// Import your SCSS components
// import '../scss/components/_1_404.scss'

import '../../node_modules/codyframe/main/scss/util.scss'

// Import your JS Components
// import './components/_1_adaptive-navigation.js'

// TODO: replace with codyframe snippet below
document.querySelector('#cf-intro').innerHTML = `
<div class="grid gap-md gap-0@sm">
  <div class="col-3@sm col-4@lg">
    <p class="text-sm color-contrast-higher font-medium padding-top-3xs">✦ Hello</p>
  </div>

  <div class="col-9@sm col-8@lg">
    <h1 class="text-3xl">Meet CodyFrame,<br> the intuitive CSS framework</h1>
    <ul class="margin-top-lg flex flex-column gap-3xs">
      <li><a class="link" href="https://codyhouse.co/ds/components">Components ↗</a></li>
      <li><a class="link" href="https://codyhouse.co/ds/docs/framework">Documentation ↗</a></li>
    </ul>
  </div>
</div>
`
document.querySelector('#cf-colors').innerHTML = `
<div class="grid gap-lg gap-0@sm items-start@sm">
  <div class="col-3@sm col-4@lg position-sticky@sm top-md@sm">
    <p class="text-sm color-contrast-higher font-medium">Colors</p>
  </div>

  <div class="col-9@sm col-8@lg">
    <ul class="grid gap-md">
      <!-- primary -->
      <li class="col-6 col-4@sm col-3@md radius-md overflow-hidden inner-glow shadow-xs">
        <div class="aspect-ratio-1:1 bg-primary padding-sm">
          <p class="color-white text-sm">Primary</p>
        </div>

        <div class="grid">
          <div class="col aspect-ratio-1:1 bg-primary-lighter"></div>
          <div class="col aspect-ratio-1:1 bg-primary-light"></div>
          <div class="col aspect-ratio-1:1 bg-primary"></div>
          <div class="col aspect-ratio-1:1 bg-primary-dark"></div>
          <div class="col aspect-ratio-1:1 bg-primary-darker"></div>
        </div>
      </li>

      <!-- accent -->
      <li class="col-6 col-4@sm col-3@md radius-md overflow-hidden inner-glow shadow-xs">
        <div class="aspect-ratio-1:1 bg-accent padding-sm">
          <p class="color-white text-sm">Accent</p>
        </div>

        <div class="grid">
          <div class="col aspect-ratio-1:1 bg-accent-lighter"></div>
          <div class="col aspect-ratio-1:1 bg-accent-light"></div>
          <div class="col aspect-ratio-1:1 bg-accent"></div>
          <div class="col aspect-ratio-1:1 bg-accent-dark"></div>
          <div class="col aspect-ratio-1:1 bg-accent-darker"></div>
        </div>
      </li>

      <!-- black -->
      <li class="col-6 col-4@sm col-3@md radius-md overflow-hidden inner-glow shadow-xs">
        <div class="aspect-ratio-1:1 bg-black padding-sm">
          <p class="color-white text-sm">Black</p>
        </div>

        <div class="grid">
          <div class="col aspect-ratio-1:1 bg-black"></div>
          <div class="col aspect-ratio-1:1 bg-black"></div>
          <div class="col aspect-ratio-1:1 bg-black"></div>
          <div class="col aspect-ratio-1:1 bg-black"></div>
          <div class="col aspect-ratio-1:1 bg-black"></div>
        </div>
      </li>

      <!-- white -->
      <li class="col-6 col-4@sm col-3@md radius-md overflow-hidden inner-glow shadow-xs">
        <div class="aspect-ratio-1:1 bg-white padding-sm">
          <p class="color-black text-sm">White</p>
        </div>

        <div class="grid">
          <div class="col aspect-ratio-1:1 bg-white"></div>
          <div class="col aspect-ratio-1:1 bg-white"></div>
          <div class="col aspect-ratio-1:1 bg-white"></div>
          <div class="col aspect-ratio-1:1 bg-white"></div>
          <div class="col aspect-ratio-1:1 bg-white"></div>
        </div>
      </li>

      <!-- success -->
      <li class="col-6 col-4@sm col-3@md radius-md overflow-hidden inner-glow shadow-xs">
        <div class="aspect-ratio-1:1 bg-success padding-sm">
          <p class="color-white text-sm">Success</p>
        </div>

        <div class="grid">
          <div class="col aspect-ratio-1:1 bg-success-lighter"></div>
          <div class="col aspect-ratio-1:1 bg-success-light"></div>
          <div class="col aspect-ratio-1:1 bg-success"></div>
          <div class="col aspect-ratio-1:1 bg-success-dark"></div>
          <div class="col aspect-ratio-1:1 bg-success-darker"></div>
        </div>
      </li>

      <!-- error -->
      <li class="col-6 col-4@sm col-3@md radius-md overflow-hidden inner-glow shadow-xs">
        <div class="aspect-ratio-1:1 bg-error padding-sm">
          <p class="color-white text-sm">Error</p>
        </div>

        <div class="grid">
          <div class="col aspect-ratio-1:1 bg-error-lighter"></div>
          <div class="col aspect-ratio-1:1 bg-error-light"></div>
          <div class="col aspect-ratio-1:1 bg-error"></div>
          <div class="col aspect-ratio-1:1 bg-error-dark"></div>
          <div class="col aspect-ratio-1:1 bg-error-darker"></div>
        </div>
      </li>

      <!-- warning -->
      <li class="col-6 col-4@sm col-3@md radius-md overflow-hidden inner-glow shadow-xs">
        <div class="aspect-ratio-1:1 bg-warning padding-sm">
          <p class="color-white text-sm">Warning</p>
        </div>

        <div class="grid">
          <div class="col aspect-ratio-1:1 bg-warning-lighter"></div>
          <div class="col aspect-ratio-1:1 bg-warning-light"></div>
          <div class="col aspect-ratio-1:1 bg-warning"></div>
          <div class="col aspect-ratio-1:1 bg-warning-dark"></div>
          <div class="col aspect-ratio-1:1 bg-warning-darker"></div>
        </div>
      </li>

      <!-- background -->
      <li class="col-6 col-4@sm col-3@md radius-md overflow-hidden inner-glow shadow-xs">
        <div class="aspect-ratio-1:1 bg padding-sm">
          <p class="color-contrast-higher text-sm">Background</p>
        </div>

        <div class="grid">
          <div class="col aspect-ratio-1:1 bg-lighter"></div>
          <div class="col aspect-ratio-1:1 bg-light"></div>
          <div class="col aspect-ratio-1:1 bg"></div>
          <div class="col aspect-ratio-1:1 bg-dark"></div>
          <div class="col aspect-ratio-1:1 bg-darker"></div>
        </div>
      </li>

      <!-- contrasts -->
      <li class="col-6 col-4@sm col-3@md radius-md overflow-hidden inner-glow shadow-xs">
        <div class="aspect-ratio-1:1 bg-contrast-higher padding-sm">
          <p class="color-bg text-sm">Contrasts</p>
        </div>

        <div class="grid">
          <div class="col aspect-ratio-1:1 bg-contrast-lower"></div>
          <div class="col aspect-ratio-1:1 bg-contrast-low"></div>
          <div class="col aspect-ratio-1:1 bg-contrast-medium"></div>
          <div class="col aspect-ratio-1:1 bg-contrast-high"></div>
          <div class="col aspect-ratio-1:1 bg-contrast-higher"></div>
        </div>
      </li>
    </ul>
  </div>
</div>
`

document.querySelector('#cf-buttons').innerHTML = `
<div class="grid gap-lg gap-0@sm items-start@sm">
  <div class="col-3@sm col-4@lg position-sticky@sm top-md@sm">
    <p class="text-sm color-contrast-higher font-medium">Buttons</p>
  </div>

  <div class="col-9@sm col-8@lg">
    <ul class="flex flex-wrap gap-sm">
      <li>
        <button class="btn">Base</button>
      </li>

      <li>
        <button class="btn btn--primary">Primary</button>
      </li>

      <li>
        <button class="btn btn--primary gap-3xs">
          <svg class="icon icon--xs" viewBox="0 0 16 16" aria-hidden="true">
            <g fill="currentColor">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v10"></path>
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7l4 4 4-4"></path>
              <path fill="none" opacity=".4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15H1"></path>
            </g>
          </svg>
          <span>Icon</span>
        </button>
      </li>

      <li>
        <button class="btn btn--primary-subtle">Primary Subtle</button>
      </li>

      <li>
        <button class="btn btn--subtle">Subtle</button>
      </li>

      <li>
        <button class="btn btn--accent">Accent</button>
      </li>

      <li>
        <button class="btn btn--accent-subtle">Accent Subtle</button>
      </li>

      <li>
        <button class="btn btn--contrast">Contrast</button>
      </li>

      <li>
        <button class="btn btn--primary" disabled>Disabled</button>
      </li>
    </ul>
  </div>
</div>
`

document.querySelector('#cf-forms').innerHTML = `
<div class="grid gap-lg gap-0@sm items-start@sm">
  <div class="col-3@sm col-4@lg position-sticky@sm top-md@sm">
    <p class="text-sm color-contrast-higher font-medium">Forms</p>
  </div>

  <div class="col-9@sm col-8@lg">
    <ul class="grid gap-sm max-width-2xs">
      <div>
        <label class="form-label" for="input-name">Name</label>
        <input class="form-control width-100%" type="text" name="input-name" id="input-name" required>
      </div>

      <div>
        <label class="form-label" for="input-email">Email</label>
        <input class="form-control width-100%" type="email" name="input-email" id="input-email" placeholder="email@myemail.com">
      </div>

      <div>
        <label class="form-label" for="input-invalid">Invalid</label>
        <input class="form-control width-100%" type="text" name="input-invalid" id="input-invalid" aria-invalid="true" value="invalid data">
      </div>
    </ul>
  </div>
</div>
`

document.querySelector("#cf-typography").innerHTML = `
<div class="grid gap-lg gap-0@sm items-start@sm">
  <div class="col-3@sm col-4@lg position-sticky@sm top-md@sm">
    <p class="text-sm color-contrast-higher font-medium">Typography</p>
  </div>

  <div class="col-9@sm col-8@lg">
    <div class="padding-bottom-md">
      <p class="text-sm color-primary margin-bottom-3xs">4xl</p>
      <h1 class="text-4xl">Nothing is cheap</h1>
    </div>

    <div class="padding-y-md border-top">
      <p class="text-sm color-primary margin-bottom-3xs">3xl</p>
      <h1 class="text-3xl">Nothing is cheap</h1>
    </div>

    <div class="padding-y-md border-top">
      <p class="text-sm color-primary margin-bottom-3xs">2xl</p>
      <h1 class="text-2xl">Nothing is cheap</h1>
    </div>

    <div class="padding-y-md border-top">
      <p class="text-sm color-primary margin-bottom-3xs">xl</p>
      <h2 class="text-xl">Nothing is cheap</h2>
    </div>

    <div class="padding-y-md border-top">
      <p class="text-sm color-primary margin-bottom-3xs">lg</p>
      <h3 class="text-lg">Nothing is cheap</h3>
    </div>

    <div class="padding-y-md border-top">
      <p class="text-sm color-primary margin-bottom-3xs">md</p>
      <h4 class="text-md">Nothing is cheap</h4>
    </div>

    <div class="padding-y-md border-top">
      <p class="text-sm color-primary margin-bottom-3xs">base</p>
      <p>Leonardo da Vinci is thought by some to have begun painting the Mona Lisa in 1503 or 1504 in Florence, Italy. Although the Louvre states that it was “doubtless painted between 1503 and 1506”, the art historian Martin Kemp says there are some difficulties in confirming the actual dates with certainty. In addition, many Leonardo experts, such as Carlo Pedretti and Alessandro Vezzosi are of the opinion that the painting is characteristic of Leonardo’s style in the final years of his life, post-1513.</p>
    </div>

    <div class="padding-y-md border-top">
      <p class="text-sm color-primary margin-bottom-3xs">sm</p>
      <p class="text-sm">Leonardo da Vinci is thought by some to have begun painting the Mona Lisa in 1503 or 1504 in Florence, Italy. Although the Louvre states that it was “doubtless painted between 1503 and 1506”, the art historian Martin Kemp says there are some difficulties in confirming the actual dates with certainty. In addition, many Leonardo experts, such as Carlo Pedretti and Alessandro Vezzosi are of the opinion that the painting is characteristic of Leonardo’s style in the final years of his life, post-1513.</p>
    </div>

    <div class="padding-top-md border-top">
      <p class="text-sm color-primary margin-bottom-3xs">xs</p>
      <p class="text-xs">Leonardo da Vinci is thought by some to have begun painting the Mona Lisa in 1503 or 1504 in Florence, Italy. Although the Louvre states that it was “doubtless painted between 1503 and 1506”, the art historian Martin Kemp says there are some difficulties in confirming the actual dates with certainty. In addition, many Leonardo experts, such as Carlo Pedretti and Alessandro Vezzosi are of the opinion that the painting is characteristic of Leonardo’s style in the final years of his life, post-1513.</p>
    </div>
  </div>
</div>
`

document.querySelector("#cf-spacing").innerHTML = `
<div class="grid gap-lg gap-0@sm items-start@sm">
  <div class="col-3@sm col-4@lg position-sticky@sm top-md@sm">
    <p class="text-sm color-contrast-higher font-medium">Spacing</p>
  </div>

  <div class="col-9@sm col-8@lg">
    <ul class="grid gap-md">
      <li>
        <p class="text-sm color-primary margin-bottom-3xs">4xs</p>
        <div class="bg-primary radius-md bg-opacity-30%" style="height: var(--space-4xs)"></div>
      </li>

      <li>
        <p class="text-sm color-primary margin-bottom-3xs">3xs</p>
        <div class="bg-primary radius-md bg-opacity-30%" style="height: var(--space-3xs)"></div>
      </li>

      <li>
        <p class="text-sm color-primary margin-bottom-3xs">2xs</p>
        <div class="bg-primary radius-md bg-opacity-30%" style="height: var(--space-2xs)"></div>
      </li>

      <li>
        <p class="text-sm color-primary margin-bottom-3xs">xs</p>
        <div class="bg-primary radius-md bg-opacity-30%" style="height: var(--space-xs)"></div>
      </li>

      <li>
        <p class="text-sm color-primary margin-bottom-3xs">sm</p>
        <div class="bg-primary radius-md bg-opacity-30%" style="height: var(--space-sm)"></div>
      </li>

      <li>
        <p class="text-sm color-primary margin-bottom-3xs">md</p>
        <div class="bg-primary radius-md bg-opacity-30%" style="height: var(--space-md)"></div>
      </li>

      <li>
        <p class="text-sm color-primary margin-bottom-3xs">lg</p>
        <div class="bg-primary radius-md bg-opacity-30%" style="height: var(--space-lg)"></div>
      </li>

      <li>
        <p class="text-sm color-primary margin-bottom-3xs">xl</p>
        <div class="bg-primary radius-md bg-opacity-30%" style="height: var(--space-xl)"></div>
      </li>

      <li>
        <p class="text-sm color-primary margin-bottom-3xs">2xl</p>
        <div class="bg-primary radius-md bg-opacity-30%" style="height: var(--space-2xl)"></div>
      </li>

      <li>
        <p class="text-sm color-primary margin-bottom-3xs">3xl</p>
        <div class="bg-primary radius-md bg-opacity-30%" style="height: var(--space-3xl)"></div>
      </li>

      <li>
        <p class="text-sm color-primary margin-bottom-3xs">4xl</p>
        <div class="bg-primary radius-md bg-opacity-30%" style="height: var(--space-4xl)"></div>
      </li>
    </ul>
  </div>
</div>
`