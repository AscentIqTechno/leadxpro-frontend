// components/HomeLayout.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const HomeLayout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomeLayout;
