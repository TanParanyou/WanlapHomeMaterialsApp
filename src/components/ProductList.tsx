import type { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { PackageX } from 'lucide-react';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-[#F5F0E8] rounded-full flex items-center justify-center mx-auto mb-4">
          <PackageX className="w-10 h-10 text-[#9C8B73]" />
        </div>
        <h3 className="text-[#4A403A] font-semibold text-lg mb-2">
          ไม่พบสินค้า
        </h3>
        <p className="text-[#8B7B6B]">
          ลองเปลี่ยนตัวกรองเพื่อดูสินค้าอื่น
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
