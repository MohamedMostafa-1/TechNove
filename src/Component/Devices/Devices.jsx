import React from "react";
import { Card } from "@/components/ui/card";

const devices = [
  { name: " laptop", src: "../../assets/lap.jpeg" },
  { name: " tv", src: "../../assets/tv.jpeg" },
  { name: "printer ", src: "../../assets/printer.jpeg" },
  { name: "phone", src: "../../assets/phone.jpeg" },
  { name: "camera", src: "../../assets/camera.jpeg" },
  { name: "game ", src: "../../assets/game.jpeg" },
];

export default function DevicesBubbleDisplay() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {devices.map((device, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >
          <div className="w-40 h-40 rounded-full bg-white/30 backdrop-blur-md shadow-lg flex items-center justify-center">
            <img src={device.src} alt={device.name} className="w-24 h-24 object-contain" />
          </div>
          <span className="mt-2 text-sm font-medium">{device.name}</span>
        </div>
      ))}
    </div>
  );
}
