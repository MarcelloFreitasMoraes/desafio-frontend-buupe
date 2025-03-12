import React from 'react';
import { Card } from '../../components/ui/card';
import useProductsData from '../../hooks/useProductsData';
import { Product } from '../../@types/product';
import ProductSkeleton from '../../components/product-skeleton';
import { Input } from '../../components/ui/input';
import { Checkbox } from '../../components/ui/checkbox';

const priceFilters = [
  { id: "preco-abaixo-50", label: "Abaixo de R$50" },
  { id: "preco-50-100", label: "Entre R$50 e R$100" },
  { id: "preco-acima-100", label: "Acima de R$100" },
];

const Home: React.FC = () => {
  const { query, loading } = useProductsData();
  console.log(query, 'query');

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className='py-4'>
            <Input className='border-t border-gray-300 bg-white' />
          </div>

          <div className='pb-4'>
            <h2 className="text-lg font-semibold text-black">Filtrar por Preço</h2>

            {priceFilters.map((filter) => (
              <div key={filter.id} className="flex items-center gap-2 mt-2">
                <Checkbox id={filter.id} className='border-t border-gray-200 bg-white' />
                <label htmlFor={filter.id} className="text-black cursor-pointer">
                  {filter.label}
                </label>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {query?.map((product: Product) => (
              <Card key={product.id} className="p-4 border-t border-gray-200 bg-white rounded-2xl shadow-md shadow-black/14 overflow-hidden">
                <div className='w-full h-40'>
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={product.productImg}
                    alt={product.productName}
                  />
                </div>
                <h3 className="text-lg font-semibold text-black">{product.productName}</h3>
                <p className="text-gray-600">{product.productDescription}</p>
                <p className="font-bold text-black">{product.productPrice}</p>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Home;