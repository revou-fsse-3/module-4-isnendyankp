# About Project

This project learn create simple form with vitereact form by using tailwindcss & formik  

## Create Project

npm create vite my-project-name --template react-ts

## Change to project directory

cd my-project-name

## install project:

npm install > react > typescript

## run project:

npm run dev

# Tailwind CSS

https://tailwindcss.com/docs/guides/vite

## Install Tailwind CSS dan dependencies

npm install -D tailwindcss postcss autoprefixer

## Inisialisasi konfigurasi Tailwind CSS

npx tailwindcss init -p

## Configure your template paths

Open file `tailwind.config.js` & add plugin Tailwind CSS.

    // Add the paths to all of your template files in your tailwind.config.js file.

    export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }

## Add the Tailwind directives to your CSS

Open file `src/styles/index.css` add configure Tailwind CSS.

    /* src/styles/index.css */

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* Custom styles go here */

## rerun project:

Run your build process with npm run dev.

# Formik

https://formik.org/docs/overview

## Install Formik

npm install formik --save

## Install Yup

npm i yup

##  component folder

1. create new components folder in src folder
2. create new input folder in components folder
3. create new index.tsx file in input folder