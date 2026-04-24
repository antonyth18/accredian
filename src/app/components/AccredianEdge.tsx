import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';

export default function AccredianEdge() {
  const features = [
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Earn credentials recognized across corporate sectors'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from veterans with deep industry experience'
    },
    {
      icon: BookOpen,
      title: 'Flexible Learning',
      description: "Programs tailored to your organization's pace"
    },
    {
      icon: TrendingUp,
      title: 'Measurable ROI',
      description: 'Track progress with advanced analytics dashboards'
    }
  ];

  return (
    <section id="accredian-edge" className="bg-[#F8FAFC] py-20 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Heading Block */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">
            The <span className="text-[#2563EB]">Accredian Edge</span>
          </h2>
          <p className="text-lg text-[#0F172A]">
            Key Aspects of <span className="text-[#2563EB]">Our Strategic Training</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#64748B]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
