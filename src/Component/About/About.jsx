import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa";

import client1 from '../../assets/clients/client1.webp';
import client2 from '../../assets/clients/client2.jpeg';
import client3 from '../../assets/clients/client3.jpeg';

const testimonials = [
  {
    name: 'Mohamed Johnson',
    role: 'Product Manager',
    image: client1,
    feedback: 'TechNove exceeded my expectations with top-notch service and incredible product quality. Highly recommended!',
  },
  {
    name: 'Ali Smith',
    role: 'Software Engineer',
    image: client2,
    feedback: 'I loved the fast delivery and the modern design of the electronics. Great job, TechNove!',
  },
  {
    name: 'Ahmad Davis',
    role: 'UX Designer',
    image: client3,
    feedback: 'Amazing customer support and very user-friendly website. I found exactly what I needed.',
  }
];

const About = () => {
  return (
    <div className="mt-10 px-4">
      <h1 className="text-3xl font-bold text-start mb-3">About</h1>
      <p className="text-start text-lg text-gray-600 mb-16">
        TechNove is guided by four principles: customer obsession rather than competitor focus,
        passion for invention, commitment to operational excellence, and long-term thinking. We strive to be Earth’s most
        customer-centric company, Earth’s best employer, and Earth’s safest place to work.
      </p>

      <div className="text-start my-12">
        <p className="text-md text-blue-600">What our customers are saying</p>
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <p className="text-sm text-gray-500">Hear from our happy customers who found value through TechNove products.</p>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper mb-32"
      >
        {testimonials.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-blue-50 relative">
              <div className="flex justify-center mb-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 rounded-full object-cover shadow-md"
                />
              </div>
              <div className="flex justify-center gap-1">
                {Array(5).fill().map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic text-center mt-4">"{client.feedback}"</p>
              <div className="text-center mt-4">
                <h2 className="text-lg font-bold text-gray-800">{client.name}</h2>
                <p className="text-sm text-gray-500">{client.role}</p>
              </div>
              <p className="text-blue-200 text-9xl font-serif absolute top-0 right-2 opacity-20">,,</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default About;
