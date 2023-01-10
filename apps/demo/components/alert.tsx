import Container from "./container";
import cn from "classnames";
// import { EXAMPLE_PATH } from '../lib/constants'
import { A } from "@expo/html-elements";
type Props = {
  preview?: boolean;
};
import { View } from "react-native";

const Alert = ({ preview }: Props) => {
  return (
    <View
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <View className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <A
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </A>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <A
                href={`https://github.com/expo/router`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                available on GitHub
              </A>
              .
            </>
          )}
        </View>
      </Container>
    </View>
  );
};

export default Alert;
