export interface CardProps {
    showsocial: boolean;
    islogin: boolean;
    isloading: boolean;
    title: string;
    description: string;
    handlelogin?: () => void
    handlesignup?: () => void
}

