import React from 'react';
import { Quote, Star } from 'lucide-react';

const STORIES = [
  {
    id: 1,
    name: "Tariro",
    role: "Aspiring Doctor, Age 14",
    location: "Mutare District",
    image: "https://loremflickr.com/600/400/african,boy,teenager",
    story: "Before the Kwakuka Foundation for Hope, I used to walk 10km just to fetch water, often missing school. With the new borehole in our village and the scholarship I received, I can now focus entirely on my studies. My dream of becoming a doctor to help my community is finally within reach.",
    impact: "Scholarship Recipient"
  },
  {
    id: 2,
    name: "Gogo MaDube",
    role: "Grandmother & Farmer",
    location: "Rural Masvingo",
    image: "https://loremflickr.com/600/400/african,woman,traditional,clothing",
    story: "Raising five grandchildren alone was a struggle. The foundation didn't just give us food; they taught me sustainable farming methods. Now, my garden is green year-round. We eat healthy meals every day, and I sell the surplus vegetables at the market to buy uniforms.",
    impact: "Sustainable Agriculture Program"
  },
  {
    id: 3,
    name: "Mr. Moyo",
    role: "Community Headman",
    location: "Matabeleland North",
    image: "https://loremflickr.com/600/400/african,man,suit",
    story: "Health was our biggest worry. The mobile clinic that visits us now has saved countless lives, including my youngest daughter when she fell ill with malaria. Seeing our children grow up healthy and strong is the greatest gift of hope we could ask for.",
    impact: "Healthcare Access"
  }
];

const SuccessStoriesSection: React.FC = () => {
  return (
    <section className="py-24 bg-amber-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Voices of Change</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Stories of Hope</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Real stories from real people. See how your generosity is transforming lives across Zimbabwe, one family at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden group">
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src={story.image} 
                  alt={story.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <h4 className="font-serif font-bold text-xl">{story.name}</h4>
                  <p className="text-sm opacity-90">{story.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col relative">
                <Quote className="absolute top-6 right-6 text-primary/20 w-10 h-10 rotate-180" />
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wide">
                    {story.impact}
                  </span>
                </div>

                <p className="text-gray-600 italic mb-6 leading-relaxed flex-1">
                  "{story.story}"
                </p>

                <div className="flex items-center text-sm text-gray-500 border-t pt-4 mt-auto">
                   <div className="flex text-primary">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} size={14} fill="currentColor" />
                     ))}
                   </div>
                   <span className="ml-auto font-medium text-gray-400">{story.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;