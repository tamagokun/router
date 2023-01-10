import { Section, H1, H4, A } from "@expo/html-elements";
const CMS_NAME = "Markdown";

const Intro = () => {
  return (
    <Section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <H1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </H1>
      <H4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <A
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </A>{" "}
        and {CMS_NAME}.
      </H4>
    </Section>
  );
};

export default Intro;
