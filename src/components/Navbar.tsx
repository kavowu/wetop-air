import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '首頁', href: '/' },
    { label: '根本原因', href: '/root-cause' },
    { label: '防制方案', href: '/solutions' },
    { label: '常見問題', href: '/faq' },
    { label: '聯絡諮詢', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src={`${import.meta.env.BASE_URL}images/WETOP-LOGO-紅.png`} 
              alt="WETOP Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-base sm:text-lg text-primary">
              <span className="inline sm:hidden">空調專業諮詢中心</span>
              <span className="hidden sm:inline">台灣居家空調專業諮詢中心</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-100 animate-in fade-in-50 duration-200">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
