import { Link, usePathname } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  const pathname = usePathname();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Next: {pathname}</Text>
        <Link href=".." style={styles.subtitle}>
          Go back
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
