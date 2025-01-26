import clsx from "clsx";

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return <div className={clsx("p-6", className)}>{children}</div>;
};
