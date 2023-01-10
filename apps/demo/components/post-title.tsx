import { ReactNode } from "react";
import { H1 } from "@expo/html-elements";
type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <H1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </H1>
  );
};

export default PostTitle;
