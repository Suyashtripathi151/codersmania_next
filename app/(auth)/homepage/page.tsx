"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchWithToken } from "@/utils/api";

export default function RegistrationPage() {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  async function getUserProfile() {
    try {
      const data = await fetchWithToken("http://localhost:8080/profile/suyasht786@gmail.com");
      console.log("Profile data:", data);
    } catch (error) {
      console.error("Error fetching profile:", error.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            <Button onClick={ getUserProfile} disabled={isLoading}>
              {isLoading ? "Loading..." : "Load Profile"}
            </Button>
          </CardTitle>
          <CardDescription>Click the button to load profile data.</CardDescription>
        </CardHeader>
        <CardContent>
          {serverError && <p className="text-red-500">{serverError}</p>}
          {profileData && (
            <div className="mt-4">
              <h3 className="text-lg font-bold">Profile Data:</h3>
              <pre>{JSON.stringify(profileData, null, 2)}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
