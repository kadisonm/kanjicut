interface BoxProps {
    icon?: ReactElement<any, any>; 
    title?: string;
    children: ReactNode;
}

export default function Box({ icon, title, children }: BoxProps) {
    return (
        <div className="box">
            <div className="title">
                {icon && icon}
                <h4>{title}</h4>
            </div>

            {children}
        </div>
    );
}
