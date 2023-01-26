import moment from "moment";
import "moment/locale/es";

export const formatTimeStamp = (date: string) => moment(date).format("LLLL a");

export const formatDate = (date: string) => moment(date).format("LL");
