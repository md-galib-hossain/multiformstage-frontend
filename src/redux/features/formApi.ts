import { baseApi } from "../api/baseApi";
import { tagTypes } from "../tag-Types";

const formApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitform: builder.mutation({
      query: (data) => {
        console.log(data)
        return {
        url: '/forms/create',
        method: 'POST',
        body: data,
      }},
      invalidatesTags: [tagTypes.forms]
    }),
    
   
  }),
});

export const { useSubmitformMutation } = formApi;
