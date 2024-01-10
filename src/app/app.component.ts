import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './views/intro/intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'benjamin gonzalez - dev front-end';
}
