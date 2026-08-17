import { useEffect, useRef, useState } from 'react';

import kw01 from '../../imports/kunstwissel/kunstwissel-01.webp';
import kw02 from '../../imports/kunstwissel/kunstwissel-02.webp';
import kw03 from '../../imports/kunstwissel/kunstwissel-03.webp';
import kw04 from '../../imports/kunstwissel/kunstwissel-04.webp';
import kw05 from '../../imports/kunstwissel/kunstwissel-05.webp';
import kw06 from '../../imports/kunstwissel/kunstwissel-06.webp';
import kw07 from '../../imports/kunstwissel/kunstwissel-07.webp';
import kw08 from '../../imports/kunstwissel/kunstwissel-08.webp';
import kw09 from '../../imports/kunstwissel/kunstwissel-09.webp';
import kw10 from '../../imports/kunstwissel/kunstwissel-10.webp';
import kw11 from '../../imports/kunstwissel/kunstwissel-11.webp';
import kw12 from '../../imports/kunstwissel/kunstwissel-12.webp';
import kw13 from '../../imports/kunstwissel/kunstwissel-13.webp';
import kw14 from '../../imports/kunstwissel/kunstwissel-14.webp';
import kw15 from '../../imports/kunstwissel/kunstwissel-15.webp';
import kw16 from '../../imports/kunstwissel/kunstwissel-16.webp';
import kw17 from '../../imports/kunstwissel/kunstwissel-17.webp';
import kw18 from '../../imports/kunstwissel/kunstwissel-18.webp';
import kw19 from '../../imports/kunstwissel/kunstwissel-19.webp';

const FRAMES = [
  kw01, kw02, kw03, kw04, kw05, kw06, kw07, kw08, kw09, kw10,
  kw11, kw12, kw13, kw14, kw15, kw16, kw17, kw18, kw19,
];

// Tijd dat één kunstwerk in beeld blijft, inclusief de overvloei van 500ms (zie kunstwissel.css).
const WISSEL_MS = 3200;
// Na dit aantal volledige rondes stopt de wissel vanzelf (rust + batterij).
const MAX_RONDES = 2;
// Preload start pas ná window load, met deze extra adempauze voor de hero zelf.
const PRELOAD_UITSTEL_MS = 800;

interface KunstwisselFiguurProps {
  className?: string;
}

/**
 * De galerie-gastvrouw met een wisselend origineel schilderij in haar handen.
 * Alle frames delen exact dezelfde pose, dus alleen het kunstwerk vloeit over.
 * Decoratief element (aria-hidden). De wissel start pas zodra frames zijn
 * voorgeladen (na window load), pauzeert buiten beeld, stopt na een paar
 * rondes en staat stil bij prefers-reduced-motion.
 */
export function KunstwisselFiguur({ className = '' }: KunstwisselFiguurProps) {
  const [frame, setFrame] = useState({ current: 0, previous: -1 });
  const [eersteGeladen, setEersteGeladen] = useState(false);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const zichtbaarRef = useRef(true);
  // Per frame: succesvol voorgeladen? Frame 0 laadt via de zichtbare <img>.
  const okRef = useRef<boolean[]>(FRAMES.map((_, i) => i === 0));
  const wisselsRef = useRef(0);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => {
        zichtbaarRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 },
    );
    io.observe(host);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let gestopt = false;
    let uitstel: number | undefined;

    const laadVolgende = (i: number, poging = 0) => {
      if (gestopt || i >= FRAMES.length) return;
      const img = new Image();
      img.onload = () => {
        okRef.current[i] = true;
        laadVolgende(i + 1);
      };
      img.onerror = () => {
        if (poging < 2) {
          window.setTimeout(() => { if (!gestopt) laadVolgende(i, poging + 1); }, 2000);
        } else {
          laadVolgende(i + 1); // frame blijft gemarkeerd als niet-ok en wordt overgeslagen
        }
      };
      img.src = FRAMES[i];
    };

    const startPreload = () => {
      uitstel = window.setTimeout(() => laadVolgende(1), PRELOAD_UITSTEL_MS);
    };
    if (document.readyState === 'complete') startPreload();
    else window.addEventListener('load', startPreload, { once: true });

    const timer = window.setInterval(() => {
      if (!zichtbaarRef.current || document.hidden) return;
      if (wisselsRef.current >= MAX_RONDES * FRAMES.length) {
        window.clearInterval(timer);
        return;
      }
      setFrame((f) => {
        // Zoek het eerstvolgende succesvol geladen frame (wrap naar 0)
        for (let stap = 1; stap <= FRAMES.length; stap++) {
          const kandidaat = (f.current + stap) % FRAMES.length;
          if (okRef.current[kandidaat]) {
            if (kandidaat === f.current) return f;
            wisselsRef.current += 1;
            return { current: kandidaat, previous: f.current };
          }
        }
        return f;
      });
    }, WISSEL_MS);

    return () => {
      gestopt = true;
      window.removeEventListener('load', startPreload);
      if (uitstel !== undefined) window.clearTimeout(uitstel);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`kunstwissel ${eersteGeladen ? 'kunstwissel-entree' : 'kunstwissel-wacht'} ${className}`}
    >
      {frame.previous >= 0 && (
        <img
          src={FRAMES[frame.previous]}
          alt=""
          draggable={false}
          className="kunstwissel-laag"
        />
      )}
      <img
        key={frame.current}
        src={FRAMES[frame.current]}
        alt=""
        draggable={false}
        onLoad={() => setEersteGeladen(true)}
        className={`kunstwissel-laag ${frame.previous >= 0 ? 'kunstwissel-fade' : ''}`}
      />
    </div>
  );
}
