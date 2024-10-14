"use client";
import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ui/mode-toggle";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <ModeToggle />

        <MenuItem setActive={setActive} active={active} item="Anime">




          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
        
        
        
            <ProductItem
              title="Naruto"
              href="/naruto"
              src="https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
              description="Naruto the hokage"
            />
            <ProductItem
              title="Death Note"
              href="/deathnote"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGSvjzAmP6yMagAd3iDNVS6N2Tc5VkYSJ9w&s"
              description="The GOAT anime"
            />
            <ProductItem
              title="Attack On Titan"
              href="/aot"
              src="https://p.potaufeu.asahi.com/8729-p/picture/25249913/808e737d2d0b360ae40d537f91554ae0.jpg"
              description="GOATest of all GOAT Animes"
            />
            <ProductItem
              title="I Want to Eat Your Pancreas"
              href="/iwteyp"
              src="https://images-na.ssl-images-amazon.com/images/I/41a9fgI+zmL.jpg"
              description="Most amazing movie"
            />







          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
