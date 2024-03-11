import { Component } from '@angular/core';
import { AngMaterialModule } from '../../modules/ang-material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AngMaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  redirectToBoards() {
    window.location.href = '/boards';
  }
}
