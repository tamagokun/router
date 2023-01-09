import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="(feed)" options={{ title: "Home" }} />
      <Tabs.Screen name="(explore)" options={{ title: "Search" }} />
      <Tabs.Screen
        name="([user])"
        options={{
          // HACK
          href: "/([user])/me",
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
