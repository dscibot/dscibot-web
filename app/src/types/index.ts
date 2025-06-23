export interface FloatingCard {
  id: number;
  content: React.ReactNode;
  position: {
    top: string;
    left: string;
  };
  delay: number;
  rotation: string;
  color: string;
}