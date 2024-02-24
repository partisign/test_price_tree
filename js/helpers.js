export function sortAray(array) {
  array.sort((a, b) => a.sorthead - b.sorthead);
  array.sort((a, b) => {
    if (a.node === b.node || (a.node > 0 && b.node > 0)) {
      return 0;
    } else return b.node - a.node;
  });
}
