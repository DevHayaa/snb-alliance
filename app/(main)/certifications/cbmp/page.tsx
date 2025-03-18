import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CBMPCertificationPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Certificate in Bid & Management Professional (CBMP)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advance your career with specialized knowledge in bid management and proposal writing
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
                <li>Proposal writers</li>
                <li>Pre-requisite: CSBA certification</li>
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
                  <h3 className="text-xl font-semibold mb-2">Bidding process</h3>
                  <p className="text-muted-foreground">
                    Deep diving into the industry, industrial trends, bidding agencies and their processes. Evaluating
                    the competition, using the data to inform decisions and creating bidding strategies. Use metrics to
                    analyse the success of bids.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Proposal Management</h3>
                  <p className="text-muted-foreground">
                    Review RFPS (request for proposals) and develop proposals. Proposal management strategies such as
                    team collaboration, quality control & scheduling. Mastering the strategies to approach the client in
                    case of bid loss.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Budgeting & Pricing</h3>
                  <p className="text-muted-foreground">
                    Understand how to create competitive pricing. Learn the cost structure & scheming.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Communication skills</h3>
                  <p className="text-muted-foreground">
                    Effective communications with clients/prospects, build rapport and manage their expectations
                    constructively.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Legal Obligations</h3>
                  <p className="text-muted-foreground">
                    Learn the legal sensitivity of bidding such as contract management and risk alleviation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Ethics</h3>
                  <p className="text-muted-foreground">
                    Importance of confidentiality, privacy & ethical boundaries in the industry especially the bidding
                    process.
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

