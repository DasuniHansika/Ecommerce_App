// eslint-disable-next-line no-unused-vars
import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Forever, we are dedicated to bringing you the latest trends and timeless styles in fashion. Our mission is to provide high-quality, stylish clothing that caters to every unique personality, allowing you to express yourself with confidence. We believe that fashion is not just about clothing—its a way to tell your story, showcase your individuality, and connect with the world. From casual wear to elegant outfits, our carefully curated collections are designed to keep you looking chic and feeling comfortable no matter the occasion.
          </p>
          <p>
            Founded on the principles of sustainability and innovation, Forever is committed to making fashion accessible and eco-friendly. We partner with ethical manufacturers to ensure that our products are crafted with care for both people and the planet. Our passionate team constantly explores new ideas to redefine fashion and deliver a seamless shopping experience, both online and in-store. Join us on this journey to inspire, empower, and celebrate individuality through fashion.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Forever, our mission is to inspire confidence and self-expression through fashion. We are dedicated to providing high-quality, stylish, and affordable clothing that empowers individuals to embrace their unique style. We strive to make fashion accessible to everyone, while also prioritizing sustainability and ethical practices. Our goal is to create a shopping experience that not only meets the needs of our customers but also positively impacts the community and the environment.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6">
        <div className="border px-6 md:px-8 py-8 sm:py-12 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At Forever, we ensure the highest standards of quality through rigorous checks at every stage, from material selection to final inspection. Our commitment to excellence guarantees that every product you receive is crafted with care, precision, and designed to last.
          </p>
        </div>
        <div className="border px-6 md:px-8 py-8 sm:py-12 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Experience a seamless shopping journey with our user-friendly platform and fast shipping options, designed to make your fashion shopping effortless and enjoyable.
          </p>
        </div>
        <div className="border px-6 md:px-8 py-8 sm:py-12 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated support team is here to assist you at every step, ensuring your satisfaction and providing guidance to enhance your shopping experience.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
