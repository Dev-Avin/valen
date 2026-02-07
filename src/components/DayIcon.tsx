import { Heart, Gift, Candy, BeanOff, Ribbon, Users, Sparkles, PartyPopper } from 'lucide-react';

interface DayIconProps {
  icon: string;
  className?: string;
}

export function DayIcon({ icon, className = '' }: DayIconProps) {
  const iconMap: Record<string, React.ReactNode> = {
    rose: <Heart className={className} />,
    ring: <Sparkles className={className} />,
    chocolate: <Candy className={className} />,
    teddy: <BeanOff className={className} />,
    promise: <Ribbon className={className} />,
    hug: <Users className={className} />,
    kiss: <Heart className={className} fill="currentColor" />,
    valentine: <PartyPopper className={className} />,
  };

  return <>{iconMap[icon] || <Heart className={className} />}</>;
}
