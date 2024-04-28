
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Home = () => {
    return (
        <div>
            <h2>Hi this is home page</h2>

            <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className=''><img className='w-3/4 border rounded-xl h-96 text' src="https://i.ibb.co/XL8cSmp/Oil-Painting.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-1/4 border rounded-xl h-96' src="https://i.ibb.co/syPWgDn/Potrait.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-1/4 border rounded-xl h-96' src="https://i.ibb.co/KVwTyDJ/Architechtural.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-1/4 border rounded-xl h-96' src="https://i.ibb.co/8DZ1fSy/Cartoon.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-1/4 border rounded-xl h-96' src="https://i.ibb.co/ngVSrWF/Watercolor.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-1/4 border rounded-xl h-96' src="https://i.ibb.co/LkyRwHh/Charcol.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-1/4 border rounded-xl h-96' src="https://i.ibb.co/dtPRP9n/LandScap.jpg" alt="" /></SwiperSlide>
                
            </Swiper>
            </div>

        </div>
    );
};

export default Home;