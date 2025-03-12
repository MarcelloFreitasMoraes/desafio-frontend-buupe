import { http } from "./https";

export class ProductsService {
    async getProducts({ search = "", priceRange = "", page = 1 }) {
        const { data } = await http.get(`/products`, {
            params: {
                search,
                priceRange,
                page
            }
        });
        return data;
    }
}
