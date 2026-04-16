import { cn } from '@/lib/utils';

type Status = 'active' | 'inactive' | 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<Status, { label: string; className: string }> = {
  active: {
    label: 'Active',
    className: 'bg-success/10 text-success',
  },
  inactive: {
    label: 'Inactive',
    className: 'bg-muted text-muted-foreground',
  },
  pending: {
    label: 'Pending',
    className: 'bg-warning/10 text-warning',
  },
  processing: {
    label: 'Processing',
    className: 'bg-primary/10 text-primary',
  },
  shipped: {
    label: 'Shipped',
    className: 'bg-chart-4/10 text-chart-4',
  },
  delivered: {
    label: 'Delivered',
    className: 'bg-success/10 text-success',
  },
  cancelled: {
    label: 'Cancelled',
    className: 'bg-destructive/10 text-destructive',
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span className={cn('badge-status', config.className, className)}>
      {config.label}
    </span>
  );
}
