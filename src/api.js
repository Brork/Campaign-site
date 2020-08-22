import axios from "axios";

const instance = axios.create({
  baseURL: "https://be-interactive-conan-map.herokuapp.com/api",
});

export const fetchMarkers = () => {
  return instance.get("/markers");
};

export const postMarker = async (body) => {
  return await instance.post(`/markers`, body);
};

export const patchMarkerById = async (id, params) => {
  return await instance.patch(`/markers/${id}`, params);
};

export const deleteMarkerByMarkerId = async (id) => {
  return await instance.delete(`/markers/${id}`);
};
