import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-extrabold mb-6 tracking-tight">MASSIVE</h2>
          <p className="text-primary-fixed/80 text-sm leading-relaxed mb-8">
            Building sustainable agribusiness businesses through professional value chain analysis and strategic partnerships.
          </p>
          <div className="flex gap-4">
             {/* Social placeholders could go here */}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm text-primary-fixed/80">
            <li><Link to="/#impact" className="hover:text-secondary transition-colors">Impact Reports</Link></li>
            <li><Link to="/#farmers" className="hover:text-secondary transition-colors">Farmer Portal</Link></li>
            <li><Link to="/sponsors" className="hover:text-secondary transition-colors">Sponsor Hub</Link></li>
            <li><Link to="/#services" className="hover:text-secondary transition-colors">Our Services</Link></li>
            <li><Link to="/#contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Legal</h3>
          <ul className="space-y-4 text-sm text-primary-fixed/80">
            <li><Link to="#" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-secondary transition-colors">Ethics & Compliance</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Connect</h3>
          <ul className="space-y-4 text-sm text-primary-fixed/80">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-secondary" />
              <span>0890155073 / 0993881248</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-secondary" />
              <span>massivevaluechainanalysis@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Lilongwe, Malawi</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-fixed/60">
        <p>© 2024 Massive Value Chain Analysis Consultancy. Building Sustainable Agribusiness Together.</p>
        <div className="flex gap-6">
          <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> Malawi Office</span>
        </div>
      </div>
    </footer>
  );
}
