// import markdownStyles from './markdown-styles.module.css'
import { View } from "react-native";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <View className="max-w-2xl mx-auto">
      <View
      // className={markdownStyles['markdown']}
      // dangerouslySetInnerHTML={{ __html: content }}
      />
    </View>
  );
};

export default PostBody;
