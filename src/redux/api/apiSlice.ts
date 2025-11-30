import { createApi, fetchBaseQuery, RootState } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL as string;


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any)?.auth?.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["User", "Post", "Story"],
  endpoints: () => ({}),
});
