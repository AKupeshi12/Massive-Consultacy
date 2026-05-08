import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Handshake, 
  Sprout, 
  Layout, 
  MapPin, 
  Camera,
  Globe,
  Mail,
  Phone,
  BarChart3,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" 
            alt="Agricultural Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="inline-block bg-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Empowering Smallholder Farmers
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              Transforming <span className="text-secondary-container">Agriculture</span> Through Systems
            </h1>
            <p className="text-xl text-primary-fixed/90 mb-10 leading-relaxed max-w-xl">
              From field evidence to global impact. We bridge the gap between traditional farming and high-value agribusiness through strategic value chain analysis.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-secondary/20 flex items-center gap-2">
                Start Analysis <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                View Impact Reports
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                <img 
                  id="about-image"
                  src="https://images.unsplash.com/photo-1595841696667-aa69a1939998?auto=format&fit=crop&q=80" 
                  alt="Organization in action" 
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-3xl shadow-xl text-white max-w-xs hidden md:block z-20">
                <p className="text-3xl font-extrabold mb-1">10+</p>
                <p className="text-sm font-bold uppercase tracking-wider opacity-90">Years of Field Experience in Malawi</p>
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">About Organization</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
                Bridging the Gap Between <span className="text-secondary">Field Evidence</span> and Global Impact
              </h3>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                Massive Agribusiness Consultancy is a professional value chain analysis firm dedicated to transforming the agricultural landscape. We specialize in identifying bottlenecks and opportunities within local supply chains to empower smallholder farmers.
              </p>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Our approach is rooted in field-based evidence, using rigorous data analysis to build sustainable, high-value systems that attract global sponsors and NGO partners.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-primary">Sustainable Growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-primary">Global Partnerships</span>
                </div>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-container transition-colors">
                Learn More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology / System Flow */}
      <section id="methodology" className="py-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 {...fadeIn} className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Our Methodology</motion.h2>
            <motion.h3 {...fadeIn} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold text-primary mb-6">OUR SYSTEM FLOW</motion.h3>
            <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-xl text-tertiary font-bold mb-8 italic">FROM IMPACT TO INFLUENCE</motion.p>
            <div className="inline-flex items-center gap-3 bg-primary text-secondary-container px-6 py-3 rounded-full font-bold text-sm">
                A PROVEN SYSTEM TO ATTRACT SPONSORS & TRANSFORM AGRICULTURE
            </div>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { id: '01', title: 'CAPTURE IMPACT', icon: <Camera />, items: ['Field photos & activities', 'Farmer stories & outcomes', 'Before-and-after evidence'] },
              { id: '02', title: 'BUILD ONLINE PRESENCE', icon: <Globe />, items: ['Professional website', 'Impact projects & case studies', 'Sponsor partnership portal'] },
              { id: '03', title: 'BE VISIBLE EVERYWHERE', icon: <MapPin />, items: ['Google Business setup', 'Service optimization', 'Search & Maps appearance'] },
              { id: '04', title: 'ATTRACT SPONSORS', icon: <Handshake />, items: ['Sponsorship strategies', 'NGO & Donor outreach', 'Downloadable proposals'] },
              { id: '05', title: 'ENGAGE & SERVE', icon: <Users />, items: ['Structured inquiry forms', 'WhatsApp CRM integration', 'Professional communication'] },
              { id: '06', title: 'GROW IMPACT & SCALE', icon: <TrendingUp />, items: ['High-value projects', 'Strengthen funding', 'Sustainable agribusiness'] },
            ].map((step, idx) => (
              <motion.div 
                key={step.id}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-secondary/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">{step.id}</span>
                  <div className="text-secondary group-hover:scale-110 transition-transform">
                    {React.cloneElement(step.icon as React.ReactElement, { className: 'w-10 h-10' })}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-4 tracking-tight">{step.title}</h4>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-on-surface-variant text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Farmer Projects / Case Studies */}
      <section id="farmer-projects" className="py-24 bg-surface-container">
        <div className="container mx-auto px-6">
          <div id="case-studies" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Farmer Projects</h2>
              <h3 className="text-4xl font-extrabold text-primary mb-6">Proven Success in the Field</h3>
              <p className="text-lg text-on-surface-variant">
                We transform traditional farming into structured agribusiness models that deliver measurable impact for local communities.
              </p>
            </div>
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 whitespace-nowrap">
              View All Case Studies <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Soybean Value Chain Scaling', 
                location: 'Mchinji District', 
                impact: 'Increased smallholder yield by 40% through systemized training.',
                image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80'
              },
              { 
                title: 'Irrigation & Year-Round Farming', 
                location: 'Dedza Highlands', 
                impact: 'Enabled 3 harvest cycles per year for 200+ households.',
                image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80'
              },
              { 
                title: 'Global Export Certification', 
                location: 'Lilongwe Region', 
                impact: 'Secured international market access for premium groundnut exports.',
                image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80'
              },
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-secondary" /> {project.location}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-primary mb-4">{project.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    {project.impact}
                  </p>
                  <Link to="#" className="text-secondary font-bold text-sm flex items-center gap-2 group/link">
                    Read Full Case Study <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="impact" className="py-24 bg-primary overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="bg-primary-container p-12 rounded-[2rem] border border-white/10 relative overflow-hidden">
               <motion.h3 
                 {...fadeIn}
                 className="text-2xl md:text-4xl font-bold text-center text-white mb-16 tracking-tight uppercase"
               >
                 THE RESULT: A STRONGER, MORE SUSTAINABLE AGRIBUSINESS
               </motion.h3>
               <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                  {[
                    { icon: <Eye />, label: 'Increased Visibility & Credibility' },
                    { icon: <Handshake />, label: 'More Sponsors & Partnerships' },
                    { icon: <Users />, label: 'More Clients & Projects' },
                    { icon: <Sprout />, label: 'Sustainable Growth & Impact' },
                    { icon: <BarChart3 />, label: 'Stronger Systems. Better Future.' }
                  ].map((res, i) => (
                    <motion.div 
                      key={i} 
                      {...fadeIn} 
                      transition={{ delay: i * 0.1 }}
                      className="space-y-4 flex flex-col items-center"
                    >
                      <div className="text-secondary-container bg-white/5 p-4 rounded-2xl w-fit">
                        {React.cloneElement(res.icon as React.ReactElement, { className: 'w-8 h-8' })}
                      </div>
                      <p className="text-white text-xs font-bold uppercase tracking-wide leading-tight px-2">
                        {res.label}
                      </p>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Case Studies / Testimonial Placeholder */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">
              Ready to transform your <span className="text-secondary">Agribusiness</span>?
            </h2>
            <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
              Let's build systems that attract opportunities and create long-term impact for your community. Our team of experts is ready to map your value chain and scale your visibility globally.
            </p>
            <div className="grid gap-6">
              {[
                { icon: <Phone />, label: '0890155073 / 0993881248' },
                { icon: <Mail />, label: 'massivevaluechainanalysis@gmail.com' },
                { icon: <MapPin />, label: 'Malawi Office' }
              ].map((contact, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    {React.cloneElement(contact.icon as React.ReactElement, { className: 'w-5 h-5' })}
                  </div>
                  <span className="font-bold text-primary">{contact.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1621460207128-4f81014cc679?auto=format&fit=crop&q=80" 
                alt="Farmer with Harvest" 
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                 <div className="text-white">
                    <p className="text-secondary-container font-bold mb-2">Sustainable Impact</p>
                    <h4 className="text-2xl font-bold">Scaling local production to international standards.</h4>
                 </div>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Contact / Inquiry Section */}
      <section id="contact" className="py-24 bg-surface-container relative">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn}>
                 <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Get in Touch</h2>
                 <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">
                    Submit an <span className="text-secondary">Inquiry</span>
                 </h3>
                 <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
                    Whether you're a farmer Cooperative or a potential sponsor, our systems are designed to foster growth and transparency. Fill out the form below and our team will get back to you within 24 hours.
                 </p>
                 
                 <form className="space-y-6 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Full Name</label>
                          <input 
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full bg-surface px-6 py-4 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Email Address</label>
                          <input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full bg-surface px-6 py-4 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                          />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Subject</label>
                       <select className="w-full bg-surface px-6 py-4 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all appearance-none">
                          <option>Value Chain Analysis</option>
                          <option>Sponsorship Inquiry</option>
                          <option>Farmer Training Programs</option>
                          <option>NGO Partnership</option>
                          <option>General Support</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Message</label>
                       <textarea 
                         rows={4} 
                         placeholder="How can we help you?" 
                         className="w-full bg-surface px-6 py-4 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                       ></textarea>
                    </div>
                    <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary-container transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                       Send Inquiry <ArrowRight className="w-5 h-5" />
                    </button>
                 </form>
              </motion.div>

              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:sticky lg:top-32">
                 <div className="relative mb-12">
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl relative group h-[400px]">
                      <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" 
                        alt="Sustainable Farming" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-10">
                         <div className="text-white">
                            <h4 className="text-2xl font-bold mb-2 tracking-tight">Direct Field Impact</h4>
                            <p className="text-white/80">Connecting local smallholders to regional and global opportunities.</p>
                         </div>
                      </div>
                    </div>
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-full flex items-center justify-center text-white border-8 border-surface-container rotate-12">
                       <Globe className="w-10 h-10 animate-pulse" />
                    </div>
                 </div>

                 <div className="space-y-6 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                    <h4 className="text-xl font-extrabold text-primary mb-6">Contact Information</h4>
                    {[
                      { icon: <Phone />, label: '0890155073 / 0993881248', desc: 'Call or WhatsApp' },
                      { icon: <Mail />, label: 'massivevaluechainanalysis@gmail.com', desc: 'Email our team' },
                      { icon: <MapPin />, label: 'Malawi Office', desc: 'Visit us' }
                    ].map((contact, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
                          {React.cloneElement(contact.icon as React.ReactElement, { className: 'w-5 h-5' })}
                        </div>
                        <div>
                           <p className="font-bold text-primary">{contact.label}</p>
                           <p className="text-sm text-on-surface-variant font-medium">{contact.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </motion.div>
           </div>
        </div>
      </section>
    </div>
  );
}
