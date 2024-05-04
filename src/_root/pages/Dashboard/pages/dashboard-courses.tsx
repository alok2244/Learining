
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"


const DashboardCourse  = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="max-w-6xl w-full mx-auto flex flex-col gap-4">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">Courses</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Your learning journey starts here. Dive into the world of knowledge with our expertly curated courses.
            </p>
          </div>
        </div>
        <div className="max-w-6xl w-full mx-auto flex flex-col gap-6">
          <section className="grid gap-4">
            <div className="flex items-center gap-4">
              <ClockIcon className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Ongoing Courses</h2>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader className="flex items-start gap-4">
                  
                  <div className="grid gap-1">
                    <CardTitle className="text-2xl">Introduction to Psychology</CardTitle>
                    <CardDescription>Understand the human mind and behavior.</CardDescription>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <VideoIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">4/10 topics</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">25% complete</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-4">
                  <div className="grid gap-1">
                    <CardTitle className="text-base">The Science of Psychology</CardTitle>
                    <CardDescription className="text-sm">
                      An introduction to the history of psychology and the scientific method.
                    </CardDescription>
                  </div>
                  <Button size="sm">Continue</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-start gap-4">
                  
                  <div className="grid gap-1">
                    <CardTitle className="text-2xl">The Art of Storytelling</CardTitle>
                    <CardDescription>Master the craft of narrative and captivate your audience.</CardDescription>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <VideoIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">0/8 topics</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">0% complete</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-4">
                  <div className="grid gap-1">
                    <CardTitle className="text-base">The Hero's Journey: Archetypes in Mythology</CardTitle>
                    <CardDescription className="text-sm">
                      Explore the universal appeal of the monomyth in Joseph Campbell's Hero's Journey.
                    </CardDescription>
                  </div>
                  <Button size="sm">Start</Button>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="grid gap-4">
            <div className="flex items-center gap-4">
              <CheckCircleIcon className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Last Completed</h2>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader className="flex items-start gap-4">
                  
                  <div className="grid gap-1">
                    <CardTitle className="text-2xl">The Art of Calligraphy</CardTitle>
                    <CardDescription>Learn the elegant art of beautiful writing.</CardDescription>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <VideoIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">8/8 topics</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">100% complete</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-4">
                  <div className="grid gap-1">
                    <CardTitle className="text-base">Flourishes and Embellishments</CardTitle>
                    <CardDescription className="text-sm">
                      Add style to your writing with decorative flourishes and elegant embellishments.
                    </CardDescription>
                  </div>
                  <Button size="sm">Review</Button>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="grid gap-4">
            <div className="flex items-center gap-4">
              <StarIcon className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Suggested Courses</h2>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader className="flex items-start gap-4">
                  
                  <div className="grid gap-1">
                    <CardTitle className="text-2xl">The Science of Well-Being</CardTitle>
                    <CardDescription>Learn what psychological science says about happiness.</CardDescription>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <VideoIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">0/10 topics</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">0% complete</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-4">
                  <div className="grid gap-1">
                    <CardTitle className="text-base">Misconceptions about Happiness</CardTitle>
                    <CardDescription className="text-sm">
                      Uncover the truth about what makes us happy and the common misconceptions that can lead us astray.
                    </CardDescription>
                  </div>
                  <Button size="sm">Enroll</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-start gap-4">
                  
                  <div className="grid gap-1">
                    <CardTitle className="text-2xl">The Art of Storytelling</CardTitle>
                    <CardDescription>Master the craft of narrative and captivate your audience.</CardDescription>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <VideoIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">0/8 topics</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">0% complete</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-4">
                  <div className="grid gap-1">
                    <CardTitle className="text-base">The Hero's Journey: Archetypes in Mythology</CardTitle>
                    <CardDescription className="text-sm">
                      Explore the universal appeal of the monomyth in Joseph Campbell's Hero's Journey.
                    </CardDescription>
                  </div>
                  <Button size="sm">Start</Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default DashboardCourse 
//@ts-ignore

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
//@ts-ignore


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
//@ts-ignore


function FrameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}

//@ts-ignore

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
//@ts-ignore


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}
