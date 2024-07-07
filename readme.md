# learning the react basics

## difference between using npm-react-app and vite@latest

1. package.json differences

- using **npx create-react-app** we get multiple additional dependencies like testing and web-vitals, which might not be required in the project initially
-

- using **npx create-react-app** provides us with scripts in the following manner:

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

- using **npm create vite@latest** provides us with almost zero extra loading on the application and hence is very fast.
  the scripts in vite look as follows:

```
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

here, we can see the scripts dependencies on react-scripts at all times. to run the program we need to use npm run start, where the start script will be called and similarly for build and so on.
