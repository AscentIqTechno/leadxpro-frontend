// pages/InquiryContactListPage.tsx
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Trash2, Calendar, Search } from "lucide-react";
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from "@/redux/api/contactApi";

const InquiryContactListPage: React.FC = () => {
  const { data, isLoading, error, refetch } = useGetContactsQuery(undefined);
  const [deleteContact] = useDeleteContactMutation();
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Extract real contacts array safely
  const contacts = Array.isArray(data?.data) ? data.data : [];

  // ✅ Search filter
  const filteredContacts = contacts.filter((c: any) =>
    c.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    console.log("Contacts API response:", data);
    console.log("Contacts array:", contacts);
    console.log("Error:", error);
  }, [data, error]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    try {
      await deleteContact(id).unwrap();
      toast.success("Contact deleted successfully!");
      refetch();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Inquiry Contacts</h1>

      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Table */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Message</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Created At</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-300">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {filteredContacts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                    No inquiries found
                  </td>
                </tr>
              ) : (
                filteredContacts.map((c: any) => (
                  <tr key={c._id} className="hover:bg-gray-700/30 transition-colors">
                    <td className="px-6 py-4 text-white">{c.name}</td>
                    <td className="px-6 py-4 text-gray-300">{c.email}</td>
                    <td className="px-6 py-4 text-gray-300">{c.message || "-"}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {c.createdAt
                        ? new Date(c.createdAt).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDelete(c._id)}
                        className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InquiryContactListPage;
