import React from "react";

const Docs = () => {
  return (
    <div className="text-light pt-5 flex-column">
      <div className="pt-5 container">
        <div className="m-5 mt-3">
          <h1 className="fw-bold">Getting Started</h1>
          <p className="fs-5">
            Learn how to set up your development environment and create your
            first React application.
          </p>
        </div>
        <div className="m-5">
          <div className="border p-4 rounded-4 border-secondary my-4">
            <h2>Prerequisites</h2>
            <p>Make sure you have Node.js installed on your computer.</p>
            <div className="border p-4 rounded-4 border-secondary d-flex flex-column justify-content-center">
              <pre className="text-danger m-1 fs-5">node --version</pre>
              <pre className="text-danger m-1 fs-5">npm --version</pre>
            </div>
          </div>
        </div>
        <div className="m-5">
          <div className="border p-4 rounded-4 border-secondary my-4">
            <h2>Create React App</h2>
            <p>The easiest way to start a new React project is with Vite.</p>
            <div className="border p-4 rounded-4 border-secondary d-flex flex-column justify-content-center">
              <pre className="text-danger m-1 fs-5">npm create vite@latest</pre>
            </div>
          </div>
        </div>
        <div className="m-5">
          <div className="border p-4 rounded-4 border-secondary my-4">
            <h2>Start Development</h2>
            <p>
              Navigate to your project directory and start the development
              server.
            </p>
            <div className="border p-4 rounded-4 border-secondary d-flex flex-column justify-content-center">
              <pre className="text-danger m-1 fs-5">npm run dev</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
