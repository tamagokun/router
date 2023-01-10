import { Link } from "expo-router";
import { H2 } from "@expo/html-elements";
const Header = () => {
  return (
    <H2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Blog
      </Link>
      .
    </H2>
  );
};

export default Header;
