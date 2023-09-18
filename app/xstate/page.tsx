import Link from "next/link";

const XStatePage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/xstate/promise-machine">Promise Machine</Link>
          </li>
          <li>
            <Link href="/xstate/reddit-api">Reddit API</Link>
          </li>
          <li>
            <Link href="/xstate/multi-step-form">Multi Step Form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default XStatePage;
