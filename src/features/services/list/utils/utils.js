// utils.js

/**
 * Filters the services based on the filters object.
 * @param {Array} services - list of all services
 * @param {Object} filters - filters { keyword, location, category }
 * @returns filtered array
 */
export const filterServices = (services, filters) => {

  console.log(filters,services)
  return services?.filter((service) => {
    const matchesKeyword =
      !filters?.keyword ||
      service?.title?.toLowerCase()?.includes(filters?.keyword?.toLowerCase());

    const matchesLocation =
      !filters?.location ||
      service?.location?.toLowerCase()?.includes(filters?.location?.toLowerCase());

    const matchesCategory =
      !filters?.category ||
      service?.category?.toLowerCase()?.includes(filters?.category?.toLowerCase()) ||
      service?.tags?.some((tag) =>
        tag.toLowerCase()?.includes(filters?.category?.toLowerCase())
      );

      console.log(matchesKeyword,matchesLocation,matchesCategory)
    return matchesKeyword && matchesLocation && matchesCategory;
  });
};

/**
 * Paginates the filtered services.
 * @param {Array} filteredServices - filtered list
 * @param {number} currentPage - current page number (1-indexed)
 * @param {number} itemsPerPage - number of items per page
 * @returns paginated array slice
 */
export const paginateServices = (
  filteredServices,
  currentPage,
  itemsPerPage
) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return filteredServices?.slice(startIndex, startIndex + itemsPerPage);
};