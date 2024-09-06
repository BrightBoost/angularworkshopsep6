**Demo 3: Component Demo**
1. Open your terminal in the `hello-world-app` directory (or navigate to it if you're elsewhere).
2. Create a new component by running:
   ```
   ng generate component custom-greeting
   ```
3. Navigate to `src/app/custom-greeting/custom-greeting.component.ts`. Inside the `CustomGreetingComponent` class, add a new property `greeting: string = 'Welcome to the Angular World!';`.
4. Open `src/app/custom-greeting/custom-greeting.component.html` and replace its content with the following:
   ```
   <p>{{ greeting }}</p>
   ```
5. Now, we need to use this new component in our main app. Open `src/app/app.component.html` and add the following tag:
   ```
   <app-custom-greeting></app-custom-greeting>
   ```
   This tag represents your `CustomGreetingComponent`.
6. Save all files and return to your terminal. If your server is not running, execute `ng serve -o`. If it's already running, it should automatically recompile.
7. In the browser, you should now see the custom greeting displayed below the previous demo's content.

