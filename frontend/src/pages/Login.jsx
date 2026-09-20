"use client";
import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const spacingOptions = [
  {
    className: "[--card-spacing:--spacing(4)]",
    label: "16px",
    value: "4",
  },
  {
    className: "[--card-spacing:--spacing(5)]",
    label: "20px",
    value: "5",
  },
  {
    className: "[--card-spacing:--spacing(6)]",
    label: "24px",
    value: "6",
  },
  {
    className: "[--card-spacing:--spacing(8)]",
    label: "32px",
    value: "8",
  },
];

export function Login() {
  const [spacing, setSpacing] = React.useState("4");

  const selectedSpacing = spacingOptions.find(
    (option) => option.value === spacing,
  );

  return (
    <main className="min-h-screen w-full flex items-center bg-black justify-center">
      <Card className={`w-full max-w-sm ${selectedSpacing?.className}`}>
              <Link className="ml-2 text-gray-500" to="/"><i className="fa-solid fa-left-long"></i> back to home</Link>

        <CardHeader>
          <CardTitle>Login to your account</CardTitle>

          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>

          <CardAction>
            <Link
              to="/register"
              className="ml-auto inline-block text-sm underline-offset-4 text-red-600 hover:text-red-700"
            >
              Signup
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email-spacing">Email</Label>

                <Input
                  id="email-spacing"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password-spacing">Password</Label>

                  <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:text-red-700"
                  >
                    Forgot password
                  </Link>
                </div>

                <Input id="password-spacing" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>

          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default Login;
