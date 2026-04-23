import api from "./client";

export const technicianLogin = async (payload) => {
  const response = await api.post("/technician/login", payload);
  return response.data;
};

export const clientLogin = async (payload) => {
  const response = await api.post("/client/login", payload);
  return response.data;
};