import { Component } from '@angular/core';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.scss',
})
export class BoardsComponent {
  redirectToWelcome() {
    window.location.href = '/';
  }
  redirectToTasks() {
    window.location.href = '/tasks';
  }
}
