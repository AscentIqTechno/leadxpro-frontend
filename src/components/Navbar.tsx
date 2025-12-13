import { useSelector, useDispatch } from "react-redux";
import {
  openLogin,
  openSignup,
  openForgotPassword,
  closeAll
} from "@/redux/slices/modelSlice";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";
import ForgotPasswordModal from "@/components/ForgotPassword";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupOpen, loginOpen, forgotPasswordOpen } = useSelector(
    (state: any) => state.modal
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Features", "How it works", "Testimonials", "Pricing", "FAQ"];

  const handleLogoClick = () => {
    navigate("/"); // Remove any #id
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/90 backdrop-blur-md py-3 shadow-lg"
            : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <h1 className="text-2xl font-extrabold text-white tracking-wide">
              Lead<span className="text-yellow-500">Reach</span>
              <span className="text-white">Xpro</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`/#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white"
              onClick={() => dispatch(openLogin())}
            >
              Login
            </Button>
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold w-full"
              onClick={() => dispatch(openSignup())}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg">
            <div className="container mx-auto px-4">
              <ul className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`/#${item.toLowerCase().replace(/\s/g, "-")}`}
                      className="text-gray-300 hover:text-white transition-colors block py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li className="pt-4 flex flex-col space-y-3">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white w-full justify-start"
                    onClick={() => {
                      dispatch(openLogin());
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold w-full"
                    onClick={() => {
                      dispatch(openSignup());
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* Modals */}
      <LoginModal
        open={loginOpen}
        onClose={() => dispatch(closeAll())}
        onSwitchToSignup={() => dispatch(openSignup())}
        onSwitchToForgotPassword={() => dispatch(openForgotPassword())}
      />

      <SignupModal
        open={signupOpen}
        onClose={() => dispatch(closeAll())}
        onSwitchToLogin={() => dispatch(openLogin())}
      />

      <ForgotPasswordModal
        open={forgotPasswordOpen}
        onClose={() => dispatch(closeAll())}
        onSwitchToLogin={() => dispatch(openLogin())}
      />
    </>
  );
};

export default Navbar;
