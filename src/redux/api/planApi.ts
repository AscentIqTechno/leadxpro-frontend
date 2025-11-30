import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_API_URL as string;

export const planApi = createApi({
  reducerPath: "planApi",

  baseQuery: fetchBaseQuery({
    baseUrl:  `${BASE_URL}/api`,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any)?.auth?.token;
      if (token) {
        headers.set("x-access-token", token);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    // GET ALL PLANS (Public)
    getPlans: builder.query({
      query: () => "/plans",
    }),

    // CREATE PLAN (Admin)
    createPlan: builder.mutation({
      query: (body) => ({
        url: "/plans",
        method: "POST",
        body,
      }),
    }),

    // UPDATE PLAN (Admin)
    updatePlan: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/plans/${id}`,
        method: "PUT",
        body,
      }),
    }),

    // DELETE PLAN (Admin)
    deletePlan: builder.mutation({
      query: (id) => ({
        url: `/plans/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Hooks
export const {
  useGetPlansQuery,
  useCreatePlanMutation,
  useUpdatePlanMutation,
  useDeletePlanMutation,
} = planApi;
