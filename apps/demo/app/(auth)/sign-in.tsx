import { Text, View } from "react-native";
import { GoogleAuth } from "../../etc/auth/google";

export default function Index() {
  const signIn = GoogleAuth.useSignIn();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text
        onPress={() => {
          signIn();
        }}
      >
        Sign In
      </Text>
    </View>
  );
}
