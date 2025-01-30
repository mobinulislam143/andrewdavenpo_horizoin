/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const videoApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // login
    createVideo: build.mutation({
      query: (data: any) => {
        return {
          url: `/videos`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Videos"],
    }),

    // get all books
    getAllVideo: build.query({
      query: () => ({
        url: `/videos`,
        method: "GET",
      }),
      providesTags: ["Videos"],
    }),
  }),
});

export const { useCreateVideoMutation,useGetAllVideoQuery } = videoApi;
