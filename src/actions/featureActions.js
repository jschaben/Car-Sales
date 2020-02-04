export const ADD_FEATURE = "ADD_FEATURE";
export const ADD_FEATURE_PRICE = "ADD_FEATURE_PRICE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const REMOVE_FEATURE_PRICE = "REMOVE_FEATURE_PRICE";

export const addFeature = item => {
  return { type: "ADD_FEATURE", payload: item };
};

export const addFeaturePrice = item => {
  return { type: "ADD_FEATURE_PRICE", payload: item };
};

export const removeFeature = item => {
  return { type: "REMOVE_FEATURE", payload: item };
};

export const removeFeaturePrice = item => {
  return { type: "REMOVE_FEATURE_PRICE", payload: item };
};

