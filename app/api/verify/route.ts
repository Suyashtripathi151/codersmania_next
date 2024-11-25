import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const credentials = await req.json();
    const email = credentials.email;
    const password = credentials.password;
    const token = credentials.token;
    const emailAndPassword = JSON.stringify({ email, password});
    console.log(emailAndPassword); 
    const url = `http://localhost:8080/register/verification/${token}`;
    console.log(url);

    const backendResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: emailAndPassword,
      
    });
   

    // Parse the response from the backend
    const result = await backendResponse.json();
    console.log("result ="+result);

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
