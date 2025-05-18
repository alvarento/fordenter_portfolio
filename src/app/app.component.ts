import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomSwiperComponent } from './components/custom-swiper/custom-swiper.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from './material/material.module';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  imports: [
    CustomSwiperComponent,
    AboutComponent,
    MaterialModule,
    ThemeToggleComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {};