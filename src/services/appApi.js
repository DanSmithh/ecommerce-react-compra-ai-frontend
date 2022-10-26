import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Chamadas para a API

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: '/users/signup',
        method: 'POST',
        body: user,
      }),
    }),

    login: builder.mutation({
      query: (user) => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
    }),
    // Cadastrar produto
    createProduct: builder.mutation({
      query: (product) => ({
        url: '/products',
        body: product,
        method: 'POST',
      }),
    }),

    deleteProduct: builder.mutation({
      query: ({ product_id, user_id }) => ({
        url: `/products/${product_id}`,
        body: {
          user_id,
        },
        method: 'DELETE',
      }),
    }),

    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        body: product,
        method: 'PATCH',
      }),
    }),

    // Adicionar carrinho

    addToCart: builder.mutation({
      query: (cartInfo) => ({
        url: '/products/add-to-cart',
        body: cartInfo,
        method: 'POST',
      }),
    }),
    // Remover do carrinho
    removeFromCart: builder.mutation({
      query: (body) => ({
        url: '/products/remove-from-cart',
        body,
        method: 'POST',
      }),
    }),

    // acrescentar ao carrinho
    increaseCartProduct: builder.mutation({
      query: (body) => ({
        url: '/products/increase-cart',
        body,
        method: 'POST',
      }),
    }),

    // decrementar do carrinho
    decreaseCartProduct: builder.mutation({
      query: (body) => ({
        url: '/products/decrease-cart',
        body,
        method: 'POST',
      }),
    }),
    // criar pedido
    createOrder: builder.mutation({
      query: (body) => ({
        url: '/orders',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useCreateProductMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useIncreaseCartProductMutation,
  useDecreaseCartProductMutation,
  useCreateOrderMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = appApi;

export default appApi;
