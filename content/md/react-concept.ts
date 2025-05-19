export const content = {
  id: "4",
  title: "All React Concepts Explained",
  summary:
    "A comprehensive guide that walks through 20 key React concepts — from JSX and props to portals and error boundaries — in a single, readable article.",
  date: "May 14, 2025",
  imageUrl: "/articles/react-concept.webp",
  slug: "react-concept",
  content: `
# All React Concepts Explained in Just One Read

A beginner-friendly yet thorough overview of the core building blocks of React.

## 1. Components
Components are the fundamental units of a React app. They're JavaScript functions that return JSX to describe UI elements, and can be reused like Lego blocks.

## 2. JSX
React is a JavaScript library.

React components don’t return HTML markup; they actually return something called JSX, which is JavaScript in disguise.

JSX is optional, but the alternative way to make user interfaces is with the function \`createElement\`, which gets annoying to write pretty fast, so everyone just uses JSX.
Since JSX is JavaScript, you can't write attributes like you would in HTML.
You have to write them in camel case style.
That means HTML attributes like \`class\` become \`className\`.

## 3. Dynamic Values with Curly Braces

Unlike HTML, which is static and unchanging, the benefit of using React is that you can use dynamic JavaScript values in your JSX.

If you have data, you can display it in your JSX using curly braces.

Curly braces accept values like strings and numbers directly.

You can use them to make your attributes dynamic, and you can style React elements using a JavaScript object within the curly braces.


## 4. Fragments

JavaScript functions can only return one thing.

In React, you can only return one parent element from a component, so you can’t do this without getting a big error.

We could fix this by wrapping these components in a <div>, but maybe you don't want to add another element to the page.

Instead, you can use an empty component called a React fragment.

## 5. Props

Props let you pass data from a parent component to a child. They're read-only and appear as an object in the component's function parameters.

## 6. Children

Use the \`children\` prop to nest components inside other components. Great for layouts and reusable containers.

## 7. Keys

Keys help React identify elements in lists. Use unique values like IDs or indexes when mapping arrays.

## 8. Rendering and the Virtual DOM

React uses a virtual DOM to optimize UI updates. It diffs changes and applies only what’s necessary to the real DOM via a process called reconciliation.

## 9. Event Handling

React supports event handlers like \`onClick\`, \`onChange\`, and \`onSubmit\`. Attach handlers directly to JSX elements.

## 10. State

Use \`useState\` or \`useReducer\` to store dynamic data in components. Changes to state trigger re-renders.

## 11. Controlled Components

Form elements whose values are controlled via state. This allows predictable behavior and validation.

## 12. useState Hook

A fundamental hook to manage local state:
\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## 13. Purity

Keep components pure: they should return the same output given the same input and avoid side effects during render.

## 14. Strict Mode

Wrap your app in \`<React.StrictMode>\` to catch potential issues early during development.

## 15. Effects

Use \`useEffect\` for side effects like data fetching, timers, or subscriptions.

## 16. Refs

Use \`useRef\` to access DOM nodes directly or persist values across renders.

## 17. Context

Use \`React.createContext\`, a Provider, and \`useContext\` to share state globally without prop drilling.

## 18. Portals

Render components outside their parent DOM tree using \`ReactDOM.createPortal\` — useful for modals and overlays.

## 19. Suspense

Handle lazy loading and async components gracefully by showing fallback content while loading.

## 20. Error Boundaries

Catch runtime errors in the component tree using error boundary components to prevent the entire app from crashing.

---
This guide is a one-stop overview to solidify your understanding of React’s most important ideas.
  `,
};
