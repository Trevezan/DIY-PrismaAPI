import { User } from '@prisma/client';

export class UsersEntity implements User {
  name: string;
  email: string;
  password: string;
  id: number;
}
