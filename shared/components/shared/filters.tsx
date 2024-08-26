"use client";
import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckBoxFiltersGroup } from "./checkbox-filters-group";
import { useFilters, useIngredients, useQueryFilters } from "@/shared/hooks";
interface Props {
  className?: string;
}
interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { loading, ingredients } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={cn("", className)}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      {/* Top checkboxes */}
      <CheckBoxFiltersGroup
        title="Types"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Traditional", value: "2" },
        ]}
      />

      <CheckBoxFiltersGroup
        title="Sizes"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: "20cm", value: "20" },
          { text: "30cm", value: "30" },
          { text: "40cm", value: "40" },
        ]}
      />

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
            value={String(filters.prices.priceFrom || 0)}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            min={100}
            max={1000}
            step={10}
            placeholder="1000"
            value={String(filters.prices.priceTo || 0)}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
        />
        <CheckBoxFiltersGroup
          title="Ingridients"
          className="mt-5"
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          loading={loading}
          onClickCheckbox={filters.setSelectedIngredients}
          selected={filters.selectedIngredients}
          name="ingredients"
        />
      </div>
    </div>
  );
};
