import { addCategory } from "./categories";
import { addSpec } from "./specs";
import { GARAGE_ADDED, addGarage, addBluePrint } from "./actions/garageActions";
import { removeAccessToken, removeUser } from "./actions/userActions";
import { checkForToken } from "./utils/authUtils";

export const getUserGarage = (userId) => async (dispatch) => {
  const token = checkForToken();
  if (!token) {
    dispatch(removeAccessToken());
    dispatch(removeUser());
    return;
  }

  try {
    const response = await fetch(`/api/users/${userId}/garage`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.garage) {
        dispatch(addGarage(data.garage));
        dispatch(getGarageBlueprints(data.garage.id));
        return data.garage;
      }
    } else {
      // Handle non-200 response status
      const errorData = await response.json();
      throw new Error(errorData.message || "GET Garage failed");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
//------------------- blueprints thunk --------------
export const getGarageBlueprints = (garageId) => async (dispatch) => {
  const response = await fetch(`/api/garage/${garageId}/blueprints`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "GET Garage failed");
  }

  const { blueprints } = await response.json();

  
  const specsById = {};
  const categoriesById = {};
  const garageBluePrints = {};

  for (const blueprint of blueprints) {
    garageBluePrints[blueprint.id] = blueprint.id;
    garageBluePrints[blueprint.id]["garageId"] = blueprint.garage_id;
    garageBluePrints[blueprint.id]["imageUrl"] = blueprint.imageUrl;
    garageBluePrints[blueprint.id]["name"] = blueprint.name;
  }
  return response;
};

const initialState = {};

const garageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GARAGE_ADDED:
      let garage = {
        name: action.garage.name,
        ...state,
      };
    default:
      return state;
  }
};

export default garageReducer;
