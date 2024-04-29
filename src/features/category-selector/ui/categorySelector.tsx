import { CATEGORIES } from "@shared/consts";
import { Button } from "@shared/ui/button";
import { type Category } from "@shared/consts";

import s from "./categorySelector.module.scss";

type CategorySelectorProps = {
  activeCategory: Category;
  setActiveCategory: React.Dispatch<React.SetStateAction<Category>>;
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
              key={categoryItem}
              width="adaptive"
              variant="secondary"
              size="big"
              active={activeCategory === categoryItem}
              onClick={() => setActiveCategory(categoryItem)}
            >
              {categoryItem}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
