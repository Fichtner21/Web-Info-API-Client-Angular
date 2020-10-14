export interface AuthRes {
  token: string;
  error?: string; //? -> jeśli będzie, gdyby go nie bylo to zawsze bedziemy oczekiwać token i error
}
