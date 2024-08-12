import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <Image src={pyramidImage} alt="Pyramid Image" height={262} width={262} className="hidden md:block absolute -right-36 -top-32" />
          <Image src={tubeImage} alt="Pyramid Image" height={248} className="hidden md:block absolute -left-36 bottom-24" />
        </div>
      </div>
    </section>
  );
};
