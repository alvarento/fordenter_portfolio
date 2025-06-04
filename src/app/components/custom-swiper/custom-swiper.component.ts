import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { projectsListMock } from '../../mocks/projects.mock';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { IProjectInfos } from '../../interfaces/project-infos.interface';
import { ProjectService } from '../../services/project.service';
import { NgOptimizedImage } from '@angular/common';
import { LoadingDotsComponent } from '../loading-dots/loading-dots.component';

register()

@Component({
  selector: 'app-custom-swiper',
  imports: [
    CommonModule,
    ProjectCardComponent,
    LoadingDotsComponent,
    NgOptimizedImage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './custom-swiper.component.html',
  styleUrl: './custom-swiper.component.scss'
})
export class CustomSwiperComponent implements OnInit {

  constructor(
    private projectService: ProjectService) { }

  projectsList: IProjectInfos[] = [];
  isLoading: boolean = true;
  // projectsList: IProjectInfos[] = projectsListMock;

  swiperElement = signal<SwiperContainer | null>(null)
  ngOnInit(): void {
    const swiperElementConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      spaceBetween: 15,
      pagination: true,
      navigation: true,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1100: {
          slidesPerView: 3
        },
        1400: {
          slidesPerView: 3
        },
        1500: {
          slidesPerView: 4
        }
      }
    };
    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();

    this.isLoading = true;
    this.projectService.getProjectsFromCSV().subscribe({
      next: data => {
        this.projectsList = data;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
