import React from 'react';

/**
 * 一个显示静态图片（无缩放功能）的组件
 */
export default function StaticImage({src, alt, width, height, style}) {
  return (
    <div className="static-image-wrapper" style={{display: 'inline-block', ...style}}>
      <img 
        src={src} 
        alt={alt || '静态图片'} 
        width={width}
        height={height}
        className="no-zoom"
        style={{
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      />
    </div>
  );
} 