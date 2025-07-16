const { pool } = require("../config/config");

const agregarPost = async (titulo, img, descripcion) => {
  const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)";
  const values = [titulo, img, descripcion];
  const result = await pool.query(consulta, values);
  console.log("Post agregado");
};

const obtenerPost = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  if (rows.length === 0) {
    throw { code: 404, message: "No se encontraron posts" };
  }
  console.log(rows);
  return rows;
};

const modificarPost = async (id, titulo, img, descripcion) => {
  const consulta =
    "UPDATE posts SET titulo = $1, img = $2, descripcion = $3 WHERE id = $4";
  const values = [titulo, img, descripcion, id];
  const result = await pool.query(consulta, values);
  if (result.rowCount === 0) {
    throw { code: 404, message: "No se encontró ningún post con este id" };
  }
};

const eliminarPost = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);
  if (result.rowCount === 0) {
    throw { code: 404, message: "No se encontró ningún post con este id" };
  }
};

module.exports = { agregarPost, obtenerPost, modificarPost, eliminarPost };
