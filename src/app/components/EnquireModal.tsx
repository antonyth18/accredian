import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Check } from "lucide-react";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function BaseModal({ isOpen, onClose, title = "Get Expert Guidance" }: BaseModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    teamSize: "",
    phone: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
      // Reset state automatically shortly after close for smooth exit transition
      setTimeout(() => {
        setStatus("idle");
        setFormData({ fullName: "", email: "", companyName: "", teamSize: "", phone: "" });
      }, 300);
    }
  };

  const handleSubmit = async () => {
    // Basic validation guard
    if (!formData.fullName || !formData.email) {
      setErrorMsg("Please fill in required fields (Name, Email)");
      setStatus("error");
      return;
    }
    
    setStatus("loading");
    setErrorMsg("");
    
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error("Server error");
      }
      
      setStatus("success");
    } catch (error) {
      setErrorMsg("Failed to submit enquiry. Please try again.");
      setStatus("error");
    }
  };

  const teamSizes = ["1-10", "11-50", "51-200", "200+"];

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md sm:rounded-2xl p-6">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">We'll be in touch soon!</h3>
            <p className="text-[#64748B] mb-8">Our advisor will reach out to you within 24 hours.</p>
            <button 
              onClick={() => handleOpenChange(false)}
              className="bg-gray-100 text-[#0F172A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors w-full"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <DialogHeader className="mb-4">
              <DialogTitle className="text-[#0F172A] font-bold text-xl">{title}</DialogTitle>
              <DialogDescription className="text-[#64748B] text-sm">
                Our advisor will reach out within 24 hours
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col space-y-4">
              {status === "error" && (
                <div className="text-red-500 text-sm bg-red-50 p-3 rounded-md">
                  {errorMsg}
                </div>
              )}

              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium text-[#0F172A]">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium text-[#0F172A]">Work Email</label>
                <input 
                  type="email" 
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium text-[#0F172A]">Company Name</label>
                <input 
                  type="text" 
                  placeholder="Company name"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-[#0F172A]">Team Size</label>
                <div className="grid grid-cols-4 gap-2">
                  {teamSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setFormData({...formData, teamSize: size})}
                      className={`py-2 rounded-md text-[13px] sm:text-sm font-medium transition-colors ${
                        formData.teamSize === size 
                          ? "bg-[#2563EB] text-white" 
                          : "bg-gray-100 text-[#0F172A] hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium text-[#0F172A]">Phone (optional)</label>
                <input 
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50"
                />
              </div>

              <button 
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors mt-2 disabled:opacity-70"
              >
                {status === "loading" ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function EnquireModal(props: Omit<BaseModalProps, "title">) {
  return <BaseModal {...props} title="Get Expert Guidance" />;
}

export function ContactModal(props: Omit<BaseModalProps, "title">) {
  return <BaseModal {...props} title="Contact Our Team" />;
}

export default EnquireModal;
