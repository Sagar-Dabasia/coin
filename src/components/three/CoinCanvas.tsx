import React, { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { StaticCoinFallback } from './StaticCoinFallback';

interface CoinCanvasProps {
  isFlipping: boolean;
  targetSide: 'heads' | 'tails';
  onFlipComplete?: () => void;
  className?: string;
}

// Procedural texture generator for high-resolution numismatic details
function createCoinFaceCanvas(isObverse: boolean): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  const cx = 512;
  const cy = 512;

  // Base metallic radial gradient
  const bgGrad = ctx.createRadialGradient(cx, cy, 50, cx, cy, 500);
  bgGrad.addColorStop(0, '#FFE8B3');
  bgGrad.addColorStop(0.35, '#E5C073');
  bgGrad.addColorStop(0.7, '#B89858');
  bgGrad.addColorStop(0.92, '#87672B');
  bgGrad.addColorStop(1, '#574117');

  ctx.fillStyle = bgGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, 500, 0, Math.PI * 2);
  ctx.fill();

  // Subtle circular brushed metal finish rings
  ctx.strokeStyle = 'rgba(255, 235, 180, 0.15)';
  ctx.lineWidth = 1.5;
  for (let r = 80; r < 480; r += 12) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Raised outer rim
  ctx.strokeStyle = '#5E4416';
  ctx.lineWidth = 18;
  ctx.beginPath();
  ctx.arc(cx, cy, 485, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = '#F7E3B2';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(cx, cy, 476, 0, Math.PI * 2);
  ctx.stroke();

  // Numismatic beaded dentil border
  const beadCount = 84;
  const beadRadius = 458;
  ctx.fillStyle = '#4A340F';
  for (let i = 0; i < beadCount; i++) {
    const angle = (i / beadCount) * Math.PI * 2;
    const bx = cx + Math.cos(angle) * beadRadius;
    const by = cy + Math.sin(angle) * beadRadius;
    ctx.beginPath();
    ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Inner decorative ring
  ctx.strokeStyle = '#6E501D';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, 435, 0, Math.PI * 2);
  ctx.stroke();

  // Rotate context so text and monogram align vertically upright on 3D geometry
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(-Math.PI / 2);
  ctx.translate(-cx, -cy);

  // Helper function to draw curved text
  const drawCurvedText = (
    text: string,
    radius: number,
    startAngle: number,
    endAngle: number,
    font: string,
    color: string
  ) => {
    ctx.save();
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const chars = text.split('');
    const angleStep = (endAngle - startAngle) / (chars.length - 1 || 1);

    chars.forEach((char, i) => {
      const charAngle = startAngle + i * angleStep;
      ctx.save();
      ctx.translate(cx + Math.cos(charAngle) * radius, cy + Math.sin(charAngle) * radius);
      ctx.rotate(charAngle + Math.PI / 2);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });
    ctx.restore();
  };

  if (isObverse) {
    // Top Arch: BHUMI COIN • MMXXVI
    drawCurvedText(
      '★  BHUMI COIN  •  MMXXVI  ★',
      395,
      -Math.PI * 0.78,
      -Math.PI * 0.22,
      'bold 34px "Cormorant Garamond", Georgia, serif',
      '#3D290A'
    );

    // Bottom Arch: IN GENIO ET CONSTANTIA
    drawCurvedText(
      '•  IN GENIO ET CONSTANTIA  •',
      395,
      Math.PI * 0.76,
      Math.PI * 0.24,
      'italic bold 28px "Cormorant Garamond", Georgia, serif',
      '#473210'
    );

    // Center Laurel / Ornamental circle
    ctx.strokeStyle = '#5B4014';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, cy, 240, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 230, 160, 0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 232, 0, Math.PI * 2);
    ctx.stroke();

    // Central Monogram 'B'
    ctx.save();
    ctx.font = 'bold 310px "Cormorant Garamond", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Engraved drop shadow
    ctx.fillStyle = 'rgba(60, 40, 10, 0.7)';
    ctx.fillText('B', cx + 4, cy + 6);

    // Highlight
    ctx.fillStyle = '#FFE6A6';
    ctx.fillText('B', cx - 2, cy - 3);

    // Main serif body
    ctx.fillStyle = '#2C1B03';
    ctx.fillText('B', cx, cy);
    ctx.restore();

    // Subtitle below 'B'
    ctx.save();
    ctx.font = '600 20px "Manrope", sans-serif';
    ctx.fillStyle = '#3E2A0B';
    ctx.textAlign = 'center';
    ctx.fillText('SOVEREIGN TENDER', cx, cy + 175);
    ctx.restore();

  } else {
    // Reverse Side: 1 BHUMI
    drawCurvedText(
      '★  NON PECUNIA SED MEMORIA  ★',
      395,
      -Math.PI * 0.78,
      -Math.PI * 0.22,
      'bold 32px "Cormorant Garamond", Georgia, serif',
      '#3D290A'
    );

    drawCurvedText(
      '•  RESERVE OF EXCELLENT COMPANY  •',
      395,
      Math.PI * 0.78,
      Math.PI * 0.22,
      'italic bold 26px "Cormorant Garamond", Georgia, serif',
      '#473210'
    );

    // Center circular badge
    ctx.strokeStyle = '#5B4014';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, cy, 230, 0, Math.PI * 2);
    ctx.stroke();

    // Denomination
    ctx.save();
    ctx.font = 'bold 130px "Cormorant Garamond", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#2C1B03';
    ctx.fillText('1', cx, cy - 40);

    ctx.font = 'bold 54px "Cormorant Garamond", Georgia, serif';
    ctx.fillText('BHUMI', cx, cy + 60);

    // Fine divider line
    ctx.fillStyle = '#4E3710';
    ctx.fillRect(cx - 80, cy + 95, 160, 3);

    ctx.font = '600 18px "Manrope", sans-serif';
    ctx.fillStyle = '#3E2A0B';
    ctx.fillText('EST. MMXXVI', cx, cy + 125);
    ctx.restore();
  }

  // Restore the pre-rotation context
  ctx.restore();

  return canvas;
}

// Procedural reeded / milled coin edge
function createCoinEdgeCanvas(): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  // Background gold
  ctx.fillStyle = '#B89858';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Vertical fluting ridges
  const ridgeWidth = 8;
  for (let x = 0; x < canvas.width; x += ridgeWidth) {
    ctx.fillStyle = x % (ridgeWidth * 2) === 0 ? '#543C13' : '#F2DE9F';
    ctx.fillRect(x, 0, ridgeWidth, canvas.height);
  }

  return canvas;
}

interface CoinMeshProps {
  isFlipping: boolean;
  targetSide: 'heads' | 'tails';
  onFlipComplete?: () => void;
  prefersReducedMotion?: boolean;
}

const CoinMesh: React.FC<CoinMeshProps> = ({ 
  isFlipping, 
  targetSide, 
  onFlipComplete,
  prefersReducedMotion = false 
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const flipProgressRef = useRef(0);
  const isCurrentlyFlippingRef = useRef(false);
  const startRotationRef = useRef<number>(0);

  // Pointer drag interaction state
  const isDraggingRef = useRef(false);
  const previousPointerRef = useRef({ x: 0, y: 0 });

  // Generate procedural textures once
  const { obverseTexture, reverseTexture, edgeTexture } = useMemo(() => {
    const obverse = new THREE.CanvasTexture(createCoinFaceCanvas(true));
    obverse.colorSpace = THREE.SRGBColorSpace;
    obverse.anisotropy = 8;

    const reverse = new THREE.CanvasTexture(createCoinFaceCanvas(false));
    reverse.colorSpace = THREE.SRGBColorSpace;
    reverse.anisotropy = 8;

    const edge = new THREE.CanvasTexture(createCoinEdgeCanvas());
    edge.wrapS = THREE.RepeatWrapping;
    edge.repeat.set(12, 1);
    edge.colorSpace = THREE.SRGBColorSpace;

    return { obverseTexture: obverse, reverseTexture: reverse, edgeTexture: edge };
  }, []);

  // Materials configuration
  const materials = useMemo(() => {
    const goldColor = new THREE.Color('#F7D784');

    // Edge
    const edgeMat = new THREE.MeshStandardMaterial({
      color: goldColor,
      map: edgeTexture,
      metalness: 0.5,
      roughness: 0.3,
    });

    // Top face (Obverse - Heads)
    const obverseMat = new THREE.MeshStandardMaterial({
      color: goldColor,
      map: obverseTexture,
      metalness: 0.4,
      roughness: 0.22,
    });

    // Bottom face (Reverse - Tails)
    const reverseMat = new THREE.MeshStandardMaterial({
      color: goldColor,
      map: reverseTexture,
      metalness: 0.4,
      roughness: 0.22,
    });

    // Material array: 0 = edge, 1 = reverse cap, 2 = obverse (Heads, facing +Z camera)
    return [edgeMat, reverseMat, obverseMat];
  }, [obverseTexture, reverseTexture, edgeTexture]);

  // Handle flip trigger
  useEffect(() => {
    if (isFlipping && !isCurrentlyFlippingRef.current) {
      isCurrentlyFlippingRef.current = true;
      flipProgressRef.current = 0;
      if (groupRef.current) {
        startRotationRef.current = groupRef.current.rotation.y;
      }
    }
  }, [isFlipping]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (isCurrentlyFlippingRef.current) {
      if (prefersReducedMotion) {
        isCurrentlyFlippingRef.current = false;
        groupRef.current.rotation.y = targetSide === 'heads' ? 0 : Math.PI;
        groupRef.current.position.y = 0;
        onFlipComplete?.();
        return;
      }

      // Advance flip animation
      flipProgressRef.current += delta * 0.9; // ~1.8 seconds duration
      const t = Math.min(flipProgressRef.current, 1);

      // Smooth ease-out cubic
      const ease = 1 - Math.pow(1 - t, 3);

      // Total rotations during flip: 5 full turns + target orientation
      // Heads: 0 radians (Obverse visible at tilt)
      // Tails: Math.PI radians (Reverse visible)
      const targetYRotation = targetSide === 'heads' ? Math.PI * 10 : Math.PI * 11;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(startRotationRef.current, targetYRotation, ease);
      // Dynamic vertical wobble while airborne
      groupRef.current.position.y = Math.sin(t * Math.PI) * 1.2;

      if (t >= 1) {
        isCurrentlyFlippingRef.current = false;
        groupRef.current.position.y = 0;
        groupRef.current.rotation.y = targetSide === 'heads' ? 0 : Math.PI;
        onFlipComplete?.();
      }
    } else if (!isDraggingRef.current && !prefersReducedMotion) {
      // Gentle breathing idle rotation
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.rotation.x = THREE.MathUtils.degToRad(12) + Math.sin(time * 1.5) * 0.04;
      groupRef.current.position.y = Math.sin(time * 2) * 0.08;
    }
  });

  return (
    <group
      ref={groupRef}
      rotation={[THREE.MathUtils.degToRad(12), 0, 0]}
      onPointerDown={(e) => {
        if (isCurrentlyFlippingRef.current) return;
        isDraggingRef.current = true;
        previousPointerRef.current = { x: e.clientX, y: e.clientY };
      }}
      onPointerUp={() => {
        isDraggingRef.current = false;
      }}
      onPointerOut={() => {
        isDraggingRef.current = false;
      }}
      onPointerMove={(e) => {
        if (!isDraggingRef.current || !groupRef.current || isCurrentlyFlippingRef.current) return;
        const deltaX = e.clientX - previousPointerRef.current.x;
        const deltaY = e.clientY - previousPointerRef.current.y;
        previousPointerRef.current = { x: e.clientX, y: e.clientY };

        groupRef.current.rotation.y += deltaX * 0.012;
        groupRef.current.rotation.x += deltaY * 0.012;
      }}
    >
      {/* Mesh rotated so top circular cap faces +Z camera with upright monogram */}
      <mesh
        rotation={[Math.PI / 2, 0, Math.PI]}
        material={materials}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[2.4, 2.4, 0.28, 64]} />
      </mesh>
    </group>
  );
};

// Error Boundary for WebGL support failure
class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("WebGL or R3F encountered an issue, rendering static fallback:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const CoinCanvas: React.FC<CoinCanvasProps> = ({
  isFlipping,
  targetSide,
  onFlipComplete,
  className = "w-full h-[400px] md:h-[480px]"
}) => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mql.matches);
      const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <StaticCoinFallback isFlipping={isFlipping} flippedSide={targetSide} />
      </div>
    );
  }

  return (
    <WebGLErrorBoundary fallback={<StaticCoinFallback isFlipping={isFlipping} flippedSide={targetSide} />}>
      <div className={`relative ${className}`}>
        {/* Ambient atmospheric golden halo */}
        <div 
          className="absolute inset-0 m-auto w-72 h-72 rounded-full blur-3xl opacity-35 bg-gold pointer-events-none" 
          aria-hidden="true" 
        />

        <Canvas
          shadows
          camera={{ position: [0, 0, 7.5], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="cursor-grab active:cursor-grabbing"
          aria-label="Interactive 3D Bhumi Coin"
        >
          {/* Radiant Gold Lighting Rig */}
          <ambientLight intensity={2.2} color="#FFFDF5" />
          
          {/* Direct front key light illuminating the coin faces */}
          <directionalLight
            position={[0, 2, 8]}
            intensity={3.5}
            color="#FFF8E7"
          />

          {/* Top-right warm gold sparkle */}
          <directionalLight
            position={[5, 7, 5]}
            intensity={2.8}
            color="#FFE6A8"
            castShadow
          />

          {/* Fill light: soft warm bounce */}
          <directionalLight
            position={[-5, -3, 4]}
            intensity={2.0}
            color="#E8D5A3"
          />

          {/* Specular glint lights */}
          <pointLight position={[1, 3, 5]} intensity={2.5} color="#FFFFFF" />
          <pointLight position={[-2, -3, 4]} intensity={1.5} color="#F5D77F" />

          <Suspense fallback={null}>
            <CoinMesh
              isFlipping={isFlipping}
              targetSide={targetSide}
              onFlipComplete={onFlipComplete}
              prefersReducedMotion={prefersReducedMotion}
            />
          </Suspense>
        </Canvas>

        {/* Subtle touch / drag instruction pill */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 sm:px-3 py-1 rounded-full bg-forest-dark/90 border border-gold/30 text-[9px] sm:text-[11px] text-ivory-muted tracking-wider uppercase font-sans pointer-events-none flex items-center gap-1.5 backdrop-blur-sm max-w-[90%] whitespace-nowrap overflow-hidden">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
          <span className="truncate">Interactive 3D • Drag to Inspect</span>
        </div>
      </div>
    </WebGLErrorBoundary>
  );
};
