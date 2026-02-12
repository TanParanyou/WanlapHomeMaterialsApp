import { ArrowDown, Building2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#FAF8F4] via-[#F5F0E8] to-[#EBE5DD] py-16 sm:py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4C8B8]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#C4B8A8]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B7355] to-[#6B5B4F] rounded-2xl shadow-lg mb-6">
            <Building2 className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A403A] mb-4 leading-tight">
            รวมรายการ<span className="text-[#8B7355]">วัสดุก่อสร้างบ้าน</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#6B5B4F] text-lg sm:text-xl mb-4">
            ข้อมูลสินค้าจากบุญถาวรสำหรับการก่อสร้างบ้านของคุณ
          </p>

          {/* Description */}
          <p className="text-[#8B7B6B] text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            รวบรวมข้อมูลกระเบื้องปูพื้น กระเบื้องผนัง และสุขภัณฑ์ 
            สำหรับห้องต่างๆ ในบ้าน พร้อมราคาและรายละเอียดครบถ้วน
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-6 py-4 border border-[#E8E2D9]">
              <div className="text-2xl sm:text-3xl font-bold text-[#8B7355]">6</div>
              <div className="text-sm text-[#6B5B4F]">รายการสินค้า</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-6 py-4 border border-[#E8E2D9]">
              <div className="text-2xl sm:text-3xl font-bold text-[#8B7355]">3</div>
              <div className="text-sm text-[#6B5B4F]">ประเภท</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-6 py-4 border border-[#E8E2D9]">
              <div className="text-2xl sm:text-3xl font-bold text-[#8B7355]">6</div>
              <div className="text-sm text-[#6B5B4F]">พื้นที่ใช้งาน</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#products"
            className="inline-flex flex-col items-center gap-2 text-[#8B7B6B] hover:text-[#8B7355] transition-colors"
          >
            <span className="text-sm">ดูรายการสินค้า</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
