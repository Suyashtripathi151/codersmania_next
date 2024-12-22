"use client"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
// import { toast } from "@/components/ui/toast"
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
import { toast } from "@/hooks/use-toast"
import { ModeSelection } from "./components/mode-selection"
import { CategorySelection } from "./components/category-selection"

const FormSchema = z.object({
    difficulty: z
        .string({
            required_error: "Please select difficulty level.",
        }),

    questionNumbers: z
        .string({
            required_error: "Please select number of questions.",
        }),

    category: z.string({
        required_error: "Please select a category.",
    })
})

function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
    })
}

export default function ClassicQuizPage() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    return (
        <div className="w-full h-full flex  justify-center">
            <div className="w-3/4 h-full mt-10 px-5 text-center space-y-6 bg-slate-950">
                <CategorySelection></CategorySelection>
            </div>
            <div className="w-1/4 h-full mt-10 px-5 text-center space-y-6 bg-slate-950">
                <ModeSelection></ModeSelection>
            </div>

        </div>

    )
}