**Exercise 3: Building Basic Components**
*Objective:* Create a new Angular application and add three components: a header, a footer, and a main content area.

1. Create a new Angular project named "my-website" using the command:
   ```
   ng new my-website
   ```
2. Navigate into your project directory:
   ```
   cd my-website
   ```
3. Generate a new component named "header" using the command:
   ```
   ng generate component header
   ```
4. Repeat the process to create two more components named "footer" and "main-content":
   ```
   ng generate component footer
   ng generate component main-content
   ```
5. In each component's HTML file, add content relevant to the part of the website it represents. For example, in `header.component.html`, you might add:
   ```html
   <header>
     <h1>Welcome to My Website</h1>
   </header>
   ```
6. Open `app.component.html` and use the selectors from your components to arrange them appropriately. Your file might look like this:
   ```html
   <app-header></app-header>
   <app-main-content></app-main-content>
   <app-footer></app-footer>
   ```
7. Run your application with `ng serve --open` and observe the structure of your basic webpage with a header, main content, and footer.
