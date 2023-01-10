import { View } from "@bacons/react-views";
import { Main } from "@expo/html-elements";

import { Alert } from "./alert";
import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <View className="min-h-screen">
        <Alert />
        <Main>{children}</Main>
      </View>
      <Footer />
    </>
  );
};

export default Layout;
