import { Home, Hammer, Info } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B7355] to-[#6B5B4F] rounded-xl flex items-center justify-center shadow-sm">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-[#4A403A] font-bold text-lg leading-tight">
                วัสดุก่อสร้างบ้าน
              </h1>
              <p className="text-[#9C8B73] text-xs">Home Materials</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden sm:flex items-center gap-1">
            <a
              href="#products"
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#6B5B4F] hover:text-[#8B7355] hover:bg-[#F5F0E8] rounded-lg transition-colors"
            >
              <Hammer className="w-4 h-4" />
              <span>รายการสินค้า</span>
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#6B5B4F] hover:text-[#8B7355] hover:bg-[#F5F0E8] rounded-lg transition-colors"
            >
              <Info className="w-4 h-4" />
              <span>เกี่ยวกับ</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
