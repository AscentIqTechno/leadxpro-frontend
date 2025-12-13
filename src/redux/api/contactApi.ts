import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_API_URL as string;

export const contactApi = createApi({
  reducerPath: "contactApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/contact-us`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any)?.auth?.token; // optional if you want to send token
      if (token) {
        headers.set("x-access-token", token);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    // GET ALL CONTACT MESSAGES
    getContacts: builder.query({
      query: () => "/contacts",
    }),

    // CREATE NEW CONTACT MESSAGE
    createContact: builder.mutation({
      query: (body) => ({
        url: "/contacts",
        method: "POST",
        body,
      }),
    }),

    // MARK AS READ (optional)
    markContactAsRead: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}/read`,
        method: "PUT",
      }),
    }),

    // DELETE CONTACT MESSAGE (optional)
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Hooks
export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useMarkContactAsReadMutation,
  useDeleteContactMutation,
} = contactApi;
