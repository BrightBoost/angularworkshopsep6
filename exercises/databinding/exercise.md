**Exercise 2: Interactive Form with Data Binding**
*Objective:* You will create a simple form that takes input and uses data binding to display the form data. As a bonus, they will use `*ngIf` to conditionally show/hide a section and `*ngFor` to display a list.

1. In your "my-website" project, generate a new component named "interactive-form":
   ```
   ng generate component interactive-form
   ```
2. In `interactive-form.component.ts`, define a model for your form (e.g., `userData`) with a name and email.
3. In `interactive-form.component.html`, create a form that takes a name and an email. Use `[(ngModel)]` for two-way data binding to your `userData` model.
4. Below the form, display the user's name and email using data binding.

**Bonus: (use Google)**
5. *Bonus with `*ngIf`:* Add a button outside your form that toggles a boolean variable `showDetails` in your component. Use `*ngIf` with this variable to conditionally display the user's details.
6. *Bonus with `*ngFor`:* In your component, create an array of user objects. In your template, add a button that adds the current form's data to this array. Use `*ngFor` to display each user's details in a list.

*Note:* `*ngIf` is a structural directive that conditionally adds or removes content from the DOM based on whether the expression is true or false. `*ngFor` is another structural directive that repeats a portion of the DOM tree once per each item from an iterable list.
