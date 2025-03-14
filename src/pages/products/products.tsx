import React, { useEffect, useState, useRef } from 'react';
import { Card } from '../../components/ui/card';
import useProductsData from '../../hooks/useProductsData';
import { Product } from '../../@types/product';
import ProductSkeleton from '../../components/product-skeleton';
import { Input } from '../../components/ui/input';
import { Checkbox } from '../../components/ui/checkbox';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Label } from '@/components/ui/label';

const priceFilters = [
  { id: 1, label: "Abaixo de R$50", range: '0-50' },
  { id: 2, label: "Entre R$50 e R$100", range: '51-100' },
  { id: 3, label: "Acima de R$100", range: '101+' },
];

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [selectedRange, setSelectedRange] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("productName") || "");
  const productNameFromQuery = searchParams.get("productName") || "";
  const observerRef = useRef<HTMLDivElement | null>(null);
  const { query, loading } = useProductsData(productNameFromQuery, page);

  useEffect(() => {
    setProducts([]);
  }, [productNameFromQuery, selectedRange]);

  const handleSearch = (value: string) => {
    setSearchParams({ productName: value });
  };

  const filterByPrice = (product: Product) => {
    const price = parseFloat(product.productPrice.replace('R$', '').replace(',', '.').trim());

    switch (selectedRange) {
      case '0-50':
        return price <= 50;
      case '51-100':
        return price > 50 && price <= 100;
      case '101+':
        return price > 100;
      default:
        return true;
    }
  };

  const handleCheckboxChange = (range: string) => {
    setSelectedRange((prev) => (prev === range ? "" : range)); // Deselecionar ao clicar novamente
  };

  useEffect(() => {
    if (query && query?.length > 0) {
      setProducts((prev) => [...prev, ...(Array.isArray(query) ? query : [])]);
    }
  }, [query, selectedRange]);

  useEffect(() => {
    if (productNameFromQuery) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          setIsFetching(true);
          setTimeout(() => {
            setPage(prev => prev + 1);
            setIsFetching(false);
          }, 1000); 
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [products, productNameFromQuery]);

  const displayedProducts = products.filter(filterByPrice).slice(0, page * 10);

  return (
    <div className="container mx-auto p-4">
      <div className='py-4'>
        <Input
          className='border-t border-gray-300 bg-white'
          placeholder="Buscar produto..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(searchQuery); 
          }}
          endIcon={<Search onClick={() => handleSearch(searchQuery)} />} 
        />
      </div>

      <div className='pb-4'>
        <h2 className="text-lg font-semibold text-black">Filtrar por Preço</h2>
        {priceFilters.map((filter) => (
          <div key={filter.id} className="flex items-center gap-2 mt-2">
            <Checkbox
              id={filter.id.toString()}
              className='border-t border-gray-200 bg-white cursor-pointer'
              checked={selectedRange === filter.range}
              onCheckedChange={() => handleCheckboxChange(filter.range)}
            />
            <Label className="text-black cursor-pointer">
              {filter.label}
            </Label>
          </div>
        ))}
      </div>
      {displayedProducts.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayedProducts?.map((product, index) => (
          <Card key={index} className="p-4 border-t border-gray-200 bg-white rounded-2xl shadow-md shadow-black/14 overflow-hidden">
            <div className='w-full h-40'>
              <img className="w-full h-full object-cover rounded-md" src={product.productImg} alt={product.productName} />
            </div>
            <h3 className="text-lg font-semibold text-black">{product.productName}</h3>
            <p className="text-gray-600">{product.productDescription}</p>
            <p className="font-bold text-black">{product.productPrice}</p>
          </Card>
        ))}
      </div>
      ) : (
        <div className="flex justify-center items-center h-96">
          <p className="text-lg text-black">Nenhum produto encontrado</p>
        </div>
      )}

      <div ref={observerRef} className="h-10"></div>   

      {(loading || isFetching) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
