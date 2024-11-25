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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validateEmail = (email: string) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePhone = (phone: string) => /^\d{10}$/.test(phone);
  const validatePassword = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { name: "", phone: "", email: "", password: "", confirmPassword: "" };
  
    if (!name) {
      newErrors.name = "Name is required";
      formIsValid = false;
    }
    if (!validatePhone(phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      formIsValid = false;
    }
    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
      formIsValid = false;
    }
    if (!validatePassword(password)) {
      newErrors.password =
        "Password must be at least 8 characters, include 1 letter, 1 number, and 1 special character";
      formIsValid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      formIsValid = false;
    }
  
    setErrors(newErrors);
  
    if (formIsValid) {
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, phone, email, password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert(data.message); // Show success message
          setTimeout(() => {
            window.location.href = "/login"; // Redirect to login page
          }, 5000); // 5-second delay
        } else {
          alert(data.message); // Show error message
        }
        
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An unexpected error occurred");
      }
    }
  };
  

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setServerError("");
  //   let formIsValid = true;
  //   const newErrors = { name: "", phone: "", email: "", password: "", confirmPassword: "" };

  //   if (!name) {
  //     newErrors.name = "Name is required";
  //     formIsValid = false;
  //   }
  //   if (!validatePhone(phone)) {
  //     newErrors.phone = "Phone number must be 10 digits";
  //     formIsValid = false;
  //   }
  //   if (!validateEmail(email)) {
  //     newErrors.email = "Invalid email format";
  //     formIsValid = false;
  //   }
  //   if (!validatePassword(password)) {
  //     newErrors.password =
  //       "Password must be at least 8 characters, include 1 letter, 1 number, and 1 special character";
  //     formIsValid = false;
  //   }
  //   if (password !== confirmPassword) {
  //     newErrors.confirmPassword = "Passwords do not match";
  //     formIsValid = false;
  //   }

  //   setErrors(newErrors);

  //   if (formIsValid) {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch("/api/register", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ name, phone, email, password }),
  //       });

  //       const data = await response.json();
  //       if (response.ok) {
  //         console.log("Registration successful:", data);
  //         // Redirect to login or show success message
  //       } else {
  //         setServerError(data.message || "Registration failed");
  //       }
  //     } catch (error) {
  //       console.error("Error during registration:", error);
  //       setServerError("An error occurred. Please try again later.");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  // };

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
            {serverError && <p className="text-red-500 text-center">{serverError}</p>}
            <CardFooter className="py-5 flex flex-col items-center gap-4">
              <Button type="submit" className="w-full bg-black text-white" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register"}
              </Button>
              <Link href={"/login"} className="text-sm">
                Already have an account? <span className="underline ml-1">Login</span>
              </Link>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};


