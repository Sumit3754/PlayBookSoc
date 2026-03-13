import { DollarSign, FileText, BookOpen, Clock as Unlock, Shield, Users, Link, Activity, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Zap, TrendingUp, GraduationCap, Video as LucideIcon } from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  FileText,
  BookOpen,
  Unlock,
  Shield,
  Users,
  Link,
  Activity,
  AlertTriangle,
  CheckCircle,
  Zap,
  TrendingUp,
  GraduationCap,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Shield;
}
