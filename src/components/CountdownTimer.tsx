import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  compact?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate, compact = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 text-[#C94F4F] font-semibold">
        <span className="text-2xl">{timeLeft.days}</span>
        <span className="text-sm">days left!</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 sm:gap-6">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-lg min-w-[70px] sm:min-w-[90px]">
      <span className="text-3xl sm:text-5xl font-bold text-[#D9B47C]">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs sm:text-sm text-white/80 mt-1 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
