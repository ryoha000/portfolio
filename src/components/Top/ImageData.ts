import type { Filter } from "@pixi/core";
import type { Container } from "@pixi/display";

export type RGBA = [number, number, number, number];

export interface BasePositionInformation {
  x: number;
  y: number;
  flipColor: RGBA;
}

export interface BaseImageInformation {
  src: string;
  width: number;
  height: number;
}

export interface BasePIXIInformation {
  position: BasePositionInformation;
  image: BaseImageInformation;
}

export interface AnimationContainer {
  destination: {
    x: number;
    y: number;
  };
  container: Container;
  filter?: Filter;
}

export const BASE_CANVAS_WIDTH = 1600;
export const BASE_CANVAS_HEIGHT = 1250;
export const BASE_LOGO_Y = 1000;

export const images: BasePIXIInformation[] = [
  {
    position: {
      x: BASE_CANVAS_WIDTH - 988,
      y: 0,
      flipColor: [0.74, 0.08, 0.16, 1.0],
    },
    image: {
      src: "/assets/shinku_gold.webp",
      width: 988,
      height: 988,
    },
  },
  {
    position: {
      x: 0,
      y: 0,
      flipColor: [0.27, 0.84, 0.91, 1.0],
    },
    image: {
      src: "/assets/romi_scarlet.webp",
      width: 1130,
      height: 1130,
    },
  },
  {
    position: {
      x: BASE_CANVAS_WIDTH - (BASE_CANVAS_WIDTH / 2 - 22) - 553 - 24,
      y: BASE_CANVAS_HEIGHT - 840 - 24,
      flipColor: [0.88, 0.88, 0.88, 1.0],
    },
    image: {
      src: "/assets/sui_gray.webp",
      width: 840,
      height: 840,
    },
  },
  {
    position: {
      x: BASE_CANVAS_WIDTH - BASE_CANVAS_WIDTH / 2 - 22,
      y: BASE_CANVAS_HEIGHT - 840 - 24,
      flipColor: [0.33, 0.33, 0.33, 1.0],
    },
    image: {
      src: "/assets/sui_silver.webp",
      width: 840,
      height: 840,
    },
  },
];

export interface LogoInformation {
  src: string;
  destinationX: number;
}

export const logoDatas = new Map<"ryoha" | "infinity", LogoInformation>([
  [
    "ryoha",
    {
      src: "/assets/logo_ryoha.webp",
      destinationX: 50,
    },
  ],
  [
    "infinity",
    {
      src: "/assets/logo_infinity.webp",
      destinationX: 500,
    },
  ],
]);
