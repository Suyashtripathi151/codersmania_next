"use client"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { LeaderBoard } from "./components/leaderboard"
import {  useRouter } from "next/navigation"
import { Banner } from "./components/banner"
  
  export default function ResizableDemo() {
    const router = useRouter();
    const navigateUser = (Url:string)=>{
      console.log("Clicked");
      router.push(Url);
    }

    return (
      <div className="h-screen">
        <div className="flex w-full">
          <div className="w-1/3">
          <Banner></Banner>
          </div>
          <div className="w-2/3">
          <LeaderBoard></LeaderBoard>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 justify-center">
          <Card>
          <CardHeader>
            Play Classic
          </CardHeader>
          <CardFooter>
            <Button>PLay Now</Button>
          </CardFooter>
        </Card>
          </div>
        <div className="w-1/2 justify-center">
        <Card>
          <CardHeader>
            Play Battle Royale
          </CardHeader>
          <CardFooter>
            <Button>PLay Now</Button>
          </CardFooter>
        </Card>
      </div>
      </div>
      <div className="flex">
          <div className="w-1/3">
          <Card>
          <CardHeader>
            Play Classic
          </CardHeader>
          <CardFooter>
            
            <Button 
              onClick={() => navigateUser("/classic")}

           >PLay Now</Button>
          </CardFooter>
        </Card>
          </div>
        <div className="w-1/3 justify-center">
        <Card>
          <CardHeader>
            Play Battle Royale
          </CardHeader>
          <CardFooter>
            <Button>PLay Now</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="w-1/3 justify-center">
        <Card>
          <CardHeader>
            Play Battle Royale
          </CardHeader>
          <CardFooter>
            <Button>PLay Now</Button>
          </CardFooter>
        </Card>
      </div>
      </div>
      </div>

    )
  }
  