export function sortAray(array) {
  array.sort((a, b) => a.sorthead - b.sorthead);
  array.sort((a, b) => b.node - a.node);
}
