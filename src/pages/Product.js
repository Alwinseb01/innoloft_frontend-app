import React from 'react'
import inno_home from "..//assets/inno_home.svg";
import Chevron_right from "..//assets/Chevron_right.svg";
import patent from "..//assets/patent.svg";

function Product() {
  return (
    <div className='w-9/12 ml-12'>
        <div className="flex justify-between items-center w-full  mt-8 ">
              <div className="flex justify-start items-center">
                <img
                  src={inno_home}
                  alt="dashboard"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src={Chevron_right}
                  alt="arrow-right"
                  className="w-[20px] h-[20px] mx-1"
                />
                <h3 className="font-normal text-[14px] md:text-[17px] leading-[20px] text-[#6B7280]">
                  Offers
                </h3>
                <img
                  src={Chevron_right}
                  alt="arrow-right"
                  className="w-[20px] h-[20px] mx-1"
                />
                <h3 className="font-semibold text-[14px] md:text-[17px] leading-[20px] text-[#6B7280]">
                  text
                </h3>
              </div>

              <div
                className="rounded-[6px] bg-[#272E71] py-[5px] px-[10px] gap-[5px] flex items-center mr-3 cursor-pointer hover:scale-110"
                // onClick={() =>
                // //   (window.location.href = `/product/edit/${PRODUCT_ID}`)
                // }
              >
                <h3 className="text-white text-[14px] leading-[24px] font-normal px-3 ">
                  Edit
                </h3>
              </div>
        </div>

        <div className='bg-white mt-4 ml- w-11/12 h-16 relative'>
        <div
          className="bg-no-repeat h-[300px] z-[2] o"
          style={{ backgroundImage: `url(${' '})` }}
        >
          <div className="absolute top-0 left-0">
            <div
              style={{ backgroundImage: `url(${patent})` }}
              className="w-[200px] h-[40px] bg-no-repeat"
            />
          </div>
        </div>
        </div>
    </div>
  )
}

export default React.memo(Product);