# My UI Library

A **modular, reusable React UI component library** built with **TypeScript**, **TailwindCSS**, and **Vite**, designed for scalable frontend projects. Includes interactive **Storybook documentation**, unit tests with **Jest + React Testing Library**, and tree-shakable components for optimized bundle size.

---

## 🚀 Key Features

- Reusable React components (Button, Input, Card, etc.)  
- TypeScript support with full IntelliSense and `.d.ts` type definitions  
- TailwindCSS integration for flexible styling  
- Storybook documentation for interactive component previews  
- Unit & snapshot tests with code coverage  
- Tree-shakable imports for optimized bundle size  
- Ready to publish as an npm package  

---

## 📦 Installation

Install via npm:

```bash
npm install my-ui-library
```

Or using yarn:

```bash
yarn add my-ui-library
```

---

## 🎨 Usage Example

```tsx
import React from "react";
import { Button } from "my-ui-library/components/Button";

export const App = () => (
  <div>
    <Button variant="primary" size="md">Primary Button</Button>
    <Button variant="secondary" size="sm">Secondary Button</Button>
  </div>
);
```

- Supports props like:
  - `variant`: `"primary" | "secondary" | "danger"`  
  - `size`: `"sm" | "md" | "lg"`  
  - `disabled`: `boolean`  

---

## 📖 Storybook Documentation

View interactive component previews and auto-generated docs:  

[Storybook Docs](https://<username>.github.io/my-ui-library)  

- Shows all component variations  
- Allows interactive prop controls  
- Auto-generated props table and usage examples  

---

## 🧪 Running Tests

Run unit tests with Jest + React Testing Library:

```bash
npm run test         # Watch mode
npm run test:ci      # Single run for CI/CD
npm run coverage     # Generate code coverage
```

- Coverage report will be available in `coverage/lcov-report/index.html`  
- Open the HTML file in browser for a **visual coverage report**

---

## ⚡ Development

Start Storybook for local development:

```bash
npm run storybook
```

- Runs Storybook on `http://localhost:6006`  
- Add new components under `src/components/`  
- Add stories for each component in `.stories.tsx`  

---

## 📂 Project Structure

```
src/
 └── components/
      ├── Button/
      │    ├── Button.tsx
      │    ├── Button.stories.tsx
      │    └── __tests__/Button.test.tsx
      └── Input/
           ├── Input.tsx
           └── Input.stories.tsx

dist/           # Bundled JS + .d.ts files
storybook-static/ # Built Storybook site
coverage/       # Test coverage reports
```

---

## 📝 Contribution

- Fork the repo  
- Create a feature branch: `git checkout -b feature/my-component`  
- Add your component + story + test  
- Submit a pull request  

---

## 📄 License

This project is licensed under the **MIT License**.

