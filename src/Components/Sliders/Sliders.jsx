import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-6xl mx-auto my-16">
      <Slider {...settings}>
        <div className=" py-32 space-y-4 bg-cover bg-center bg-[url('https://i.ibb.co/hRdnSHwx/jonathan-kemper-4z3lnw-Ev-ZQw-unsplash.jpg')]">
          <p className="text-center text-white text-3xl font-medium">
            Urban Gardening Workshop
          </p>
          <p className="text-center text-white text-[18px]">
            Learn to grow vegetables in small spaces using containers and
            vertical gardens.
          </p>
          <p className="text-center text-white text-[18px]">
            <span>Date: </span>
            <span>June 15, 2025 – 10:00 AM to 1:00 PM</span>
          </p>
          <p className="text-center text-white text-[18px]">
            <span>Location: </span>
            <span>Online (Zoom)</span>
          </p>
          <div className="flex justify-center">
            <button className="btn text-[#01875F] font-bold shadow-none rounded-none mt-5">
              Register Now
            </button>
          </div>
        </div>
        <div className=" py-32 space-y-4 bg-[url('https://i.ibb.co/20k713c1/del-barrett-oo-Upl-Up3ck-unsplash.jpg')] bg-cover bg-center">
          <p className="text-center text-white  text-3xl font-medium">
            Composting 101
          </p>
          <p className="text-center text-white text-[18px]">
            Discover how to compost at home and improve your soil health
            naturally.
          </p>
          <p className="text-center text-white text-[18px]">
            <span>Date: </span>
            <span>July 1, 2025 – 2:00 PM to 4:00 PM</span>
          </p>
          <p className="text-center text-white text-[18px]">
            <span>Location: </span>
            <span>Community Garden, Brooklyn, NY</span>
          </p>
          <div className="flex justify-center">
            <button className="btn text-[#01875F] font-bold shadow-none rounded-none mt-5">
              Learn More
            </button>
          </div>
        </div>
        <div className=" py-32 space-y-4 bg-[url('https://i.ibb.co/WWqrtFQF/markus-spiske-bk11w-Zwb9-F4-unsplash.jpg')] bg-cover bg-center">
          <p className="text-center text-white  text-3xl font-medium">
            Seasonal Planting Guide Live Session
          </p>
          <p className="text-center text-white text-[18px]">
            Join expert gardeners sharing what to plant and how to care for your
            garden this summer.
          </p>
          <p className="text-center text-white text-[18px]">
            <span>Date: </span>
            <span>June 25, 2025 – 6:00 PM to 7:30 PM</span>
          </p>
          <p className="text-center text-white text-[18px]">
            <span>Location: </span>
            <span>Online Webinar</span>
          </p>
          <div className="flex justify-center">
            <button className="btn text-[#01875F] font-bold shadow-none rounded-none mt-5">
              Join Free
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
