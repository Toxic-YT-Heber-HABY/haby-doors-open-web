import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="w-full animate-page-enter">
      {children}
    </div>
  );
};

export default PageTransition;
