import Link from "next/link";

const NestedFormsPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/nested-forms/create-player">Create Player</Link>
          </li>
          <li>
            <Link href="/nested-forms/create-team">Create Team</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NestedFormsPage;
