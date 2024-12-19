import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Card, CardContent, CardHeader } from "@/components/ui/card"  
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Coins, CoinsIcon, TrophyIcon } from "lucide-react"
  const ranks = [
    {
      rank: "#1",
      name: "Nisha Kanwar",
      zepto: "250.00",
      paymentMethod: "Credit Card",
    },
    {
      rank: "#2",
      name: "Mr Jester",
      zepto: "150.00",
      paymentMethod: "PayPal",
    },
    {
      rank: "#3",
      name: "Suyash Tripathi",
      zepto: "350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      rank: "#4",
      name: "Cuta Com",
      zepto: "450.00",
      paymentMethod: "Credit Card",
    },
    {
      rank: "#5",
      name: "Pranshu Tripathi",
      zepto: "550.00",
      paymentMethod: "PayPal",
    }
  ]
  
  export function   LeaderBoard() {
    
    return (
        <Card>
            <CardHeader className="w-full">
              <div className="flex w-full justify-between">
              <TrophyIcon></TrophyIcon>
                Leaderboard
              <TrophyIcon></TrophyIcon>
              </div>

            </CardHeader>
            <CardContent>
            <Table>
        <TableHeader>
        </TableHeader>
        <TableBody>
          {ranks.map((rank) => (
            <TableRow key={rank.rank}>
              <TableCell className="font-medium">{rank.rank}</TableCell>
              <TableCell>
              <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
              </TableCell>
              <TableCell>{rank.name}</TableCell>
              <TableCell className="flex space">{rank.zepto}<Coins></Coins> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
            </CardContent>
        </Card>

    )
  }
  