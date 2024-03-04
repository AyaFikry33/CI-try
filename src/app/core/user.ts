export interface User {
  email: string;
  password: string
}

export interface LoginRes {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  token: string
}
