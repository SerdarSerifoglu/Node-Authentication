import BaseService from "./baseService.js";
import User from "../models/User.js";

class UserService extends BaseService {
  async test() {
    return "Test Working";
  }
}

export default new UserService(User);
