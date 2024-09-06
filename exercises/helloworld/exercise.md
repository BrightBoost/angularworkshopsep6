**Exercise 1: Hello World Application in Angular**

**Objective:** You will create a basic Angular application and make simple modifications to the HTML template, the component's stylesheet, and a variable within the TypeScript file.

**Steps:**

1. **Start a New Angular Project:**
   - Go to [StackBlitz](https://stackblitz.com/).
   - Click on "Start a New Workspace" and select Angular.
   - This will create a new Angular project with a default "Hello World" template.

2. **Modify HTML:**
   - In the `app` folder, locate and open the `app.component.html` file.
   - You will see a default template. Change the content within the `<h1>` tags to "Welcome to Our Angular App!".

3. **Modify CSS:**
   - Now, open the `app.component.css` file.
   - Add a new style for the `<h1>` tag to change its color. For example:
     ```css
     h1 {
       color: blue;
     }
     ```

4. **Modify a TypeScript Variable:**
   - Open the `app.component.ts` file.
   - You'll see a `title` variable within the `AppComponent` class. Change its value from 'my-app' to 'My First Angular App'.
   - Go back to `app.component.html` and replace "Welcome to Our Angular App!" with `{{ title }}` within the `<h1>` tags. This change will display the value of the `title` variable.

5. **Preview Your Application:**
   - The application preview on the right should automatically update with every change you make.
   - You should now see your heading in blue color displaying "My First Angular App".

