import { sortAray } from "./helpers.js";

export function createTree(array, parent) {
  const nodes = array.filter((item) => {
    return item.head === parent;
  });
  if (!nodes) {
    return;
  }
  sortAray(nodes); //Функция грязная - мутирует исходный объект
  const UlElement = document.createElement("ul");
  nodes.forEach((item) => {
    const LiElement = document.createElement("li");
    const itemLine = document.createElement("div");
    itemLine.classList.add("tree__item-line");
    const titleElement = document.createElement("div");
    titleElement.classList.add("tree__item-line-unit", "tree__item-line-title");
    titleElement.textContent = item.name;

    itemLine.appendChild(titleElement);
    if (!item.node) {
      const priceElement = document.createElement("div");
      priceElement.classList.add(
        "tree__item-line-unit",
        "tree__item-line-price"
      );
      priceElement.textContent = item.price.toFixed(2);
      itemLine.appendChild(priceElement);
    } else {
      itemLine.classList.add("tree__item-line--has-child");
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
        itemLine.classList.toggle("expanded");
      });
    }
  });
  return UlElement;
}
