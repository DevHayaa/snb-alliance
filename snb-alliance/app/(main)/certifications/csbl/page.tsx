import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CSBLCertificationPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
        <div className="flex justify-center items-center mb-4">
        <img src="/csbl.png" alt="CBMP Logo" className="h-30 w-40 mr-4" />
          <h1 className="text-4xl font-bold tracking-tight mb-4">Certified Staffing And Bidding Leader (CSBL)</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The highest level of certification for staffing and bidding professionals in leadership positions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-10">
          {/* Eligibility Section */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </span>
                Eligibility
              </h2>
              <ul className="ml-12 space-y-2 list-disc text-lg">
                <li>Operation Manager (OM), General Manager (GM)</li>
                <li>Director Consultant (DC), Account Executive (AE)</li>
                <li>Business Development Manager (BD), Director (D)</li>
                <li>Prerequisite: CSBA certification</li>
              </ul>
            </CardContent>
          </Card>

          {/* Value Section */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </span>
                Value
              </h2>

              <div className="ml-12 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Recruitment tactics</h3>
                  <p className="text-muted-foreground">
                    Learn how to embed the latest techniques into the recruitment process. Attract and resource the top
                    notch and brilliant people in the industry. Evaluate competition. Search, interview, hire & retain
                    the right candidate.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Bidding</h3>
                  <p className="text-muted-foreground">
                    Understand details of the bidding process in depth. Identify opportunities. Review RFPs (request for
                    proposals) & develop proposals. Usage of data effectively to inform decisions and create bidding
                    strategies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Talent & operation Management</h3>
                  <p className="text-muted-foreground">
                    Develop a talent pool including assessing skill gaps, developing employee training and succession
                    plans. Learn how to build the right team for your organisation. How to develop a salary and
                    commission model.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Salary structure</h3>
                  <p className="text-muted-foreground">
                    Learn about employee salary and compensation structure and how to develop profitable pricing
                    strategy. How to structure consultancy rates and incorporate rates vs term employee and self
                    employee.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Procurement</h3>
                  <p className="text-muted-foreground">
                    In depth understanding of procurement, type of procurement, private vs. public, procurement process,
                    acquiring govt. contracting vehicles.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Legal</h3>
                  <p className="text-muted-foreground">
                    Understand the critical legal angles & compliance involved that the bidding & staffing agency need
                    to be aware of, such as equal employment opportunity laws, wage and hour regulations, immigration
                    requirements and contract.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy</h3>
                  <p className="text-muted-foreground">
                    Learn the privacy & confidential aspects of the industry, its importance specifically related to the
                    bidding process. Learn the ethics and ethical boundaries and its importance in the industry.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Industries & their trends</h3>
                  <p className="text-muted-foreground">
                    Understand different types of industries, their serving requirements & their latest technological
                    advancements. e.g. IT, medical, clerk, janitorial services, construction worker.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Duration & Assessment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </span>
                  Duration
                </h2>
                <p className="ml-12 text-lg">16 hours course</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </span>
                  Assessment
                </h2>
                <p className="ml-12 text-lg">4 hours exam</p>
              </CardContent>
            </Card>
          </div>

          {/* Apply Button */}
          <div className="text-center mt-6">
          <Link
                href={`/membership`}
                className="px-6 py-2 border border-black rounded-md hover:bg-primary/90 transition-colors"
              >
                Apply Now
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

