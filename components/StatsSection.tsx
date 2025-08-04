import { Globe, Users, Award, Truck } from 'lucide-react';

const stats = [
  {
    icon: <Globe className="h-12 w-12 text-rareimpex-red" />,
    number: "7+",
    label: "Countries",
    description: "Global operations across continents"
  },
  {
    icon: <Award className="h-12 w-12 text-rareimpex-green" />,
    number: "9",
    label: "Product Categories",
    description: "Premium fruit varieties"
  },
  {
    icon: <Users className="h-12 w-12 text-rareimpex-red" />,
    number: "500+",
    label: "Happy Clients",
    description: "Trusted business partners"
  },
  {
    icon: <Truck className="h-12 w-12 text-rareimpex-green" />,
    number: "1000+",
    label: "Shipments/Month",
    description: "Reliable global delivery"
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rareimpex by the Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in our impressive track record
          </p>
        </div>
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