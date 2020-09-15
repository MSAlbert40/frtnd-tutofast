export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  name: string;
  lastName: string;
  phone: string;
  birthday: Date;
  address: string;
  totalStar: string;
  active: boolean;
  linkedln: string;
}

export class UserPage {
  content: User[];
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  last: boolean;
  size: number;
  first: boolean;
  sort: string;
}
