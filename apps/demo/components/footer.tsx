import Container from "./container";
import { Footer, H3, A } from "@expo/html-elements";
import { View } from "react-native";

const IFooter = () => {
  return (
    <Footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <View className="py-28 flex flex-col lg:flex-row items-center">
          <H3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </H3>
          <View className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <A
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </A>
            <A
              href={`github.com/expo/router`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </A>
          </View>
        </View>
      </Container>
    </Footer>
  );
};

export default IFooter;
