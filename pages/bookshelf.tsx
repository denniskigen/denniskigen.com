import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/reading",
    permanent: true,
  },
});

export default function BookshelfRedirect() {
  return null;
}
