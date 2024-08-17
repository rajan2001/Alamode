"use client"
import { Currency } from "@/components/currancy"
import { CartProduct } from "@/components/hero/CartProduct"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/hooks/use-cart"
import { Coupon, IconsClassName } from "@/lib/config"
import { cn } from "@/lib/utils"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { CldImage } from "next-cloudinary"
import Link from "next/link"
import { useMemo, useState } from "react"
import toast from "react-hot-toast"


const Page = () => {

    const [input, setInput] = useState('')
    const [price, setPrice] = useState(0)
    const cart: any = useCart()

    useMemo(() => {
        let sum = 0;
        cart.items.map((item: any) => {
            sum += item.price * item.count
        })
        setPrice(sum)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, input])

    const handelPrice = () => {
        if (input === '') {
            toast("No coupon added", {
                icon: <ThumbsDown className={cn(IconsClassName)} />
            })
        }
        else {
            const coupon = Coupon.find((coupoun) => coupoun.name === input)
            if (coupon) {
                toast("Coupon Applied Succesfully", {
                    icon: <ThumbsUp className={cn(IconsClassName)} />
                })


                setPrice(price - price * (coupon.off / 100))
            }
            else {
                toast("Invalid Coupon", {
                    icon: <ThumbsDown className={cn(IconsClassName)} />
                })

            }
        }
    }


    if (cart.items.length === 0) {
        return <div className="flex items-center fixed flex-col justify-center gap-y-4 h-screen w-screen">
            <p className="text-gray-800 text-lg">
                Your cart is empty.
            </p>
            <Link href={"/"}>
                <Button> Add Items</Button></Link>
            <div className="relative rounded-md overflow-hidden grayscale">
                <CldImage
                    alt='Product'
                    width="500"
                    height="500"
                    className='object-cover w-full h-full'
                    src={"tikbcwo5lw4tslplupuw"} />
            </div>

        </div>
    }


    return <div className="grid grid-cols-12 grid-rows-2 gap-8">
        <div className="space-y-6 col-start-1 lg:col-span-8 col-span-full row-span-full">
            <p className="font-bold text-3xl ">Shopping Cart</p>
            {cart.items.map((item: any) => <CartProduct key={item.id} item={item} />)}
            <Button className="w-full" onClick={() => cart.removeAll()}>Empty Cart</Button>
        </div>
        <div className="bg-gray-50 rounded-lg lg:p-8 px-4 py-6 mt-16 lg:col-span-4 col-span-full  ">
            <p className="text-lg font-medium">Order Summary</p>
            <div className="mt-6 space-y-4 flex flex-col justify-between ">
                <div className="flex flex-col gap-4 text-sm border-t pt-4 border-gray-200">
                    {cart.items.map((item: any) => <div key={item.id}>
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="font-semibold">{item.name}</h1>
                                <p className="mt-2 text-xs text-gray-400">Qty: {item.count}</p>
                            </div>
                            <Currency value={item.price * item.count} currency={item.currency} />
                        </div>
                    </div>)}
                </div>
                <div className="mt-12 flex items-center gap-x-4">
                    <Input className="bg-white " placeholder="Apply Coupon Code" value={input} onChange={(e) => setInput(e.target.value)} />
                    <Badge className=" cursor-pointer " onClick={handelPrice}>Apply</Badge>
                </div>
                <div className="border-t border-gray-200 ">
                    <div className="flex items-center justify-between pt-4">
                        <p className="font-medium text-gray-900">Order Total</p>
                        <Currency value={price} currency="USD" />
                    </div>
                    <Link href={"/cart/order"}><Button className="w-full mt-4">Checkout</Button></Link>
                </div>
            </div>
        </div>
    </div>
}


export default Page