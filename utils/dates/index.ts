import moment from "moment";
import "moment/locale/es";

export const formatTimeStamp = (date: string) => moment(date).format("LLLL a");

export const formatDate = (date: string) => moment(date).format("LL");

export const stringToDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-");
  return new Date(Number(year), Number(month) - 1, Number(day));
};

export const formatDateDynamic = (date: Date, format: string) =>
  moment(date).format(format);

export const nowTimeStamp = () => moment().format("LLLL a");

export const getMonday = () => {
  const d = new Date();
  const day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};
