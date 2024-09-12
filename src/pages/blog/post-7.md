---
layout: "../../layouts/BlogPostLayout.astro"
title: Creating a Modern Web Application with React, Vite, and TypeScript
date: 2024-09-08
author: Levi Zhao
image: {
  src: "/images/post-7.png",
  alt: "A picture of a coder",
}
description: In this project, we’ll build React project
draft: false
category: React
---
1. Introduction
   (Brief overview of technologies)


2. Setting Up the Development Environment
   - Install Node.js from https://nodejs.org/
   - Verify installation:

     ```
     node --version
     npm --version
     ```

3. Creating a New Project
   - Open your terminal and run:
     ```
     npm create vite@latest my-react-app -- --template react-ts
     cd my-react-app
     npm install
     ```

4. Project Structure
   ```
   my-react-app/
   ├── public/
   ├── src/
   │   ├── assets/
   │   ├── components/
   │   ├── App.tsx
   │   ├── main.tsx
   │   └── vite-env.d.ts
   ├── index.html
   ├── package.json
   ├── tsconfig.json
   ├── tsconfig.node.json
   └── vite.config.ts
   ```

5. Configuring TypeScript
   - tsconfig.json example:
     ```json
     {
       "compilerOptions": {
         "target": "ES2020",
         "useDefineForClassFields": true,
         "lib": ["ES2020", "DOM", "DOM.Iterable"],
         "module": "ESNext",
         "skipLibCheck": true,
         "moduleResolution": "bundler",
         "allowImportingTsExtensions": true,
         "resolveJsonModule": true,
         "isolatedModules": true,
         "noEmit": true,
         "jsx": "react-jsx",
         "strict": true,
         "noUnusedLocals": true,
         "noUnusedParameters": true,
         "noFallthroughCasesInSwitch": true,
         "baseUrl": "./src",
         "paths": {
           "@/*": ["*"]
         }
       },
       "include": ["src"],
       "references": [{ "path": "./tsconfig.node.json" }]
     }
     ```

6. Writing React Components with TypeScript
   - Example component (src/components/Greeting.tsx):
     ```typescript
     import React, { useState } from 'react';

     interface GreetingProps {
       name: string;
     }

     const Greeting: React.FC<GreetingProps> = ({ name }) => {
       const [count, setCount] = useState<number>(0);

       return (
         <div>
           <h1>Hello, {name}!</h1>
           <p>You clicked {count} times.</p>
           <button onClick={() => setCount(count + 1)}>Click me</button>
         </div>
       );
     };

     export default Greeting;
     ```

7. Using the Component in App.tsx
   ```typescript
   import React from 'react';
   import Greeting from './components/Greeting';

   const App: React.FC = () => {
     return (
       <div>
         <Greeting name="World" />
       </div>
     );
   };

   export default App;
   ```

8. Managing State and Side Effects
   (The Greeting component above demonstrates useState)

9. Routing in React
   - Install React Router:
     ```
     npm install react-router-dom @types/react-router-dom
     ```
   - Example usage in App.tsx:
     ```typescript
     import React from 'react';
     import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
     import Home from './components/Home';
     import About from './components/About';

     const App: React.FC = () => {
       return (
         <Router>
           <div>
             <nav>
               <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
               </ul>
             </nav>

             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
             </Routes>
           </div>
         </Router>
       );
     };

     export default App;
     ```

10. Styling the Application
    - Using CSS Modules (example.module.css):
      ```css
      .title {
        color: blue;
        font-size: 24px;
      }
      ```
    - In your component:
      ```typescript
      import styles from './example.module.css';

      const MyComponent: React.FC = () => {
        return <h1 className={styles.title}>Hello, styled world!</h1>;
      };
      ```

11. Building and Deploying
    - Run the build command:
      ```
      npm run build
      ```
    - The built files will be in the `dist` directory
    - Deploy these files to your hosting platform

