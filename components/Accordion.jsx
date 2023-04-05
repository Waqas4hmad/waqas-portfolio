import React, { useState } from 'react';

const Accordion = ({ title, desc, institude }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="pb-5">
      <div className=" acc_head " onClick={() => setIsActive(!isActive)}>
        <div className={`${isActive ? "circle-plus opened" : "circle-plus closed"}`}>
          <div class="circle">
            <div class="horizontal"></div>
            <div class="vertical"></div>
          </div>
        </div>
        <h1 className='text-xl font-bold'>{title}</h1>
      </div>
      {isActive &&
        <div>
          <h1 className="pl-[65px] text-lg">{desc}</h1>
          <h1 className="pl-[65px] text-lg ">{institude}</h1>

        </div>
      }
    </div>
  );
};
export default Accordion;