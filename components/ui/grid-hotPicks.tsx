import Image from "next/image";

interface Post {
  id: number;
  title: string;
  image: string;
  uploadTime: string;
  author: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "lorem",
    image: "/images/mountain.jpg",
    uploadTime: "06/3/2025",
    author: "lorem",
  },
  {
    id: 2,
    title: "lorem",
    image: "/images/beach.jpg",
    uploadTime: "29/3/2025",
    author: "lorem",
  },
  {
    id: 3,
    title: "lorem",
    image: "",
    uploadTime: "23/3/2025",
    author: "lorem",
  },
];

const PostGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-6 drop-shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-lg font-semibold mt-3">{post.title}</h3>
            <p className="text-gray-500 text-sm">{post.uploadTime} • {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostGrid;
