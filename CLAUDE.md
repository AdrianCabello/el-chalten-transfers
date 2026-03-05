# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular 20+ SSR application for a Patagonia private transfer service (El Chaltén Transfers). The app is fully bilingual (English/Spanish) with server-side rendering enabled.

## Development Commands

- `npm start` or `ng serve` - Start development server (http://localhost:4200)
- `npm run build` - Production build (outputs to `dist/`)
- `npm test` or `ng test` - Run unit tests with Karma
- `npm run watch` - Build in watch mode for development
- `npm run serve:ssr:el-chalten-transfers-app` - Serve SSR build locally
- `ng generate component component-name` - Generate new component (will be standalone, SCSS, no test files)

## Architecture & Patterns

### Standalone Components

All components are **standalone** (no NgModules). When creating new components:
- Use `standalone: true`
- Import dependencies directly in the component's `imports` array
- Components have three files: `.ts`, `.html`, `.scss`

### Component Organization

```
src/app/
├── core/services/     # Core singleton services (e.g., i18n)
├── shared/constants/  # Shared constants and utilities
├── components/        # Reusable UI components
└── pages/             # Page-level components (routed)
```

Each component folder contains `.ts`, `.html`, and `.scss` files.

### Dependency Injection

Use the modern `inject()` function instead of constructor injection:

```typescript
export class MyComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
}
```

### Internationalization (i18n)

The app uses a custom signal-based i18n service (`I18nService`) supporting English and Spanish:

- **Don't** use Angular's built-in i18n or external libraries
- **Do** add translation keys to the `Translations` interface and `TRANSLATIONS` object in `i18n.service.ts`
- Components access translations via `inject(I18nService).t()` computed signal
- All user-facing text must be translated in both languages

### State Management

Uses Angular signals for reactive state:
- No external state management library (NgRx, Akita, etc.)
- Service state is managed with `signal()` and `computed()`
- Components use `.asReadonly()` for exposing signals

### SSR Configuration

The app is configured for server-side rendering:
- Entry point: `src/server.ts`
- Client hydration enabled with event replay
- Ensure new code is SSR-compatible (no `window`, `document`, `localStorage` access without guards)

## Code Conventions

### TypeScript

- Strict mode enabled (`strict: true`)
- Always use `readonly` for injected dependencies
- Use type inference where possible; explicit types for public APIs
- Prefer `const` over `let`

### Component Templates

- Use inline templates for simple components, separate `.html` for complex ones
- Prefer signal-based data binding
- Use control flow syntax: `@if`, `@for`, `@switch` (Angular 17+ syntax)

### Styling

- SCSS for all styles
- Component-scoped styles (`:host` selector)
- Prettier configured (printWidth: 100, singleQuote: true, angular parser for HTML)

### Testing

- Tests are disabled by default (`skipTests: true` in `angular.json`)
- When adding tests, use Jasmine + Karma
- Test files use `.spec.ts` extension

## Important Files

- `src/app/app.ts` - Root component (sets meta tags, title)
- `src/app/app.routes.ts` - Application routes
- `src/app/app.config.ts` - Application configuration (providers)
- `src/app/core/services/i18n.service.ts` - Internationalization service with all translations
- `src/app/shared/constants/contact.ts` - Contact information and WhatsApp helpers
- `src/app/pages/home/home.component.ts` - Main landing page composing all components

## Common Patterns

### Creating a New Component

```typescript
import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss',
})
export class MyComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
}
```

### WhatsApp Integration

Use helpers from `src/app/shared/constants/contact.ts`:
- `getWhatsAppUrl(message)` - Generate WhatsApp link with pre-filled message
- `WHATSAPP_NUMBER`, `WHATSAPP_URL`, `INSTAGRAM_URL` constants available

## Notes

- The app is a single-page application with currently one route (home page)
- All components are designed as standalone building blocks
- SEO meta tags are set in the root `App` component
- Contact information is centralized in `contact.ts` constants
