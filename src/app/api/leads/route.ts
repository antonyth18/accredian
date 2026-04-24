export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Accept standard keys alongside the keys supplied from our EnquireModal component
    const name = body.name || body.fullName;
    const email = body.email;
    const company = body.company || body.companyName;
    const teamSize = body.teamSize;
    const phone = body.phone;

    // Validate: name and email are required
    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Log the lead
    console.log("[LEAD]", {
      name,
      email,
      company,
      teamSize,
      phone,
      timestamp: new Date().toISOString()
    });

    /*
     * =========================================
     * DATABASE INTEGRATION POINT
     * =========================================
     * Here is perfectly where a Prisma or Supabase insert would go!
     * 
     * PRISMA PATTERN:
     * await prisma.lead.create({
     *   data: { name, email, company, teamSize, phone }
     * });
     * 
     * SUPABASE PATTERN:
     * const { data, error } = await supabase
     *   .from('leads')
     *   .insert([{ name, email, company, teamSize, phone }]);
     * 
     * if (error) throw new Error(error.message);
     * =========================================
     */

    // Return standard success response
    return Response.json(
      { success: true, message: "Thanks! We'll be in touch within 24 hours." },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return Response.json(
      { error: "Invalid request payload" },
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET() {
  // Return a mock leads array for demo purposes
  const mockLeads = [
    {
      id: "1",
      name: "Priya S.",
      email: "priya@hcl.com",
      company: "HCL Technologies",
      teamSize: "51-200",
      phone: "+91 98765 43210",
      timestamp: new Date(Date.now() - 86400000).toISOString()
    },
    {
      id: "2",
      name: "Rahul M.",
      email: "rahul.m@reliance.com",
      company: "Reliance Industries",
      teamSize: "200+",
      phone: "+91 99999 88888",
      timestamp: new Date(Date.now() - 172800000).toISOString()
    },
    {
      id: "3",
      name: "Anjali K.",
      email: "anjali@ibm.com",
      company: "IBM India",
      teamSize: "11-50",
      phone: "+91 77777 66666",
      timestamp: new Date(Date.now() - 259200000).toISOString()
    }
  ];

  return Response.json(
    { leads: mockLeads },
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
