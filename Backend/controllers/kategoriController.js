const pool = require('../config/database');

exports.addKategori = async (req, res) => {
  const { nama } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO kategori_pupuk (nama) VALUES (?)', [nama]);
    res.status(201).json({ message: 'Kategori created', kategoriId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteKategori = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM kategori_pupuk WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Kategori not found' });
    res.status(200).json({ message: 'Kategori deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateKategori = async (req, res) => {
  const { id } = req.params;
  const { nama } = req.body;
  try {
    const [kategori] = await pool.query('SELECT * FROM kategori_pupuk WHERE id = ?', [id]);
    if (!kategori.length) return res.status(404).json({ message: 'Kategori not found' });

    await pool.query('UPDATE kategori_pupuk SET nama = ? WHERE id = ?', [nama || kategori[0].nama, id]);
    res.status(200).json({ message: 'Kategori updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getKategoriById = async (req, res) => {
  const { id } = req.params;
  try {
    const [kategori] = await pool.query('SELECT * FROM kategori_pupuk WHERE id = ?', [id]);
    if (!kategori.length) return res.status(404).json({ message: 'Kategori not found' });
    res.status(200).json({ kategori: kategori[0] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllKategori = async (req, res) => {
  try {
    const [kategori] = await pool.query('SELECT * FROM kategori_pupuk');
    res.status(200).json({ kategori });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
