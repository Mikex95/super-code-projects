function paginationMenu(page){
    const paginationArray = Array.from (
        new Set(
    [
        1,
        2,
        3,
        page - 10,
        page - 2,
        page - 1,
        page,
        page + 1,
        page + 2,
        page + 10,
        88,
        89,
        90,
    ].filter(page => page >= 1 && page <= 90)
    ));
    return paginationArray
}

module.exports = {
    paginationMenu,
  };