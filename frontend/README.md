# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

I think I'll keep this for now


Matt's todo list

- Path aliases for images
- Use immer --- MATT THING...
- https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example --- DONE!
- make buttons gray out when max or min is hit --- DONE!
- use map instead of objects to components --- DONE!
- Extract subitems component  
- New name for GroupedCard --- DONE!
- .Find instead of findElement

/Users/ottorohrer/Listmaker/frontend/src/App.jsx
  1:10  error  'useState' is defined but never used  no-unused-vars
--
/Users/ottorohrer/Listmaker/frontend/src/Item.jsx
  60:20  error  'setQuantity' is assigned a value but never used  no-unused-vars
--
/Users/ottorohrer/Listmaker/frontend/src/Item.stories.jsx
  3:18  error  'items' is defined but never used  no-unused-vars
--
