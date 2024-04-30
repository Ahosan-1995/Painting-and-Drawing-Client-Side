

const WhyDifferent = () => {
    return (
        <div className="md:flex md:gap-x-10 space-y-4">

            <div style={{backgroundImage:'url(https://i.ibb.co/FYYNHFp/bg-2.jpg)'}} className="md:w-1/2 h-[600px] bg-cover rounded-lg text-center  content-center">
                <p className="font-extrabold text-green-500 md:text-7xl">Up to 70% Off - <br />Free Shipping</p>
                <p className="text-2xl font-bold mt-4 text-white">100% satisfaction guarantee</p>
            </div>

            <div className="lg:flex flex-col gap-y-10 md:w-1/2">
                <div style={{backgroundImage:'url(https://i.ibb.co/jhy8GNy/bg-3.jpg)'}} className="w-full h-[280px] bg-cover rounded-lg text-center  content-center">
                    <p className="font-extrabold text-green-500 text-2xl">Modern Products</p>
                    <p className="text-2xl font-bold mt-4 text-white">Best Quality Assured</p>
                </div>

                <div style={{backgroundImage:'url(https://i.ibb.co/RghG1Hb/bg-4.jpg)'}} className="md:w-1/2 h-[280px] bg-cover rounded-lg bg-center text-center  content-center" >
                    <p className="font-extrabold text-green-500 text-2xl">World's Great Selection</p>
                    <p className="text-2xl font-bold mt-4 text-white">Discover wide range</p>

                </div>
            </div>
        </div>
    );
};

export default WhyDifferent;