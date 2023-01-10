import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import { Link } from "expo-router";
import type Author from "../interfaces/author";

import { View } from "react-native";
import { H3, P } from "@expo/html-elements";
type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <View>
      <View className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </View>
      <H3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </H3>
      <View className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </View>
      <P className="text-lg leading-relaxed mb-4">{excerpt}</P>
      <Avatar name={author.name} picture={author.picture} />
    </View>
  );
};

export default PostPreview;
