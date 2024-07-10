import { Post } from "@/types/posts";

const posts: Post[] = [
  {
    id: "1",
    title: "First Post",
    body: "This is the first post content.",
    author: "John Doe",
    date: "2024-01-01",
    comments: [
      {
        id: "1",
        text: "Nice post!",
        username: "Bob Smith",
      },
      {
        id: "2",
        text: "Great Introduction!",
        username: "Alice Johnson",
      },
    ],
  },
  // Add more posts here...
  {
    id: "2",
    title: "Second Post",
    body: "This is so beautiful!",
    author: "Jane Doe",
    date: "2024-02-01",
    comments: [
      {
        id: "3",
        text: "Love the topic!",
        username: "Charlie Brown",
      },
      {
        id: "4",
        text: "I agree.",
        username: "David Wilson",
      },
      {
        id: "5",
        text: "I think it's fascinating.",
        username: "Emily Davis",
      },
    ],
  },

  // Add more posts here...
  {
    id: "3",
    title: "Third Post",
    body: "Woah! You did that?",
    author: "Mike Johnson",
    date: "2024-03-01",
    comments: [
      {
        id: "6",
        text: "I agree with everything!",
        username: "Sarah Wilson",
      },
      {
        id: "7",
        text: "I think it's a great idea.",
        username: "Michael Brown",
      },
      {
        id: "8",
        text: "I'm excited to read it!",
        username: "Laura Davis",
      },
    ],
  }
];


export default posts;