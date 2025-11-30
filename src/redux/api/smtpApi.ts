import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_API_URL as string;

export const smtpApi = createApi({
  reducerPath: "smtpApi",

  baseQuery: fetchBaseQuery({
    baseUrl:  `${BASE_URL}/api`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any)?.auth?.token;
      if (token) headers.set("x-access-token", token);
      return headers;
    },
  }),

  tagTypes: ["SMTP"],

  endpoints: (builder) => ({
    addSmtp: builder.mutation({
      query: (data) => ({
        url: "/smtp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["SMTP"],
    }),

    // renamed to match your expectation
    getMySmtps: builder.query({
      query: () => "/smtp",
      providesTags: ["SMTP"],
    }),

    updateSmtp: builder.mutation({
      query: ({ id, data }) => ({
        url: `/smtp/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["SMTP"],
    }),
    testSmtpConnection: builder.mutation({
      query: (data) => ({
        url: "/smtp/test",
        method: "POST",
        body: data,
      }),
    }),

    deleteSmtp: builder.mutation({
      query: (id) => ({
        url: `/smtp/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SMTP"],
    }),
  }),
});

export const {
  useAddSmtpMutation,
  useGetMySmtpsQuery,   // <-- your missing name (fixed)
  useUpdateSmtpMutation,
  useDeleteSmtpMutation,
  useTestSmtpConnectionMutation,
} = smtpApi;
