"use client";

import { Suspense, useSyncExternalStore } from "react";
import HeroScene from "./HeroScene";
import NeuralBackground from "./NeuralBackground";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

type Capabilities = {
  webglReady: boolean;
  isMobile: boolean;
  reducedMotion: boolean;
};

let cachedCapabilities: Capabilities | null = null;

function getSnapshot(): Capabilities {
  if (!cachedCapabilities) {
    cachedCapabilities = {
      webglReady: supportsWebGL(),
      isMobile: window.innerWidth < 768,
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches,
    };
  }
  return cachedCapabilities;
}

// This component only mounts client-side (dynamic import, ssr: false),
// so the server snapshot is never actually read — it just satisfies the API.
function getServerSnapshot(): Capabilities {
  return { webglReady: false, isMobile: true, reducedMotion: false };
}

function subscribe() {
  return () => {};
}

export default function HeroVisual() {
  const { webglReady, isMobile, reducedMotion } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  // Keep the lighter canvas particle background on mobile / no-WebGL /
  // reduced-motion devices to avoid an expensive 3D render there.
  if (!webglReady || isMobile || reducedMotion) {
    return <NeuralBackground />;
  }

  return (
    <Suspense fallback={<NeuralBackground />}>
      <HeroScene />
    </Suspense>
  );
}
