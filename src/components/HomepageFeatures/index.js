import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '模块化设计',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        我们的硬件采用模块化设计，支持灵活定制，满足不同场景的需求。
      </>
    ),
  },
  {
    title: '高性能边缘 AI',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        基于 NVIDIA Jetson 平台，提供高达 157 TOPS 的 AI 性能，适用于实时边缘计算。
      </>
    ),
  },
  {
    title: '开发者优先',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        提供开放的 SDK、文档和 3D 文件，支持快速集成和二次开发。
      </>
    ),
  },
  {
    title: '广泛的应用场景',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        适用于工业自动化、智慧城市、智能工厂、交通管理等多种领域。
      </>
    ),
  },
  {
    title: '可靠的硬件设计',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        采用坚固的 IP67 防护等级设计，适应宽温工作环境，确保设备稳定运行。
      </>
    ),
  },
  {
    title: '快速上市',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        提供完整的开发工具链和支持，帮助您快速将产品推向市场。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.featureSubtitle}>{title}</h3>
        <p className={styles.featureText}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={`text--center ${styles.featureTitle}`}>为什么选择 CamThink？</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}