import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer as DomSanitizerType } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule
  ]
})
export class MaterialModule {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizerType
  ) {
    this.iconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
    this.iconRegistry.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );

  }

}
