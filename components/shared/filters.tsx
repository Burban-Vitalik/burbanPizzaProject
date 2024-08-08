"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckBoxFiltersGroup } from "./checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngridients";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddIds, selectedIds } =
    useFilterIngredients();

  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices({
      ...prices,
      [name]: value,
    });
  };

  const defaultItems = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  return (
    <div className={cn("", className)}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      {/* Top checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можна збирати" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Price filter */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from / to</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            step={10}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            step={10}
            placeholder="1000"
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrices({ priceFrom, priceTo })
          }
        />
        <CheckBoxFiltersGroup
          title="Ingridients"
          className="mt-5"
          limit={6}
          defaultItems={defaultItems.slice(0, 6)}
          items={defaultItems}
          loading={loading}
          onClickCheckbox={onAddIds}
          selectedIds={selectedIds}
          name="ingredients"
        />
      </div>
    </div>
  );
};
