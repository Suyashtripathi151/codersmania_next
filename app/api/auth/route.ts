import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const apiUrl = "http://localhost:8080/login";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { jwtToken } = await response.json();

      const responseWithCookie = NextResponse.json({ message: "Login successful" });
      responseWithCookie.cookies.set("token", jwtToken, {
        httpOnly: true, // Prevent access from JavaScript
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      });

      return responseWithCookie;
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { message: errorData.message || "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
