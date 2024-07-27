"use client";
import { useCategoryStore } from "@/app/store/category";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Pizzas" },
  { id: 2, name: "Combo" },
  { id: 3, name: "zakuski" },
  { id: 4, name: "drinks" },
  { id: 5, name: "alcohol" },
  { id: 6, name: "desserts" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map(({ name, id }, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-whie shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
