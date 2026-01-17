import { createCatalog } from "@json-render/core";
import { z } from "zod";

export const catalog = createCatalog({
  components: {
    Card: {
      props: z.object({ titlePath: z.string(), descriptionPath: z.string() }),
      hasChildren: true,
    },
    Text: {
      props: z.object({ contentPath: z.string() }),
    },
  },
});
