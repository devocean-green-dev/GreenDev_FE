import { createContext, useState } from "react";

const virtualComments = [
  {
    joinCount: 455,
    totalPostsCount: 1000,
    posts: [
      {
        postId: "1",
        content: "줍깅 참여완료~",
        nickname: "셔니",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "2",
        content: "줍깅 참여완료~",
        nickname: "셔니",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "3",
        content: "줍깅 참여완료~",
        nickname: "셔니",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "4",
        content: "줍깅 참여완료~",
        nickname: "셔니",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "5",
        content: "줍깅 참여완료~",
        nickname: "셔니",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "6",
        content: "줍깅 참여완료~",
        nickname: "셔니",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "7",
        content: "줍깅 참여완료~",
        nickname: "셔니",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "8",
        content: "줍깅 참여완료~",
        nickname: "셔니",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "9",
        content: "줍깅 참여완료~",
        nickname: "셔니",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "10",
        content: "줍깅 참여완료~",
        nickname: "셔니10",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "11",
        content: "줍깅 참여완료~",
        nickname: "셔니11",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "12",
        content: "줍깅 참여완료~",
        nickname: "셔니12",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
      {
        postId: "13",
        content: "줍깅 참여완료~",
        nickname: "셔니13",
        profileImageUrl:
          "https://img.freepik.com/premium-vector/green-sprout-plant-in-ground-soil-vector-icon_88813-1877.jpg",
        postImageUrl:
          "https://{서버주소}.s3.ap-northeast-2.amazonaws.com/{nickname}/posts/image.png",
        date: "2023-02-04 16:12:36",
      },
    ],
  },
];

export const CommentContext = createContext();

export const CommentContextProvider = ({ children }) => {
  const [comments, setComments] = useState(virtualComments);

  return (
    <CommentContext.Provider value={{ comments }}>
      {children}
    </CommentContext.Provider>
  );
};
