"use client"
import Link from "next/link"
import Image from "next/image"
import { DarkLightToggle, UserButton } from "@/components/button"
import { ToggleGroup } from "@/components/ui/toggle-group"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"


export default function NavbarComponent() {
  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 border-b fixed z-10 backdrop-blur-sm bg-background/50 shadow-sm font-RobotoCondensed text-[15px] tracking-wider">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>DATA</MenubarTrigger>
          <MenubarContent>
            <Link href="/profiles"><MenubarItem>TENTANG KAMI</MenubarItem></Link>
            <Link href="/posts"><MenubarItem>ARTIKEL</MenubarItem></Link>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="ml-auto">
        <ToggleGroup variant="outline" type="multiple" className="gap-2">
          <DarkLightToggle/>
          <UserButton/>
        </ToggleGroup>
      </div>
    </header>
  )
}