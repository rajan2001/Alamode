"use client"

import { Coupon } from "@/lib/config";

export const BillBoard = () => {
    const handleClick = () => {
        const section = document.getElementById("target-section");
        if (section) {
            window.scrollTo({ behavior: "smooth", top: section.offsetTop - 100, });
        }
    }
    return <div className="rounded-lg overflow-hidden  relative">
        <div className=" absolute bg-black z-[45] w-full py-2 text-white px-6 overflow-hidden flex justify-center "> <div className=" animate-transation-motion flex items-center gap-8 text-sm ">{[...Coupon, ...Coupon].map((coupon) => <div key={coupon.id} className=" w-64">Use Coupon:<p className=" inline-block ml-2">{coupon.name}</p> for {coupon.off}% OFF</div>)}</div></div>
        <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover" style={{ backgroundImage: `url(${"https://res.cloudinary.com/dveu3m229/image/upload/v1723536949/ck1vtd5uznlzgp1lrjnl.jpg"})` }}>
            <div className="h-full p-10 w-full flex flex-col justify-center items-center cursor-pointer ">
                <div className="font-bold text-3xl md:text-5xl ld:text-6xl sm:max-w-xl max-w-xl bg-white/80 p-4 rounded-xl text-center hover:scale-105 transition-all duration-500" onClick={handleClick}>Explore the special collection!</div>
            </div>
        </div>
    </div>
} 