import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Parcel
 *
 * HMR - Hot Module Replacement
 * File Watcher Algorithm (C++)
 * Bundling
 * Minify
 * Cleaning our code
 * Dev and Production build
 * Superfast build algorithm
 * Image optimization
 * Cashing while development
 * Compression
 * Compatible with older versions of browser
 * HTTPS on dev                                  * npx parcel index.html --https
 * port number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *? Tree Shaking -
 *
 * It means removing unwanted code. Example : If we are importing a library and it is having 10 helper functions  and we
 * don't need these all but we need 1 or 2 , then tree shaking removes all the unused helper functions.
 *
 * ? Browserlist
 * Browserlist Helps to make our app run on older browser versions.
 * if we write "last 2 Chrome versions" in browserlist, it doesn't mean it will not work on other browsers like opera, but it means that
 * it will definitely work on last 2 chrome versions 100%.
 *
 * ? Polyfill code -
 *
 * It means if our browser doesn't understand a newer code or method, then that would be converted into a older code
 * that the browser understands.
 *
 * Browserlist keeps track of which browser version understands what version of code.
 *
 * Babel - It converts the newer code into older code if browser doesn't understand.It uses browserlist for that.
 *
 * Babel - It takes some code as input and outputs some browser compatible code called polyfill.
 * It comes along with parcel.
 *
 * Dependency Tree - Like React depends on other dependencies and those dependencies depend on other dependencies and this goes on.
 *
 * Transitive dependencies : We have a package manager which handles and take care of Transitive dependencies of our code.
 * This dependency of one dependency or package on another and another on some another is called Transitive dependencies
 *
 * React doesn't performs very good alone, it needs the help of a lot of dependencies.
 *
 *
 * npx parcel index.html - > npx -> execute , index.html -> entry-point   , npx -> node package eXecute
 *
 * package-lock.json tells us which version of package or library we are using in production. It locks the original version. It keeps the snapshot of the version
 * of package used.
 *
 * package-lock.json shouldn't be kept in .gitignore as it keeps the snapshot of version of packages used.
 *
 * package-lock.json keeps hash version of the packages and dependencies version installed.
 *
 * browserlist module helps our app to run on older version of browsers.
 *
 * package-lock.json has sufficient information to re-generate node modules again and again , that's why we don't push node modules
 * on git and it is very heavy in size , that is also a reason.
 *
 * ! Normal js files are intended to run directly but the modules are meant to be imported. SO whenever we use import or export the script
 *   should be of the type "module".
 *
 * ! Earlier import ReactDOM from "react-dom" was working but in v18 and later we need to import like this -
 * ! import ReactDOM from "react-dom/client";
 *
 * ? Script writting in package.json
 *
 * ! npx parcel index.html -> npm run start || We need to write start script in package.json. We can assume npx = npm run. So we'll replace
 *   parcel index.html with start.
 *
 * ! npx parcel build index.html -> npm run build || We need to write start script in package.json. npx = npm run. So we'll replace
 *   parcel build index.html with build.
 *
 * ! npm start is the shortcut of npm run start.
 *
 * ? Removing console logs from our code -
 *   "babel plugin transform remove console" plugin can be used. --> npm install babel-plugin-transform-remove-console
 *   Need to configure it in .babelrc like this:
 *   {  "plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }] ]}
 *
 * ? Keys in react -
 *  If we have multiple children, we need to use key always in react. Keys should be unique and it helps React from a lot of re-work
 *  while injecting a new child because if there is key , React can directly inject it at the appropriate position otherwise it would
 *  be difficult for it to recognize which child was at which position.
 *
 * ? React.createElement ==> Object ==> HTMLElement(DOM)
 *
 * ? JSX :
 * The main philosphy behind bringing React was to update html easily and in more efficient manner and JSX finally fulfills it.
 * JSX also known as JavsScript XML.
 * We write html inside .js files because of JSX like this : const heading = <h1>Namaste JSX</h1>
 *
 * JSX is a html-like syntax but it is not html inside jasvascript.
 *
 * Babel reads the JSX elements and converts it into React.createElement. Now React.createElement returns an object and object is rendered
 * into HTML DOM. React.createElement ==> Object ==> HTMLElement(DOM).
 *
 * Advantages of JSX :
 *
 * Readibility
 * Developer Experience
 * Syntactical Sugar
 * Easier to write nested html elements.
 *
 *! In JSX, we can't write JS like I have shown below.
 * {
 * let a = 20;
 * console.log(a);
 * }
 *
 * ! But we can write JS expressions like I have shown below:
 * {
 * ((let a = 20), console.log(a);)
 * }
 */

const heading1 = React.createElement(
  "h1",
  { className: "heading1", key: "1" },
  "Hi Guys"
);

//Equivalent code for the heading1 element using JSX.

//This is a JSX expression.
const heading = (
  <h1 className="heading1" key="1">
    Hi Guys
  </h1>
);

console.log(heading1);

const heading2 = React.createElement(
  "h2",
  { className: "heading2", key: "2" },
  "Hello"
);

const container = React.createElement("div", { className: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

/**
 * React Components
 *
 * Name of a component always start with a Capital letter, it is not mandatory but it is a good practice to use. It is like a convention.
 *
 *  - Functional Components - NEW
 *  - Class Based Components - OLD
 *
 *  ? Functional Components :
 *    It is nothing but a normal JS function which returns a react element.
 *
 *    Functional components are called like this. <Header />
 *    But they are end of day a JS function, so they can be called like a function variable {Header()}
 *
 *    Never create a React component inside another React component.
 *
 * ? React State :
 *
 * ! Every component in React maintains a state , and we can put all our variables inside that state. Everytime we need to create a local
 *   variable, we can use state in it.
 *
 * Our React Component re-renders when either a state changes or a props changes
 *
 * ? Hooks :
 *   React Hooks are just like JS functions. Gives us some functionality.
 *   Never ever create a useState inside if-else condition, nor inside any loops.
 *   Never write any useState outside the React component.
 *
 *
 * ? useState :
 *
 *  used to create state variable, comes from React library, and imported using named import.
 *  useState function returns an array and the first array element is the state variable.
 *
 *  If we don't use state variable and some local variable, React will not know that variable has changed, and won't re-render the UI.
 *  React keeps track of all the state variable, so if a state variable changes, React will get to know of it and re-render the UI.
 *
 * ? useEffect :
 *
 * Takes two parameters, one callback function and one dependency array.
 * It's default behaviour is to get called after each render.
 *
 * Used in three ways -
 *
 * ! Without dependency Array -->
 *
 * The callback function will get called after every render or re-render.
 *
 *  useEffect(()=>{
 *   console.log("called on every re-render")
 *  })
 *
 * ! With empty dependency Array
 *
 * The callback function will get called only once after initial render.
 *
 * useEffect(()=>{
 *   console.log("called on every re-render")
 *  },[])
 *
 * ! With some states or props inside dependency Array
 *
 * The callback function will get called after initial render + when the state of the variable inside the dependency array changes.
 *
 * useEffect(()=>{
 *   console.log("called on every re-render")
 *  },[searchText])
 *
 * ? Sequence :
 * At first component will be rendered, after that useEffect would be called. And if anything changes, component will
 * be re-rendered again.
 */

/**
 * ! Micro Services ----->
 *
 * It simply means we are breaking our project into many small independent chunks (repositories) such as Ui, backend, authentication, notification, logs, database.
 *
 * It solves a major problem that the different teams doesn't concern about the whole project. Separate team will take responsibility of their
 * own repository. Like Ui team will take care of UI, backend team will take care of backend, etc.
 *
 * Also, the tech stacks are independent, like frontend built in ReactJS, backend in NodeJS, notifications in golang, logs in python, like this.
 *
 * All of these microservices are connected by different urls, which represents different port number, but the domain name is same.
 * like 4000 --> / , 5000 --> /dapi, 6000 --> /notifications
 *
 *
 */

/**
 * ? Shimmer Effect --> UI
 */

/**
 * There are alot of differences between a normal js function and a hook
 *
 * 1. we can write useState in a hook but not a normal JS function.
 * 2. we can write useEffect in a hook but not a normal JS function.
 * 3. Reconcilliation is there for a hook.
 */
