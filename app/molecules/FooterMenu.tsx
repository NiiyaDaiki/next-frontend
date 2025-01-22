import { FooterMenuItem } from "@/app/atoms/FooterMenuItem";

type Props = {
  items: FooterMenuItem[];
};

export function FooterMenu({ items }: Props) {
  return (
    <div className="flex flex-col flex-wrap py-2 gap-4 justify-center text-neutral-400">
      {items.map((item) => {
        return <FooterMenuItem key={item.text} item={item} />;
      })}
    </div>
  );
}
