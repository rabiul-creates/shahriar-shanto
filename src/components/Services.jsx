import service1 from "/src/assets/images/service1.jpg";
import service2 from "/src/assets/images/service2.jpg";
import service3 from "/src/assets/images/service3.jpg";

export default function Services() {
  return (
    <div
      id="services"
      className="w-full mx-auto max-w-[120rem] min-h-screen  relative border-b border-sky-100  "
    >
      <div className="w-full h-full ">
        <div className="w-full h-[8vh]  flex items-start justify-start bg-white ">
          <div className="w-60 bg-sky-100 h-full flex items-end justify-center rounded-tr-md ">
            <h1 className="text-4xl font-NewKansasSwash">Services </h1>
          </div>
        </div>

        <div className="w-full h-[92vh] bg-sky-100 text-base  text-gray-800 flex flex-col items-start justify-around px-4 sm:px-8 md:px-16 lg:px-32 space-y-10 pt-5 pb-20 sm:pb-30">
          <div className="w-full ">
            <p>What I can help with</p>
            <div className="w-full border-b border-gray-400 mt-5" />
          </div>

          <div className="w-full max-w-[71rem] mx-auto h-full flex flex-col items-center justify-between p-1 sm:p-2 bg-sky-200 rounded-sm border border-black/20 gap-1 sm:gap-2 ">
            <div className=" w-full h-full max-w-6xl text-wrap grid grid-cols-[10px_200px_1fr] sm:grid-cols-[10px_1fr_1fr] gap-2 sm:gap-5 rounded-sm px-1 py-3 sm:py-8 sm:px-3 bg-white border border-black/20 ">
              <h1 className="text-xl ">1</h1>
              <div className="w-full flex flex-col items-start  gap-3 sm:gap-6 md:gap-12 ">
                <h1 className="text-lg leading-6 sm:leading-none sm:text-xl md:text-2xl  ">
                  Custom Theme Development
                </h1>
                <div className="space-y-2 sm:space-y-4  w-full">
                  <p className="max-w-3xs md:max-w-sm w-full text-xs sm:text-sm md:text-md text-left">
                    On-brand storefronts carefully built around your design. No
                    recycling of same old templates.
                  </p>
                  <div className="text-[8px] sm:text-xs flex items-center justify-start flex-wrap gap-1">
                    <div className="border rounded-full px-2 sm:px-2.5 py-1">
                      Liquid
                    </div>
                    <div className="border rounded-full px-2 sm:px-2.5 py-1">
                      Responsive
                    </div>
                    <div className="border rounded-full px-2 sm:px-2.5 py-1">
                      Theme
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-950 w-full h-30 sm:h-32 md:h-40 overflow-clip rounded-sm">
                <img src={service1} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className=" w-full h-full max-w-6xl text-wrap grid grid-cols-[10px_200px_1fr] sm:grid-cols-[10px_1fr_1fr] gap-3 sm:gap-5 rounded-sm px-1 py-3 sm:py-8 sm:px-3 bg-white border border-black/20 ">
              <h1 className="text-xl ">2</h1>
              <div className="w-full flex flex-col items-start  gap-3 sm:gap-6 md:gap-12 ">
                <h1 className="text-lg leading-6 sm:leading-none sm:text-2xl  ">
                  Store Setup & Migration
                </h1>
                <div className="space-y-2 sm:space-y-4  w-full">
                  <p className="max-w-3xs md:max-w-sm w-full text-xs sm:text-sm md:text-md text-left">
                    Launch from scratch or move to Shopify without losing your
                    SEO, products, or customer data.
                  </p>
                  <div className="text-[8px] sm:text-xs flex items-center justify-start flex-wrap gap-1">
                    <div className="border rounded-full px-2 sm:px-2.5 py-1">
                      Setup
                    </div>
                    <div className="border rounded-full px-2 sm:px-2.5 py-1">
                      Migration
                    </div>
                    <div className="border rounded-full px-2 sm:px-2.5 py-1">
                      SEO
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-950 w-full h-30 sm:h-32 md:h-40 overflow-clip rounded-sm">
                <img src={service2} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className=" w-full h-full max-w-6xl text-wrap grid grid-cols-[10px_200px_1fr] sm:grid-cols-[10px_1fr_1fr] gap-3 sm:gap-5 rounded-sm px-1 py-3 sm:py-8 sm:px-3 bg-white border border-black/20 ">
              <h1 className="text-xl ">3</h1>
              <div className="w-full flex flex-col items-start  gap-3 sm:gap-6 md:gap-12 ">
                <h1 className="text-lg leading-6 sm:leading-none sm:text-2xl  ">
                  Speed & Conversion Optimization
                </h1>
                <div className="space-y-2 sm:space-y-4  w-full">
                  <p className="max-w-3xs md:max-w-sm w-full text-xs sm:text-sm md:text-md text-left">
                    Faster pages and smoother checkouts that turn more visitors
                    into buyers.
                  </p>
                  <div className="text-[8px] sm:text-xs flex items-center justify-start flex-wrap gap-1">
                    <div className="border rounded-full px-2 sm:px-2.5 py-1">
                      Performance
                    </div>
                    <div className="border rounded-full px-2 sm:px-2.5 py-1">
                      Checkout
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-950 w-full h-30 sm:h-32 md:h-40 overflow-clip rounded-sm">
                <img src={service3} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
