import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjectInfos } from '../interfaces/project-infos.interface';
import { Observable, map } from 'rxjs';
import { parse } from 'papaparse';

const URL_PROJECTS_INFOS = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ35JqaEUKG0iBA9w5WlEEZfNivsAuESKf4Ou5RvElVzcZeTc_zpFTouYT6ZwX4o8uar_KbMt-B6E6u/pub?gid=0&single=true&output=csv';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjectsFromCSV(): Observable<IProjectInfos[]> {
    return this.http.get(URL_PROJECTS_INFOS, { responseType: 'text' }).pipe(
      map(csv => {
        const parsed = parse(csv, {
          header: true,
          skipEmptyLines: true,
        });
        return parsed.data as IProjectInfos[];
      })
    )
  }



}
