import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CSBACertificationPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Certificate In Staffing & Bidding Associates (CSBA)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your first step into the professional world of staffing and bidding
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
                <li>No specific degree required</li>
                <li>You can join us as early as after your high school graduation or with a college diploma</li>
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
                  <h3 className="text-xl font-semibold mb-2">Master bidding strategies</h3>
                  <p className="text-muted-foreground">
                    From overview of the industry & bidding processes to the high level strategies, evaluation of the
                    competition & using data in the best of businesses' interest.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Winning the recruitment strategies</h3>
                  <p className="text-muted-foreground">
                    The latest recruiting tips & tricks to pitch in new talent, helping both ways (the businesses & the
                    employees). How to effectively on board the new members & resolve all the issues related to
                    contracts & negotiations. Provide an efficient & thoroughly planned training program so that they
                    are well equipped to dispense their abilities in the best interest of the organisation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Management skills</h3>
                  <p className="text-muted-foreground">
                    Resolve the legal issues of the staff members e.g. workplace laws, wages & hours regulations. Look
                    after the immigration requirements & settle the issues related to them. Address & resolve the
                    disputes between any of these staff members, candidates, clients & agencies. Grasp the cash flow
                    management & financial forecasting.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Procurement</h3>
                  <p className="text-muted-foreground">
                    Learn types of procurement, stages of procurement and its vehicles.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Ethics</h3>
                  <p className="text-muted-foreground">
                    Take care of the privacy policies of the industry. Understand the workplace ethics & ethical
                    boundaries and its value.
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
                <p className="ml-12 text-lg">8 hours course</p>
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
                <p className="ml-12 text-lg">2 hours exam</p>
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

