import Layout from '@theme/Layout';
import React from 'react';

const supportLinks = [
  {
    title: 'Browse the docs',
    summary:
      "To learn more about available configuration options and features use documentation",
    content: (
      <ul>
        <li>
          Learn how to <a href="/docs/install">get started</a> with Unload.
        </li>
      </ul>
    ),
  },
  {
    title: 'Ask for help',
    summary: 'To find answers from maintainers or other Unload users like you.',
    content: (
      <ul>
        <li>
            Create post via{' '}
            <a href="https://github.com/unloadphp/unload/discussions">
                github discussions
            </a> a collaborative communication forum.
        </li>
      </ul>
    ),
  },
];

const Help = () => {
  return (
    <Layout title="Help">
      <div className="container margin-vert--lg">
        <header className="postHeader">
          <h2>Support</h2>
        </header>
        <p>
          Unload is open-source project build and supported on spare time by contributors. At this moment only community support is available via github issues.
        </p>

        <h2>Security Vulnerabilities</h2>
        <p>
          If you discover a security vulnerability within Unload, please send an e-mail to report@unload.sh. All security vulnerabilities will be promptly addressed.
        </p>

        <h2>License</h2>
        <p>
            The Unload is open-sourced software licensed under the Apache License, Version 2.0.
        </p>

        <div className="row">
          {supportLinks.map(({content, summary, title}, i) => {
            return (
              <div
                key={`help-column-${i}`}
                className="col col--6 margin-vert--md">
                <h2>{title}</h2>
                <p>{summary}</p>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Help;
