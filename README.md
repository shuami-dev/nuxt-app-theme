## Nuxt Custom App Theme

A Nuxt.js package that provides custom theme management functionalities.
This package aims to customize theme for your Nuxt applications.

### Features

- Global CSS for styling.

### Installation

To install the package, run the following command:

```bash
npm install @shuami-dev/nuxt-app-theme
```

### Usage

1. Add to Nuxt Config\
    In your nuxt.config.ts, add the package to your CSS array:

```ts
export default defineNuxtConfig({
  css: ["@shuami-dev/nuxt-app-theme/style.css"],
})