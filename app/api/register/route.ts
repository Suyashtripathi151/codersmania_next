import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await req.json();

    const backendResponse = await fetch("http://localhost:8080/register/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      
    });
    console.log( JSON.stringify(user));

    // Parse the response from the backend
    const result = await backendResponse.json();

    if (!backendResponse.ok) {
      return NextResponse.json(
        { success: false, message: result.message || "Registration failed" },
        { status: backendResponse.status }
      );
    }

    return NextResponse.json(result, { status: backendResponse.status });
  } catch (error: any) {
    console.error("Error in registration:", error.message);
    return NextResponse.json(
      { success: false, message: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
