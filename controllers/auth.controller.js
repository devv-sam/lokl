import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  // Hash the password
  const hashPassword = await bcrypt.hash(password, 10);

  console.log(hashPassword);

  // Save the user to db
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashPassword,
    },
  });
  console.log(newUser);
};

export const login = (req, res) => {
  //db oiperations
};

export const logout = (req, res) => {
  //db oiperations
};
