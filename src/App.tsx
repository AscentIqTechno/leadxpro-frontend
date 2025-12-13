import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import SmtpPage from "./pages/SMTP/SmtpPage";
import CampaignsPage from "./pages/Campaigns/CampaignsPage";
import UsersPage from "./pages/Users/UsersPage";
import LeadsPage from "./pages/Leads/LeadsPage";
import EmailDirectoryList from "./pages/directory/EmailDirectoryList";

// SMS Pages
import SmsGatewayConfigPage from "./pages/SMS/SmsGatewayConfigPage";
import SmsSendPage from "./pages/SMS/SmsSendPage";
import SmsNumberDirectoryPage from "./pages/SMS/SmsNumberDirectoryPage";

// Billing & Settings
import BillingPage from "./pages/Billing/billingPayment";
import PlanManagement from "./pages/settings/PlanManagement";
import RazorpayConfigManager from "./pages/settings/RazorpayConfigForm";
import UserProfile from "./pages/UserProfile/UserProfile";

// Layouts
import DashboardLayout from "./Layouts/DashboardLayout";
import HomeLayout from "./Layouts/HomeLayout";

// Policy / Static Pages
import PrivacyPolicy from "./pages/policy/privacy-policy"; // create this file

import TermsOfService from "./pages/policy/terms-of-service"; // optional

// Auth / Protected
import PrivateRoute from "./components/PrivateRoute";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import InquiryContactListPage from "./pages/InquiryContact/InquiryContactListPage";

const App = () => (
  <Provider store={store}>
    <Toaster position="top-right" />

    <TooltipProvider>
      <BrowserRouter>
        <Routes>

          {/* Public Pages with HomeLayout */}
          <Route path="/" element={<Index />} />
          <Route
            path="/privacy-policy"
            element={
              <HomeLayout>
                <PrivacyPolicy />
              </HomeLayout>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <HomeLayout>
                <TermsOfService />
              </HomeLayout>
            }
          />

          {/* New Pages */}
          <Route
            path="/about-us"
            element={
              <HomeLayout>
                <AboutUs />
              </HomeLayout>
            }
          />

          <Route
            path="/contact-us"
            element={
              <HomeLayout>
                <ContactUs />
              </HomeLayout>
            }
          />
          {/* Private Dashboard Routes */}
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="overview" element={<Dashboard />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="smtp" element={<SmtpPage />} />
            <Route path="campaigns" element={<CampaignsPage />} />
            <Route path="leads" element={<LeadsPage />} />
            <Route path="email_directory" element={<EmailDirectoryList />} />
            <Route path="payment_billing" element={<BillingPage />} />
            <Route path="settings/plan_management" element={<PlanManagement />} />
            <Route path="settings/razorpay_config" element={<RazorpayConfigManager />} />
            <Route path="sms_config" element={<SmsGatewayConfigPage />} />
            <Route path="sms_campaigns" element={<SmsSendPage />} />
            <Route path="sms_directory" element={<SmsNumberDirectoryPage />} />
            <Route path="user_profile" element={<UserProfile />} />
            <Route path="inquiry-contacts" element={<InquiryContactListPage />} />

          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </Provider>
);

export default App;
