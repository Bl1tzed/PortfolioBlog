import { Helmet } from "react-helmet";

export const Metadata = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => (
  <Helmet>
    <title>Bibiblog{title ? ` | ${title}` : ""}</title>
    <meta name="description" content={description || "Bibiblog description"} />
  </Helmet>
);
