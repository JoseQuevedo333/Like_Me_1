const {
  agregarPost,
  obtenerPost,
  modificarPost,
  eliminarPost,
} = require("../queries/postQueries");

const obtenerlosPost = async (req, res) => {
  try {
    const post = await obtenerPost();
    res.json(post);
  } catch (error) {
    res.status(500).send("Error al obtener los posts");
  }
};

const agregarlosPost = async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    await agregarPost(titulo, img, descripcion);
    res.send("Post agregado con éxito");
  } catch (error) {
    const { code } = error;
    if (code == "23502") {
      res
        .status(400)
        .send(
          "Se ha violado la restricción NOT NULL en uno de los campos de la tabla"
        );
    } else {
      res.status(500).send(error);
    }
  }
};

const modificarlosPost = async (req, res) => {
  const { id } = req.params;
  const { titulo, img, descripcion } = req.body;
  try {
    await modificarPost(id, titulo, img, descripcion);
    res.send("Post modificado con éxito");
  } catch ({ code, message }) {
    res.status(code).send(message);
  }
};

const eliminarlosPost = async (req, res) => {
  const { id } = req.params;
  try {
    await eliminarPost(id);
    res.send("Post eliminado con éxito");
  } catch ({ code, message }) {
    res.status(code).send(message);
  }
};

module.exports = {
  agregarlosPost,
  obtenerlosPost,
  modificarlosPost,
  eliminarlosPost,
};
