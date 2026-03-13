import { DollarSign, FileText, BookOpen, Clock as Unlock, Shield, Users, Link, Activity, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Zap, TrendingUp, GraduationCap, Video } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export const iconMap: Record<string, any> = {
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

export function getIcon(iconName: string): any {
  return iconMap[iconName] || Shield;
}
