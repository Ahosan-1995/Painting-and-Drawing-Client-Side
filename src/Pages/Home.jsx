
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CraftItem from './CraftItem';
import OurCeo from './OurCeo';
import WhyDifferent from './WhyDifferent';
import { useLoaderData } from 'react-router-dom';
import ArtAndCraftSubCategory from './ArtAndCraftSubCategory';
import { useEffect, useState } from 'react';


const Home = () => {


    const myUsers = useLoaderData();
    console.log(myUsers);


    return (
        <div>

            <div className='mt-10 mb-10'>
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
                <SwiperSlide   style={{backgroundImage:'url(https://i.ibb.co/3hNyyzt/Landscap.jpg)'}} className='w-full border rounded-xl '>
                    <div  >
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                    </div>
                </SwiperSlide>




                <SwiperSlide className=''><img className='w-full border rounded-xl h-96 text' src="https://i.ibb.co/3hNyyzt/Landscap.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full border rounded-xl h-96' src="https://i.ibb.co/BP9mDj0/Charcol.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full border rounded-xl h-96' src="https://i.ibb.co/c3xqHhG/Floral.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full border rounded-xl h-96' src="https://i.ibb.co/mzb6T7J/Prot.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full border rounded-xl h-96' src="https://i.ibb.co/w65SDjz/Cartoon.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full border rounded-xl h-96' src="https://i.ibb.co/17b5pZ0/Archi.jpg" alt="" /></SwiperSlide>
                
                
            </Swiper>
            </div>


           

            <div className='space-y-7 md:grid md:grid-cols-2 md:gap-x-4'>
               {
                myUsers.map(myUser=> <CraftItem key={myUser._id} myUser={myUser}></CraftItem>)
               }
            </div>
            
            <br /><br /><hr /><br />
                
            <div>
                <h1 className='text-center mb-10 font-extrabold text-3xl'>Why we are different form other</h1>
                <WhyDifferent></WhyDifferent>
            </div>

            <br />
            <hr />

               <div>
                <ArtAndCraftSubCategory></ArtAndCraftSubCategory>
               </div>

            <br />
            <hr />


            <div>
                <OurCeo></OurCeo>
            </div>

        </div>
    );
};

export default Home;