import { Children, Layout } from "expo-router";
import { GoogleAuth } from "../etc/auth/google";
import { useSecureAuthState } from "../etc/auth/useSecureAuthState";

export default function RootLayoutContext() {
  return (
    <GoogleAuth.Provider>
      <RootLayout />
    </GoogleAuth.Provider>
  );
}
function RootLayout() {
  const [auth] = GoogleAuth.useToken();

  //   if (auth.isLoading) {
  //     return null;
  //   }

  return (
    <Layout>
      {/* <Layout.Screen name="(app)" redirect={false} />
      <Layout.Screen name="(auth)" redirect={true} /> */}
      <Children />
    </Layout>
  );
}
