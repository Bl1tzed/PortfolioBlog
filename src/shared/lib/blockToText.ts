import { PortableTextBlock } from "@portabletext/react";

export function blocksToText(blocks: PortableTextBlock[], opts = {}) {
  const options = Object.assign({}, { nonTextBehavior: "remove" }, opts);
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return options.nonTextBehavior === "remove"
          ? ""
          : `[${block._type} block]`;
      }

      return block.children.map((child) => child.text).join("");
    })
    .join("\n\n");
}
