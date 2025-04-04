import React, { useEffect, useState } from "react";
import { Button } from "./ui/MovingBorders";

const services = [
  { id: 1, title: "🛬Landing Page Development", desc: "Custom-built, high-converting landing pages with modern UI/UX.", price: "₹5,000+" },
  { id: 2, title: "🤖Chatbot Integration", desc: "AI-powered chatbots for automation and customer support.", price: "₹8,000+" },
  { id: 3, title: "💡SaaS Development", desc: "Scalable SaaS platforms tailored to your business needs.", price: "₹25,000+" },
  { id: 4, title: "💻Full-Stack Web Development", desc: "End-to-end web solutions with React, Next.js & Node.js.", price: "₹15,000+" },
  { id: 5, title: "👦🏻Portfolio Website Development", desc: "Personalized portfolio sites to showcase your work and skills.", price: "₹3,500+" },
  { id: 6, title: "🖨️ATS-Optimized Resume", desc: "Professional, ATS-friendly resumes that boost job chances.", price: "₹2,000+" },
  { id: 7, title: "🎓College Semester Projects", desc: "Get expert help for your academic projects in web & AI.", price: "₹4,000+" },
];

const Services = () => {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const loadRazorpay = async () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => setRazorpayLoaded(true);
      document.body.appendChild(script);
    };
    loadRazorpay();
  }, []);

  const handlePayment = async () => {
    if (!razorpayLoaded) {
      alert("Razorpay is still loading... Please wait.");
      return;
    }

    const response = await fetch("/api/razorpay", { method: "POST" });
    const { order } = await response.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Praveen's Web Services",
      description: "Secure Payment for Freelance Services",
      order_id: order.id,
      handler: function (response: any) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Client Name",
        email: "client@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#1A73E8",
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="py-20 w-full">
      <h1 className="heading text-center">
        My <span className="text-purple">Freelance Services</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {services.map((service) => (
          <Button
            key={service.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col items-center p-6 gap-3">
              <h1 className="text-xl md:text-2xl font-bold text-center">
                {service.title}
              </h1>
              <p className="text-center text-white-100 mt-2 font-semibold">
                {service.desc}
              </p>
              <span className="text-lg font-semibold text-purple-400">
                {service.price}
              </span>
            </div>
          </Button>
        ))}
      </div>

      {/* Payment CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold">
          Need a Professional Website or Resume? 🚀
        </h2>
        <p className="mt-2 text-gray-300">
          Get a high-quality web solution tailored to your needs. Pay securely online.
        </p>
        <button
          onClick={handlePayment}
          className={`mt-6 px-6 py-3 rounded-lg text-lg font-semibold transition ${
            razorpayLoaded ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-500 cursor-not-allowed"
          }`}
          disabled={!razorpayLoaded}
        >
          {razorpayLoaded ? "Pay Now with Razorpay" : "Loading..."}
        </button>
      </div>
    </div>
  );
};

export default Services;
