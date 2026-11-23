import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from './models/person.model';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly personService = inject(PersonService);

  protected readonly people = signal<Person[]>([]);
  protected readonly errorMessage = signal<string | null>(null);

  protected readonly editingId = signal<number | null>(null);
  protected readonly editName = signal('');
  protected readonly editBirthDate = signal('');
  protected readonly editGrade = signal('');

  protected readonly newName = signal('');
  protected readonly newBirthDate = signal('');
  protected readonly newGrade = signal('');

  ngOnInit(): void {
    this.loadPeople();
  }

  protected loadPeople(): void {
    this.errorMessage.set(null);
    this.personService.getAll().subscribe({
      next: (data) => this.people.set(data),
      error: () => this.errorMessage.set('Nem sikerült betölteni az adatokat a szerverről.'),
    });
  }

  protected startEdit(person: Person): void {
    this.errorMessage.set(null);
    this.editingId.set(person.id);
    this.editName.set(person.name);
    this.editBirthDate.set(person.birthDate);
    this.editGrade.set(person.grade);
  }

  protected cancelEdit(): void {
    this.editingId.set(null);
    this.editName.set('');
    this.editBirthDate.set('');
    this.editGrade.set('');
  }

  protected saveEdit(id: number): void {
    const name = this.editName().trim();
    const birthDate = this.editBirthDate();
    const grade = this.editGrade();

    if (!name || !birthDate || !grade) {
      this.errorMessage.set('A név és a születési dátum megadása kötelező.');
      return;
    }

    this.errorMessage.set(null);
    this.personService.update(id, { name, birthDate, grade }).subscribe({
      next: (updated) => {
        this.people.update((list) => list.map((item) => (item.id === id ? updated : item)));
        this.cancelEdit();
      },
      error: () => this.errorMessage.set('Nem sikerült módosítani a rekordot.'),
    });
  }

  protected deletePerson(id: number): void {
    this.errorMessage.set(null);
    this.personService.delete(id).subscribe({
      next: () => {
        this.people.update((list) => list.filter((item) => item.id !== id));
        if (this.editingId() === id) {
          this.cancelEdit();
        }
      },
      error: () => this.errorMessage.set('Nem sikerült törölni a rekordot.'),
    });
  }

  protected addPerson(): void {
    const name = this.newName().trim();
    const birthDate = this.newBirthDate();
    const grade = this.newGrade();

    if (!name || !birthDate || !grade) {
      this.errorMessage.set('A név és a születési dátum megadása kötelező.');
      return;
    }

    this.errorMessage.set(null);
    this.personService.create({ name, birthDate, grade }).subscribe({
      next: (created) => {
        this.people.update((list) => [...list, created]);
        this.newName.set('');
        this.newBirthDate.set('');
      },
      error: () => this.errorMessage.set('Nem sikerült hozzáadni az új rekordot.'),
    });
  }
}
