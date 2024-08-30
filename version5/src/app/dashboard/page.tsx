"use client";

import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import axios from 'axios';
const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

type USERTYPE = {
    name: string,
    email: string,
    createdAt: Date | undefined,
    password: string
}
const page = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [user, setUser] = useState<USERTYPE | null>(null);
    const token = localStorage.getItem("token");
    const userdetails = async () => {
        try {
            const response = await axios.get('/api/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setUser(response.data.user);
        } catch (error) {
            console.log('error wile fetching user details', error);
        }
    }
    useEffect(() => {
        const fetchInvoices = async () => {
            console.log('token from lclstrg is  ', token)
            if (!token) {
                setError("No token found");
                setLoading(false);
                return;
            }
            try {
                console.log("hello")
            } catch (err) {
                setError("Failed to fetch invoices");
            } finally {
                setLoading(false);
            }
        };
        userdetails();

        fetchInvoices();
    }, [token]);

    const handlelogout = async () => {
        setError("")
        setLoading(true);

        try {
            const response = await localStorage.setItem("token", "");
            console.log('logout response', response)
            setLoading(false);

        } catch (error) {
            console.log('error while logout', error);
            setError("error logging out")
            setLoading(false);
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p className='text-red-500'>{error}</p>;

    return (
        <>
            <div className='flex justify-between'>
                <h1 className="text-3xl text-black font-bold capitalize m-4">User Details</h1>
                <Button onClick={handlelogout}> {loading ? "Please wait...." : "Logout"}</Button>
            </div>
            <div className='flex justify-between'>
                <h1 className="text-3xl text-black font-bold capitalize m-4">{user?.email}</h1>
                <h1 className="text-3xl text-black font-bold capitalize m-4">{user?.password}</h1>
                <h1 className="text-3xl text-black font-bold capitalize m-4">{user?.createdAt}</h1>
            </div>

            <div className="flex flex-wrap mx-4">
                <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full px-4">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Revenue</CardTitle>
                            <CardDescription>Revenue generated till date.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col">
                                    <Label htmlFor="name">Total Revenue</Label>
                                    <h1 className="text-2xl text-black font-bold">$35,00,000</h1>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/* Repeat for other cards */}
            </div>
            <div className="w-[80%] mx-auto mt-8">
                <h1 className="text-3xl font-bold text-black mb-8">User Details</h1>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </>
    );
};

export default page;
