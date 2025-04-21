'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, XIcon } from 'lucide-react';
import React, { useState, useEffect,memo,useCallback} from 'react';
import { usePathname, useRouter} from 'next/navigation'; // Import useRouter
import {
  FaChevronDown
} from 'react-icons/fa';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';


interface NavLink {
  label: string;
  href: string;
  subLinks?: NavLink[];
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Who We Are',
    href: '/who-we-are',
    subLinks: [
      { label: 'About', href: '/about' },
      {
        label: 'Team', href: '/team', subLinks: [
          { label: 'Key Staff', href: '/team/key-staff' },
        ]
      },
    ]
  },
  {
    label: 'Our Purpose',
    href: '/our-purpose',
    subLinks: [
      { label: 'Mission', href: '/purpose/mission' },
      { label: 'Vision', href: '/purpose/vision' },
    ]
  },
  {
    label: 'Guiding Principles',
    href: '/guiding-principles',
    subLinks: [
      { label: 'Core Values', href: '/principle/values' },
    ]
  },

  {
    label: 'What We Do',
    href: '/what-we-do',
    subLinks: [
      { label: 'Key Programs', href: '/programs' },
      { label: 'Services', href: '/services' },
    ]
  },
  { label: 'Contact', href: '/contact' },
];

interface RenderNavLinkProps extends NavLink {
  pathname: string; // Add pathname as a prop
  level?: number;
  closeMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

const RenderNavLink: React.FC<RenderNavLinkProps> = ({
  pathname,
  label,
  href,
  subLinks,
  level = 0,
  closeMobileMenu,
  isMobileMenuOpen,
}) => {
  const isActive = pathname === href || (subLinks && subLinks.some(sub => sub.href === pathname));
  const isDropdown = !!subLinks;

  const handleClick =() => {
    closeMobileMenu();
  };

  const handleDropdownItemClick =() => {
    closeMobileMenu();
  };

  return (
    <div key={label} className="relative" >
      {isDropdown ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`flex items-center space-x-2 cursor-pointer font-medium focus:outline-none px-4 py-2
              ${isActive ? 'text-blue-500' : 'text-white'}
              hover:text-blue-500 transition duration-300`}
              style={{ outline: 'none' }}
            >
              {label} {level === 0 && <FaChevronDown className="h-4 w-4 ml-1" />}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/50 backdrop-blur-sm shadow-md rounded-md p-2 border border-gray-200 mt-2">
            {subLinks?.map((subLink) => (
              <DropdownMenuItem key={subLink.label} asChild>
                <Link
                  href={subLink.href}
                  className="block w-full px-4 py-2 text-white hover:text-blue-500"
                  onClick={handleDropdownItemClick}
                >
                  {RenderNavLink({
                    pathname,
                    ...subLink,
                    level: level + 1,
                    closeMobileMenu,
                    isMobileMenuOpen,
                  })}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          href={href}
          className={`font-medium font-poppins px-4 py-2  focus:outline-none
          ${isActive ? 'text-blue-500 ' : 'text-white'}
          hover:text-blue-500 transition duration-300`}
          onClick={handleClick}
        >
          {label}
        </Link>
      )}
    </div>
  );
};



function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); //usePathname is now called here
  const router = useRouter(); // Initialize useRouter
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // New state for active dropdown on desktop

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu =useCallback(() => {
    setIsMobileMenuOpen(false);
     setActiveDropdown(null);
  },[setIsMobileMenuOpen,setActiveDropdown]);

  const handleMobileLinkClick = useCallback((href: string) => {
    closeMobileMenu();
    router.push(href);
  },[closeMobileMenu,router]);

  const handleDropdownMouseEnter =useCallback((label: string) => {
        setActiveDropdown(label);
  },[setActiveDropdown]);

  const handleDropdownMouseLeave =useCallback(() => {
    setActiveDropdown(null);
  },[setActiveDropdown]);


  return (
    <header className={` ${isScrolled ? 'bg-black/50 backdrop-blur-sm' : ''} bg-black/50 backdrop-blur-sm fixed w-full py-2 top-0 z-50 transition-colors duration-300`}> {/* Transparent Header */}

      <div className="container mx-auto flex items-center justify-between px-4 mt-2 md:px-0"> {/* Added margin-top */}
        <Link href="/" aria-label="Home">
          {/* TIDI Logo or Name */}
          <Image
            src="/assets/images/SKF-Logo.png"  // Replace with the actual path to your logo image
            alt="TIDI Logo"
            width={70}
            height={70}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
              <div key={link.label}
                 onMouseEnter={() => !isMobileMenuOpen && link.subLinks ? handleDropdownMouseEnter(link.label) : undefined}
                 onMouseLeave={() => !isMobileMenuOpen ? handleDropdownMouseLeave() : undefined}
              >
                  {link.subLinks ? (
                     <DropdownMenu open={activeDropdown === link.label} onOpenChange={(open) => !open && setActiveDropdown(null)}>
                         <DropdownMenuTrigger asChild>
                            <div >
                               {RenderNavLink({...link, pathname,closeMobileMenu,isMobileMenuOpen})}
                             </div>
                          </DropdownMenuTrigger>
                      </DropdownMenu>
                  ):

                    RenderNavLink({...link, pathname,closeMobileMenu,isMobileMenuOpen})}
                </div>
            ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-blue-500 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <XIcon className='h-6 w-6' />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-[500px] bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"> {/* Fixed position, full-screen */}
            <div className="p-4"> {/* Added padding */}
              <button
                onClick={closeMobileMenu}
                onTouchStart={closeMobileMenu}
                onTouchEnd={closeMobileMenu}
                className="text-white hover:text-blue-500 float-right focus:outline-none"
                aria-label="Close Mobile Menu"
              >
                <XIcon className="h-6 w-6" />
              </button>
              <nav className="flex flex-col space-y-4 mt-8"> {/* Added margin-top */}
                {navLinks.map(link => (
                  <div key={link.label}>
                    {link.subLinks ? (
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      onTouchStart={(e) => {
                       e.stopPropagation();
                      }}
                      onTouchEnd={(e) => {
                        e.stopPropagation();
                      }}
                    >
                        {RenderNavLink({ ...link, pathname, closeMobileMenu, isMobileMenuOpen })} {/* Pass isMobileMenuOpen */}
                    </div>
                     ) : (
                    <div
                       onClick={() => handleMobileLinkClick(link.href)}
                       onTouchStart={() => handleMobileLinkClick(link.href)}
                       onTouchEnd={() => handleMobileLinkClick(link.href)}
                       >
                      {RenderNavLink({ ...link, pathname, closeMobileMenu, isMobileMenuOpen })} {/* Pass isMobileMenuOpen */}
                    </div>
                      )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default memo(Header);

