import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, PersonPayload } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/api/people';

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  create(payload: PersonPayload): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, payload);
  }

  update(id: number, payload: PersonPayload): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
