import bcrypt from "bcryptjs";
import connection from "../connection.js";


const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if email exists
        const [existing] = await connection.execute("SELECT * FROM users WHERE email = ?", [email]);
        if (existing.length > 0) {
            return res.json({ message: "Email already exists" });
        }

        // Hash password
        const hash = await bcrypt.hash(password, 10);

        // Insert user
        await connection.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hash]
        );

        return res.json({ message: "Registered successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};

export default { register };