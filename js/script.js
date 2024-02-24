import { fetchData } from "./fetchDataService.js";
const { services } = await fetchData();
console.table(services);
const rootElement = document.getElementById("tree");
