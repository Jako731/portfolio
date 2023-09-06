import { useState } from 'react';
import { Drawer } from "@material-tailwind/react";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Real-Life Projects", href: "/#projects" },
    { name: "Contact", href: "/contact" },
    { name: "Linked In", href: "https://www.linkedin.com/in/jakewmorris731/" }
]

export const LinkedInIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30" className="w-6 h-6 text-primary-950 hover:text-primary-900">
          <path fill="currentColor" d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
        </svg>
    );
}

export const BurgerIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )
}

export const ExitIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 text-primary-950">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

export default function NavBar() {
    const [open, setOpen] = useState(false)

    return (
        <>
          <nav className="flex sticky bg-primary-100 py-3 px-5 top-0 justify-between text-primary-950 font-sans z-40">
            <h1 className="tracking-widest font-bold">
              Jake Morris
            </h1>
            <section className="hidden lg:flex divide-x-[2px] divide-primary-950 font-semibold">
              {NAV_LINKS.map((link, i) => {
                  return (
                      <a
                        key={i}
                        href={link.href}
                        className="px-3 text-primary-950 hover:text-primary-800"
                      >
                        {link.name === "Linked In"
                         ? <LinkedInIcon />
                         : link.name
                        }
                      </a>
                  );
              })}
            </section>
            <button className="block lg:hidden" onClick={() => {
                setOpen(true)
            }}>
              <BurgerIcon/>
            </button>
          </nav>
          <Drawer
            placement="right"
            open={open}
            onClose={setOpen}
            className="p-4 lg:hidden bg-primary-100"
          >
            <button className="absolute top-4 right-2" onClick={() => {
                setOpen(false)
            }}>
              <ExitIcon />
            </button>

            <div className="flex flex-col divide-y-[2px] divide-primary-950 font-semibold">
              <h1 className="tracking-widest font-bold text-primary-950 text-center mb-5">
                Jake Morris
              </h1>
              
              {NAV_LINKS.map((link, i) => {
                  return (
                      <a
                        key={i}
                        href={link.href}
                        className="py-3 text-primary-950 hover:text-primary-800 text-right"
                        onClick={() => {
                            if (link.name != "Contact") {
                                setOpen(false)
                            }
                        }}
                      >
                        {link.name === "Linked In"
                         ? <div className="flex justify-end"><LinkedInIcon /></div>
                         : link.name
                        }
                      </a>
                  );
              })}
            </div>
          </Drawer>
        </>
    )
}
