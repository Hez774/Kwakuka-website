import React from 'react';
import { X, Heart, CreditCard, DollarSign } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="bg-gradient-to-br from-primary to-amber-600 p-8 text-white text-center">
            <div className="mx-auto bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 fill-current" />
            </div>
            <h2 className="text-2xl font-serif font-bold">Donate to Kwakuka Foundation for Hope</h2>
            <p className="text-amber-100 mt-2 text-sm">Your contribution directly supports families in Zimbabwe.</p>
        </div>

        <div className="p-8">
            <div className="grid grid-cols-3 gap-3 mb-6">
                {['$10', '$25', '$50', '$100', '$250', 'Other'].map((amt) => (
                    <button 
                        key={amt}
                        className="border border-gray-200 py-3 rounded-lg font-bold text-gray-700 hover:border-primary hover:text-primary hover:bg-amber-50 transition-all focus:ring-2 focus:ring-primary focus:ring-offset-1"
                    >
                        {amt}
                    </button>
                ))}
            </div>

            <button className="w-full bg-secondary hover:bg-emerald-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mb-4">
                <CreditCard size={20} />
                Donate via Card
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                <DollarSign size={20} />
                Donate via PayPal
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-6">
                Secure SSL Encrypted Payment. <br/> 100% of proceeds go to the foundation.
            </p>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;