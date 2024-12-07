declare module "react-type-animation" {
    const TypeAnimation: React.FC<{
      sequence: (string | number)[];
      wrapper?: string;
      speed?: number;
      repeat?: number | boolean;
      style?: React.CSSProperties;
    }>;
    export default TypeAnimation;
  }
  