import { Metadata } from "@shared/lib/metadata";
import s from "./notFoundPage.module.scss";

import { Button } from "@shared/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "@shared/api/client";
import { MetadataProps } from "@shared/types";
import { queryNotFound } from "../queries/queryNotFound";
import { AnimatedLayout } from "@shared/ui/animated-layout";

type DataProps = {
  metadata: MetadataProps;
};

export const NotFoundPage = () => {
  const [data, setData] = useState<DataProps | null>(null);

  useEffect(() => {
    async function getData() {
      const posts = await client.fetch(queryNotFound());
      setData(posts);
    }

    getData();
  }, []);

  return (
    <AnimatedLayout>
      <main className={s.content}>
        <Metadata
          title="Not Found"
          description={data ? data.metadata.description : ""}
        />
        <div className={s.heading}>Not Found 404</div>
        <Link to="/">
          <Button
            variant="secondary"
            size="medium"
            svgSrc="/svg/arrow-up-right.svg"
          >
            Главная страница
          </Button>
        </Link>
      </main>
    </AnimatedLayout>
  );
};
