import { type ComponentRenderProps, useDataValue } from "@json-render/react";
import {
  Card as UICard,
  CardContent as UICardContent,
  CardDescription as UICardDescription,
  CardHeader as UICardHeader,
  CardTitle as UICardTitle,
} from "@/components/ui/card";

interface Props {
  titlePath: string;
  descriptionPath: string;
}

export const Card = ({ element, children }: ComponentRenderProps) => {
  const { titlePath, descriptionPath } = element.props as unknown as Props;
  const title = useDataValue<string>(titlePath);
  const description = useDataValue<string>(descriptionPath);
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
