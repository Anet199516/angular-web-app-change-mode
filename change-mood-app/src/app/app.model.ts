export interface ILogin {
  userName: string;
  uid: string;
  isLoginFailed?: boolean;
  errorMessage?: string;
}

export interface ICities {
  cities: any[];
  errorMessage?: string;
}
