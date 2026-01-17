import type { ComponentRenderProps } from "@json-render/react";
import {
  Card as UICard,
  CardContent as UICardContent,
  CardDescription as UICardDescription,
  CardHeader as UICardHeader,
  CardTitle as UICardTitle,
} from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
}

export const Card = ({ element, children }: ComponentRenderProps) => {
  const { title, description } = element.props as unknown as Props;
  return (
    <UICard>
      <UICardHeader>
        <UICardTitle>{title}</UICardTitle>
        <UICardDescription>{description}</UICardDescription>
      </UICardHeader>
      <UICardContent>{children}</UICardContent>
    </UICard>
  );
};
