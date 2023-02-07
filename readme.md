1.  What is Emmet ?

        Emmet is an amazing tool that helps us to write HTML and CSS faster by using simple and small abbreviations that are afterwards converted into code blocks.

        Eg. div>p will be converted into : <div><p></p></div>

2.  Difference between a library and a Framework?

        Both Libraries and Frameworks are reusable code written by someone else to help solve common problems.

        A Library is like going to a furniture shop and shopping for our home that is already built while A Framework is like building a new home and you have a set of blueprints and a few limited choices when it comes to architecture and design.They will let you know when and where you can provide the input.

        The Technical difference between a library and framework lies in the term called inversion of control.

        When we are using a library, we are in-charge of flow of application.We will choose when and where to call the library. But, when we are using a framework, the framwork is the in-charge of the flow. It provides us some places to add our code but it calls the code we added whenever needed.

3.  What is CDN? Why do we use it?

        Content Delivery Network (CDN) refers to a network of geographically distributed group of servers which work together to provide fast delivery of internet content.

        A CDN allows for a quick transfer of assets needed for loading internet content including html pages, js files, stylesheets, images and videos, etc. Today majority of web traffic is served through CDN.

        Advantages of using CDN are - 
            * Improves website load time
            * Reduces Bandwidth costs
            * Increases content availability and redundancy
            * Improving website security

4.  Why is React known as React?

    React behaves in a very nice way when there are changes in data.

        In a traditional JS Application, we needed to keep track of data changes and need to imperativey update the DOM to keep it up-to-date. Even AngularJS, provides a declarative interface via directives and data binding requires a linking function to manually update DOM nodes.

        But, React works in a different way. When your component is first initialized, the render method is called, generating a lightweight representation of your view. From that representation, a string of markup is produced, and injected into the document. When your data changes, the render method is called again. In order to perform updates as efficiently as possible, we diff the return value from the previous call to render with the new one, and generate a minimal set of changes to be applied to the DOM. The data returned from render is neither a string nor a DOM node — it’s a lightweight description of what the DOM should look like.We call this process reconciliation.

        Because this re-render is so fast (around 1ms for TodoMVC), the developer doesn’t need to explicitly specify data bindings.

        React itself reacts to the changes in data, updates the DOM on its own if it sees any changes after comparision or reconciliation, that's why it is named as React.

5.  What is crossorigin in script tag?

        The crossorigin attribute sets the mode of request to an HTTP CORS request.
        Web servers often makes request to load resources on other servers, That is where CORS comes in.
        CORS stands for cross origin resource sharing.

        A crossorigin request is a request for a resource (eg, images, videos, stylesheets, etc...) from another domain. CORS is used to manage crossorigin requests.  is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

        crossorigin attribute has three values : 
            * anonymous - A cross-origin request is performed. No credentials are sent
            * use-credentials - A cross-origin request is performed. Credentials are sent (e.g. a cookie, a certificate, a HTTP Basic authentication)
            * "" - Setting the attribute name to an empty value, like crossorigin or crossorigin="", is the same as anonymous.

6.  What is diference between React and ReactDOM?

        React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.

        There are some similarities between DOM and React. Both are made up of nodes. DOM is made up of DOM nodes/elements and React is made up of React nodes/elements. Both look exactly the same, but they are quite different.

        React comes with a method to create the React element whereas ReactDOM comes with method to render the elements on the UI.
        Eg. React.createElement("div",null,"Hii);
            ReactDom.render(element, document.getElementById("root"));

        React is the core package but react-dom is used to manipulate DOM.

7.  What is difference between react.development.js and react.production.js files via CDN?

        The development versions are not suitable for production. Production versions are more like minified and optimized versions of the react app.

8.  What is async and defer?

        There are three types in which we can load our scripts:
          So when a browser loads a webpagve, At first the html parsing is done.

            * <script src="index.js"></script>
                In this mode when html parsing is happening and browser detects a script tag, in the normal scenario, the browser will pause the html parsing and fetch the script from the network, and when it is done, browser will executes it and after the script is executed only then html parsing resumes.
                The major problem is that rendering of html is getting blocked by scripts.

            * <script async src="index.js"></script>
                In this mode the script is fetched in parallel with html parsing asynchronously and as soon as it is fetched, html parsing pauses, script is executed then and there and after execution of script html parsing continues.
                In this case also, script is hindering html parsing resulting in making the webpage slow.

            * <script defer src="index.js"></script>
                In this case also, during html parsing only script is getting fetched from the network asynchronously in parallel, but here html parsing is not blocked. Here thge script execution is only started after html parsing is fully complete.
                It doesn't blocks the html parsing.

          * Async doesn't take care of the order of execution of scripts but defer does. Defer executes the script tags only in the order they are written. So, we need to use defer if one script is dependent on other.

9.      What is package-lock.json?

        package-lock.json locks the dependencies version that r used in the project, Never put it inside .gitignore.

        It keeps the exact version of dependencies. It keeps the hash version inside integrity object.

*       npx means execute using npm

*       Hot module reloading (HMR)

*       File watcher algorithm (C++)

*       dist is developer build

10. What is a Bundler ?

        Bundler works in a simple way, you can give it any files like stylesheets ( scss, sass, less, stylus ), image files, fonts,
        JS files, and they will assemble them in a seamless way, so that they will work perfectly in production.
        It will compile our CSS preprocessors.