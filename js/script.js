import { fetchData } from "./fetchDataService.js";
import { sortAray } from "./helpers.js";
const { services } = await fetchData();
sortAray(services);
console.table(services);
const rootElement = document.getElementById("tree");
