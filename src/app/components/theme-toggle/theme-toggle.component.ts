import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [MaterialModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
  isDarkMode = this.themeService.darkMode;
}
