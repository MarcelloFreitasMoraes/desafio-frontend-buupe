import { useQuery } from '@tanstack/react-query';
import { ProductsService } from '../service/useServiceData';
import { ProductProps } from '@/@types/product';

const dataService = new ProductsService();

export default function useProductsData(searchQuery = "", page = 1) {
    const { data, isLoading, isRefetching } = useQuery<ProductProps>({
        queryKey: ['products', searchQuery, page],
        queryFn: () => dataService.getProducts(searchQuery, page),
    });

    return {
        query: data ?? [],
        loading: isRefetching || isLoading,
    };
}