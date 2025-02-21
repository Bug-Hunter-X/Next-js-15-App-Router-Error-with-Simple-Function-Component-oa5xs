# Next.js 15 App Router Error with Simple Function Component

This repository demonstrates a strange error encountered when using the Next.js 15 App Router with a basic function component. The component renders without any issues in development mode, but throws an error when building for production.  The error message is not particularly descriptive and the stack trace doesn't point to any clear cause.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run build`.  
4. Observe the error message.

## Solution

This issue appears to stem from a potential conflict with the App Router's handling of simple components. Adding a minimal amount of dynamic content or using a `Layout` component solves the problem. This may suggest an edge case or perhaps unexpected behavior within the Next.js 15 App Router. The solution provided addresses this by adding a trivial dependency on the `useState` hook.