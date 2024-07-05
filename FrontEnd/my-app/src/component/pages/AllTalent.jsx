import React from "react";
import DesignIcon from '../../image/graphic-designer.gif'

import { IoIosTimer } from "react-icons/io";

const AllTalent = (props) => {
    { console.log(props) }
    return (
        <div className='container-prog'>
            <div className="flex items-center justify-center gap-2 mt-10 ml-6">
                <img src={DesignIcon} className='h-20'></img>
                <h1 className='text-3xl font-bold text-[#181818] '>All Talents</h1>
            </div>
            {props.talents.map((ele,i) => 
                <div className="talents ml-6" key={i}>
                    <h3 className='text-3xl font-semibold text-[#181818] mt-10 ml-6'>Top projects you may like</h3>
                    <div className="talent-card mt-10 max-w-64 rounded-xl cursor-pointer ml-6">
                        <img src={ele.imageUrl} className='w-64 rounded-xl'></img>
                        <h5 className='p-3 font-semibold text-[#181818] cursor-pointer hover:text-[#108a00]'>{ele.title}</h5>
                        <div className="price-delivery flex items-center">
                            <IoIosTimer size={28} className='text-[#505050] ml-3' />
                            <h5 className='text-[#505050] font-bold text-sm ml-1 '>{ele.delivery} delivery</h5>
                            <h5 className='text-[#505050] font-bold text-sm ml-6 '>From ${ele.price}</h5>
                        </div>
                        <div className="profile flex ">

                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}


export default AllTalent