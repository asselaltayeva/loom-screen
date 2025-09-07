'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


const user = {};

const Navbar = () => {
    const router = useRouter();
  return (
    <header className='navbar'>
        <nav>
            <Link href="/">
                <Image src="/assets/icons/logo.svg" alt="Loom Logo" width={32} height={32} />
                <h1 className='text-2xl font-karla font-bold'>Looma</h1>
            </Link>

                {user && (
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Image 
                        src="/assets/images/dummy.jpg" 
                        alt="User Profile" 
                        width={36} 
                        height={36} 
                        className="rounded-full cursor-pointer"
                      />
                    </DropdownMenuTrigger>
                  
                    <DropdownMenuContent 
                      className="w-50 bg-white border border-gray-200 rounded-lg shadow-lg p-1"
                      align="end"
                    >
                      <DropdownMenuLabel className=" mt-1 rounded-xl px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 cursor-pointer">
                        My Profile
                      </DropdownMenuLabel>
                  
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          className="rounded-xl px-2 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => router.push('/profile')}
                        >
                          Profile
                        </DropdownMenuItem>
                  
                        <DropdownMenuItem
                          className="rounded-xl px-2 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          Settings
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                  
                      <DropdownMenuSeparator className="my-1 h-px bg-gray-200" />
                  
                      <DropdownMenuItem
                        className="mb-1 rounded-xl px-2 py-2 hover:bg-red-50 text-red-600 cursor-pointer font-medium"
                        onClick={() => console.log("Logging out...")}
                      >
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                )
            }


        </nav>
    </header>
  )
}

export default Navbar