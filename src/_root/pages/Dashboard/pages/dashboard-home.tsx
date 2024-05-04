import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
import { Link } from "react-router-dom"
import { StatsRingCard } from '@/components/ui/statsRingCard'
import { MantineProvider } from '@mantine/core'
//@ts-ignore

import { home } from "./../../../../../public/asset/Sample_Data/DashBoard/home"
const DashboardHome = () => {

  const name = home[0].userData.uname;
  const total = home[0].userData.totalCourses;
  const completed = home[0].userData.completedCourse;
  const inprocess = home[0].userData.ongoingCourses;
  
  // Courses
  const c1 = home[1].LastPlayedCourse.c1;
  const c2 = home[1].LastPlayedCourse.c2;
  const c3 = home[1].LastPlayedCourse.c3;

  //Achievement
  const a1 = home[2].Achievements.a1;
  const a2 = home[2].Achievements.a2;
  const a3 = home[2].Achievements.a3;

  

  return (
    <div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid items-center gap-4 md:grid-cols-2 lg:gap-8">
          <div className="flex items-center gap-4">
            <img
              alt="Avatar"
              className="rounded-full border"
              height="96"
              src={`/asset/Images/${home[0].userData.image}`}
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
            <div className="grid gap-1.5">
              <h1 className="font-semibold text-2xl">Welcome, {name}!</h1>
              <p className="text-gray-500 dark:text-gray-400">
                You're making great progress in your learning journey. Keep it up!
              </p>
            </div>

          </div>
          <Card className="py-10 center bg-gray-100">


            <MantineProvider>
              <StatsRingCard 
              cardTitle="Over Views" 
              total={total}
              completed={completed}
              inprocess={inprocess}
              />
            </MantineProvider>
          </Card>


        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex items-center gap-4 ">
              <CardTitle className="text-base font-semibold">My Courses</CardTitle>
              <Button className="ml-auto" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent className="p-5">
              <ul className="grid gap-4">
                <li>
                  <Link
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-100/40 transition-all hover:bg-gray-100 hover:translate-y-0.5 dark:bg-gray-800/40 dark:hover:bg-gray-800"
                    to="#"
                  >
                    <PlayIcon className="w-4 h-4 shrink-0" />
                    <div className="grid gap-1.5">
                      <h3 className="font-semibold">{c1}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Learn the basics of JavaScript programming.
                      </p>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 ml-auto shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-100/40 transition-all hover:bg-gray-100 hover:translate-y-0.5 dark:bg-gray-800/40 dark:hover:bg-gray-800"
                    to="#"
                  >
                    <PlayIcon className="w-4 h-4 shrink-0" />
                    <div className="grid gap-1.5">
                      <h3 className="font-semibold">{c2}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Build powerful web applications with React.
                      </p>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 ml-auto shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-100/40 transition-all hover:bg-gray-100 hover:translate-y-0.5 dark:bg-gray-800/40 dark:hover:bg-gray-800"
                    to="#"
                  >
                    <PlayIcon className="w-4 h-4 shrink-0" />
                    <div className="grid gap-1.5">
                      <h3 className="font-semibold">{c3}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        An introduction to data analysis and visualization.
                      </p>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 ml-auto shrink-0" />
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          {/*  */}
          <Card>
            <CardHeader className="flex items-center gap-4">
              <CardTitle className="text-base font-semibold">My Achievements</CardTitle>
              <Button className="ml-auto" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <AwardIcon className="w-6 h-6 shrink-0" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">{a1}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Completed the JavaScript Fundamentals course with distinction.
                  </p>
                </div>
                <Button className="ml-auto w-8 h-8" size="icon">
                  <ChevronRightIcon className="w-4 h-4 shrink-0" />
                  <span className="sr-only">View achievement</span>
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <AwardIcon className="w-6 h-6 shrink-0" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">{a2}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Earned the React Master badge for exceptional performance in React course.
                  </p>
                </div>
                <Button className="ml-auto w-8 h-8" size="icon">
                  <ChevronRightIcon className="w-4 h-4 shrink-0" />
                  <span className="sr-only">View achievement</span>
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <AwardIcon className="w-6 h-6 shrink-0" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">{a3}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Achieved the Data Science Expert title by completing advanced data analysis and machine learning
                    courses.
                  </p>
                </div>
                <Button className="ml-auto w-8 h-8" size="icon">
                  <ChevronRightIcon className="w-4 h-4 shrink-0" />
                  <span className="sr-only">View achievement</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

//@ts-ignore
function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}

//@ts-ignore
function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
//@ts-ignore

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

//@ts-ignore
function BookOpenIcon(props) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

//@ts-ignore
function TrendingUpIcon(props) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

//@ts-ignore
function AwardIcon(props) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

//@ts-ignore
function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
//@ts-ignore

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
//@ts-ignore

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
//@ts-ignore

function PlayIcon(props) {
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
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}
//@ts-ignore

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}
//@ts-ignore

function PercentIcon(props) {
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
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}


export default DashboardHome