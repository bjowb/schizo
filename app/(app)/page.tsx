import { PostList } from "@/components/post/PostsList";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Banner  */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-center ">
            <div>
              <h1 className="text-2xl font-bold">Home</h1>
              <p className="text-sm text-gray-600">
                Recent posts from cults you follow
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Post  */}
      <section className="my-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4">
            <PostList />
          </div>
        </div>
      </section>
    </>
  );
}


// www.schizo.com