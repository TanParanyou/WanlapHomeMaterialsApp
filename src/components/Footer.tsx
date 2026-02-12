import { Home, ExternalLink, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer id="about" className="bg-[#4A403A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#8B7355] to-[#6B5B4F] rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">วัสดุก่อสร้างบ้าน</h3>
                <p className="text-[#B8A99A] text-sm">Home Materials</p>
              </div>
            </div>
            <p className="text-[#C4B8A8] leading-relaxed max-w-md">
              รวบรวมข้อมูลวัสดุก่อสร้างสำหรับบ้าน จากบุญถาวร 
              แสดงราคา รายละเอียดสินค้า และข้อมูลที่จำเป็นสำหรับการวางแผนก่อสร้าง
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">แหล่งข้อมูล</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.boonthavorn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#C4B8A8] hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>บุญถาวร (Boonthavorn)</span>
                </a>
              </li>
              <li className="text-[#9C8B73] text-sm">
                ข้อมูลสินค้าทั้งหมดมาจากเว็บไซต์บุญถาวร
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#5A504A] pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#9C8B73] text-sm">
              © 2026 วัสดุก่อสร้างบ้าน - ข้อมูลจากบุญถาวร
            </p>
            <p className="flex items-center gap-1 text-[#9C8B73] text-sm">
              สร้างด้วย <Heart className="w-4 h-4 text-red-400 fill-red-400" /> สำหรับโครงการบ้าน
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
