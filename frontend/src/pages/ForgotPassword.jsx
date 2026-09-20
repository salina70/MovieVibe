import * as React from "react";
import { Link } from "react-router-dom";

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

/**
 * lorem ipsum
 * @returns {React} DOM
 */

export function ForgotPassword() {
  const [email, setEmail] = React.useState("");

  /**
   * An event handler for forgot password form
   * @param {Event} e this is generic html dom event
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Password reset requested for:", email);

    // Later we will connect this to your backend
  };

  return (
    <main className="min-h-screen w-full bg-black flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Forgot your password?</CardTitle>

          <CardDescription>
            Enter your email address and we'll send you a link to reset your
            password.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} method="POST">
            <div className="flex flex-col gap-6">

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>

            </div>
          </form>
        </CardContent>

        <CardFooter className="justify-center">
          <Link
            to="/login"
            className="text-sm underline-offset-4 hover:text-red-700"
          >
            <i className="fa-solid fa-left-long"></i> Back to Login
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}

export default ForgotPassword;