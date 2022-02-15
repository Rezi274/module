import Table from "./module.js";
import { columns, data } from "./module.js";

const table = new Table({
  columns: [...columns],
  data: [...data],
});
const Rezi = document.getElementById("Rezi");
table.render(Rezi);
