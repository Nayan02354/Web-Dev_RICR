// Beech m jo ye consol log(0-6) kiye h who error dhundne k standard tarika h as in terminal jitna code shi hoga utna consol log chalega baaki knhi chalega tho ye smjh aa jayega ki kha error h

import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    console.log(0);
    const { fullName, email, phone, gender, dob, password } = req.body;

    console.log(1);

    // Check that any input cannot be empty
    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.this.status(400).json({ message: "All fields required" });
      return;
    }

    console.log(2);
    const existingUser = await User.findOne({ email }); // Check existing email
    if (existingUser) {
      res.status(409).json({ message: "Email Already Exists" });
      return;
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
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginUser = (req, res) => {
  res.json({ message: "Login Successfull from Controller" });
};

export const logoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from Controller" });
};
