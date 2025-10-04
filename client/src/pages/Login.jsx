import { AppWindowIcon, CodeIcon } from "lucide-react";
import React, { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  const [signUpInput, setsignUpInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  // Track which tab is active
  const [activeTab, setActiveTab] = useState("signUp");

  const ChangeInputhandler = (e) => {
    const { name, value } = e.target;
    if (activeTab === "signUp") {
      setsignUpInput({ ...signUpInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistation = (type) =>{
    const inputData = type === "signUp" ? signUpInput : loginInput;
    // Here you can handle the registration or login logic
    console.log(inputData);
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-6 justify-center mx-auto mt-20">
      <Tabs defaultValue="signUp" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="signUp">Sign-Up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signUp">
          <Card className="">
            <CardHeader className="">
              <CardTitle className= "flex justify-center items-center uppercase">signUp</CardTitle>
              <CardDescription>
                Create a new account and click signup when you'are done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={signUpInput.name}
                  onChange={ChangeInputhandler}
                  placeholder=" Enter your name"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signUpInput.email}
                  onChange={ChangeInputhandler}
                  placeholder=" Enter your Email"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={signUpInput.password}
                  onChange={ChangeInputhandler}
                  placeholder="Create your password"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegistation("signUp")} >Sign-Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle className= "flex justify-center items-center uppercase">login</CardTitle>
              <CardDescription>Enter your details and loging.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Enter Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={ChangeInputhandler}
                  placeholder=" Enter your Email"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Your password</Label>
                <Input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={ChangeInputhandler}
                  placeholder="Password"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegistation("login")} >Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;