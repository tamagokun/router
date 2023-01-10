import { parseISO, format } from "date-fns";
import { Time } from "@expo/html-elements";
type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <Time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</Time>;
};

export default DateFormatter;
