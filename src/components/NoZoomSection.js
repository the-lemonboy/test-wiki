import React from 'react';

/**
 * 一个禁用内部所有图片缩放功能的容器组件
 */
export default function NoZoomSection({children, className}) {
  return (
    <div className={`no-zoom-section ${className || ''}`}>
      {children}
      <style jsx>{`
        .no-zoom-section img {
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
} 