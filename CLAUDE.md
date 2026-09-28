# CLAUDE.md

## Project Overview

This project is a **technical assessment / test project** for evaluating frontend development skills.

Tech stack:

* Next.js (App Router)
* React
* TypeScript (Strict Mode)
* Tailwind CSS
* shadcn/ui (if applicable)
* pnpm

Primary goals:

* Accurately implement the provided design.
* Demonstrate clean and maintainable React/Next.js code.
* Build reusable components where appropriate.
* Ensure responsive behavior across screen sizes.
* Follow good TypeScript and accessibility practices.
* Keep the implementation simple and focused on the assessment requirements.

Do not over-engineer the project or introduce unnecessary architecture, abstractions, or dependencies.

---

# General Guidelines

* Always write clean, production-quality code appropriate for the assessment.
* Never use `any`.
* Prefer strict TypeScript.
* Prefer readability over clever implementations.
* Reuse existing components whenever possible.
* Keep components small and focused.
* Do not introduce new dependencies unless necessary.
* Remove unused imports, variables, and code.
* Do not add comments unless requested.
* Always store/download/create images in `.webp` format.
* Do not implement functionality that is not required by the assessment.
* Do not invent business logic or requirements.

---

# TypeScript

* Use interfaces for component props.
* Use type inference where appropriate.
* Prefer optional chaining (`?.`) over verbose null checks.
* Prefer nullish coalescing (`??`) instead of logical OR (`||`) when appropriate.
* Avoid non-null assertions (`!`) unless absolutely necessary.
* Never disable TypeScript errors.

Example:

```ts
const image = service?.image?.url ?? "";
const title = page?.title ?? "Untitled";
```

---

# React

Prefer:

* Functional components
* Server Components by default
* Client Components only when interactivity is required

Avoid:

* Unnecessary `useEffect`
* Unnecessary `useMemo`
* Unnecessary `useCallback`
* Unnecessary global state
* Unnecessary client components

Keep state as local as possible.

---

# Next.js

Use the App Router.

Prefer:

* Server Components
* Route Handlers when API routes are required
* Next.js built-in features where appropriate
* `next/image` for images
* `next/font` when fonts need to be loaded through Next.js

Avoid:

* Pages Router unless specifically requested.
* Unnecessary client-side JavaScript.
* Unnecessary client components.
* Complex architecture for simple assessment requirements.

---

# Project Structure

Prefer:

```text
src/
    app/
    components/
        common/
        ui/
        icons/
    lib/
    hooks/
    services/
    utils/
    types/
    constants/
```

Keep related files together.

Do not create folders or abstractions unless they are actually needed.

---

# Styling

Use Tailwind CSS.

Rules:

* Prefer utility classes.
* Avoid inline styles.
* Extract repeated UI into reusable components.
* Use `cn()` for conditional classes.
* Keep Tailwind classes readable.
* Use CSS variables for colors and theme values when appropriate.
* Follow the existing design system before introducing new styles.
* Avoid unnecessary custom CSS.
* Avoid arbitrary values when an existing Tailwind utility or design token can be used.

---

# Components

Components should:

* Have a clear responsibility.
* Receive typed props.
* Be reusable when reuse is actually needed.
* Avoid deeply nested JSX.
* Avoid unnecessary abstraction.

Split large components into smaller components when it improves readability or reuse.

Do not create components solely for the sake of abstraction.

For assessment tasks, prioritize **clear and understandable code** over highly abstract architecture.

---

# API / Data Fetching

Only implement API or data-fetching logic if required by the assessment.

When data fetching is required:

Prefer:

* Server Components
* `fetch()`
* Server-side data fetching
* Small, focused service functions

Keep API-related logic outside UI components when practical.

Never place API URLs directly throughout UI components.

---

# Accessibility

Always:

* Use semantic HTML.
* Provide meaningful `alt` text for images.
* Use proper heading hierarchy.
* Label form controls.
* Ensure interactive elements are keyboard accessible.
* Use buttons for actions and links for navigation.
* Maintain sufficient color contrast.
* Provide visible focus states.
* Do not rely solely on color to communicate information.

---

# Responsive Design

The project must work well on:

* Mobile
* Tablet
* Laptop
* Desktop

Rules:

* Use responsive Tailwind utilities.
* Avoid unnecessary fixed widths and heights.
* Follow the responsive behavior defined in the design.
* Ensure content does not overflow on smaller screens.
* Test layouts at common viewport sizes.

---

# Figma / Design Implementation

When implementing a Figma design:

* Aim for pixel-accurate implementation.
* Match spacing, typography, colors, border radius, shadows, and sizing.
* Respect Auto Layout behavior.
* Follow the responsive behavior shown in the design.
* Use reusable components where appropriate.
* Reuse existing components when they match the design.
* Do not invent UI or functionality that is not present in the requirements.
* Use the provided assets whenever available.

For images and assets:

* Use the provided design assets when available.
* Store/download/create images in `.webp` format.
* Match image dimensions, aspect ratio, and cropping to the design.

---

# Assessment Scope

Keep the implementation focused on what is being evaluated.

Prioritize:

1. Visual accuracy.
2. Responsive implementation.
3. Component structure.
4. TypeScript quality.
5. Clean React/Next.js practices.
6. Accessibility.
7. Maintainable code.

Do not spend time implementing unrelated production concerns such as:

* SEO optimization.
* Advanced caching strategies.
* Analytics.
* Complex state management.
* Authentication unless required.
* Complex backend architecture.
* Overly elaborate error handling.
* Performance optimization beyond reasonable frontend practices.
* Infrastructure or deployment architecture.

If something is not required by the assessment, prefer the simplest reasonable implementation.

---

# Code Quality Checklist

Before completing a task:

* TypeScript has no errors.
* ESLint passes.
* Remove `console.log`.
* Remove unused imports, variables, and code.
* Ensure components are appropriately structured.
* Verify responsive behavior.
* Verify accessibility.
* Verify the implementation matches the provided design.
* Ensure there are no unnecessary dependencies.
* Ensure there is no unnecessary client-side logic.
* Ensure the implementation stays within the assessment scope.

---

# Naming Conventions

* Use PascalCase for components.
* Use camelCase for variables and functions.
* Use descriptive names.
* Avoid abbreviations unless widely understood.
* Use clear and consistent file names.

Examples:

```text
HeroSection.tsx
ContactForm.tsx
useMobileMenu.ts
userService.ts
formatCurrency.ts
```

---

# Communication

When responding:

* Explain architectural decisions briefly.
* Ask for clarification if requirements are ambiguous.
* Do not invent business logic.
* Follow existing project patterns before introducing new ones.
* Choose the simplest maintainable implementation.
* Avoid unnecessary complexity.
* If multiple approaches exist, prefer the approach that is easiest to understand and appropriate for a technical assessment.
* When modifying existing code, preserve existing functionality unless the task explicitly requires changing it.
