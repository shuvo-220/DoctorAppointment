import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FaqDetails = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:px-[150px] lg:px-[100px]">
      <div className="m-5 duration-400 bg-gray-50 gap-4 py-2 px-3 rounded shadow-md cursor-pointer">
        <div className="flex justify-between" onClick={()=>setIsOpen(!isOpen)}>
          <h1 className="text-2xl font-semibold p-3">{faq.question}</h1>
          {isOpen ?  <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
        </div>
            {
                isOpen && <><hr/> <p className="p-3 text-xl">{faq.desc}</p></>
            }
      </div>
    </div>
  );
};

export default FaqDetails;
