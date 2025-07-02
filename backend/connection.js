import mysql2 from "mysql2/promise";

const connection = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "modular",
  connectionLimit: 18,
});

// Async function to check connection
(async () => {
  try {
    const conn = await connection.getConnection();
    console.log("Great mysql2 is connected");
    conn.release();
  } catch (err) {
    console.log("Error: mysql2 not connected", err);
  }
})();

export default connection;
