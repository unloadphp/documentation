'use strict';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import React from 'react';
import GitHubButton from 'react-github-btn';

const contents = [
  {
    content: 'Build on top of existing and battle tested tools like AWS SAM, AWS Cloudformation and Bref.sh.',
    image: '/img/content/layer.svg',
    title: 'Solid Foundation',
  },
  {
    content: 'Straightforward configuration format to set up core application infrastructure (network, queues, databases, cache and object storage).',
    image: '/img/content/wrench.svg',
    title: "Developer Expirience",
  },
  {
    content: 'Start with nearly zero costs on AWS free tier and scale to production capacity in a few simple steps.',
    image: '/img/content/coins.svg',
    title: 'Cost Effective',
  },
];

const Button = ({children, href}) => {
  return (
    <Link
      className="button button--outline button--primary button--lg margin-horiz--sm"
      to={href}>
      {children}
    </Link>
  );
};

const HomeSplash = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <div className={classnames('hero hero-dark', styles.heroBanner)}>
      <div className="container">
        <img
          className={classnames(styles.heroBannerLogo, 'margin-vert--md')}
          src={'./img/unload.svg'}
          alt="Unload Logo"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          className={classnames(styles.heroButtons, 'name', 'margin-vert--md')}>
          <Button href={useBaseUrl('/docs/install')}>Get Started</Button>
          <Button href="https://github.com/unloadphp/unload">
            <img
                src="/img/content/github.svg"
                className={classnames(styles.github)}
                alt=""
            />
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <Layout title="The simplest way to build and deploy a serverless PHP application with AWS Cloud">
      <HomeSplash />
      <div className="container">
        <div class="row">
          {contents.map(({content, title, image}) => {
            return (
              <div className="col col--4 mt-10 margin-vert--md">
                <div
                  className={classnames(
                    styles.blockContainer,
                    'padding-horiz--md',
                  )}>
                  <img
                    src={image}
                    className={classnames(styles.blockImage)}
                    alt=""
                  />
                  <h2>{title}</h2>
                  <p className="featureContent">{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
