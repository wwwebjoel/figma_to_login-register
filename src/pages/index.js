import Head from "next/head";
import Login from "./login";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Next.js Test App</title>
        <meta name="description" content="Test App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen flex flex-col text-2xl space-y-10 cursor-pointer justify-center items-center">
        <div>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
        <div>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
