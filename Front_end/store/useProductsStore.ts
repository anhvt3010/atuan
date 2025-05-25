import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  fetchHistoryOrders,
  fetchNearbyOffers,
  fetchCurrentDeals,
} from '@/api/products';
import { OrderItem } from '@/types/order';
import {CategoryResponse} from "@/types/categoryTypes";
import {fetchCategories} from "@/api/categories";

type ExploreState = {
  historyOrders: OrderItem[];
  nearbyOffers: OrderItem[];
  currentDeals: OrderItem[];
  categories : CategoryResponse[];
  loading: boolean;
  selectedOffer: OrderItem | null;
  setSelectedOffer: (offer: OrderItem) => void;
  loadExploreData: () => Promise<void>;
};

export const useProductsStore = create<ExploreState>()(
  persist(
    (set) => ({
      historyOrders: [],
      nearbyOffers: [],
      currentDeals: [],
      categories: [],
      loading: false,
      selectedOffer: null,

      setSelectedOffer: (offer) => set({ selectedOffer: offer }),

      loadExploreData: async () => {
        set({ loading: true });
        const [historyOrders, nearbyOffers, currentDeals, categories] = await Promise.all([
          fetchHistoryOrders(),
          fetchNearbyOffers(),
          fetchCurrentDeals(),
          fetchCategories(),
        ]);
        set({ historyOrders, nearbyOffers, currentDeals, categories, loading: false });
      },
    }),
    {
      name: 'products-storage',
    }
  )
);
