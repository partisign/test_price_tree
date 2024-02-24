import { fetchData } from "./fetchDataService.js";
import { createTree } from "./createTree.js";
const { services } = await fetchData();
const UlTree = createTree(services, null);
const rootElement = document.getElementById("tree");
rootElement.appendChild(UlTree);
