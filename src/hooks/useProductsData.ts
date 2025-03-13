import { useQuery } from '@tanstack/react-query';
import { ProductsService } from '../service/useServiceData';

const dataService = new ProductsService();

export default function useProductsData(searchQuery = "", priceRange = "", page = 1) {
    const { data, isLoading } = useQuery({
        queryKey: ['products', searchQuery, priceRange, page],
        queryFn: () => dataService.getProducts(searchQuery, priceRange, page),
        keepPreviousData: true, 
    });

    return {
        query: data,
        loading: isLoading,
    };
}
