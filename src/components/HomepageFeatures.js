import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Handbook',
    Svg: require('../../static/img/Instruction-manual-bro.svg').default,
    description: (
      <>
        The handbook will give an overview of Algovera. Discover our vision for the future of AI and the culture that is engrained into our community.
      </>
    ),
  },
  {
    title: 'Tracks',
    Svg: require('../../static/img/adve.svg').default,
    description: (
      <>
        There are many ways to contribute to Algovera's vision of a decentralised AI economy. Tracks are the different ways you can take to add value to Algovera.  
      </>
    ),
  },
  {
    title: 'Blogs',
    Svg: require('../../static/img/Blogging-bro.svg').default,
    description: (
      <>
        Algovera will publish blogs to communicate updates, decisions, and plans. Learn more about Algovera's progress by following the blogs.  
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
