import {
  TruckIcon,
  BanknotesIcon,
  BuildingLibraryIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TruckIcon className="h-6 w-6 text-indigo-600" />,
      title: "2-Day Delivery",
      description: "We ensure fast delivery within 2 days of ordering.",
    },
    {
      icon: <BanknotesIcon className="h-6 w-6 text-green-600" />,
      title: "Cash on Delivery",
      description: "Pay only after receiving your item.",
    },
    {
      icon: <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-blue-600" />,
      title: "WhatsApp Support",
      description: "Instant support via WhatsApp for any queries.",
    },
    {
      icon: <BuildingLibraryIcon className="h-6 w-6 text-purple-600" />,
      title: "Delivery at N.C College",
      description: "We deliver directly at your N.C. College location.",
    },
  ];

  return (
    <section className="mt-10 px-4 py-6 bg-gray-100 rounded-2xl shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-center">What You Get</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white p-4 rounded-xl shadow transition hover:shadow-md"
          >
            <div className="p-2 bg-gray-100 rounded-full">{benefit.icon}</div>
            <div>
              <h3 className="text-md font-semibold">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
