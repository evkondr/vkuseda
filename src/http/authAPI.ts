import { httpRequest } from '.';

export const userLogin = async (login:string, password:string) => {
  const resp = httpRequest.post('api/auth/login', {
    login,
    password,
  });
  return resp;
};
export const registration = async (login:string, email: string, password:string) => {
  const resp = httpRequest.post('api/auth/registration', {
    login,
    email,
    password,
  });
  return resp;
};
