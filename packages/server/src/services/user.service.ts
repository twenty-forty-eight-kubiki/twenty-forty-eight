import { User } from '../models/user.model.js';

export class UserService {
  static async getUserById(id: number) {
    const user = await User.findOne({ where: { id } });

    if (!user) {
      console.log('Доработать ошибку!');
    }

    return user;
  }
}
