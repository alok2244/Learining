
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


const DashSettings = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto grid gap-2">
          <h1 className="font-semibold text-3xl">Settings</h1>
        </div >
        <div className="flex justify-between">
        <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-6xl w-1/3">
          <div className="grid gap-6 w-full">
            <Card className=" ">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Update your profile information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="rounded-lg bg-gray-100 w-24 flex justify-center h-20 items-center">
                    <Avatar>
                      <AvatarImage alt="Profile Image" src="\public\user.png" className="border-[1px] border-black" />
                      <AvatarFallback>PI</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-2 border-[1px] border-black p-2 shadow-md rounded-md">
                    <Label htmlFor="profile-image">Profile Image</Label>
                    <Input accept="image/*" id="profile-image" type="file" />
                  </div>
                </div>
                <div className="h-full w-full border-2 bg-gray-100 rounded-lg shadow-md px-5">

                  <div className="space-y-4 mt-5 ">
                    <Label htmlFor="name" className=" pr-10">Name</Label>
                    <Input id="name" className="px-2 rounded-md h-8 pr-48" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-4 mt-5">
                    <Label htmlFor="email" className="pr-10">Email</Label>
                    <Input id="email" className="px-2 rounded-md h-8 pr-48" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-4 mt-5">
                    <Label htmlFor="old-password" className="">Old Password</Label>
                    <Input id="old-password" className="px-2 rounded-md h-8 pr-48" placeholder="Enter your password" type="password" />
                  </div>
                  <div className="space-y-4 my-5">
                    <Label htmlFor="new-password" className="">New Password</Label>
                    <Input id="new-x  password" className="px-2 rounded-md h-8 pr-48" placeholder="Enter your password" type="password" />
                  </div>

                </div>
              </CardContent>
              <CardFooter>
                <div className=" px-6 py-2 bg-gray-100 rounded-md shadow-md">

                  <Button>Save</Button>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>Update your professional information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Enter your company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter your title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills</Label>
                  <Input id="skills" placeholder="Enter your skills" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Career</CardTitle>
                <CardDescription>Update your career information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Enter your company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter your title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills</Label>
                  <Input id="skills" placeholder="Enter your skills" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="w-1/2 rounded-md  border-2">
        
        </div>
        </div>
      </main>
    </div>
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


export default DashSettings