import { http } from "./https";

export class ProductsService {
    async getProducts(searchQuery = "", priceRange = "", page = 1, limit = 10) {
        try {
            // 🔍 Buscar **todos os produtos filtrados**, sem paginação
            const { data: allFilteredProducts } = await http.get(`/products`, {
                params: { productName_like: searchQuery, price: priceRange, _limit: limit },
            });

            console.log(allFilteredProducts, '🔍 Todos os itens filtrados');

            // ✂️ Retorna apenas os primeiros `limit` itens para exibição inicial
            const paginatedData = allFilteredProducts.slice(0, limit);

            console.log(paginatedData, '📌 Primeiros itens retornados');

            return {
                data: paginatedData,
                totalItems: allFilteredProducts.length, // Total de itens encontrados na busca
            };
        } catch (error) {
            console.error("❌ Erro ao buscar produtos:", error);
            return { data: [], totalItems: 0 };
        }
    }
}
