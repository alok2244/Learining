/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/EcExPQwvfSs
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Link } from "react-router-dom"
import Dashboard from "./pages/dashboard-home"


export function FixedDash() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" to="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              to="#"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              to="#"
            >
              <BookOpenIcon className="h-4 w-4" />
              Courses
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              to="#"
            >
              <TrendingUpIcon className="h-4 w-4" />
              Progress
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              to="#"
            >
              <AwardIcon className="h-4 w-4" />
              Achievements
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              to="#"
            >
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" to="#">
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Home</span>
          </Link>
          <nav className="hidden gap-5 text-base font-medium lg:flex lg:gap-5 lg:text-sm">
            <Link className="font-bold" to="#">
              Home
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" to="#">
              Courses
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" to="#">
              Progress
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" to="#">
              Achievements
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" to="#">
              Settings
            </Link>
          </nav>
          <div className="w-full ml-auto flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search courses..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {/* <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid items-center gap-4 md:grid-cols-2 lg:gap-8">
            <div className="flex items-center gap-4">
              <img
                alt="Avatar"
                className="rounded-full border"
                height="96"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
              <div className="grid gap-1.5">
                <h1 className="font-semibold text-2xl">Welcome, User!</h1>
                <p className="text-gray-500 dark:text-gray-400">
                  You're making great progress in your learning journey. Keep it up!
                </p>
              </div>
            </div>
            <Card className="p-4">
              <h2 className="font-semibold text-lg">My Courses</h2>
              <ul className="grid gap-4 mt-4">
                <li>
                  <Link className="flex items-start gap-4 text-sm py-4 border-t first:border-t-0" to="#">
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Introduction to JavaScript</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Learn the basics of JavaScript programming.
                      </p>
                    </div>
                    <Progress className="h-4 w-12 ml-auto" value={25} />
                    <ChevronRightIcon className="w-4 h-4 shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link className="flex items-start gap-4 text-sm py-4 border-t first:border-t-0" to="#">
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Mastering React Framework</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Build powerful web applications with React.
                      </p>
                    </div>
                    <Progress className="h-4 w-12 ml-auto" value={50} />
                    <ChevronRightIcon className="w-4 h-4 shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link className="flex items-start gap-4 text-sm py-4 border-t first:border-t-0" to="#">
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Data Science Fundamentals</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        An introduction to data analysis and visualization.
                      </p>
                    </div>
                    <Progress className="h-4 w-12 ml-auto" value={75} />
                    <ChevronRightIcon className="w-4 h-4 shrink-0" />
                  </Link>
                </li>
              </ul>
            </Card>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader className="flex items-center gap-4">
                <CardTitle className="text-base font-semibold">My Courses</CardTitle>
                <Button className="ml-auto" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="grid gap-4">
                  <li>
                    <Link
                      className="flex items-start gap-4 p-4 rounded-lg bg-gray-100/40 transition-all hover:bg-gray-100 hover:translate-y-0.5 dark:bg-gray-800/40 dark:hover:bg-gray-800"
                      to="#"
                    >
                      <PlayIcon className="w-4 h-4 shrink-0" />
                      <div className="grid gap-1.5">
                        <h3 className="font-semibold">Introduction to JavaScript</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Learn the basics of JavaScript programming.
                        </p>
                      </div>
                      <ChevronRightIcon className="w-4 h-4 ml-auto shrink-0" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-start gap-4 p-4 rounded-lg bg-gray-100/40 transition-all hover:bg-gray-100 hover:translate-y-0.5 dark:bg-gray-800/40 dark:hover:bg-gray-800"
                      to="#"
                    >
                      <PlayIcon className="w-4 h-4 shrink-0" />
                      <div className="grid gap-1.5">
                        <h3 className="font-semibold">Mastering React Framework</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Build powerful web applications with React.
                        </p>
                      </div>
                      <ChevronRightIcon className="w-4 h-4 ml-auto shrink-0" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-start gap-4 p-4 rounded-lg bg-gray-100/40 transition-all hover:bg-gray-100 hover:translate-y-0.5 dark:bg-gray-800/40 dark:hover:bg-gray-800"
                      to="#"
                    >
                      <PlayIcon className="w-4 h-4 shrink-0" />
                      <div className="grid gap-1.5">
                        <h3 className="font-semibold">Data Science Fundamentals</h3>
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
            <Card>
              <CardHeader className="flex items-center gap-4">
                <CardTitle className="text-base font-semibold">My Progress</CardTitle>
                <Button className="ml-auto" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <BookOpenIcon className="w-6 h-6 shrink-0" />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Introduction to JavaScript</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Learn the basics of JavaScript programming.
                    </p>
                  </div>
                  <Progress className="h-4 w-24 ml-auto" value={25} />
                </div>
                <div className="flex items-center gap-4">
                  <BookOpenIcon className="w-6 h-6 shrink-0" />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Mastering React Framework</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Build powerful web applications with React.
                    </p>
                  </div>
                  <Progress className="h-4 w-24 ml-auto" value={50} />
                </div>
                <div className="flex items-center gap-4">
                  <BookOpenIcon className="w-6 h-6 shrink-0" />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Data Science Fundamentals</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      An introduction to data analysis and visualization.
                    </p>
                  </div>
                  <Progress className="h-4 w-24 ml-auto" value={75} />
                </div>
              </CardContent>
            </Card>
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
                    <h3 className="font-semibold">JavaScript Wizard</h3>
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
                    <h3 className="font-semibold">React Prodigy</h3>
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
                    <h3 className="font-semibold">Data Science Guru</h3>
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
          <Card>
            <CardHeader className="flex items-center gap-4">
              <CardTitle className="text-base font-semibold">Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <TrendingUpIcon className="w-6 h-6 shrink-0" />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Net Sales</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">$10,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <DollarSignIcon className="w-6 h-6 shrink-0" />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Gross Profit</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">$5,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <PercentIcon className="w-6 h-6 shrink-0" />
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Gross Margin</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">50%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main> */}
        <Dashboard />
      </div>
    </div>
  )
}


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