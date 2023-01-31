export const createUrlImage = (img: string, type?: string) =>
  `${process.env.NEXT_PUBLIC_API_ROUTE}/static/images/${
    type ? "cars" : "sellers"
  }/${img}`;
