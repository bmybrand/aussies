"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLink } from "./ArrowLink";
import { useRevealOnce } from "./useRevealOnce";

const devices = [
  { name: "Countertop", description: "A compact, efficient system made for busy counters.", kind: "mini" },
  { name: "Handheld", description: "Take orders and payments wherever your customers are.", kind: "handheld" },
  { name: "Station Duo", description: "Two displays keep staff and customers moving together.", kind: "duo" },
  { name: "Kitchen display", description: "Keep every ticket visible and every station in sync.", kind: "kds" },
  { name: "Self-service", description: "Give customers a simple way to order at their own pace.", kind: "kiosk" },
];

export function HardwareShowcase() {
  const [activeDevice, setActiveDevice] = useState(0);
  const selectedDevice = devices[activeDevice];
  const { ref, isVisible } = useRevealOnce();

  return (
    <section ref={ref} className={`hardware-wrap${isVisible ? " hardware-wrap--visible" : ""}`}>
      <div className="hardware-showcase">
        <Image
          className="hardware-background"
          src="/images/home/hardware-counter-pos.png"
          alt="Modern point-of-sale terminal on a restaurant counter"
          fill
          sizes="(max-width: 720px) 100vw, calc(100vw - 48px)"
        />
        <div className="hardware-copy">
          <p className="eyebrow eyebrow--light">Designed for the real world</p>
          <h2>Hardware that works as hard as you do.</h2>
          <p>Fast, durable, and ready for the rush. A family of devices made for counters, tables, and everywhere in between.</p>
          <div className="hardware-actions">
            <ArrowLink>Shop devices</ArrowLink>
            <ArrowLink dark>Explore {selectedDevice.name}</ArrowLink>
          </div>
        </div>

        <div className="hardware-bottom-overlay">
          <div className="hardware-device-copy" aria-live="polite">
            <h3>{selectedDevice.name}</h3>
            <p>{selectedDevice.description}</p>
          </div>
          <div className="hardware-thumbnails" aria-label="Choose hardware">
            {devices.map((device, index) => (
              <button
                className={`hardware-thumbnail${activeDevice === index ? " hardware-thumbnail--active" : ""}`}
                type="button"
                aria-label={`Select ${device.name}`}
                aria-pressed={activeDevice === index}
                onClick={() => setActiveDevice(index)}
                key={device.name}
              >
                <span className="hardware-thumbnail__label">{device.name}</span>
                <span className={`hardware-thumbnail__device hardware-thumbnail__device--${device.kind}`} aria-hidden="true"><i /><b /></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
