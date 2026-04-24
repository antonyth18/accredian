import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer({ onEnquire }: { onEnquire?: () => void }) {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
          {/* Left */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-[#2563EB] leading-none mb-1">
              accredian
            </h2>
            <p className="text-sm text-[#64748B]">credentials that matter</p>
            
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#2563EB] hover:text-white flex items-center justify-center transition-colors text-gray-500">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#2563EB] hover:text-white flex items-center justify-center transition-colors text-gray-500">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#2563EB] hover:text-white flex items-center justify-center transition-colors text-gray-500">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#2563EB] hover:text-white flex items-center justify-center transition-colors text-gray-500">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#2563EB] hover:text-white flex items-center justify-center transition-colors text-gray-500">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-end">
            <button onClick={onEnquire} className="bg-[#2563EB] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors">
              Enquire Now
            </button>
            <p className="text-[#64748B] text-sm md:text-right mt-2">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Two-Column Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-md gap-8 mb-10">
          
          {/* Column 1 */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-[#0F172A] mb-3">Accredian</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-[#64748B] hover:text-[#0F172A] text-sm transition-colors">About</a>
              <a href="#" className="text-[#64748B] hover:text-[#0F172A] text-sm transition-colors">Blog</a>
              <a href="#" className="text-[#64748B] hover:text-[#0F172A] text-sm transition-colors">Why Accredian</a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-[#0F172A] mb-3">Contact Us</h4>
            <a href="mailto:enterprise@accredian.com" className="text-[#2563EB] text-sm mb-2 hover:underline">
              enterprise@accredian.com
            </a>
            <p className="text-[#64748B] text-sm leading-relaxed">
              4th Floor, 250, Phase IV, Udyog Vihar,<br />
              Sector 18, Gurugram, Haryana
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-100 pt-4 text-center text-[#9CA3AF] text-sm">
          &copy; 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>

      </div>
    </footer>
  );
}
