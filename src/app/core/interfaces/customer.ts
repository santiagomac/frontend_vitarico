export interface Customer {
  id: number;
  name: string;
  lastname: string;
  email: string;
  document: string;
}

export interface CustomerToSave{
  name: string;
  lastname: string;
  email: string;
  document: string;
}
