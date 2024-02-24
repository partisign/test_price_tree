import { sortAray } from "./helpers.js";

export function createTree(array, parent) {
  const nodes = array.filter((item) => {
    return item.head === parent;
  });
  if (!nodes) {
    return;
  }
  sortAray(nodes);
  const UlElement = document.createElement("ul");
  nodes.forEach((item) => {
    const LiElement = document.createElement("li");
    const itemLine = document.createElement("div");
    const titleElement = document.createElement("div");
    titleElement.textContent = item.name;
    itemLine.appendChild(titleElement);
    if (!item.node) {
      const priceElement = document.createElement("div");
      itemLine.appendChild(priceElement);
    }
    LiElement.appendChild(itemLine);
    UlElement.appendChild(LiElement);

    if (item.node) {
      const childUl = createTree(array, item.id);
      childUl.style.display = "block";
      UlElement.appendChild(childUl);
      titleElement.addEventListener("click", function () {
        if (childUl) {
          childUl.style.display =
            childUl.style.display === "none" ? "block" : "none";
        }
      });
    }
  });
  return UlElement;
}
