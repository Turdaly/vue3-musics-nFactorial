export interface FormState {
  username: string
  email?: string;
  password: string;
}

export interface Account {
  username: string,
  password: string
}

export interface AccountArray {
  data: Array<Account>
}