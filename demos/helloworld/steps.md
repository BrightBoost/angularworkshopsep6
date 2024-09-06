**Demo 1: Hello World**
1. Open your terminal or command prompt.
2. Create a new Angular project by running:
   ```
   ng new hello-world-app
   ```
   Follow the prompts, you can choose the default settings for a quick setup.
3. Navigate into your new project:
   ```
   cd hello-world-app
   ```
4. Open the project in your preferred code editor.
5. Navigate to `src/app/app.component.ts`, and modify the `title` property in the AppComponent class to "Hello World from Angular!".
6. Now, open `src/app/app.component.html` and replace its content with the following:
   ```
   <h1>{{ title }}</h1>
   ```
7. Go back to your terminal, ensure you're in the project directory, and launch the application:
   ```
   ng serve -o
   ```
   This compiles the application and opens it in your default web browser. You should see "Hello World from Angular!" displayed.
