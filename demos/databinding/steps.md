**Demo 2: Data Binding**
1. Assuming you're continuing from the previous demo, stay in the `hello-world-app` project.
2. Open `src/app/app.component.ts`, and add a new property `name: string = 'Angular';` in the AppComponent class.
3. Open `src/app/app.component.html` and modify its content to the following:
   ```
   <input [(ngModel)]="name" type="text">
   <h2>Hello, {{name}}!</h2>
   ```
   Here, `[(ngModel)]` is used for two-way data binding.
4. Since we're using `ngModel`, we need to import `FormsModule` in our application module. Open `src/app/app.module.ts` and do the following:
   - Add `import { FormsModule } from '@angular/forms';` at the top with other imports.
   - Add `FormsModule` to the `@NgModule` imports array.
5. Save all files and return to your terminal. If your server is not running, execute `ng serve -o` to run the app. If it's already running, it should automatically recompile.
6. In the browser, you should see an input field. Type in the field, and you'll see that the `<h2>` content updates in real time with whatever you type.
