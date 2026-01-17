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
  title: "React Native Reusables",
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
};

export default function Screen() {
  const tree = catalog.treeSchema.parse({
    root: "card",
    elements: {
      card: {
        key: "card",
        type: "Card",
        props: {
          title: "Card Title",
          description: "This is a card component",
        },
        children: ["content"],
      },
      content: {
        key: "content",
        type: "Text",
        props: {
          content: "Add your content here",
        },
      },
    },
  });

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <View className="flex-1 items-center justify-center gap-8 p-4">
        <DataProvider>
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
