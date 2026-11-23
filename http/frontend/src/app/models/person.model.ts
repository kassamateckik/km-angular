export interface Person {
  id: number;
  name: string;
  birthDate: string;
  grade: string;
}

export type PersonPayload = Omit<Person, 'id'>;
