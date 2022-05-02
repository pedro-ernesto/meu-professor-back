import express from 'express';

const app = express();

app.get("/", (request, response) => {
  return response.json({message: "Hello World"});
});

app.post("/institution", (request, response) => {
  const { name } = request.body;
  return response.json({name});
})

app.listen(3333, () => console.log("Server is running!"));