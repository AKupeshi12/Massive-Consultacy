import React from 'react';
import { motion } from 'motion/react';
import { 
  FileDown, 
  Handshake, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase,
  Heart,
  BarChart3,
  Globe
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function SponsorsPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight"
            >
              Partner with <span className="text-secondary-container">Impact</span>
            </motion.h1>
            <p className="text-xl text-primary-fixed/80 leading-relaxed mb-10">
              Join a network of global sponsors and NGOs dedicated to sustainable agricultural growth in Malawi. We provide the systems, you provide the spark.
            </p>
            <button className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-secondary/20">
              <FileDown className="w-5 h-5" /> Download Sponsorship Proposal
            </button>
          </div>
        </div>
        {/* Background Graphic */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary-container/5 -skew-x-12 transform translate-x-20" />
      </section>

      {/* Partnership Opportunities */}
      <section id="opportunities" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Engagement</h2>
            <h3 className="text-4xl font-extrabold text-primary">Partnership Opportunities</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                title: 'NGO Collaboration', 
                icon: <Users />, 
                desc: 'Strategic partnerships with international and local NGOs to implement community-level farming models.',
                features: ['Joint field implementation', 'Impact data sharing', 'Community mobilization']
              },
              { 
                title: 'Corporate Sponsorship', 
                icon: <Briefcase />, 
                desc: 'High-visibility opportunities for corporations looking to make a measurable difference in emerging markets.',
                features: ['Brand placement', 'CSR report data', 'Direct value chain access']
              },
              { 
                title: 'Philanthropic Donors', 
                icon: <Heart />, 
                desc: 'Individual and foundation funding focused on scaling sustainable practices and ensuring food security.',
                features: ['Individual impact tracking', 'Tax-exempt status help', 'Regular project updates']
              }
            ].map((opp, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-surface border border-gray-100 hover:border-secondary transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  {React.cloneElement(opp.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <h4 className="text-2xl font-bold text-primary mb-6">{opp.title}</h4>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  {opp.desc}
                </p>
                <ul className="space-y-3">
                  {opp.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-primary">
                      <CheckCircle2 className="w-4 h-4 text-secondary" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* NGO Deep Dive */}
          <div className="bg-primary rounded-[3rem] p-10 md:p-16 text-white grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <h4 className="text-sm font-bold text-secondary-container uppercase tracking-widest mb-6">NGO Collaboration</h4>
                <h5 className="text-3xl font-extrabold mb-8">Bridging NGO Goals with Field Execution</h5>
                <p className="text-primary-fixed/80 text-lg mb-8 leading-relaxed">
                  We act as the specialized technical partner for NGOs who have the funding and mission but need the ground-level agribusiness expertise to ensure sustainability.
                </p>
                <div className="grid grid-cols-2 gap-6">
                   <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary-container w-6 h-6" />
                      <span className="font-bold">M&E Support</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary-container w-6 h-6" />
                      <span className="font-bold">Local Buy-in</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary-container w-6 h-6" />
                      <span className="font-bold">Value Chain ID</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary-container w-6 h-6" />
                      <span className="font-bold">Direct Implementation</span>
                   </div>
                </div>
             </div>
             <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <p className="text-sm italic mb-6">"Massive Ag agribusiness models are the most robust we've found for smallholder transformation in the SADC region."</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary font-bold">UN</div>
                   <div>
                      <p className="font-bold">Dr. Joseph Mbanda</p>
                      <p className="text-xs text-primary-fixed/60">Agricultural Program Lead</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-24 bg-surface-container overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Focus Areas</h2>
            <h3 className="text-4xl font-extrabold text-primary mb-6">Project Categories</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: 'Soybean Scaling', icon: <Sprout />, stats: '12 Districts' },
               { title: 'Seed Production', icon: <Target />, stats: 'Local Varieties' },
               { title: 'Export Logistics', icon: <Globe />, stats: 'Global Ready' },
               { title: 'Farmer Finance', icon: <BarChart3 />, stats: 'Mobile Credit' },
             ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all"
                >
                   <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                      {React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6' })}
                   </div>
                   <h5 className="font-extrabold text-primary mb-2">{item.title}</h5>
                   <p className="text-xs font-bold text-secondary-container bg-secondary/5 px-2 py-1 rounded inline-block mb-4">{item.stats}</p>
                   <p className="text-sm text-on-surface-variant leading-relaxed">
                      Optimizing bottlenecks in the {item.title.toLowerCase()} sector to benefit primary producers.
                   </p>
                </motion.div>
             ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">
            <motion.div {...fadeIn}>
               <h3 className="text-4xl font-extrabold text-primary mb-8 leading-tight">Structured for <span className="text-secondary">Growth</span> and Accountability</h3>
               <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                 We categorize our projects into distinct areas to ensure that every dollar of investment is mapped to a specific community outcome. Our data-driven approach allows sponsors to see real-time impact.
               </p>
               
               <div className="space-y-6">
                 {[
                   { title: 'Tech-Enabled Farming', desc: 'Implementing digital tools for crop monitoring and yield optimization.' },
                   { title: 'Sustainable Infrastructure', desc: 'Building irrigation and storage systems for year-round production.' },
                   { title: 'Market Linkage Programs', desc: 'Connecting smallholders directly to premium international buyers.' }
                 ].map((cat, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                       <span className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-primary shrink-0">{i+1}</span>
                       <div>
                          <h5 className="font-bold text-primary mb-1">{cat.title}</h5>
                          <p className="text-sm text-on-surface-variant">{cat.desc}</p>
                       </div>
                    </div>
                 ))}
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-primary p-12 rounded-[3rem] text-white overflow-hidden group">
                 <div className="relative z-10">
                    <Target className="w-16 h-16 text-secondary-container mb-8" />
                    <h4 className="text-4xl font-extrabold mb-6 leading-tight">Our Community <br />Impact Goals</h4>
                    <p className="text-primary-fixed/80 text-lg mb-12">
                      Targeting <span className="text-white font-bold">50,000+</span> smallholder households by 2026 through improved value chain integration.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                       <div>
                          <p className="text-3xl font-extrabold text-secondary-container mb-1">140%</p>
                          <p className="text-xs uppercase tracking-widest font-bold">Income Increase</p>
                       </div>
                       <div>
                          <p className="text-3xl font-extrabold text-secondary-container mb-1">100%</p>
                          <p className="text-xs uppercase tracking-widest font-bold">Transparency</p>
                       </div>
                    </div>
                 </div>
                 {/* Decorative background element */}
                 <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Call */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-secondary-container/20 rounded-[3rem] p-12 md:p-20 text-center border border-secondary/10 relative overflow-hidden">
              <div className="relative z-10">
                <Globe className="w-16 h-16 text-secondary mx-auto mb-8" />
                <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">Become a Catalyst for Change</h3>
                <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
                  Our team is ready to provide you with a detailed breakdown of current partnership opportunities and past impact data.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                    Inquire About Partnership <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="bg-white border-2 border-primary text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors">
                    Request Impact Report
                  </button>
                </div>
              </div>
              {/* Subtle background circles */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
           </div>
        </div>
      </section>
    </div>
  );
}
