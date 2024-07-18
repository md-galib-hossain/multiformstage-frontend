import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import { tagTypeList } from '../tag-Types'


export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}` }),
  endpoints: () => ({
   
  
  }),
  tagTypes : tagTypeList
})

