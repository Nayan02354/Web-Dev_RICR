import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, phone, gender, dob, password } = req.body;

    // Check that any input cannot be empty
    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.this.status(400).json({ message: "All fields required" });
      return;
    }
    const existingUser = await User.findOne({ email }); // Check existing email
    if (existingUser) {
      res.status(409).json({ message: "Email Already Exists" });
      return;
    }
    // Create new user and complete registration
  } catch (error) {}
};

export const loginUser = (req, res) => {
  res.json({ message: "Login Successfull from Controller" });
};

export const logoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from Controller" });
};
