# Angular-Lazy-Loading-Feature-Modules

Angular 5 application to demonstrate lazy loading of feature modules via routing.

## Lazy Loading

- Allows us to optimize/speed-up the application by only loading modules when they are needed
- Decreases the startup time. 
- Application does not need to load all modules at once, it only needs to load what the user expects to see 
  when the app first loads. 
- Modules that are lazily loaded will only be loaded when the user navigates to their routes.

## Debug

Open the browser debug window to view the console logging that has been added to the onInit and OnDestory component lifecycle 
hooks so that it can be seen that the modules and components are loaded and destroyed as expected.


## Application

The application contains three modules:

1. App module which is the main application entry point
2. Users module which is loaded when 'Feature Module One' button is clicked. This contains a single child component.
3. Tasks module which is loaded when 'Feature Module Two' button is clicked. This contains nested child routing. Each child route (selecting button labeled 'child component one' or 'child component two') will load a different child component.
