const db = require('../config/database');

class SellerModel {
  static async create(sellerData) {
    const [result] = await db.query(
      'INSERT INTO sellers (name, email, phone, address) VALUES (?, ?, ?, ?)', 
      [sellerData.name, sellerData.email, sellerData.phone, sellerData.address]
    );
    return result;
  }

  static async findAll() {
    const [rows] = await db.query('SELECT * FROM sellers');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM sellers WHERE id = ?', [id]);
    return rows[0];
  }

  static async update(id, sellerData) {
    const [result] = await db.query(
      'UPDATE sellers SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?',
      [sellerData.name, sellerData.email, sellerData.phone, sellerData.address, id]
    );
    return result;
  }

  static async delete(id) {
    const [result] = await db.query('DELETE FROM sellers WHERE id = ?', [id]);
    return result;
  }
}

module.exports = SellerModel;