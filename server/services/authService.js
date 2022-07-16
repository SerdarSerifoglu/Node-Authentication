import BaseService from "./baseService.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

class AuthService extends BaseService {}

export default new AuthService(User);
