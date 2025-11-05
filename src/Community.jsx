import React from "react";
import { Link } from "react-router-dom";

const Community = () => {
    return (
        <div className="text-light pt-5 flex-column">
            <div className="pt-5 container">
                <div className="m-5 mt-3">
                    <h1 className="fw-bold">React Community</h1>
                    <p className="fs-5">
                        React has a community of millions of developers. On this page we've
                        listed some React-related communities that you can be a part of; see
                        the other pages in this section for additional online and in-person
                        learning materials.
                    </p>
                </div>

                <div className="m-5">
                    <h2 className="fw-bold">Code of Conduct</h2>
                    <p className="fs-5">
                        Before participating in React's communities,
                        <a
                            href="https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md"
                            target="_blank"
                            className="link-style"
                        >
                            {" "}
                            please read our Code of Conduct.{" "}
                        </a>
                        We have adopted the
                        <a
                            href="https://www.contributor-covenant.org/"
                            target="_blank"
                            className="link-style"
                        >
                            {" "}
                            Contributor Covenant{" "}
                        </a>
                        and we expect that all community members adhere to the guidelines
                        within.
                    </p>
                </div>

                <div className="m-5">
                    <h2 className="fw-bold">Stack Overflow </h2>
                    <p className="fs-5">
                        Stack Overflow is a popular forum to ask code-level questions or if
                        you're stuck with a specific error. Read through the{" "}
                        <a
                            href="https://stackoverflow.com/questions/tagged/reactjs"
                            target="_blank"
                            className="link-style"
                        >
                            {" "}
                            existing questions
                        </a>{" "}
                        tagged with reactjs or{" "}
                        <a
                            href="https://stackoverflow.com/questions/ask?tags=reactjs"
                            target="_blank"
                            className="link-style"
                        >
                            {" "}
                            ask your own!{" "}
                        </a>
                    </p>
                </div>

                <div className="m-5">
                    <h2 className="fw-bold">Popular Discussion Forums</h2>
                    <p className="fs-5">
                        There are many online forums which are a great place for discussion
                        about best practices and application architecture as well as the
                        future of React. If you have an answerable code-level question,
                        Stack Overflow is usually a better fit.
                    </p>
                    <p className="fs-5">
                        Each community consists of many thousands of React users.
                    </p>
                    <ul>
                        <li className="fs-5">
                            <a
                                href="https://dev.to/t/react"
                                target="_blank"
                                className="link-style"
                            >
                                DEV's React community
                            </a>
                        </li>
                        <li className="fs-5">
                            <a
                                href="https://hashnode.com/n/reactjs"
                                target="_blank"
                                className="link-style"
                            >
                                Hashnode's React community
                            </a>
                        </li>
                        <li className="fs-5">
                            <a
                                href="https://discord.com/invite/reactiflux"
                                target="_blank"
                                className="link-style"
                            >
                                Reactiflux online chat
                            </a>
                        </li>
                        <li className="fs-5">
                            <a
                                href="https://www.reddit.com/r/reactjs/"
                                target="_blank"
                                className="link-style"
                            >
                                Reddit's React community
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="m-5 pb-4">
                    <h2 className="fw-bold">News </h2>
                    <p className="fs-5">
                        For the latest news about React,
                        <a
                            href="https://x.com/reactjs"
                            target="_blank"
                            className="link-style"
                        >
                            {" "}
                            follow @reactjs on Twitter{" "}
                        </a>
                        ,
                        <a
                            href="https://bsky.app/profile/react.dev"
                            target="_blank"
                            className="link-style"
                        >
                            {" "}
                            @react.dev on Bluesky{" "}
                        </a>
                        and the
                        <Link className="link-style" to={"/blog"}>
                            {" "}
                            official React blog{" "}
                        </Link>
                        on this website.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Community;
