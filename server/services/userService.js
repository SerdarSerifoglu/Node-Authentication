import BaseService from "./baseService.js";
import User from "../models/User.js";

class UserService extends BaseService {
  async test() {
    return "Test Working";
  }
  async getUserWithPassword(name) {
    var user = await User.findOne({ name }).select("+password");
    return user;
  }
}

export default new UserService(User);
