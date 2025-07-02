import connection from "../connection.js";

export const users_data = async (request, response) => {
  try {
    const [data] = await connection.execute("SELECT * FROM users");
    response.json(data); 
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Server error" });
  }
};

export default {
  users_data,
};
