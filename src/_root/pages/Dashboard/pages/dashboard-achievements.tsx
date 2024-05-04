


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NHbuVQIGanz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"

const DashAchievement = () => {

  return (
    <div className="flex flex-col min-h-screen gap-4 p-4 md:gap-8 md:p-10">
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <AwardIcon className="w-6 h-6" />
          <h1 className="text-2xl font-semibold">Achievement Dashboard</h1>
        </div>
        <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
          Your progress and accomplishments across various categories.
        </p>
      </header>
      <div className="grid gap-4">
        <div className="flex justify-between gap-4">
          <Card>
            <CardContent className="flex items-center pr-48 py-4 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Badges</CardTitle>
                <CardDescription className="text-sm">Current Badges: 10</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <MoveUpIcon className="w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Levels</CardTitle>
                <CardDescription className="text-sm">
                  Current Level: 5
                  <br />
                  Next Milestone: Level 6 at 80% progress
                </CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center  py-4 gap-4">
              <TargetIcon className="w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Milestones</CardTitle>
                <CardDescription className="text-sm">Next Milestone: Reach 1000 points for Level 6</CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid p-5 py-8 border-[1px] border-gray-200 rounded-md shadow-md gap-4">
        <div className="text-xl ml-1  font-bold">
        Notice
        </div>
        <Card>
          <CardContent className="flex items-center  py-2 gap-4">
            <AwardIcon className="w-8 h-8" />
            <div>
              <CardTitle className="text-base font-bold">Unlocked New Badge</CardTitle>
              <CardDescription className="text-sm">
                Congratulations! You've unlocked the "Early Bird" badge by logging in for 7 consecutive days.
              </CardDescription>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center py-2 gap-4">
            <AwardIcon className="w-8 h-8" />
            <div>
              <CardTitle className="text-base font-bold">Level Up: Novice to Expert</CardTitle>
              <CardDescription className="text-sm">
                Congratulations! You've reached level 10 by completing various challenges. Keep up the good work!
              </CardDescription>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center py-2 gap-4">
            <AwardIcon className="w-8 h-8" />
            <div>
              <CardTitle className="text-base font-bold">Milestone Achieved: 1000 Points</CardTitle>
              <CardDescription className="text-sm">
                Congratulations! You've earned 1000 points by participating in community events. Keep it up!
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>
      <section>
        <div className=" border-[1px] border-gray-200 pb-5 rounded-md shadow-md">
      <div className="text-xl p-6 pb-0 font-bold">
        Badges
        </div>
        <div className="grid grid-cols-4 p-5 gap-4">
          
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Badge 1</CardTitle>
                <CardDescription className="text-sm">Description of Badge 1</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Badge 2</CardTitle>
                <CardDescription className="text-sm">Description of Badge 2</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div>
                <CardTitle className="text-lg font-semibold">Badge 3</CardTitle>
                <CardDescription className="text-sm">Description of Badge 3</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div className="">
                <CardTitle className="text-lg font-semibold">Badge 4</CardTitle>
                <CardDescription className="text-sm">Description of Badge 4</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div className="">
                <CardTitle className="text-lg font-semibold">Badge 4</CardTitle>
                <CardDescription className="text-sm">Description of Badge 4</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div className="">
                <CardTitle className="text-lg font-semibold">Badge 4</CardTitle>
                <CardDescription className="text-sm">Description of Badge 4</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div className="">
                <CardTitle className="text-lg font-semibold">Badge 4</CardTitle>
                <CardDescription className="text-sm">Description of Badge 4</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div className="">
                <CardTitle className="text-lg font-semibold">Badge 4</CardTitle>
                <CardDescription className="text-sm">Description of Badge 4</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div className="">
                <CardTitle className="text-lg font-semibold">Badge 4</CardTitle>
                <CardDescription className="text-sm">Description of Badge 4</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div className="">
                <CardTitle className="text-lg font-semibold">Badge 4</CardTitle>
                <CardDescription className="text-sm">Description of Badge 4</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div className="">
                <CardTitle className="text-lg font-semibold">Badge 4</CardTitle>
                <CardDescription className="text-sm">Description of Badge 4</CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center py-2 gap-4">
              <BadgeIcon className="w-8 h-8" />
              <div className="">
                <CardTitle className="text-lg font-semibold">Badge 4</CardTitle>
                <CardDescription className="text-sm">Description of Badge 4</CardDescription>
              </div>
            </CardContent>
          </Card>

        </div>
        </div>
      </section>
    </div>
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

function BadgeIcon(props) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}
//@ts-ignore


function MoveUpIcon(props) {
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
      <path d="M8 6L12 2L16 6" />
      <path d="M12 2V22" />
    </svg>
  )
}

//@ts-ignore

function TargetIcon(props) {
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
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

export default DashAchievement
