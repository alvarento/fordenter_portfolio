import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { NgOptimizedImage } from '@angular/common';
import { TimeLineComponent } from '../time-line/time-line.component';

@Component({
  selector: 'app-about',
  imports: [MaterialModule, NgOptimizedImage, TimeLineComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
