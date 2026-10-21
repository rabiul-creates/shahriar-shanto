import cloudyDhaka from "/src/assets/images/cloudy-dhaka.jpg";
import boxes from "/src/assets/images/boxes.jpg";
import minicart from "/src/assets/images/minicart.jpg";
import developer from "/src/assets/images/developer.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="w-full mx-auto max-w-[120rem] min-h-screen relative border-b border-white"
    >
      <div className="w-full h-full">
        <div className="w-full h-[8vh]  flex items-start justify-start ">
          <div className="w-60 bg-white h-full flex items-end justify-center rounded-tr-md ">
            <h1 className="text-4xl font-NewKansasSwash">About </h1>
          </div>
        </div>

        <div className="w-full h-[92vh] bg-white text-base  text-gray-800 flex flex-col items-start justify-around px-4 sm:px-8 md:px-16 lg:px-32 space-y-10 py-10 ">
          <div className="w-full">
            <p>A little note about myself</p>
            <div className="w-full border-b border-gray-400 mt-5" />
          </div>

          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-5">
            <div className="text-lg sm:text-xl md:text-2xl max-w-lg md:max-w-xl  ">
              <p>
                Hello, I am
                <span className="font-NewKansasSwash font-extrabold text-black">
                  {" "}
                  Shahriar Shanto
                </span>
                ,
              </p>
              <p>
                a Shopify developer. I help ecommerce brands launch fast and
                sell more, with storefronts that look sharp and work even
                better.
              </p>
            </div>
            <div className="bg-gray-700 w-full max-w-lg h-full hidden md:block">
              <img src={developer} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-full  flex gap-5 flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/3">
              <p>
                Building with a<span className="text-black "> mindset</span>
              </p>
              <p>
                Building with
                <span className="text-black "> perfection</span>
              </p>
            </div>

            <div className="text-xs  flex items-center justify-between w-full md:max-w-md flex-wrap   text-gray-800 text-left">
              <div className="px-2 py-2 border-l-4 border-sky-200  space-y-1">
                <p>Based in</p>
                <p className="text-black text-sm">Bangladesh</p>
              </div>
              <div className="px-2 py-2 border-l-4 border-sky-200  space-y-1">
                <p>Working</p>
                <p className="text-black text-sm">Globally</p>
              </div>
              <div className="px-2 py-2 border-l-4 border-sky-200  space-y-1">
                <p>Currently at</p>
                <p className="text-black text-sm">Xyz builders</p>
              </div>
            </div>
          </div>

          <div className="w-full  gap-3 flex items-center justify-between   md:hidden">
            <div className=" w-[20vw] max-w-80 aspect-square bg-neutral-800">
              <img src={cloudyDhaka} className="w-full h-full object-cover" />
            </div>
            <div className=" w-[20vw] max-w-80 aspect-square bg-neutral-800">
              <img src={boxes} className="w-full h-full object-cover" />
            </div>
            <div className=" w-[20vw] max-w-80 aspect-square bg-neutral-800">
              <img src={minicart} className="w-full h-full object-cover" />
            </div>
            <div className=" w-[20vw] max-w-80 aspect-square bg-neutral-800">
              <img src={developer} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
