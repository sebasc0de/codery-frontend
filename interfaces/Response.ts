export interface Response {
  errors?: ExpressError[];
}

export interface ExpressError {
  location: string;
  msg: string;
  param: string;
  value: string;
}

export interface AuthResponse extends Response {
  avatar: string;
  id: string;
  suscription: string;
  token: string;
  email: string;
}
