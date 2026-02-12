import { categories, locations } from '@/data/products';
import { Filter, MapPin, Grid3X3 } from 'lucide-react';

interface FilterBarProps {
  selectedCategory: string;
  selectedLocation: string;
  onCategoryChange: (category: string) => void;
  onLocationChange: (location: string) => void;
}

export function FilterBar({
  selectedCategory,
  selectedLocation,
  onCategoryChange,
  onLocationChange
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#E8E2D9] p-4 sm:p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-[#8B7355]" />
        <h3 className="text-[#4A403A] font-semibold">ตัวกรอง</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Category Filter */}
        <div>
          <label className="flex items-center gap-2 text-sm text-[#6B5B4F] mb-2">
            <Grid3X3 className="w-4 h-4 text-[#9C8B73]" />
            <span>ประเภทสินค้า</span>
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-[#FAF8F4] border border-[#D4C8B8] rounded-lg text-[#4A403A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8B7355]/30 focus:border-[#8B7355] transition-all"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="flex items-center gap-2 text-sm text-[#6B5B4F] mb-2">
            <MapPin className="w-4 h-4 text-[#9C8B73]" />
            <span>พื้นที่ใช้งาน</span>
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-[#FAF8F4] border border-[#D4C8B8] rounded-lg text-[#4A403A] text-sm focus:outline-none focus:ring-2 focus:ring-[#8B7355]/30 focus:border-[#8B7355] transition-all"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
