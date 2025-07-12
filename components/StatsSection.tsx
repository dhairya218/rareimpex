import { Globe, Users, Award, Truck } from 'lucide-react';

const stats = [
  {
    icon: <Globe className="h-12 w-12 text-green-600" />,
    number: "7+",
    label: "Countries",
    description: "Global operations across continents"
  },
  {
    icon: <Award className="h-12 w-12 text-orange-600" />,
    number: "15+",
    label: "Fruit Varieties",
    description: "Premium quality selections"
  },
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    number: "500+",
    label: "Happy Clients",
    description: "Trusted business partners"
  },
  {
    icon: <Truck className="h-12 w-12 text-purple-600" />,
    number: "1000+",
    label: "Shipments/Month",
    description: "Reliable global delivery"
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}