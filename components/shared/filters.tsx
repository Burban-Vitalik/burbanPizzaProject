import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckBoxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
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
            max={1000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
        <CheckBoxFiltersGroup
          title="Ingridients"
          className="mt-5"
          limit={6}
          defaultItems={[
            { text: "cheese", value: "1" },
            { text: "mozarela", value: "2" },
            { text: "chesnok", value: "3" },
            { text: "ohirok", value: "4" },
            { text: "tomatos", value: "5" },
            { text: "meat", value: "6" },
          ]}
          items={[
            { text: "cheese", value: "1" },
            { text: "mozarela", value: "2" },
            { text: "chesnok", value: "3" },
            { text: "ohirok", value: "4" },
            { text: "tomatos", value: "5" },
            { text: "meat", value: "6" },
            { text: "chesnok", value: "3" },
            { text: "ohirok", value: "4" },
            { text: "tomatos", value: "5" },
            { text: "meat", value: "6" },
            { text: "chesnok", value: "3" },
            { text: "ohirok", value: "4" },
            { text: "tomatos", value: "5" },
            { text: "meat", value: "6" },
          ]}
        />
      </div>
    </div>
  );
};
