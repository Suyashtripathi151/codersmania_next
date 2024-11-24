"use client"
import * as React from "react"
import { useState } from "react"
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
import Link from "next/link"

const RegistrationPage: React.FC = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const validateEmail = (email: string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  const validatePhone = (phone: string) => /^\d{10}$/.test(phone)
  const validatePassword = (password: string) => 
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let formIsValid = true
    const newErrors = { name: "", phone: "", email: "", password: "", confirmPassword: "" }

    if (!name) {
      newErrors.name = "Name is required"
      formIsValid = false
    }
    if (!validatePhone(phone)) {
      newErrors.phone = "Phone number must be 10 digits"
      formIsValid = false
    }
    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format"
      formIsValid = false
    }
    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 8 characters, include 1 letter, 1 number, and 1 special character"
      formIsValid = false
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      formIsValid = false
    }

    setErrors(newErrors)

    if (formIsValid) {
      console.log("Registration successful")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Enter your details to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </div>
            </div>
            <CardFooter className="py-5 flex flex-col items-center gap-4">
              <Button type="submit" className="w-full bg-black text-white">
                Register
              </Button>
              <Link href={"/login"} className="text-sm">
              Already have an account? <span className="underline ml-1">Login</span>
              </Link>

            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegistrationPage
