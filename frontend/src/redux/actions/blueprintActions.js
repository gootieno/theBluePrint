export const BLUEPRINT_ADDED = "blueprints/BLUEPRINT_ADDED";
export const BLUEPRINT_EDITED = "blueprints/BLUEPRINT_EDITED";
export const BLUEPRINT_DELETED = "blueprints/BLUEPRINT_DELETED";

export const addBlueprint = (blueprint) => ({
  type: BLUEPRINT_ADDED,
  blueprint,
});

export const editBlueprint = (blueprint) => ({
  type: BLUEPRINT_EDITED,
  blueprint,
});

export const deleteBlueprint = (id) => ({
  type: BLUEPRINT_DELETED,
  id,
});
