type Comment = {
  text: string;
  likes: number;
};

export type PostData = {
  id: number;
  productTitle: string;
  author: string;
  pictures: string[];
  likes: number;
  hashtags: string[];
  comments: Comment[];
};

export const postData: PostData[] = [
      {
    id: 1,
    productTitle: "제품 1",
    author: "사용자 1",
    pictures: [
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
    ],
    likes: 10,
    hashtags: ["#태그1", "#태그2"],
    comments: [
      { text: "댓글 1", likes: 5 },
      { text: "댓글 2", likes: 2 },
    ],
  },
    {
    id: 2,
    productTitle: "제품 2",
    author: "사용자 2",
    pictures: [
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
    ],
    likes: 33,
    hashtags: ["#태그4", "#태그5"],
    comments: [
      { text: "댓글 1", likes: 5 },
      { text: "댓글 2", likes: 2 },
      { text: "댓글 3", likes: 7 },
      { text: "댓글 4", likes: 11 },
      { text: "댓글 5", likes: 22 },
    ],
  },
    {
    id: 3,
    productTitle: "제품 3",
    author: "사용자 3",
    pictures: [
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
    ],
    likes: 222,
    hashtags: ["#태그1", "#태그2", "#태그3"],
    comments: [
      { text: "댓글 1", likes: 11 },
      { text: "댓글 2", likes: 22 },
      { text: "댓글 3", likes: 21 },
      { text: "댓글 4", likes: 23 },
    ],
  },
    {
    id: 4,
    productTitle: "제품 4",
    author: "사용자 4",
    pictures: [
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
    ],
    likes: 44,
    hashtags: ["#태그5", "#태그26"],
    comments: [
      { text: "댓글 1", likes: 5 },
      { text: "댓글 2", likes: 2 },
      { text: "댓글 3", likes: 21 },
      { text: "댓글 4", likes: 21 },
      { text: "댓글 5", likes: 22 },
      { text: "댓글 6", likes: 23 },
      { text: "댓글 7", likes: 24 },
    ],
  },
    {
    id: 5,
    productTitle: "제품 5",
    author: "사용자 5",
    pictures: [
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
    ],
    likes: 61,
    hashtags: ["#태그11", "#태그12"],
    comments: [
      { text: "댓글 1", likes: 5 },
      { text: "댓글 2", likes: 2 },
    ],
  },
    {
    id: 6,
    productTitle: "제품 6",
    author: "사용자 6",
    pictures: [
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
    ],
    likes: 101,
    hashtags: ["#태그21", "#태그22"],
    comments: [
      { text: "댓글 1", likes: 5 },
      { text: "댓글 2", likes: 51 },
      { text: "댓글 3", likes: 52 },
      { text: "댓글 4", likes: 53 },
      { text: "댓글 5", likes: 2 },
    ],
  },
    {
    id: 1,
    productTitle: "제품 1",
    author: "사용자 1",
    pictures: [
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
    ],
    likes: 10,
    hashtags: ["#태그1", "#태그2"],
    comments: [
      { text: "댓글 1", likes: 5 },
      { text: "댓글 2", likes: 2 },
    ],
  },
    {
    id: 1,
    productTitle: "제품 1",
    author: "사용자 1",
    pictures: [
      "https://via.placeholder.com/200x200",
      "https://via.placeholder.com/200x200",
    ],
    likes: 10,
    hashtags: ["#태그1", "#태그2"],
    comments: [
      { text: "댓글 1", likes: 5 },
      { text: "댓글 2", likes: 2 },
    ],
  },
]