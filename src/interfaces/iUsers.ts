interface IUsers {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUserId {
  id?: number;
  userId: number;
}

export default IUsers;