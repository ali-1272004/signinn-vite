import React, { useState } from 'react';
import { Auth } from './components/Auth';
import { Dashboard } from './components/Dashboard';
import { User } from './types';
import { Activity, ShieldCheck, Heart, UserPlus, ArrowRight, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showAuth, setShowAuth] = useState(false);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    setShowAuth(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // If user is logged in, show dashboard
  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  // If auth modal/page is active
  if (showAuth) {
    return (
      <Auth onLogin={handleLogin} onBack={() => setShowAuth(false)} />
    );
  }

  // Landing Page
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Dark Blue Section Wrapper (Header + Hero) */}
      <div className="relative bg-secondary-600 overflow-hidden">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        {/* Header */}
        <header className="relative z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex justify-between items-center">
            <div className="flex items-center gap-3">
               <Activity className="h-8 w-8 text-white" />
               <span className="text-2xl font-bold text-white tracking-tight">HealthCa</span>
            </div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                 <a href="#" className="text-white hover:text-primary-400 transition-colors">Home</a>
                 <a href="#about" className="hover:text-white transition-colors">About Us</a>
                 <a href="#services" className="hover:text-white transition-colors">Service +</a>
                 <a href="#pages" className="hover:text-white transition-colors">Pages +</a>
                 <a href="#blog" className="hover:text-white transition-colors">Blog +</a>
                 <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </nav>
              <button 
                onClick={() => setShowAuth(true)}
                className="bg-white text-secondary-600 px-7 py-3 rounded-full font-bold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 text-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 space-y-8 animate-fadeIn z-10">
            <p className="text-primary-400 font-bold tracking-widest uppercase text-sm">Hospital & Medical Clinic</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              We Are A Full Service Clinic With Modern Technology
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-lg font-light">
              Experience the future of healthcare with our advanced patient portal. Book appointments, track your history, and consult with AI specialists instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => setShowAuth(true)}
                className="px-9 py-4 bg-primary-500 text-white rounded-full font-bold hover:bg-primary-600 transition-all shadow-glow flex items-center justify-center gap-2 text-base"
              >
                Make Appointment <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative h-full min-h-[500px] w-full flex items-end justify-center lg:justify-end">
             {/* Doctor Image mimicking the screenshot style */}
             <div className="relative z-10 w-full max-w-lg">
                <img 
                  src="https://img.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg?t=st=1715000000~exp=1715003600~hmac=fake_token" 
                  alt="Doctor" 
                  className="rounded-t-[3rem] object-cover border-4 border-white/20 shadow-2xl relative z-10 mask-image-gradient"
                  style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                />
                
                {/* Floating Badge */}
                <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms]">
                   <div className="bg-primary-50 p-2 rounded-full">
                     <CheckCircle2 className="w-6 h-6 text-primary-500" />
                   </div>
                   <div>
                     <p className="text-xs text-slate-400 font-bold">Success Rate</p>
                     <p className="text-lg font-bold text-secondary-600">98%</p>
                   </div>
                </div>
             </div>
             
             {/* Background Circle behind doctor */}
             <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </section>
      </div>

      {/* Services Section (White Background) */}
      <section id="services" className="py-24 bg-white relative -mt-20 z-20 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Emergency Care', icon: Activity, desc: 'Immediate attention for critical health situations with 24/7 ambulance support.' },
                { title: 'Qualified Doctors', icon: UserPlus, desc: 'A team of experienced and certified specialists from top medical universities.' },
                { title: 'Modern Equipment', icon: ShieldCheck, desc: 'State-of-the-art technology for accurate diagnosis and effective treatments.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                  <div className="w-14 h-14 bg-primary-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-600 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-6 text-primary-500 font-bold text-sm hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-16 text-center">
            <div>
               <h3 className="text-4xl font-bold text-secondary-600 mb-2">25+</h3>
               <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">Years Experience</p>
            </div>
            <div className="w-px h-16 bg-slate-200 hidden md:block"></div>
            <div>
               <h3 className="text-4xl font-bold text-secondary-600 mb-2">98%</h3>
               <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">Patient Satisfaction</p>
            </div>
            <div className="w-px h-16 bg-slate-200 hidden md:block"></div>
            <div>
               <h3 className="text-4xl font-bold text-secondary-600 mb-2">4.9</h3>
               <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">Review Rating</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default App;