import { http } from "./https";

export class ProductsService {
    async getProducts(searchQuery = "", priceRange = "", page = 1) {
        const { data } = await http.get(`/products`, {
            params: { search: searchQuery, price: priceRange, page },
        });
        return data;
    }
}
