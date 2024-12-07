import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
  
  export default function ResizableDemo() {
    return (
      <div className="h-screen">
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
          <div className="w-1/3 justify-center">
          <Card>
          <CardHeader>
            Play Classic
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
  