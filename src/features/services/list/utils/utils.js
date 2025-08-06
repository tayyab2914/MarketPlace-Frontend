// utils.js

/**
 * Filters the services based on the filters object.
 * @param {Array} services - list of all services
 * @param {Object} filters - filters { keyword, location, category }
 * @returns filtered array
 */
export const filterServices = (services, filters) => {
  return services?.filter((service) => {
    const matchesKeyword =
      !filters.keyword ||
      service.title.toLowerCase().includes(filters.keyword.toLowerCase());

    const matchesLocation =
      !filters.location ||
      service.location.toLowerCase().includes(filters.location.toLowerCase());

    const matchesCategory =
      !filters.category ||
      service.category.toLowerCase().includes(filters.category.toLowerCase()) ||
      service.tags.some((tag) =>
        tag.toLowerCase().includes(filters.category.toLowerCase())
      );

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

export const dummyServices = [
    {
      id: 1,
      title: "Sparkle Ease Cleaning Solutions",
      tags: ["Cleaning", "Handyman"],
      location: "New York",
      category: "Cleaning",
      img: "1",
      price: "$75 - $100/hr",
    },
    {
      id: 2,
      title: "FixIt Fast Repairs",
      tags: ["Plumber", "Renovation", "Cleaning", "Handyman"],
      location: "California",
      category: "Renovation",
      img: "2",
      price: "$50/hr",
    },
    {
      id: 3,
      title: "Lens Masters Photography",
      tags: ["Photography"],
      location: "Alaska",
      category: "Photography",
      img: "3",
      price: "$150/hr",
    },
  ];