import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const VerificationPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Verify your account</CardTitle>
          <CardDescription>Enter the security code sent on your mailn</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email address" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="code">Security Code</Label>
                <Input id="code" type="password" placeholder="Enter the generated code" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <Button className="w-full bg-black text-white">Verify</Button>
          <Button variant="link" className="text-sm">
            Don't have an account? <span className="underline ml-1">Create an account</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
export default VerificationPage;


