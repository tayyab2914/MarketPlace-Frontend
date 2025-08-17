// utils.js

/**
 * Filters the listngs based on the filters object.
 * @param {Array} listngs - list of all listngs
 * @param {Object} filters - filters { keyword, location, category }
 * @returns filtered array
 */
export const filterListing = (listngs, filters) => {
  const list = Array.isArray(listngs) ? listngs : [];

  console.log(filters, list);

  return list.filter((listng) => {
    const matchesKeyword =
      !filters?.keyword ||
      listng?.title?.toLowerCase()?.includes(filters?.keyword?.toLowerCase());

    const matchesLocation =
      !filters?.location ||
      listng?.location?.toLowerCase()?.includes(filters?.location?.toLowerCase());

    const matchesCategory =
      !filters?.category ||
      listng?.category?.toLowerCase()?.includes(filters?.category?.toLowerCase()) ||
      listng?.tags?.some((tag) =>
        tag.toLowerCase()?.includes(filters?.category?.toLowerCase())
      );

    console.log(matchesKeyword, matchesLocation, matchesCategory);

    return matchesKeyword && matchesLocation && matchesCategory;
  });
};


/**
 * Paginates the filtered listngs.
 * @param {Array} filteredlistngs - filtered list
 * @param {number} currentPage - current page number (1-indexed)
 * @param {number} itemsPerPage - number of items per page
 * @returns paginated array slice
 */
export const paginateListing = (
  filteredlistngs,
  currentPage,
  itemsPerPage
) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return filteredlistngs?.slice(startIndex, startIndex + itemsPerPage);
};
