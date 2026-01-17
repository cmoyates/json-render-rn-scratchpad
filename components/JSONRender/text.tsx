import { type ComponentRenderProps, useDataValue } from "@json-render/react";
import { Text as UIText } from "@/components/ui/text";

interface Props {
  contentPath: string;
}

export const Text = ({ element }: ComponentRenderProps) => {
  const { contentPath } = element.props as unknown as Props;
  const content = useDataValue<string>(contentPath);

  return <UIText>{content ?? ""}</UIText>;
};
