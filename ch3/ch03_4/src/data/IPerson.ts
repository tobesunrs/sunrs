type IPerson = {
  id: string;
  createdDate: Date;
  modifiedDate: Date;
  name: string;
  email: string;
  avatar: string;
  image: string;
  comments: string;
  counts: {
    coment: number;
    retweet: number;
    heart: number;
  };
};
export type {IPerson};
