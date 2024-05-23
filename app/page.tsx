import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/xstate">XState</Link>
          </li>
          <li>
            <Link href="/nested-forms">Nested Forms</Link>
          </li>
          <li>
            <Link href="/framer-motion">Framer Motion</Link>
          </li>
          <li>
            <Link href="/quill">Quill</Link>
          </li>
          <li>
            <Link href="/auto-form">Auto Form</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
