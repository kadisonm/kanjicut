import { LucideIcon } from "lucide-react";

interface BoxProps {
    icon?: LucideIcon; 
    title?: string;
    children: ReactNode;
}

export default function SpecialBox({ icon, title, children }: BoxProps) {
    return (
        <div className="special box">
            <div className="title">
                {icon && icon}
                <h4>{title}</h4>
            </div>

            <div className="contents">{children}</div>
        </div>
    );
}
