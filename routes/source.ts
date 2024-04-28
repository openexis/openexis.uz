import { app } from "../app/mod.ts";

app.get("/source", (req, res) => {
  res.redirect("https://github.com/openexis/openexis.uz");
});

export { app };
