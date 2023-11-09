import bcrypt from "bcrypt";

export class PassService {
  static async generateHash(password: string) {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  }

  static async checkPassword(password: string, hash: string) {
    const match = await bcrypt.compare(password, hash);
    return match;
  }
}
