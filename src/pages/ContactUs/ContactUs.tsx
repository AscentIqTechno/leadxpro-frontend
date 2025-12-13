// pages/ContactUs.tsx
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCreateContactMutation } from "@/redux/api/contactApi";

const ContactUs: React.FC = () => {
  useEffect(() => {
    document.title = "LeadReachXpro | Contact Us";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  const validate = () => {
    const newErrors: typeof errors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await createContact(formData).unwrap();
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error(err);
      toast.error(err?.data?.message || "Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-10">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6 text-center">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 text-gray-100">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 rounded-md bg-gray-700 text-white border ${
                errors.name ? "border-red-500" : "border-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-md bg-gray-700 text-white border ${
                errors.email ? "border-red-500" : "border-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full p-3 rounded-md bg-gray-700 text-white border ${
                errors.message ? "border-red-500" : "border-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
              placeholder="Your message..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-md hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <p className="text-gray-300 text-sm text-center mt-6">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-500 font-semibold">LeadReachXpro</span>. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
