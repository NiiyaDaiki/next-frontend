import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={clsx("bg-white rounded-2xl shadow-xl", className)}>
      {children}
    </div>
  );
};
