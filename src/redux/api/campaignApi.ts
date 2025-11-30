import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_API_URL as string;

export const campaignApi = createApi({
  reducerPath: "campaignApi",
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
  tagTypes: ["Campaign"],
  endpoints: (builder) => ({
    createCampaign: builder.mutation({
      query: (formData) => ({
        url: "/campaign",
        method: "POST",
        body: formData,        // MUST be FormData
      }),
      invalidatesTags: ["Campaign"],
    }),

    getMyCampaigns: builder.query({
      query: () => "/campaign",
      providesTags: ["Campaign"],
    }),

    deleteCampaign: builder.mutation({
      query: (id) => ({
        url: `/campaign/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Campaign"],
    }),
  }),
});

export const {
  useCreateCampaignMutation,
  useGetMyCampaignsQuery,
  useDeleteCampaignMutation,
} = campaignApi;
