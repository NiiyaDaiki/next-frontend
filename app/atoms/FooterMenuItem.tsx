import Link from "next/link";

export type FooterMenuItem = {
  path: string;
  text: string;
};

type Props = {
  item: FooterMenuItem;
};

export function FooterMenuItem({ item }: Props) {
  return (
    <Link href={item.path} className="hover:text-neutral-200">
      {item.text}
    </Link>
  );
}
