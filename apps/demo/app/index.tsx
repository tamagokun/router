import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
// import { getAllPosts } from "../lib/api";
// import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
const CMS_NAME = "Markdown";
import { Head } from "../components/head";

type Props = {
  allPosts: Post[];
};

export default function Index() {
  // Emulate getStaticProps working.

  return (
    <IndexQualified
      allPosts={[
        {
          slug: "hello",
          title: "Hello World",

          date: new Date().toISOString(),
          coverImage:
            "https://snworksceo.imgix.net/rce/eb5fe1d1-74e9-4076-969e-59212727451a.sized-1000x1000.webp?w=1000",
          author: {
            name: "Evan Phacon",
            picture:
              "https://www.lego.com/cdn/cs/set/assets/blt167d8e20620e4817/DC_-_Character_-_Details_-_Sidekick-Standard_-_Batman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1",
          },
          excerpt: "Poets have been awful quiet about cheese.",
          ogImage: {
            url: "https://snworksceo.imgix.net/rce/eb5fe1d1-74e9-4076-969e-59212727451a.sized-1000x1000.webp?w=1000",
          },
          content: "Cheese is aight",
        },
      ]}
    />
  );
}

function IndexQualified({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     "title",
//     "date",
//     "slug",
//     "author",
//     "coverImage",
//     "excerpt",
//   ]);

//   return {
//     props: { allPosts },
//   };
// };
