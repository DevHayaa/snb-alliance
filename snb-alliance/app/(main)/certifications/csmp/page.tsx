import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CSMPCertificationPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
        <div className="flex justify-center items-center mb-4">
        <img src="/csmp.png" alt="CBMP Logo" className="h-30 w-40 mr-4" />
          <h1 className="text-4xl font-bold tracking-tight mb-4">Certified Staffing Management Professional (CSMP)</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Become an expert in resource management and staffing operations
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
                <li>Resource Manager</li>
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
                  <h3 className="text-xl font-semibold mb-2">Staffing</h3>
                  <p className="text-muted-foreground">
                    Understand the overview of industry & types of staffing agencies. Trending recruiting techniques.
                    Tip & tricks for sourcing. Attract the new talent.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Managing resource process</h3>
                  <p className="text-muted-foreground">
                    Deep diving into the recruitment process i.e. searching the right candidate, interviewing, hiring
                    and retaining process. Develop talent pool. Assess skill gap. Training of employees. Built the
                    network & close talent pool.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Budgeting</h3>
                  <p className="text-muted-foreground">
                    Understand the salary structure of employees. Grasp the consulting rates, incorporate rates vs term
                    employees vs self employees.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Communication boundaries</h3>
                  <p className="text-muted-foreground">
                    Learning the communication skills to effectively communicate with candidates. Build rapport and
                    manage expectations. Learn how to handle internal communication expertly.
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

