import { CATEGORIES } from "@shared/consts";
import { Button } from "@shared/ui/button";

import s from "./categorySelector.module.scss";

export const CategorySelector = ({ category, setCategory }) => {
  return (
    <div className={s.categories}>
      {CATEGORIES.map((categoryItem) => {
        return (
          <Button
            key={categoryItem}
            width="adaptive"
            variant="secondary"
            size="big"
            active={category === categoryItem}
            onClick={() => setCategory(categoryItem)}
          >
            {categoryItem}
          </Button>
        );
      })}
    </div>
  );
};
