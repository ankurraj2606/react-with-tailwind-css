import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hi Ankur</h1>;

const myNumber = 10;

const HeaderComponent = () => {
  return (
    <div>
      <h1>Namaste React Functional Components</h1>
      <h2>Hi All</h2>

      {/* Calling Functional components */}
      <Content />

      {/* Calling React Elelment */}
      {heading}

      {/* Calling Functional components */}
      {Content()}
      {myNumber}
    </div>
  );
};

const Content = function () {
  return (
    <div>
      <h1>Content</h1>
      <h2>Book</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);

/**
 * If we are writing return statement in a single-line, we can skip paranthesis but paranthesis is mandatory if we are writing return
 * statement in multiple lines.
 *
 * We can skip return if we want if we are using arrow function in a functional component.
 * We can write any JS inside {} in a React Component. Like {console.log("Hi")}
 *
 * Whenever we add any JS inside JSX, JSX sanitizes it and prevents us from malicious attacks.
 *
 * <Component /> --> Component composition. It is simply using components inside another components, passing components inside components.
 *
 * ? React.Fragment
 *
 * React.Fragment is a component exported by React.
 * It is used to avoid un-necessary divs.
 * React JSX can only have one parent.
 * React.Fragment is like an empty tag. In short <React.Fragment> Hi </React.Fragment> --> <> Hi </>
 *
 *
 * ? Props :
 *
 * <RestaurantCard restaurant={RestaurantList[0]} />
 *
 * Here "restaurant={RestaurantList[0]}" is called props. Passing props means passing some data or properties inside my child component
 * from the parent component.
 * 
 * props.restaurant can be destructured like {restaurant}
 * 
 * ! Examples below
 * 
 * const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${RestaurantList[1].data?.cloudinaryImageId}`}
      />
      <h2>{props.restaurant.data?.name}</h2>
      <p>{props.restaurant.data?.cuisines.join(",")}</p>
      <p>
        {props.restaurant.data?.avgRating} (
        {props.restaurant.data?.totalRatings})
      </p>
    </div>
  );
};

const RestaurantCard = ({restaurant}) => {
  console.log(props);
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${RestaurantList[1].data?.cloudinaryImageId}`}
      />
      <h2>{restaurant.data?.name}</h2>
      <p>{restaurant.data?.cuisines.join(",")}</p>
      <p>
        {restaurant.data?.avgRating} (
        {restaurant.data?.totalRatings})
      </p>
    </div>
  );
};
 *
 */

/**
 * ! map is the best way to run loops in functional programming
 *
 * ? virtual DOM (vDOM)
 *
 *  vDOM is not only in react , it is Software eng. concept.
 *  Representation of our real DOM is virtual DOM.
 *  Helps in reconsiliation in React.
 *  Tree-like representaion of DOM
 *
 * ? Reconciliation :
 *  It is an algorithm used by React to find the difference between the dom trees(diffing algorithm). (Real DOM and vDOM)
 *
 *  The algorithm React uses to diff one tree with another to determine which parts need to be changed.
 *
 *  The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and
 *  synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
 *
 * ? React Fiber :
 *
 *  Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.
 *
 *  The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature
 *  is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.
 *  Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign
 *  priority to different types of updates; and new concurrency primitives.
 *
 *  React diff algorithms is written in React core library.
 *  DOM manipulation and DOM updates happens through React DOM library.
 *  React Native also uses the same diff algorithm.
 *
 *
 * ? File imports and exports :
 *
 *  ! default imports
 *
 *  If we are exporting a component like this : " export default Header " ----> we can import simply like :
 *  import Header from "./src/Header";
 *
 *  ! named imports
 *
 *  But if we are not using default, like " export const Header = () => {return <div>Hi</div>} " or export Header; , then we need to
 *  import like this : import {Header} from "./src/Header"
 *
 * ! while exporting a component by default import , we can rename the file while importing but it is not possible in named imports.
 *   Eg. " export default Header  " can be imported as " import HeaderCOmponent from "./src/Header ";
 *
 */

/**
 * ? react-router-dom :
 * 
 * Used for handling routing between the pages in the react or react-native application
 * 
 * ! 1. Need to install the npm package of react-router-dom : npm i react-router-dom
 *   2. Import th required things : import { createBrowserRouter, RouterProvider } from "react-router-dom";
 *   3. Always create the variable for calling the createBrowserRouter below youe App component.
 *   3. create a variable that would call the function createBrowserRouter.
 *          const appRouter = createBrowserRouter([
 *            {
                path: "/",
                element: <App />,
                errorElement: <Error />,
                children: [
                  {
                    path: "/about",
                    element: <About />,
                  },
                  {
                    path: "/contact",
                    element: <Contact />,
                  },
                  {
                    path: "/",
                    element: <Body />,
                  }
                ],
              }
 *          ])

    Here, the path will tell you on which path in address bar which component will come.
    element will have the component that will come on respective path.
    errorElement will tell us what component will come if the path user has added is not there in our app.
    children will show what are the children components are there of the main App.
    while path is changed, only the children components will change, others will remain there only.
    There will be an Outlet in the App , where the children components get injected by react in case of routing.
    Outlet also needs to be imported from react router dom. It is just like a placeholder or container.
    In react router dom, we mainly use named imports only, inside curly braces {}. Example below:

    import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

    const App = () => {
      return (
        <>
          <HeaderComponent />
          <Outlet/>
          <Footer />
        </>
      );
    };


  Finally it is time to link the links that we have created inside the header component with the path and it should 
  work seamlessly.

  import {Link} from "react-router-dom".

  After that wrap all the link items inside Link, corresponding to their paths. Like this.

          <Link to="/">
            <li className="list-items">Home</li>
          </Link>
          <Link to="/about">
            <li className="list-items">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="list-items">Contact Us</li>
          </Link>
          <Link to="">
            <li className="list-items">Cart</li>
          </Link>


 When we are creating error component to be shown in case of wrong path, the component should be declared first and
 then exported, otherwise will throw error , like this :

        import { useRouteError } from "react-router-dom";
        const Error = () => {
          const err = useRouteError();
          console.log(err);
          return (
            <div className="error-container">
              <h1>OOPS, Something broke from your side.................</h1>
              <h2>{err.data}</h2>
              <p>{err.status + " " + err.statusText}</p>
            </div>
          );
        };

        export default Error;

  Here we have imported useRouteError, which gives us all the details of the routing error. We can create a variable
  calling useRouteError, and then use it to render the error on the UI like shown above.

  useRouteError only works with createBrowserRouter.


 */

/**
 * ! Modular
 *
 * Means code is broken into small, reusable pieces
 */

/**
 * Chunking
 * Code splitting
 * Lazy Loading
 * On demand loading
 * Dynamic Bundling
 * Dynamic Import
 */

/**
 * ? Ways of writing CSS : 
 * 
 * 1. Normal Native CSS in css file.
 * 2. SCSS
 * 3. Inline CSS
 * 4. Component Libraries or CSS libraries like Material UI, Bootstrap, Chakra UI, Ant Design UI, etc.
 * 5. Styles components
 * 6. Tailwind CSS framework.
 * 
 * 
 * ! when we write inline styles in React , we use "style" attribute, and this style attribute takes a JS object.
 * 
 * We write JS inside React in {}. So, first curly braces is for writing JS and the next {} is of the syntax of style object.
 * we write like : 
 * 
 * <input style = {{backgroundColor:"red"}} />
 * 
 * Or, we can make an style object like this : inputStyle = { backgroundColor:"red" } . And we can use this obj inside the
 * style attribute like this : 
 * 
 * <input style = { inputStyle } />
 * 
 */

/**
 * ? Pros of using CSS libraries or framework : 
 * 
 * -> Makes our app development fast, and easy to code.
 * -> Makes our UI look consistent.
 * -> Takes care of device responsiveness.
 * 
 * 
 * ? Cons of using CSS libraries or framework : 
 * 
 * -> Increases our bundle size
 * -> We lose a lot of control over how our ui will  look like. Customization is very hard.
 */
