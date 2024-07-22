"use client";
import Link from "next/link";

interface Props {
  text: string;
  pageUrl: string;
}

function ItemContainer({ text, pageUrl }: Props) {
  return (
    <Link
      href={`/rankerPage/${pageUrl}/`}
      className="absolute cursor-pointer inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <p className="text-2xl text-white font-semibold">{text}</p>
    </Link>
  );
}

export default ItemContainer;
