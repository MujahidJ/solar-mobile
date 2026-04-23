import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "auth_token";
const USER_TYPE_KEY = "user_type";

export const saveAuthData = async (token, userType) => {
  await SecureStore.setItemAsync(TOKEN_KEY, token);
  await SecureStore.setItemAsync(USER_TYPE_KEY, userType);
};

export const getToken = async () => {
  return await SecureStore.getItemAsync(TOKEN_KEY);
};

export const getUserType = async () => {
  return await SecureStore.getItemAsync(USER_TYPE_KEY);
};

export const clearAuthData = async () => {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
  await SecureStore.deleteItemAsync(USER_TYPE_KEY);
};