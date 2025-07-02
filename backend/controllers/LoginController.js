import jwt from "jsonwebtoken";
import connection from "../connection.js";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login request received:", req.body);

  try {
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Email not found" });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { userid: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "3h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Set more secure in production
      sameSite: "Lax",
      maxAge: 3 * 60 * 60 * 1000,
    });

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Backend login error:", error);
    return res.status(500).json({ message: "Server error from backend" });
  }
};


export default {login}