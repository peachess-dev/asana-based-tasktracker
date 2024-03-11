import { Routes } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { BoardsComponent } from './components/boards/boards.component';
import { TasksComponent } from './components/tasks/tasks.component';

export const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'boards', component: BoardsComponent },
  { path: 'tasks', component: TasksComponent },
];
