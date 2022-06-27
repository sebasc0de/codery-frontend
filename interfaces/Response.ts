export interface Response {
  msg: string;
}

export interface AuthResponse extends Response {
  avatar: string;
  id: string;
  suscription: string;
  token: string;
  email: string;
}
