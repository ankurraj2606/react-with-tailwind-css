PROS -

    CSS on the go. Write it in the JS file where we write our JSX.
    Reusability
    Less Bundle Size
    Can build Flexible UI (customization is easy)

<------------------------------------------------------------------------------------------------->

Installation ->

    npm install -D tailwindcss postcss
    npx tailwindcss init

<------------------------------------------------------------------------------------------------->

Setup ->

    npx tailwindcss init will initialize a tailwind.config.js file, where we will write the configuration, like how we want to use tailwind in our project.

    It has a content that will set which files we will use tailwind inside. Like we are using tailwind inside html and js files in this project. Like what files bundler have to scan to get all the tailwind classes, so we'll write like :

    content: ["./src/**/*.{html, js}"]

    Also we need to create one ".postcssrc" file, where we'll setup to tell bundler that we are using tailwind so compile our tailwind. So, that when we are bundling our files, compile tailwind css to normal css.

    .postcssrc file configuration :

    {
        "plugins": {
            "tailwindcss": {}
        }
    }


    When we are using tailwind for css, we'll not write anything inside the css file, except these three lines :

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

    We'll not write anything inside our css file.

<--------------------------------------------setup is done -------------------------------------------------->

Features -

It overrides everything until and unless we write css in tailwind style.
