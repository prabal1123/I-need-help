import { useEffect, useRef } from 'react';
import htmlContent from './insight-content.html?raw';
import { initInSight } from './insight-behavior';
import './insight.css';

export default function InSightLanding() {
  const rootRef = useRef(null);

  useEffect(() => {
    const cleanup = initInSight(rootRef.current);
    return cleanup;
  }, []);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
