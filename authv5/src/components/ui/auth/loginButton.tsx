"use client";

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
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({ children, mode = "modal", asChild }: LoginButtonProps) => {
    const router = useRouter();
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleClick = () => {
        if (mode === "modal") {
            setDialogOpen(true); // Open the modal
        } else {
            router.push('login');
        }
    };

    const handleDialogAction = () => {
        // Perform the action, for example, navigating to another page or submitting a form
        router.push('login');
    };

    return (
        <>
            <span onClick={handleClick} className="cursor-pointer">
                {children}
            </span>
            {mode === "modal" && (
                <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                    <AlertDialogTrigger asChild>
                        <button className="hidden" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setDialogOpen(false)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDialogAction}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </>
    );
};
