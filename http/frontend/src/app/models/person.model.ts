export interface Person {
  id: number;
  name: string;
  birthDate: string;
}

export type PersonPayload = Omit<Person, 'id'>;
