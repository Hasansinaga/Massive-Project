const pool = require("./database");
const bcrypt = require("bcryptjs");

const createTables = async () => {
  try {
    // Tabel admin
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admin (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      )
    `);

    // Tabel seller
    await pool.query(`
      CREATE TABLE IF NOT EXISTS seller (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        phone VARCHAR(15),
        address TEXT,
        status ENUM('active', 'inactive') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Tabel kategori_pupuk
    await pool.query(`
      CREATE TABLE IF NOT EXISTS kategori_pupuk (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nama VARCHAR(100) NOT NULL UNIQUE
      )
    `);

    // Tabel pupuk
    await pool.query(`
      CREATE TABLE IF NOT EXISTS pupuk (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nama VARCHAR(100) NOT NULL,
        deskripsi TEXT,
        harga DECIMAL(10, 2) NOT NULL,
        gambar VARCHAR(255),
        kategori_id INT NOT NULL,
        FOREIGN KEY (kategori_id) REFERENCES kategori_pupuk(id) ON DELETE CASCADE
      )
    `);

    console.log("Database tables created or already exist.");
  } catch (err) {
    console.error("Error creating tables:", err.message);
  }
};

const seedAdmin = async () => {
  const username = "admin";
  const password = await bcrypt.hash("password", 10);

  try {
    const [rows] = await pool.query("SELECT * FROM admin WHERE username = ?", [
      username,
    ]);
    if (rows.length === 0) {
      await pool.query("INSERT INTO admin (username, password) VALUES (?, ?)", [
        username,
        password,
      ]);
      console.log("Admin account seeded.");
    } else {
      console.log("Admin account already exists.");
    }
  } catch (err) {
    console.error("Error seeding admin:", err.message);
  }
};

const initializeDatabase = async () => {
  await createTables();
  await seedAdmin();
};

module.exports = initializeDatabase;
