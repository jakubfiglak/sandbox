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
        </ul>
      </nav>
    </main>
  );
}
