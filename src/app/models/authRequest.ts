export default class AuthRequest {
  username: string;
  password: string;
  expiration: number;

  constructor(username: string, password: string, expiration?: number) {
    this.username = username;
    this.password = password;
    if (expiration) {
      this.expiration = expiration;
    }
  }
}
