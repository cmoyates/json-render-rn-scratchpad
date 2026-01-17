import type { ComponentRenderProps } from "@json-render/react";
import { Text as UIText } from "@/components/ui/text";

interface Props {
  content: string;
}

export const Text = ({ element }: ComponentRenderProps) => {
  const { content } = element.props as unknown as Props;
  return <UIText>{content}</UIText>;
};
