import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { BarChart3, Users, Globe, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetailManagement = () => {
  const pillars = [
    { icon: Globe, title: 'Global Sourcing', desc: 'Procuring the finest yarns and fabrics from trusted international and domestic suppliers.' },
    { icon: Target, title: 'Quality Control', desc: 'Rigorous multi-stage quality checks ensuring only the best reaches our shelves.' },
    { icon: BarChart3, title: 'Inventory Management', desc: 'State-of-the-art warehousing and real-time stock tracking for zero delays.' },
    { icon: Users, title: 'Customer Relations', desc: 'Dedicated B2B relationship managers to assist wholesale and retail partners.' },
  ];

  return (
    <div>
      <PageHeader title="Retail Management" />

      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <div className="max-w-2xl mb-16">
            <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-4">Our Operations</p>
            <h2 className="text-4xl font-serif font-light text-[#0B1C3E]">Excellence in Operations</h2>
            <div className="w-12 h-0.5 bg-[#D4A853] mt-4 mb-6" />
            <p className="text-[#6B7A99] text-sm leading-relaxed font-light">
              Discover how we manage a vast network of retail supply chains to deliver unparalleled quality.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0B1C3E]/8 mb-16">
            {pillars.map((p, i) => (
              <div key={i} className="group bg-white p-8 hover:bg-[#FAF7F0] transition-colors duration-300 border-b-2 border-transparent hover:border-[#D4A853]">
                <div className="w-10 h-10 border border-[#D4A853]/30 flex items-center justify-center mb-6 group-hover:border-[#D4A853] group-hover:bg-[#D4A853]/10 transition-all">
                  <p.icon size={18} className="text-[#D4A853]" />
                </div>
                <h3 className="text-base font-serif font-medium text-[#0B1C3E] mb-3">{p.title}</h3>
                <p className="text-[#6B7A99] text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Partner CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#0B1C3E] p-12 flex flex-col justify-center">
              <p className="text-[#D4A853] text-xs uppercase tracking-[0.4em] font-medium mb-4">Partnership</p>
              <h2 className="text-3xl font-serif font-light text-white mb-6">Partnering for Growth</h2>
              <p className="text-white/50 text-sm leading-relaxed font-light mb-8">
                Our retail management strategy focuses on mutual growth. We offer franchisee opportunities, shop-in-shop models, and bulk distribution channels. Our tech-enabled supply chain ensures that our partners always have access to the latest trends and stock.
              </p>
              <Link
                to="/trade-enquiry"
                className="self-start bg-[#D4A853] text-[#0B1C3E] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-white transition-all duration-300"
              >
                Become a Partner
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1584227185011-8071e6be12b5?auto=format&fit=crop&q=80&w=800"
                alt="Retail Management"
                className="w-full h-full object-cover"
                style={{ minHeight: '350px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailManagement;
