
const Hero = () => {
    return (
        <div className="">
            <div className="flex items-center flex-wrap px-2 md:px-0">
                <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                    <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">Your favorite dishes, right at your door</h1>
                    <div className="w-full mt-12">
                        <p className="text-gray-700 lg:w-10/12 text-xl">Our job is to filling your tummy with delicious food and with fast and free delivery.</p>
                        <button className="btn btn-ghost mt-6 bg-[#713f12] text-white px-12 text-xl hover: border hover:border-[#713f12] hover:bg-white hover:text-[#713f12]">Get Started</button>
                    </div>
                </div>
                <div className="ml-auto -mb-24 lg:w-6/12 md:block hidden">
                    <img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" className="relative" alt="food illustration" loading="lazy" width="4500" height="4500" />
                </div>
            </div>
        </div>
    )
}

export default Hero