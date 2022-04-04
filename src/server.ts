import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(`Rondando na porta 3000 o projeto ${process.env.PROJECT_NAME}`);
});
