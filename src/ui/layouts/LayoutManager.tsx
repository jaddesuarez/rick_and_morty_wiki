"use client";

import { usePathname } from "next/navigation";
import { EXCLUDED_PATHS } from "@consts/index";
import Navbar from "@layouts/Navbar";
import Footer from "@layouts/Footer";

interface LayoutManagerProps {
  children: React.ReactNode;
}

const LayoutManager = ({ children }: LayoutManagerProps) => {
  const pathname = usePathname();

  const showNavbar = !EXCLUDED_PATHS.NAVBAR.includes(pathname);
  const showFooter = !EXCLUDED_PATHS.FOOTER.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {showFooter && <Footer />}
    </>
  );
};

export default LayoutManager;
