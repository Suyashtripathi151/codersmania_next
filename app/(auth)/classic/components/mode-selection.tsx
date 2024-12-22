"use client"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
// import { toast } from "@/components/ui/toast"
import { Toast } from "@radix-ui/react-toast"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { toast } from "sonner"

const FormSchema = z.object({
    difficulty: z
        .string({
            required_error: "Please select difficulty level.",
        }),

    questionNumbers: z
        .string({
            required_error: "Please select number of questions.",
        }),


})

function onSubmit(data: z.infer<typeof FormSchema>) {
    alert("You submitted the following values:"+JSON.stringify(data, null, 2));
    // toast({

    toast("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
}


export function ModeSelection() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    return (
        <Form {...form}>
            <Card className="w-400  text-center justify-center items-center  space-y-6">
                <h1 className="text-3xl">Select Quiz Mode</h1>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent>
                        <div className="flex flex-col space-x-4">
                            <FormField
                                control={form.control}
                                name="difficulty"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Difficulty</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={"mixed"}>
                                            <FormControl>
                                                <SelectTrigger className="w-32">
                                                    <SelectValue />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="easy">Easy</SelectItem>
                                                <SelectItem value="medium">Medium</SelectItem>
                                                <SelectItem value="hard">Hard</SelectItem>
                                                <SelectItem value="mixed">Mixed</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="questionNumbers"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Question Size</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={"10"}>
                                            <FormControl>
                                            <SelectTrigger className="w-32">
                                            <SelectValue />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="10">10</SelectItem>
                                                <SelectItem value="20">20</SelectItem>
                                                <SelectItem value="50">50</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="questionNumbers"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Question Size</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={"10"}>
                                            <FormControl>
                                            <SelectTrigger className="w-32">
                                            <SelectValue />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="10">10</SelectItem>
                                                <SelectItem value="20">20</SelectItem>
                                                <SelectItem value="50">50</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </CardContent>
                    <Button type="submit">Start</Button>
                    <CardFooter>
                    </CardFooter>
                </form>

            </Card>
        </Form>

    )
}