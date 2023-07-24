
export function getPages(pages) {
  pages = Math.ceil(pages / 12);
  let result = [];

  for (let i = 1; i <= pages; i++) {
    result.push(i);
  }

  return result;
}
