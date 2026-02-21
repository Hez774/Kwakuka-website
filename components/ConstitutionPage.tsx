import React, { useEffect } from 'react';
import { FileText, ArrowLeft, Shield, Globe, Users, BookOpen } from 'lucide-react';

interface ConstitutionPageProps {
  onBack: () => void;
}

const ConstitutionPage: React.FC<ConstitutionPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-secondary hover:text-primary font-medium mb-8 transition-colors group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-secondary p-8 md:p-12 text-center text-white relative overflow-hidden">
             {/* Decorative background pattern */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
             </div>
             
             <div className="relative z-10">
                <div className="mx-auto bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Constitution</h1>
                <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                  The governing document establishing the mission, values, and operational framework of the Kwakuka Foundation for Hope.
                </p>
             </div>
          </div>

          <div className="p-8 md:p-16 space-y-12">
            {/* Preamble / Introduction */}
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="lead text-xl text-gray-800 font-serif italic border-l-4 border-primary pl-6">
                "Established to promote conservation, protect natural heritage, and uplift vulnerable communities through sustainable development and education."
              </p>
            </div>

            {/* Articles */}
            <div className="space-y-8">
              
              {/* Article I */}
              <section className="border-b border-gray-100 pb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-sans font-bold mr-4 uppercase tracking-wider">Article I</span>
                  Name and Establishment
                </h2>
                <div className="pl-0 md:pl-20 text-gray-700 space-y-4">
                  <p>
                    The organisation shall be known as the <strong>Kwakuka Foundation for Hope</strong> (hereinafter referred to as "the Foundation").
                  </p>
                  <p>
                    The Foundation is established as a non-profit organisation under the laws of Zimbabwe, founded in the year <strong>2026</strong>.
                  </p>
                </div>
              </section>

              {/* Article II */}
              <section className="border-b border-gray-100 pb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-sans font-bold mr-4 uppercase tracking-wider">Article II</span>
                  Head Office
                </h2>
                <div className="pl-0 md:pl-20 text-gray-700">
                  <p>
                    The principal office of the Foundation shall be located at:<br/>
                    <strong>8299 Bulawayo Road, Victoria Falls, Zimbabwe.</strong>
                  </p>
                </div>
              </section>

              {/* Article III */}
              <section className="border-b border-gray-100 pb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-sans font-bold mr-4 uppercase tracking-wider">Article III</span>
                  Area of Operation
                </h2>
                <div className="pl-0 md:pl-20 text-gray-700">
                  <p>
                    The Foundation shall operate primarily within the <strong>Matabeleland North Province</strong> of Zimbabwe, with the capacity to extend operations elsewhere as deemed necessary by the Board to fulfill its objectives.
                  </p>
                </div>
              </section>

              {/* Article IV - Aims & Objectives */}
              <section className="border-b border-gray-100 pb-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-sans font-bold mr-4 uppercase tracking-wider">Article IV</span>
                  Aims and Objectives
                </h2>
                <div className="pl-0 md:pl-20 text-gray-700 space-y-6">
                  <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                    <h3 className="font-bold text-secondary mb-2 uppercase tracking-wide text-sm">Primary Aim</h3>
                    <p className="italic text-lg text-gray-800">
                      To promote best conservation practices, ensuring the sustainable use of natural resources while simultaneously improving the quality of life within vulnerable communities.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">Specific Objectives:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <Shield className="text-primary mt-1 mr-3 shrink-0" size={20} />
                        <span>To protect and preserve fragile ecosystems and biodiversity.</span>
                      </li>
                      <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <Globe className="text-secondary mt-1 mr-3 shrink-0" size={20} />
                        <span>To conduct wildlife monitoring and scientific research.</span>
                      </li>
                      <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <Users className="text-accent mt-1 mr-3 shrink-0" size={20} />
                        <span>To promote and improve sustainable livelihoods in rural communities.</span>
                      </li>
                      <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <BookOpen className="text-amber-600 mt-1 mr-3 shrink-0" size={20} />
                        <span>To facilitate educational support and scholarships for underprivileged youth.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Article V - Governance */}
              <section>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-sans font-bold mr-4 uppercase tracking-wider">Article V</span>
                  Governance
                </h2>
                <div className="pl-0 md:pl-20 text-gray-700 space-y-4">
                  <p>
                    The Foundation shall be governed by a Board of Trustees. The Board is responsible for the policy, policy implementation, and general management of the affairs of the Foundation.
                  </p>
                  <p>
                    The Board shall ensure that the Foundation remains true to its mission and operates with transparency, integrity, and accountability in all its dealings.
                  </p>
                </div>
              </section>
            </div>
            
            <div className="pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-500 text-sm">
                    This document is a digital representation of the official Constitution of Kwakuka Foundation for Hope. <br/>
                    Last Updated: 2026
                </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstitutionPage;