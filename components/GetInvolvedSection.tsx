import React, { useState } from 'react';
import { Send, CheckCircle, HandHeart, Users, Lightbulb } from 'lucide-react';

const GetInvolvedSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'volunteer',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', interest: 'volunteer', message: '' });
    }, 1000);
  };

  return (
    <section id="involved" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-50 skew-x-12 translate-x-20 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Join the Movement</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Your Skills Can <br/>
                <span className="text-secondary italic">Transform Lives</span>
              </h3>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that everyone has something to give. Whether you are a teacher, a doctor, an agricultural expert, or simply someone with a heart for service, there is a place for you at Kwakuka Foundation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col gap-3">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center text-primary">
                  <HandHeart size={24} />
                </div>
                <h4 className="font-bold text-gray-900">Volunteer</h4>
                <p className="text-sm text-gray-600">Join us on the ground in Victoria Falls or support remotely.</p>
              </div>
              
              <div className="flex flex-col gap-3">
                 <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center text-secondary">
                  <Users size={24} />
                </div>
                <h4 className="font-bold text-gray-900">Partner</h4>
                <p className="text-sm text-gray-600">Collaborate with us as a corporate or NGO partner.</p>
              </div>

               <div className="flex flex-col gap-3">
                 <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center text-accent">
                  <Lightbulb size={24} />
                </div>
                <h4 className="font-bold text-gray-900">Share Skills</h4>
                <p className="text-sm text-gray-600">Offer expertise in agriculture, healthcare, or education.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 relative">
               {isSubmitted ? (
                 <div className="text-center py-12 animate-fade-in">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                     <CheckCircle size={40} />
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Thank You!</h3>
                   <p className="text-gray-600">
                     We have received your interest. A team member will reach out to you shortly to discuss how we can work together.
                   </p>
                   <button 
                     onClick={() => setIsSubmitted(false)}
                     className="mt-8 text-primary font-medium hover:text-amber-700 underline"
                   >
                     Send another message
                   </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div>
                     <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">Get Involved Today</h3>
                     <p className="text-gray-500 text-sm">Fill out the form below to express your interest.</p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-700">Full Name</label>
                       <input 
                         required
                         type="text" 
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                         placeholder="Jane Doe"
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                       />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-700">Email Address</label>
                       <input 
                         required
                         type="email" 
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                         placeholder="jane@example.com"
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                       />
                     </div>
                   </div>

                   <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-700">I'm interested in...</label>
                     <select 
                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                       value={formData.interest}
                       onChange={(e) => setFormData({...formData, interest: e.target.value})}
                     >
                       <option value="volunteer">Volunteering my Time</option>
                       <option value="skills">Donating my Skills/Expertise</option>
                       <option value="fundraising">Fundraising</option>
                       <option value="partnership">Corporate Partnership</option>
                       <option value="other">Other</option>
                     </select>
                   </div>

                   <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
                     <textarea 
                       rows={4}
                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                       placeholder="Tell us a bit about yourself or how you'd like to help..."
                       value={formData.message}
                       onChange={(e) => setFormData({...formData, message: e.target.value})}
                     ></textarea>
                   </div>

                   <button 
                     type="submit"
                     className="w-full bg-secondary hover:bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                   >
                     Submit Interest <Send size={18} />
                   </button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;