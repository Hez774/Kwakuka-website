import React from 'react';
import { Users, Droplets, BookOpen, Sun } from 'lucide-react';

const metrics = [
  { id: 1, label: 'Lives Impacted', value: '1,200+', icon: Users, color: 'text-blue-500', bg: 'bg-blue-100' },
  { id: 2, label: 'Clean Water Wells', value: '15', icon: Droplets, color: 'text-cyan-500', bg: 'bg-cyan-100' },
  { id: 3, label: 'Children Educated', value: '450', icon: BookOpen, color: 'text-primary', bg: 'bg-amber-100' },
  { id: 4, label: 'Sustainable Farms', value: '8', icon: Sun, color: 'text-secondary', bg: 'bg-green-100' },
];

const ImpactMetrics: React.FC = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.id} className="text-center group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className={`mx-auto w-16 h-16 rounded-full ${metric.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
