import React from "react";
import { CiBatteryFull } from "react-icons/ci";
import { MdNetworkCell, MdNetworkWifi } from "react-icons/md";

const Header = () => {
  return (
    <div className="py-1 px-2">
      <div className="flex justify-between items-center">
        {/* time  */}
        {/* <p className="text-sm">5:46 AM</p> */}
        <p className="text-sm">{new Date().toLocaleTimeString()}</p>
        {/* icons  */}
        <div className="flex items-center gap-2">
          <MdNetworkCell />
          <MdNetworkWifi />
          <CiBatteryFull />
        </div>
      </div>
    </div>
  );
};

export default Header;
