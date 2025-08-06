
export const filterServices = (listings, filters) => {
  return listings.filter((listing) => {
    const matchesKeyword = filters.keyword
      ? listing.category.toLowerCase().includes(filters.keyword.toLowerCase())
      : true;
    const matchesLocation = filters.location
      ? listing.company_location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const matchesCategory = filters.category
      ? listing.category.toLowerCase() === filters.category.toLowerCase()
      : true;

    return matchesKeyword && matchesLocation && matchesCategory;
  });
};

export const paginateServices = (data, currentPage, itemsPerPage) => {
  const start = (currentPage - 1) * itemsPerPage;
  return data.slice(start, start + itemsPerPage);
};