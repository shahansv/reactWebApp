import React from "react";

const Blog = () => {
  return (
    <div className="text-light pt-5 flex-column">
      <div className="pt-5 container">
        <div className="m-5 mt-3">
          <h1 className="fw-bold">React Blog</h1>
          <p className="fs-5">
            This blog is the official source for the updates from the React
            team. Anything important, including release notes or deprecation
            notices, will be posted here first.
          </p>
          <p className="fs-5">
            You can also follow the{" "}
            <a
              href="https://bsky.app/profile/react.dev"
              target="_blank"
              className="link-style"
            >
              {" "}
              @react.dev{" "}
            </a>
            account on Bluesky, or{" "}
            <a
              href="https://x.com/reactjs"
              target="_blank"
              className="link-style"
            >
              {" "}
              @reactjs{" "}
            </a>{" "}
            account on Twitter, but you won't miss anything essential if you
            only read this blog.
          </p>
        </div>

        <div className="m-5">
          <div className="border p-4 rounded-4 border-secondary my-4">
            <h1>React Conf 2025 Recap</h1>
            <p className="text-secondary fw-semibold">October 16, 2025</p>
            <p>
              Last week we hosted React Conf 2025. In this post, we summarize
              the talks and announcements from the event…
            </p>
            <p>
              <a
                href="https://react.dev/blog/2025/10/16/react-conf-2025-recap"
                target="_blank"
                className="link-style"
              >
                {" "}
                Read more{" "}
              </a>
            </p>
          </div>
          <div className="border p-4 rounded-4 border-secondary my-4">
            <h1>React Compiler v1.0</h1>
            <p className="text-secondary fw-semibold">October 7, 2025</p>
            <p>
              We're releasing the compiler's first stable release today, plus
              linting and tooling improvements to make adoption easier.
            </p>
            <p>
              <a
                href="https://react.dev/blog/2025/10/07/react-compiler-1"
                target="_blank"
                className="link-style"
              >
                {" "}
                Read more{" "}
              </a>
            </p>
          </div>
          <div className="border p-4 rounded-4 border-secondary my-4">
            <h1>Introducing the React Foundation</h1>
            <p className="text-secondary fw-semibold">October 7, 2025</p>
            <p>
              Today, we're announcing our plans to create the React Foundation
              and a new technical governance structure …
            </p>
            <p>
              <a
                href="https://react.dev/blog/2025/10/07/introducing-the-react-foundation"
                target="_blank"
                className="link-style"
              >
                {" "}
                Read more{" "}
              </a>
            </p>
          </div>
          <div className="border p-4 rounded-4 border-secondary my-4">
            <h1>React 19.2</h1>
            <p className="text-secondary fw-semibold">October 1, 2025</p>
            <p>
              React 19.2 adds new features like Activity, React Performance
              Tracks, useEffectEvent, and more. In this post …
            </p>
            <p>
              <a
                href="https://react.dev/blog/2025/10/01/react-19-2"
                target="_blank"
                className="link-style"
              >
                {" "}
                Read more{" "}
              </a>
            </p>
          </div>
          <div className="border p-4 rounded-4 border-secondary my-4">
            <h1>React Labs: View Transitions, Activity, and more</h1>
            <p className="text-secondary fw-semibold">April 23, 2025</p>
            <p>
              In React Labs posts, we write about projects in active research
              and development. In this post, we're sharing two new experimental
              features that are ready to try today, and sharing other areas
              we're working on now …
            </p>
            <p>
              <a
                href="https://react.dev/blog/2025/04/23/react-labs-view-transitions-activity-and-more"
                target="_blank"
                className="link-style"
              >
                {" "}
                Read more{" "}
              </a>
            </p>
          </div>
          <div className="border p-4 rounded-4 border-secondary my-4">
            <h1>Sunsetting Create React App</h1>
            <p className="text-secondary fw-semibold">February 14, 2025</p>
            <p>
              Today, we're deprecating Create React App for new apps, and
              encouraging existing apps to migrate to a framework, or to migrate
              to a build tool like Vite, Parcel, or RSBuild. We're also
              providing docs for when a framework isn't a good fit for your
              project, you want to build your own framework, or you just want to
              learn how React works by building a React app from scratch …
            </p>
            <p>
              <a
                href="https://react.dev/blog/2025/02/14/sunsetting-create-react-app"
                target="_blank"
                className="link-style"
              >
                {" "}
                Read more{" "}
              </a>
            </p>
          </div>
          <div className="border p-4 rounded-4 border-secondary my-4">
            <h1>React v19</h1>
            <p className="text-secondary fw-semibold">December 5, 2024</p>
            <p>
              In the React 19 Upgrade Guide, we shared step-by-step instructions
              for upgrading your app to React 19. In this post, we'll give an
              overview of the new features in React 19, and how you can adopt
              them …
            </p>
            <p>
              <a
                href="https://react.dev/blog/2024/12/05/react-19"
                target="_blank"
                className="link-style"
              >
                {" "}
                Read more{" "}
              </a>
            </p>
          </div>
          <div className="my-4 border border-secondary" />
          <h3>All release notes </h3>
          <p className="fs-5">
            Not every React release deserves its own blog post, but you can find
            a detailed changelog for every release in the{" "}
            <a
              href="https://github.com/facebook/react/blob/main/CHANGELOG.md"
              target="_blank"
              className="link-style"
            >
              {" "}
              CHANGELOG.md{" "}
            </a>{" "}
            file in the React repository, as well as on the{" "}
            <a
              href="https://react.dev/blog/2024/12/05/react-19"
              target="_blank"
              className="link-style"
            >
              {" "}
              Releases{" "}
            </a>{" "}
            page.
          </p>
          <div className="my-4 border border-secondary" />
          <h3>Older posts </h3>
          <p className="fs-5 mb-5">
            See the{" "}
            <a
              href="https://legacy.reactjs.org/blog/all.html/"
              target="_blank"
              className="link-style"
            >
              {" "}
              older posts.{" "}
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
