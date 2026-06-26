// Beech m jo ye consol log(0-6) kiye h who error dhundne k standard tarika h as in terminal jitna code shi hoga utna consol log chalega baaki knhi chalega tho ye smjh aa jayega ki kha error h

import User from "../models/user.model.js";

export const registerUser = async (req, res, next) => {
  try {
    console.log(0);
    const { fullName, email, phone, gender, dob, password } = req.body;

    console.log(1);

    // Check that any input cannot be empty
    if (!fullName || !email || !password || !phone || !gender || !dob) {
      // res.this.status(400).json({ message: "All fields required" });
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    console.log(2);
    const existingUser = await User.findOne({ email }); // Check existing email
    if (existingUser) {
      // res.status(409).json({ message: "Email Already Exists" });
      // return;
      const error = new Error("Email Already Exists");
      error.statusCode = 400;
      return next(error);
    }

    console.log(3);
    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    console.log(4);
    const photo = {
      url: photoUrl,
      publicId: null,
    };

    console.log(5);
    const newUser = await User.create({
      fullName,
      email,
      phone,
      gender,
      dob,
      password,
      photo,
    });

    console.log(6);
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log(error.message);
    next();
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || password) {
      const error = new Error("All fields Required");
      error.statusCode(400);
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not Registered");
      error.statusCode(400);
      return next(error);
    }

    if (password !== existingUser.password) {
      const error = new Error("Inavalid Password");
      error.statusCode(401);
      return next(error);
    }
    res.status(200).json({ message: "Welcome Back", data: existingUser });
  } catch (error) {
    console.log(error.message);
    next();
  }
};

export const logoutUser = async (req, res) => {
  res.json({ message: "Logout Successfull from Controller" });
};
