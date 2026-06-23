import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">台灣居家空調專業諮詢中心</h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              專業分析台灣居家空調出風口結露與環境發霉的根本原因，提供科學防制方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4">快速連結</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white transition-colors">首頁</Link>
              </li>
              <li>
                <Link href="/root-cause" className="text-gray-200 hover:text-white transition-colors">根本原因</Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-200 hover:text-white transition-colors">防制方案</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-200 hover:text-white transition-colors">常見問題</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors">聯絡諮詢</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-base mb-4">聯絡資訊</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-200">
              <li>💬 LINE ID: @wetop</li>
              <li>📞 03-6685878</li>
              <li>📍 新竹縣竹北市文興路一段360號</li>
              <li>⏰ 週一至週五 10:00-18:00</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-gray-200 text-sm sm:text-base">
            © {currentYear} WETOP 版權所有。
          </p>
        </div>
      </div>
    </footer>
  );
}
