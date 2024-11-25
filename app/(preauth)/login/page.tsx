"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegistrationPage () {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validateEmail = (email: string) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {  email: "", password: "" };
  

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
      formIsValid = false;
    }
    if (!validatePassword(password)) {
      newErrors.password =
        "Password must be at least 8 characters, include 1 letter, 1 number, and 1 special character";
      formIsValid = false;
    }
  
    setErrors(newErrors);
  
    if (formIsValid) {
      try {
        const response = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert(data.message);
          setTimeout(() => {
            window.location.href = "/homepage"; 
          }, 3000); 
        } else {
          alert(data.message);
        }
        
      } catch (error) {
        console.error("Error during Login:", error);
        alert("An unexpected error occurred");
      }
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login to Continue</CardTitle>
          <CardDescription>Provide your verified email and password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
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
            </div>
            {serverError && <p className="text-red-500 text-center">{serverError}</p>}
            <CardFooter className="py-5 flex flex-col items-center gap-4">
              <Button type="submit" className="w-full bg-black text-white" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Verify"}
              </Button>
              <Link href={"/register"} className="text-sm">
                Don't have an account? <span className="underline ml-1">Register</span>
              </Link>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};


