const { agregarPost, obtenerPost } = require("./post");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, console.log("SERVIDOR ENCENDIDO"));
app.get("/post", async (req, res) => {
  const post = await obtenerPost();
  res.json(post);
});

app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  await agregarPost(titulo, img, descripcion);
  res.send("Post agregado con éxito");
});
