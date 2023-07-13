export type Sex = 'm' | 'w';

export interface UserInterface {
  lastName: string;
  firstName: string;
  age: number;
  sex: Sex;
  email: string;
}
