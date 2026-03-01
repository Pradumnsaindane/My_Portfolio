import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.5,
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  );
}