import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/notes",
    permanent: true,
  },
});

export default function BlogRedirect() {
  return null;
}
