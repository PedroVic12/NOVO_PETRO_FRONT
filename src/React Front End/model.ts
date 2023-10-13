// model.ts

export interface User {
    id: number;
    name: string;
    age: number;
  }
  
  export const getUser = (): User => ({
    id: 1,
    name: 'John Doe',
    age: 30
  });
  