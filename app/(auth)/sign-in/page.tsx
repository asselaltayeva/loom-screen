"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({
      provider: "google",
    })
  }
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Loom Logo"
            width={32}
            height={32}
          />
          <h1 className="text-2xl font-karla font-bold">Looma</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              Looma is great. I have been using to record videos and share with
              my team. Great resource for video making and sharing.{" "}
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="User"
                width={64}
                height={64}
                className="rounded-full aspect-square"
              />
              <div>
                <h2>Jason Hwang</h2>
                <p>Product Manager, ImaginaryLabs</p>
              </div>
            </article>
          </section>
        </div>
        <p>© Looma {new Date().getFullYear()}</p>
      </aside>

      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="Loom Logo"
              width={40}
              height={40}
            />
            <h1>Looma</h1>
          </Link>

          <p>
            {" "}
            Create and share your very first <span>Looma</span> video in
            seconds!~
          </p>
          <button onClick={handleSignIn}>
            <Image
              src="/assets/icons/google.svg"
              alt="Google Logo"
              width={22}
              height={22}
            />
            Sign in with Google
          </button>
        </section>
      </aside>
      <div className="overlay"></div>
    </main>
  );
};

export default Page;
