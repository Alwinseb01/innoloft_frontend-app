import React from "react";
import SideMenu from  "./SideMenu";
// import { PRODUCT_ID } from "../actionTypes";
// import useFetch from "../api";
// import { CompanyProps, UserProfile } from "../interface";
// import { useAppSelector } from "../redux/hooks";

function SideNav() {
//   const { productData } = useFetch("product", PRODUCT_ID);
//   const { isSidebarOpen } = useAppSelector((state) => state.product);

//   const user = productData?.user || "Username";
//   const company = productData?.company || "Organization" ;

const user = {
    firstName: "Username",
    lastName: "Lastname",
    profilePicture: "https://www.w3schools.com/howto/img_avatar.png"
}

const company = {
    name: "Organization"
}
 
  return (
    <div
      className={`mt-8 ml-20`}
      style={{ fontFamily: "Open Sans" }}
    >
      <div className="flex justify-start items-center">
        <img
          src={user?.profilePicture}
          alt={user?.firstName}
          height={60}
          width={60}
          className="rounded-full"
        />
        <div className="flex flex-col items-start justify-start ml-4">
          <h3 className="text-[#374151] text-[18] font-semibold leading-normal">
            {user?.firstName} {user?.lastName} 
          </h3>
          <h3 className="text-[#374151] text-[12] font-normal leading-normal">
            {company?.name}  
          </h3>
        </div>
      </div>

      <SideMenu />
    </div>
  );
};

export default React.memo(SideNav);
