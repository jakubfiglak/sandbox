import dynamic from "next/dynamic";

const Quill = dynamic(() => import("./_components/quill"), {
  ssr: false,
});

const QuillPage = () => {
  return <Quill />;
};

export default QuillPage;
