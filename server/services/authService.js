import BaseService from "./baseService.js";
import User from "../models/User.js";
import UserService from "./userService.js";
import { createError } from "../utils/error.js";
class AuthService extends BaseService {
  async signIn(name, password) {
    const user = await UserService.getUserWithPassword(name);
    if (!user) return createError(403, "Error Test");

    const passOk = await user.comparePassword(password);
    if (!passOk) return createError(403, "Error Test");

    const returnUser = await this.find(user._id);
    return returnUser;
  }
}

export default new AuthService(User);
