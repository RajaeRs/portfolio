'use client'

import Image from 'next/image';
import { useState, useRef, useEffect, CSSProperties, MouseEvent } from 'react';

interface ImageSectionProps {
    imageUrl: string;
}

const ImageSection = ({ imageUrl }: ImageSectionProps) => {
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [circlePositions, setCirclePositions] = useState([
        { x: -0.2, y: -0.2, size: 1.5, scale: 1 },
        { x: -0.1, y: 0.7, size: 150, scale: 1 },
        { x: 0.8, y: 0, size: 150, scale: 1 },
        { x: 0.1, y: 0.85, size: 80, scale: 1 },
        { x: 0.9, y: 0.2, size: 70, scale: 1 }
    ]);
    const imageRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateImageSize = () => {
            if (imageRef.current) {
                setImageSize({
                    width: imageRef.current.offsetWidth,
                    height: imageRef.current.offsetHeight
                });
            }
        };

        // Initial size
        updateImageSize();

        // Update size on window resize
        window.addEventListener('resize', updateImageSize);

        // Cleanup listener
        return () => window.removeEventListener('resize', updateImageSize);
    }, []);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            

            // Update circle positions with smooth movement and boundary constraints
            setCirclePositions(prev => prev.map((circle, index) => {
                // Different parallax effect for each circle
                const parallaxFactor = 1 - (index * 0.1);
                
                // Calculate new positions with boundary constraints
                const newX = circle.x + (x / imageSize.width - circle.x) * (-0.01) * parallaxFactor;
                const newY = circle.y + (y / imageSize.height - circle.y) * (-0.09) * parallaxFactor;
                
                // Constrain X and Y between 0 and 1
                const constrainedX = Math.max(0, Math.min(1, newX));
                const constrainedY = Math.max(0, Math.min(1, newY));

                return {
                    ...circle,
                    x: constrainedX,
                    y: constrainedY,
                    scale: 1 + Math.sin(Date.now() * 0.001 + index) * (-0.05) // Subtle breathing effect
                };
            }));
        }
    };

    // Circle positioning calculations
    const getCircleStyle = (
        relativeX: number, 
        relativeY: number, 
        size: number, 
        scale: number
    ): CSSProperties => ({
        position: 'absolute' as const,
        width: `${size}px`,
        height: `${size}px`,
        left: `${relativeX * imageSize.width}px`,
        top: `${relativeY * imageSize.height}px`,
        transform: `scale(${scale})`,
        transition: 'transform 0.3s ease, left 0.3s ease, top 0.3s ease',
    });

    return (
        <div 
            ref={containerRef}
            className="relative w-full max-w-[500px] mx-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                // Reset to original positions when mouse leaves
                setCirclePositions([
                    { x: -0.2, y: -0.2, size: 1.5 * imageSize.width, scale: 1 },
                    { x: -0.1, y: 0.7, size: 150, scale: 1 },
                    { x: 0.8, y: 0, size: 150, scale: 1 },
                    { x: 0.1, y: 0.85, size: 80, scale: 1 },
                    { x: 0.9, y: 0.2, size: 70, scale: 1 }
                ]);
            }}
        >
            <div className="relative" ref={imageRef}>
                <Image 
                    src={imageUrl} 
                    alt="Rajae RASEZINE" 
                    width={500} 
                    height={500} 
                    className="w-full h-auto rounded-full"
                />
                <div className="absolute inset-0  mix-blend-multiply  rounded-full"></div>
                {/* Dynamically positioned circles */}
                <div 
                    className="absolute inset-0 pointer-events-none -z-10"
                    style={{ 
                        transform: `scale(${imageSize.width / 500})`,
                        transformOrigin: 'top left'
                    }}
                >
                    {/* Large Background Circle */}
                    <div 
                        className="absolute border border-accent/20 rounded-full -z-10"
                        style={getCircleStyle(
                            circlePositions[0].x, 
                            circlePositions[0].y, 
                            imageSize.width * 1.5,
                            circlePositions[0].scale
                        )}
                    />

                    {/* Smaller Accent Circles */}
                    <div 
                        className="absolute bg-accent/50 rounded-full -z-10"
                        style={getCircleStyle(
                            circlePositions[1].x, 
                            circlePositions[1].y, 
                            150,
                            circlePositions[1].scale
                        )}
                    />

                    <div 
                        className="absolute border border-accent/20 rounded-full -z-10"
                        style={getCircleStyle(
                            circlePositions[2].x, 
                            circlePositions[2].y, 
                            150,
                            circlePositions[2].scale
                        )}
                    />

                    <div 
                        className="absolute border border-accent/20 rounded-full -z-10"
                        style={getCircleStyle(
                            circlePositions[3].x, 
                            circlePositions[3].y, 
                            80,
                            circlePositions[3].scale
                        )}
                    />

                    <div 
                        className="absolute bg-accent/50 rounded-full -z-10"
                        style={getCircleStyle(
                            circlePositions[4].x, 
                            circlePositions[4].y, 
                            70,
                            circlePositions[4].scale
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageSection;