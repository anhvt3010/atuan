import axios from "axios";
import {ProductRequest} from "@/types/productTypes";
import {OrderItem} from "@/types/order";
import api from "@/api/axiosConfig";

// const API_BASE_URL = "https://sustainable-be.code4fun.xyz/api/v1/products";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchHistoryOrders = async () => {
  try {
    const response = await api.get<OrderItem>("/products", {} as ProductRequest);
    return response.data;
  } catch (error: any) {
    // throw new Error(error.response?.data?.message || 'Loading failed');
  }
};

export const fetchNearbyOffers = async () => {
  try {
    const response = await api.get<OrderItem>("/products", {} as ProductRequest);
    return response.data;
  } catch (error: any) {
    // throw new Error(error.response?.data?.message || 'Loading failed');
  }
};

export const fetchCurrentDeals = async () => {
  try {
    const response = await api.get<OrderItem>("/products", {} as ProductRequest);
    return response.data;
  } catch (error: any) {
    // throw new Error(error.response?.data?.message || 'Loading failed');
  }
};
  