const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(postRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
