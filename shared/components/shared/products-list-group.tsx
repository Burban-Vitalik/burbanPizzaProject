"use client";

import React, { useEffect } from "react";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/app/store/category";

interface Props {
  className?: string;
  listClassName?: string;
  categoryId: number;
  items: any[];
  title: string;
}

export const ProductsListGroup: React.FC<Props> = ({
  className,
  listClassName,
  categoryId,
  items,
  title,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  console.log(items, "items");

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0]?.price || "96"}
            imageUrl={
              "https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-beautiful-pizza-images-png-image_12472926.png"
            }
          />
        ))}
      </div>
    </div>
  );
};
