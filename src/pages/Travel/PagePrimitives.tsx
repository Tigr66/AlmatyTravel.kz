import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./travel-pages.css";

export const Kicker = ({ children }: { children: ReactNode }) => (
    <p className="travel-kicker">{children}</p>
);

export const PageLink = ({
    to,
    children,
}: {
    to: string;
    children: ReactNode;
}) => (
    <Link className="travel-page-link" to={to}>
        {children}
        <span aria-hidden="true">↗</span>
    </Link>
);
