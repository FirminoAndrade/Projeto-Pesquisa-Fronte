const express = require("express");
const app = express();
const appName = 'projeto-pesquisa';
const outputpath = `${__dirname}/dist/${appName}`;

app.use(express.static(outputpath));
app.get('/*', (req,res) => {
  res.sendFile(`${outputpath}/index.html`);
});
app.listen(process.env.PORT);
