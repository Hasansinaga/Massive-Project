const mysql = require('mysql2/promise');
const db = require('../config/database');

class SellerController {
  static async createSeller(req, res) {
    const { name, email, phone, address } = req.body;
    const query = 'INSERT INTO sellers (name, email, phone, address) VALUES (?, ?, ?, ?)';
    
    try {
      const [result] = await db.query(query, [name, email, phone, address]);
      res.status(201).json({
        message: 'Seller berhasil dibuat',
        sellerId: result.insertId
      });
    } catch (error) {
      res.status(500).json({ 
        message: 'Gagal membuat seller', 
        error: error.message 
      });
    }
  }

  static async getAllSellers(req, res) {
    const query = 'SELECT * FROM sellers';
    
    try {
      const [sellers] = await db.query(query);
      res.status(200).json(sellers);
    } catch (error) {
      res.status(500).json({ 
        message: 'Gagal mengambil data seller', 
        error: error.message 
      });
    }
  }

  static async getSellerById(req, res) {
    const { id } = req.params;
    const query = 'SELECT * FROM sellers WHERE id = ?';
    
    try {
      const [sellers] = await db.query(query, [id]);
      if (sellers.length === 0) {
        return res.status(404).json({ message: 'Seller tidak ditemukan' });
      }
      res.status(200).json(sellers[0]);
    } catch (error) {
      res.status(500).json({ 
        message: 'Gagal mengambil seller', 
        error: error.message 
      });
    }
  }

  static async updateSeller(req, res) {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;
    const query = 'UPDATE sellers SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?';
    
    try {
      const [result] = await db.query(query, [name, email, phone, address, id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Seller tidak ditemukan' });
      }
      res.status(200).json({ message: 'Seller berhasil diupdate' });
    } catch (error) {
      res.status(500).json({ 
        message: 'Gagal update seller', 
        error: error.message 
      });
    }
  }

  static async deleteSeller(req, res) {
    const { id } = req.params;
    const query = 'DELETE FROM sellers WHERE id = ?';
    
    try {
      const [result] = await db.query(query, [id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Seller tidak ditemukan' });
      }
      res.status(200).json({ message: 'Seller berhasil dihapus' });
    } catch (error) {
      res.status(500).json({ 
        message: 'Gagal menghapus seller', 
        error: error.message 
      });
    }
  }
}

module.exports = SellerController;