"use client"
import React, { FormEventHandler, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    });
    const [isvisible, setisvisible] = useState(false);

    const handlevisibility = () => {
        setisvisible(!isvisible);
    }
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const handlesubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div className='flex justify-center items-center h-full'>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handlesubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    name='username'
                                    value={formData.username}
                                    onChange={handleChange}
                                    id="username"
                                    placeholder="John Wick"
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    id="email"
                                    placeholder="abc@gmail.com"
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5 relative">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    id="password"
                                    type={isvisible ? "text" : "password"}
                                    autoComplete='additional-name'
                                    placeholder="*********"
                                />
                                <button
                                    type="button"
                                    onClick={handlevisibility}
                                    className="absolute right-2 top-6"
                                >
                                    {!isvisible ? <FaEyeSlash /> : <FaEye />}
                                </button>

                            </div>
                        </div>
                        <div className='justify-center flex mt-4'>
                            <Button type='submit'>Login</Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center gap-4">
                    <FaGoogle size={"25px"} className='cursor-pointer' />
                    <FaInstagram size={"25px"} className='cursor-pointer' />
                    <FaTwitter size={"25px"} className='cursor-pointer' />
                    <FaGithub size={"25px"} className='cursor-pointer' />
                </CardFooter>
                <div className='flex justify-center gap-2 mb-4 ' >
                    <Link className='hover:underline hover:text-blue-500' href={'signup'}>Don't have an account? </Link>
                </div>
            </Card>
        </div>
    );
};

export default Page;
