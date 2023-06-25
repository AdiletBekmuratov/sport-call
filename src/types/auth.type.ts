export interface IToken {
  token: string;
}

export interface IAuth {
  token?: IToken;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}

export type User = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  driverLicense?: string;
  profileImage?: string;
  status: 'disabled' | 'pending' | 'enabled';
  createdAt: string;
  updatedAt: string;
};
