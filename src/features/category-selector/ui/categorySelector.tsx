import { CATEGORIES } from "@shared/consts";
import { Button } from "@shared/ui/button";

import s from "./categorySelector.module.scss";

type CategorySelectorProps = {
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const CategorySelector = ({
  activeCategory,
  setActiveCategory,
}: CategorySelectorProps) => {
  return (
    <div className={s.categories}>
      <div className={s.categoriesInner}>
        {CATEGORIES.map((categoryItem) => {
          return (
            <Button
              key={categoryItem.name}
              width="adaptive"
              variant="secondary"
              size="big"
              active={activeCategory === categoryItem.name}
              onClick={() => setActiveCategory(categoryItem.name)}
            >
              {categoryItem.ru}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
