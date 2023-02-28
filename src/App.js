import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { Suspense } from "react";
import Shimmer from "./components/Shimmer";

/**
 * This is the normal way to import Instamart in our app.
 * !import Instamart from "./components/instamart/Instamart";
 *
 * But if we want to lazy load Instamart , or do Dynamic Bundling , then there is another way to import a component,
 * here Instamart. Like this -->
 * !import {lazy} from 'react';
 * !const Instamart = lazy(() => import("./components/instamart/Instamart.js"));
 *
 * When there is lazy loading, the component that React is trying to render is not even there at first, so React will
 * try to suspend the operation till that component is loaded. The component takes some time (some ms) to get loaded
 * but React tries to load it before that . That's why it can throw an error, as the component is not available till then.
 *
 * So, React provides us a way to fix this issue, It gives us something known as "Suspense".
 * !import {Suspense} from 'react';
 *
 * We'll wrap our component inside Suspense like this : <Suspense> <Instamart/> </Suspense>
 * So, suspense will take care that the component will get loaded properly and wouldn't throw an error.
 *
 * Now, if we wrap our component inside Suspense, React will know that this component would be lazy loaded and will
 * take care of that component in a different fashion. Now, React will wait for the promise to get resolved and then it
 * will load the component that is getting lazy-loaded.
 *
 * ?const Instamart = lazy(() => import("./components/instamart/Instamart.js"));
 *
 * Here in the above line where Instamart is getting lazy-loaded, import is a promise. When this promise will get resolved
 * then only React will try to load Instamart component.
 *
 * So when there is Suspense, React knows that this component will be lazy-loaded. So, the React component takes a prop
 * known as "fallback" , in which we can pass whatever we need to show until and unless that component is available.
 *
 * !<Suspense fallback={<Shimmer/>} > <Instamart/> </Suspense>
 *
 * ALways lazy load any component at the top of a component where we import our omponents as lazy loading is somewhat
 * like importing our component dynamically. And if we lazy load a component inside another component then it will lazy
 * load the component after every render, and will make the app very slow.
 */

const Instamart = lazy(() => import("./components/Instamart.js"));

/**
 * Chunking
 * Code splitting
 * Lazy Loading
 * On demand loading
 * Dynamic Bundling
 * Dynamic Import
 */

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // Path should be about and not "/about"  // parentPath/{path} --> localhost:1234/about
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
