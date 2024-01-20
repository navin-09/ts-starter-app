// index.ts
import app from "./app";

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
