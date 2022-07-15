import BaseService from "./baseService.js";
import User from "../models/User.js";

class AuthService extends BaseService {
  async signup(data) {
    console.log("data", data);
    return data;
  }
}

export default new AuthService(User);
