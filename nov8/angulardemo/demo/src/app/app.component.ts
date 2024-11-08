import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'andere waarde';
  hobby = 'programmeren';
  pets = ['Zia', 'Lynn', 'Lara'];
  newPet = '';

  addPet() {
    this.pets.push(this.newPet);
    this.newPet = '';
  }
}
