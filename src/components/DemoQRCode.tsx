import React, { useState, useEffect, useCallback } from 'react';
import QRCode from 'qrcode';

const ERROR_CORRECTION_LEVELS: Array<'L' | 'M' | 'Q' | 'H'> = ['L', 'M', 'Q', 'H'];
const MASK_PATTERNS: Array<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7> = [0, 1, 2, 3, 4, 5, 6, 7];

export const DecorativeQRCode: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState<number>(30);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [patternIndex, setPatternIndex] = useState<number>(0);

  const generatePattern = useCallback(async (index: number) => {
    try {
      const ecc = ERROR_CORRECTION_LEVELS[index % ERROR_CORRECTION_LEVELS.length];
      const mask = MASK_PATTERNS[index % MASK_PATTERNS.length];
      const payload = `MARINA-ACCESS-TOKEN-${index}-${(index * 7919) % 100000}`;

      const url = await QRCode.toDataURL(payload, {
        errorCorrectionLevel: ecc,
        maskPattern: mask,
        margin: 2,
        width: 220,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      });
      setQrDataUrl(url);
    } catch (err) {
      console.error('Error generating QR visual:', err);
      try {
        const fallbackUrl = await QRCode.toDataURL(`TOKEN-${index}`, {
          margin: 2,
          width: 220,
        });
        setQrDataUrl(fallbackUrl);
      } catch (fallbackErr) {
        console.error('Fallback failed', fallbackErr);
      }
    }
  }, []);

  // Initial generation
  useEffect(() => {
    generatePattern(patternIndex);
  }, [generatePattern, patternIndex]);

  // Countdown behavior:
  // - start countdown at 30
  // - count down once per second
  // - when it reaches 0: generate a new random decorative QR pattern, reset to 30
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setPatternIndex((p) => p + 1);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleManualRefresh = () => {
    setSecondsLeft(30);
    setPatternIndex((p) => p + 1);
  };

  return (
    <div id="gate-scanner-section" className="flex flex-col items-center select-none">
      <h2
        id="gate-scanner-title"
        className="text-[19px] font-extrabold text-black text-center mb-4 tracking-tight"
      >
        Show this to the gate scanner
      </h2>

      {/* Large square black and white QR-style visual with thin black border */}
      <div
        id="demo-qr-wrapper"
        onClick={handleManualRefresh}
        title="Refresh code"
        className="relative p-[9px] bg-white border border-black rounded-none cursor-pointer flex items-center justify-center"
      >
        {qrDataUrl ? (
          <img
            id="demo-qr-image"
            src={qrDataUrl}
            alt="Gate Scanner Code"
            className="w-[194px] h-[194px] object-contain block"
          />
        ) : (
          <div className="w-[194px] h-[194px] bg-white flex items-center justify-center">
            <span className="text-xs text-gray-400">Loading code...</span>
          </div>
        )}
      </div>

      {/* Countdown text: Refreshes Automatically after XX Sec */}
      <p
        id="qr-countdown-text"
        className="mt-2.5 text-[14px] text-[#3f3f46] font-medium text-center"
      >
        Refreshes Automatically after {secondsLeft} Sec
      </p>
    </div>
  );
};

// Also export as DemoQRCode for compatibility
export const DemoQRCode = DecorativeQRCode;
