const pool = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [admin] = await pool.query('SELECT * FROM admin WHERE username = ?', [username]);
    if (!admin.length) return res.status(404).json({ message: 'Admin not found' });

    const validPassword = await bcrypt.compare(password, admin[0].password);
    if (!validPassword) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin[0].id, username: admin[0].username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Logout Admin
exports.logoutAdmin = async (req, res) => {
  try {
    // In this case, we can simply ask the client to delete the token on their side
    res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addSeller = async (req, res) => {
  const { name, username, email, password, phone, address } = req.body;

  // Pastikan semua kolom diperlukan tersedia
  if (!name || !username || !email || !password) {
    return res.status(400).json({ message: 'Name, username, email, and password are required.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Menyimpan data seller dengan detail lengkap
    const [result] = await pool.query(
      'INSERT INTO seller (name, username, email, password, phone, address) VALUES (?, ?, ?, ?, ?, ?)',
      [name, username, email, hashedPassword, phone, address]
    );

    res.status(201).json({ message: 'Seller created', sellerId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSeller = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM seller WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Seller not found' });
    res.status(200).json({ message: 'Seller deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSeller = async (req, res) => {
  const { id } = req.params;
  const { name, username, email, password, phone, address } = req.body;

  try {
    const [seller] = await pool.query('SELECT * FROM seller WHERE id = ?', [id]);
    if (!seller.length) return res.status(404).json({ message: 'Seller not found' });

    // Jika password baru diberikan, hash password baru
    const hashedPassword = password ? await bcrypt.hash(password, 10) : seller[0].password;

    // Update seller dengan informasi baru
    await pool.query(
      `UPDATE seller 
       SET name = ?, username = ?, email = ?, password = ?, phone = ?, address = ? 
       WHERE id = ?`,
      [name || seller[0].name, username || seller[0].username, email || seller[0].email, hashedPassword, phone || seller[0].phone, address || seller[0].address, id]
    );
    res.status(200).json({ message: 'Seller updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSellerById = async (req, res) => {
  const { id } = req.params;
  try {
    const [seller] = await pool.query('SELECT * FROM seller WHERE id = ?', [id]);
    if (!seller.length) return res.status(404).json({ message: 'Seller not found' });
    res.status(200).json({ seller: seller[0] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllSellers = async (req, res) => {
  try {
    const [sellers] = await pool.query('SELECT * FROM seller');
    res.status(200).json({ sellers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
