import { useQuery } from '@tanstack/react-query';
import { ProductsService } from '../service/useServiceData';

const dataService = new ProductsService();

export default function useProductsData() {
    const { data, isLoading } = useQuery({
        queryKey: ['products'], 
        queryFn: () => dataService.getProducts(), 
    });

    return {
        query: data,
        loading: isLoading,
    };
}
