import { LucideIcon, Package, Users, ShoppingCart, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  type?: 'users' | 'products' | 'orders' | 'default';
}

const iconMap = {
  users: Users,
  products: Package,
  orders: ShoppingCart,
  default: FileText,
};

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  type = 'default',
}: EmptyStateProps) {
  const Icon = icon || iconMap[type];

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-4 mb-4">
        <Icon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-muted-foreground max-w-sm mb-4">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  );
}
