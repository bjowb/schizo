import { getPosts } from "@/sanity/lib/post/getPost";
import { currentUser } from "@clerk/nextjs/server";
import Post from "./Post";

export async function PostList() {
  const user = await currentUser();
  const posts = await getPosts();

  console.log(posts);
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post._id} post={post} userId={user?.id || null} />
      ))}
    </div>
  );
}
