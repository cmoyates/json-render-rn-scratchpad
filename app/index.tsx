import {
  ActionProvider,
  DataProvider,
  Renderer,
  VisibilityProvider,
} from "@json-render/react";
import { Stack } from "expo-router";
import { MoonStarIcon, SunIcon } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import { componentRegistry } from "@/components/JSONRender";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { catalog } from "@/lib/catalog";

const SCREEN_OPTIONS = {
  title: "JSON Render Demo",
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
};

export default function Screen() {
  const initialData = {
    user: { name: "John Doe" },
    form: { email: "john.doe@example.com", message: "Hello, world!" },
  };

  const tree = catalog.treeSchema.parse({
    root: "card",
    elements: {
      card: {
        key: "card",
        type: "Card",
        props: {
          titlePath: "user/name",
          descriptionPath: "form/email",
        },
        children: ["content"],
      },
      content: {
        key: "content",
        type: "Text",
        props: {
          contentPath: "form/message",
        },
      },
    },
  });

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <View className="flex-1 items-center justify-center gap-8 p-4">
        <DataProvider initialData={initialData}>
          <VisibilityProvider>
            <ActionProvider>
              <Renderer registry={componentRegistry} tree={tree} />
            </ActionProvider>
          </VisibilityProvider>
        </DataProvider>
      </View>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      className="web:mx-4 ios:size-9 rounded-full"
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
    >
      <Icon as={THEME_ICONS[colorScheme ?? "light"]} className="size-5" />
    </Button>
  );
}
