import React from 'react';
import { Card } from './ui/card';
import { Skeleton } from './skeleton';

const ProductSkeleton: React.FC = () => {
  return (
    <Card className="p-4 border rounded-lg shadow-md">
      <Skeleton className="w-full h-40 rounded-md" />
      <Skeleton className="h-6 w-3/4 mt-2" />
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-5 w-1/2 mt-2" />
    </Card>
  );
};

export default ProductSkeleton;
