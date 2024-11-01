import { PRODUCTS_URL, UPLOADS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts : builder.query({
            query: ({ keyword, pageNumber}) => ({
                url: PRODUCTS_URL,
                params: {
                    keyword,
                    pageNumber
                }
            }),
            providesTags:['Product'],
            keepUnusedDataFor : 5
        }),
        getProductdetails : builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor : 5
        }),
       createProduct : builder.mutation({
            query: () => ({
                url: PRODUCTS_URL,
                method: 'POST',
            }),
            invalidatesTags:['Product'],
        }),
       updateProduct : builder.mutation({
            query: (data) => ({
                url:`${PRODUCTS_URL}/${data.productId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags:['Products'],
        }),
       uploadProductImage : builder.mutation({
            query: (data) => ({
                url: UPLOADS_URL,
                method: 'POST',
                body: data,
            }),
            
        }),
      deleteProduct : builder.mutation({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
                method: 'DELETE',
            }),
            
        }),

      createReview : builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}/reviews`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Product'],
        }),

        getTopProduct : builder.query({
            query: () => ({
                url: `${PRODUCTS_URL}/top`,
            }),
            keepUnusedDataFor : 5
    }),
})
})

export const {useGetProductsQuery, 
    useGetProductdetailsQuery, 
    useCreateProductMutation,
    useUpdateProductMutation,
    useUploadProductImageMutation,
    useDeleteProductMutation,
    useCreateReviewMutation,
    useGetTopProductQuery,
} = productApiSlice;