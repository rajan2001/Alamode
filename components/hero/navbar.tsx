"use client"

import { ShoppingBag, ShoppingBasket } from "lucide-react";
import { Button } from "../ui/button";
import MainNavBar from "./main-nav";
import { cn } from "@/lib/utils";
import { IconsClassName } from "@/lib/config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { SignOutButton, useUser } from "@clerk/nextjs";


const Navbar = () => {
    const { isSignedIn, user } = useUser()
    const router = useRouter()
    const items = useCart((state: any) => state.items)





    return (
        <div className="fixed top-0 left-0 w-screen bg-white px-12 z-50 ">
            <div className="lg:hidden flex h-16 items-center justify-between  ">
                <Sheet>
                    <SheetTrigger><HamburgerMenuIcon className="h-6 w-6" /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader className="h-full flex flex-col space-y-9">
                            <SheetTitle>
                                <Link className="text-xl font-bold cursor-pointer flex items-center  justify-center gap-x-2" href={"/"}>
                                    <ShoppingBasket className="h-8 w-8" /> Alamode
                                </Link>
                            </SheetTitle>
                            <MainNavBar />
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

                <div className="flex items-center gap-x-4">
                    <Button className="flex gap-2 items-center" onClick={() => router.push("/cart")}><ShoppingBag className={cn(IconsClassName)} /> <span>{items?.length}</span></Button>
                    {isSignedIn ? <DropdownMenu>
                        <DropdownMenuTrigger><Button>Welcome, {user.firstName}</Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <SignOutButton>
                                <DropdownMenuLabel className="cursor-pointer">Logout</DropdownMenuLabel>
                            </SignOutButton>
                        </DropdownMenuContent>
                    </DropdownMenu> : <Link href={"/sign-in"}><Button className="text-sm" >Login</Button></Link>}

                </div>

            </div>
            <div className="lg:flex hidden items-center h-16 justify-between">
                <Link className="text-xl font-bold cursor-pointer flex items-center gap-x-2" href={"/"}>
                    <ShoppingBasket className="h-8 w-8" /> Alamode
                </Link>
                <MainNavBar className="mx-6 hidden lg:block" />
                <div className="flex items-center gap-x-4">
                    <Button className="flex gap-2 items-center" onClick={() => router.push("/cart")}><ShoppingBag className={cn(IconsClassName)} /> <span>{items?.length}</span></Button>
                    {isSignedIn ? <DropdownMenu>
                        <DropdownMenuTrigger><Button>Welcome, {user.firstName}</Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <SignOutButton>
                                <DropdownMenuLabel className="cursor-pointer">Logout</DropdownMenuLabel>
                            </SignOutButton>
                        </DropdownMenuContent>
                    </DropdownMenu> : <Link href={"/sign-in"}><Button className="text-sm" >Login</Button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
