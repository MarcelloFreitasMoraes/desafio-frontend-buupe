import { http } from "./https";

export class ProductsService {
    async getProducts(searchQuery = "", page = 1) {
        const { data } = await http.get(`/products`, {
            params: { productName_like: searchQuery, page },
        });
        return data;
    }
}