import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FilterBar } from '@/components/FilterBar';
import { ProductList } from '@/components/ProductList';
import { Footer } from '@/components/Footer';
import { products } from '@/data/products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  const [selectedLocation, setSelectedLocation] = useState('ทั้งหมด');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === 'ทั้งหมด' || product.category === selectedCategory;
      const locationMatch = selectedLocation === 'ทั้งหมด' || product.location === selectedLocation;
      return categoryMatch && locationMatch;
    });
  }, [selectedCategory, selectedLocation]);

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <Header />
      
      <main>
        <Hero />
        
        <section id="products" className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4A403A] mb-3">
                รายการสินค้า
              </h2>
              <p className="text-[#6B5B4F] max-w-2xl mx-auto">
                เลือกดูสินค้าตามประเภทหรือพื้นที่ใช้งานที่ต้องการ
              </p>
            </div>

            {/* Filters */}
            <FilterBar
              selectedCategory={selectedCategory}
              selectedLocation={selectedLocation}
              onCategoryChange={setSelectedCategory}
              onLocationChange={setSelectedLocation}
            />

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-[#6B5B4F] text-sm">
                แสดง <span className="font-semibold text-[#8B7355]">{filteredProducts.length}</span> รายการ
              </p>
            </div>

            {/* Product Grid */}
            <ProductList products={filteredProducts} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
