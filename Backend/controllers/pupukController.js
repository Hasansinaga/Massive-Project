const pool = require('../config/database');

exports.addPupuk = async (req, res) => {
  const { nama, deskripsi, harga, kategoriId } = req.body;
  const gambar = req.file ? req.file.filename : null;
  try {
    const [kategori] = await pool.query('SELECT * FROM kategori_pupuk WHERE id = ?', [kategoriId]);
    if (!kategori.length) return res.status(404).json({ message: 'Kategori not found' });

    const [result] = await pool.query(
      'INSERT INTO pupuk (nama, deskripsi, harga, gambar, kategori_id) VALUES (?, ?, ?, ?, ?)',
      [nama, deskripsi, harga, gambar, kategoriId]
    );
    res.status(201).json({ message: 'Pupuk created', pupukId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletePupuk = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM pupuk WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Pupuk not found' });
    res.status(200).json({ message: 'Pupuk deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePupuk = async (req, res) => {
  const { id } = req.params;
  const { nama, deskripsi, harga, kategoriId } = req.body;
  const gambar = req.file ? req.file.filename : null;
  try {
    const [pupuk] = await pool.query('SELECT * FROM pupuk WHERE id = ?', [id]);
    if (!pupuk.length) return res.status(404).json({ message: 'Pupuk not found' });

    const [kategori] = await pool.query('SELECT * FROM kategori_pupuk WHERE id = ?', [kategoriId]);
    if (kategoriId && !kategori.length) return res.status(404).json({ message: 'Kategori not found' });

    await pool.query(
      'UPDATE pupuk SET nama = ?, deskripsi = ?, harga = ?, gambar = ?, kategori_id = ? WHERE id = ?',
      [nama || pupuk[0].nama, deskripsi || pupuk[0].deskripsi, harga || pupuk[0].harga, gambar || pupuk[0].gambar, kategoriId || pupuk[0].kategori_id, id]
    );
    res.status(200).json({ message: 'Pupuk updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPupukById = async (req, res) => {
  const { id } = req.params;
  try {
    const [pupuk] = await pool.query('SELECT * FROM pupuk WHERE id = ?', [id]);
    if (!pupuk.length) return res.status(404).json({ message: 'Pupuk not found' });
    res.status(200).json({ pupuk: pupuk[0] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllPupuk = async (req, res) => {
  try {
    const [pupuk] = await pool.query('SELECT * FROM pupuk');
    res.status(200).json({ pupuk });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
