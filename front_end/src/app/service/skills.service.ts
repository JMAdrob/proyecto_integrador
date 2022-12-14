import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.apiServerUrl}/skills/todo`);
  }

  public addSkills(skills: Skills): Observable<Skills> {
    return this.http.post<Skills>(
      `${this.apiServerUrl}/skills/crear`,
      skills
    );
  }

  public updateSkills(skills: Skills): Observable<Skills> {
    return this.http.put<Skills>(
      `${this.apiServerUrl}/skills/actualizar`,
      skills
    );
  }

  public deleteSkills(skillsId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/skills/borrar/${skillsId}`
    );
  }
}
