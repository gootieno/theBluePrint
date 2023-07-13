export const CATEGORIES_ADDED = "categories/CATEGORIES_ADDED";
export const CATEGORY_ADDED = "categories/CATEGORY_ADDED";
export const CATEGORY_EDITED = "categories/CATEGORY_EDITED";
export const CATEGORY_DELETED = "categories/CATEGORY_DELETED";

export const addCategories = (categories) => ({
  type: CATEGORIES_ADDED,
  categories,
});

export const addCategory = (category) => ({
  type: CATEGORY_ADDED,
  category,
});

export const editCategory = (category) => ({
  type: CATEGORY_EDITED,
  category,
});

export const deleteCategory = (id) => ({
  type: CATEGORY_DELETED,
  id,
});
