import type { Product } from '@/types/product';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Package, Ruler, Palette, Tag, Box } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number | null) => {
    if (price === null) return '-';
    return price.toLocaleString('th-TH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <Card className="group overflow-hidden bg-[#FDFBF7] border-[#E8E2D9] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-[#F5F0E8] to-[#EBE5DD] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 400 400"%3E%3Crect fill="%23F5F0E8" width="400" height="400"/%3E%3Ctext fill="%239C8B73" font-family="sans-serif" font-size="16" dy="10.5" font-weight="500" x="50%25" y="50%25" text-anchor="middle"%3Eไม่มีรูปภาพ%3C/text%3E%3C/svg%3E';
          }}
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-[#8B7355] hover:bg-[#7A6548] text-white text-xs font-medium">
            {product.category}
          </Badge>
        </div>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        >
          <ExternalLink className="w-4 h-4 text-[#6B5B4F]" />
        </a>
      </div>

      {/* Content */}
      <CardContent className="p-5">
        {/* Location Badge */}
        <div className="mb-3">
          <Badge variant="outline" className="border-[#D4C8B8] text-[#8B7355] text-xs bg-[#FAF8F4]">
            {product.location}
          </Badge>
        </div>

        {/* Product Name */}
        <h3 className="text-[#4A403A] font-semibold text-base leading-snug mb-3 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Product Code */}
        <div className="flex items-center gap-2 text-sm text-[#8B7B6B] mb-4">
          <Tag className="w-3.5 h-3.5" />
          <span>รหัส: {product.code}</span>
        </div>

        {/* Price Section */}
        <div className="bg-[#F5F0E8] rounded-lg p-3 mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-[#8B7B6B]">ราคาต่อหน่วย</span>
            <span className="text-[#6B5B4F] font-semibold">
              ฿{formatPrice(product.pricePerUnit)}
            </span>
          </div>
          {product.pricePerSqm && (
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#8B7B6B]">ราคาต่อตร.ม.</span>
              <span className="text-[#8B7355] font-medium">
                ฿{formatPrice(product.pricePerSqm)}
              </span>
            </div>
          )}
        </div>

        {/* Details Grid */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-[#6B5B4F]">
            <Box className="w-3.5 h-3.5 text-[#9C8B73]" />
            <span className="text-[#8B7B6B]">ยี่ห้อ:</span>
            <span className="font-medium">{product.brand}</span>
          </div>
          <div className="flex items-center gap-2 text-[#6B5B4F]">
            <Palette className="w-3.5 h-3.5 text-[#9C8B73]" />
            <span className="text-[#8B7B6B]">สี:</span>
            <span className="font-medium">{product.color}</span>
          </div>
          <div className="flex items-center gap-2 text-[#6B5B4F]">
            <Ruler className="w-3.5 h-3.5 text-[#9C8B73]" />
            <span className="text-[#8B7B6B]">ขนาด:</span>
            <span className="font-medium">{product.size}</span>
          </div>
          <div className="flex items-center gap-2 text-[#6B5B4F]">
            <Package className="w-3.5 h-3.5 text-[#9C8B73]" />
            <span className="text-[#8B7B6B]">คงคลัง:</span>
            <span className="font-medium text-green-600">{product.stock}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
