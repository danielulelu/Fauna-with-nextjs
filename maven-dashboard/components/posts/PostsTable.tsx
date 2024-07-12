import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";

interface PostTableProps {
  limit?: number;
  title?: string;
}

const PostsTable = ({ limit, title }: PostsTableProps) => {
    //sort posts by date in descending order
    const sortedPosts:Post[] = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    // filter posts based on limit
    const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;



  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4">{title ? title : "Posts"}</h3>

      <Table>
        <TableCaption>Showing {limit} posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
            {filteredPosts.map((post) => (
                <TableRow key={post.id}>
                    <TableCell>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                    <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
                    <TableCell>
                        <Link href={`/posts/edit/${post.id}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs ">edit</button>
                        </Link>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>

      {/*button to add a new post */}
      <Link href="/posts/create">
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs ">
          Add new post
        </button>
      </Link>
    </div>
  );
};

export default PostsTable;
