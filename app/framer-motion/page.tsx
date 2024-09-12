import Link from "next/link";

const FramerMotionPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/framer-motion/sequence">Sequence</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/framer-motion/drag-and-drop">Drag and Drop</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FramerMotionPage;
