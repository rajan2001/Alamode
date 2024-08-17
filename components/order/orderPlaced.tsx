"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { format } from "date-fns"
import { CldImage } from "next-cloudinary"


const OrderPlaced = () => {
    const cart: any = useCart()
    return <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
                Payment Successful
            </h2>
            <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">Thanks for making a purchase
                you can
                check our order summary frm below</p>
            <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
                <div
                    className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                    <div className="data">
                        <div className="font-semibold text-base leading-7 text-black">Order Id: <Badge className="font-medium">#10234987</Badge></div>
                        <p className="font-semibold text-base leading-7 text-black mt-4">Order Payment : <span className="text-gray-400 font-medium"> {format(new Date(), "MM/dd/yyyy")}
                        </span></p>
                    </div>
                    <Button
                        className="rounded-full py-3 px-7 font-semibold text-sm leading-7  max-lg:mt-5">Track
                        Your Order</Button>
                </div>
                <div className="w-full px-3 min-[400px]:px-6">
                    {cart.items.map((item: any) => {
                        return <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full" key={item.id}>
                            <div className=" max-lg:w-full">
                                <div className="aspect-square w-full lg:max-w-[140px]">
                                    <CldImage
                                        alt='Product'
                                        width="600"
                                        height="600"
                                        className='object-cover w-full h-full rounded-lg'
                                        src={item.images} />
                                </div>
                            </div>
                            <div className="flex flex-row items-center w-full ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                    <div className="flex items-center">
                                        <div className="">
                                            <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                                                {item.name}</h2>
                                            <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                                                {item.categroy}</p>
                                            <div className="flex items-center ">
                                                <p className="font-medium text-base leading-7 text-black ">Qty: <span
                                                    className="text-gray-500">{item.count}</span></p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm leading-7 text-black">price</p>
                                                <p className="lg:mt-4 font-medium text-sm leading-7 text-black ">{item.count * item.price}</p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm leading-7 text-black">Status
                                                </p>
                                                <p
                                                    className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                    Ready for Delivery</p>
                                            </div>

                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                                    Expected Delivery Time</p>
                                                <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                                    {format(new Date(), "dd LLLL yyyy")}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    })}
                </div>
                <div className="w-full border-t p-6 border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                    <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                        <Button>
                            Cancel Order
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    </section>

}


export default OrderPlaced