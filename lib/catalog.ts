import { createCatalog } from "@json-render/core";
import { z } from "zod";

export const catalog = createCatalog({
  components: {
    Card: {
      props: z.object({ title: z.string(), description: z.string() }),
      hasChildren: true,
    },
    Text: {
      props: z.object({ content: z.string() }),
    },
  },
});
