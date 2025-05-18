import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-project-card',
  imports: [MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  title = input<string>('');
  description = input<string>('');
  image = input<string>('images/project_default_capa.png');
  demoLink = input<string | undefined>(undefined);
  codeLink = input<string | undefined>(undefined);
  tooltipInfo = input<string>('');

  openLink(url?: string) {
    if (!url) return;
    window.open(url, '_blank');
  }

  setDefaultImage(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = '/images/project_default_capa.png';
  }
}
