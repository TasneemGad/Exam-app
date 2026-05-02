interface Login {
  username: string;
  password: string;
}
 interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  role: 'USER' | 'ADMIN';
}

 interface AuthPayload {
  user: User;
  token: string;
}

 interface AuthResponse {
  status: boolean;
  code: number;
  payload: AuthPayload;
}
