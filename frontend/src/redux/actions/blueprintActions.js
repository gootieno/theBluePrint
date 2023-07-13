export const BLUEPRINTS_ADDED = "blueprints/BLUEPRINTS_ADDED";
export const BLUEPRINT_EDITED = "blueprints/BLUEPRINT_EDITED";
export const BLUEPRINT_DELETED = "blueprints/BLUEPRINT_DELETED";

export const addBlueprints = (blueprints) => ({
  type: BLUEPRINTS_ADDED,
  blueprints,
});

export const editBlueprint = (blueprint) => ({
  type: BLUEPRINT_EDITED,
  blueprint,
});

export const deleteBlueprint = (id) => ({
  type: BLUEPRINT_DELETED,
  id,
});
