import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

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

export function Register() {
  // const [formdata, setFormdata] = useState({
  //   name:"",
  //   email:"",
  //   password:"",
  //   confirmPassword:""
  // });
  //const [spacing, setSpacing] = React.useState("4");
  const spacing =4;
  const selectedSpacing = spacingOptions.find(
    (option) => option.value === spacing
  );  
  

  const registerLogic = async(e) =>{
  
console.log(e.key)
    try{
const data = await axios.post("http://localhost:8000/api/auth/register",
  {
    name:formData.name,
    email:formdata.email,
    password:formdata.password
  }
 );
console.log(data)
 }catch(error){
  console.log(error);
  
 }
  }
  return (
    <div className="min-h-screen w-full flex items-center bg-black justify-center">
      <Card className={`w-full max-w-sm ${selectedSpacing?.className}`}>
                      <Link className="ml-2 text-gray-500" to="/"><i className="fa-solid fa-left-long"></i> back to home</Link>
        
        <CardHeader>
          <CardTitle>Create an account</CardTitle>

          <CardDescription>
            Enter your details below to create your account
          </CardDescription>

          <CardAction>
            <Link
              to="/login"
              className="ml-auto inline-block text-sm underline-offset-4 text-red-600 hover:text-red-700"
            >
              Login
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form method="POST" onSubmit={registerLogic} >
            <div className="flex flex-col gap-5">

              {/* Name */}
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>

                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>

                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">
                  Confirm Password
                </Label>

                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>

            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Create Account
          </Button>

          <Button variant="outline" className="w-full">
            Sign up with Google
          </Button>
        </CardFooter>

      </Card>
    </div>
  );
}

export default Register;