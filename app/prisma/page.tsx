import Link from "next/link";

const PrismaPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/prisma/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PrismaPage;
