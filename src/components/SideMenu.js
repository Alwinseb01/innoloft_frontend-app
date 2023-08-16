import React from "react";
import inno_home from "..//assets/inno_home.svg";
import inno_group from "..//assets/inno_group.svg";
import inno_organizations from "..//assets/inno_organizations.svg"
import inno_down_dark from '..//assets/inno_down_dark.svg';


function SideMenu() {
  return (
    <div className="flex flex-col justify-start items-start mt-5 ">
      <div className="flex justify-start items-center mb-4">
        <img src={inno_home} alt="dash" className="mt-1" />
        <h3 className="font-normal text-[16] leading-normal text-[#374151] ml-3">
          Home
        </h3>
      </div>
      <div className="flex justify-start items-center mb-4">
        <img src={inno_group} alt="mem" className="mt-1" />
        <h3 className="font-normal text-[16] leading-normal text-[#374151] ml-3">
          Members
        </h3>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-start items-start mr-9">
          <img src={inno_organizations} alt="org" className="mt-1" />
          <h3 className="font-normal text-[16] leading-normal text-[#374151] ml-3">
            Organizations
          </h3>
        </div>

        <img src={inno_down_dark} alt="arrow" className="ml-9" />
      </div>
    </div>
  );
};

export default React.memo(SideMenu);
