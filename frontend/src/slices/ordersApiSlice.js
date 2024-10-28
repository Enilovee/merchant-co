import { ORDERS_URL, PAYSTACK_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder : builder.mutation({
            query: (order) => ({
                url:` ${ORDERS_URL}`,
                method: 'POST',
                body: {...order}
            }),
        }),
           
        getOrderDetails:builder.query({
            query: (orderId) => ({
                url:`${ORDERS_URL}/${orderId}`,
                method: 'GET',
                }),
                keepUnusedDataFor: 5
        }),
        getMyOrders:builder.query({
            query: () => ({
                url:`${ORDERS_URL}/mine`,
                method: 'GET',
                }),
                keepUnusedDataFor: 5
        }),
        payOrder: builder.mutation({
            query: ({orderId, details}) => ({
                url:`${ORDERS_URL}/${orderId}/pay`,
                method: 'PUT',
                body: {...details },
                }),
               
        }),
        getPayStackClientId:builder.query({
            query: () => ({
                url:PAYSTACK_URL,
                // method: 'GET',
                }),
                keepUnusedDataFor: 5
        }),
        getAllOrders:builder.query({
            query: () => ({
                url:`${ORDERS_URL}`,
                // method: 'GET',
                }),
                keepUnusedDataFor: 5
        }),
        deliverOrder: builder.mutation({
            query: (orderId) => ({
                url:`${ORDERS_URL}/${orderId}/deliver`,
                method: 'PUT',
                }),
               
        }),
    }),
});

export const { useCreateOrderMutation, 
               useGetOrderDetailsQuery,
               useGetMyOrdersQuery,
               usePayOrderMutation,
               useGetPayStackClientIdQuery,
               useGetAllOrdersQuery,
               useDeliverOrderMutation } = ordersApiSlice;