export const SPECS_ADDED = "specs/ SPECS_ADDED";
export const SPEC_ADDED = "specs/SPEC_ADDED";
export const SPECS_EDITED = "specs SPECS_EDITED";
export const SPECS_DELETED = "specs SPECS_DELETED";

export const addSpecs = (specs) => ({
  type: SPECS_ADDED,
  specs,
});

export const addSpec = (spec) => ({
  type: SPEC_ADDED,
  spec,
});

export const editSpec = (spec) => ({
  type: SPECS_EDITED,
  spec,
});

export const deleteSpec = (id) => ({
  type: SPECS_DELETED,
  id,
});
