import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ReviewSlider from "@/components/shared/ReviewSlider";

interface LayoutProps {
  children: ReactNode;
  hideReviews?: boolean;
}

const Layout = ({ children, hideReviews }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      {!hideReviews && <ReviewSlider />}
      <Footer />
    </div>
  );
};

export default Layout;
