const ReadingSteps = () => {
  const sections = [
    {
      title: "All About the Product",
      content:
        "Our product is crafted with high-quality materials and designed to meet your daily needs. It is durable, comfortable, and available in various sizes and colors to suit your style."
    },
    {
      title: "About Us",
      content:
        "We are a small team dedicated to making premium products affordable and accessible to college students. With quick delivery and local support, we aim to give you the best experience."
    },
    {
      title: "Terms & Conditions",
      content:
        "By placing an order, you agree to our return and refund policies. Payments made are non-refundable once the product is delivered in good condition. For queries, reach out via WhatsApp support."
    }
  ];

  return (
    <section className="mt-10 px-4 py-6">
      <h2 className="text-xl font-bold mb-4 text-center">Need to Know</h2>
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {section.title}
            </h3>
            <p className="text-sm text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReadingSteps;
