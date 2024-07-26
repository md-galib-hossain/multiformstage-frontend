import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tagTypeList } from '../tag-Types';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1`,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypeList,
});
