import { motion } from 'framer-motion';
import { recentSalesData } from '@/lib/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const statusStyles: Record<string, string> = {
  delivered: 'bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]',
  shipped: 'bg-primary/10 text-primary',
  processing: 'bg-warning/10 text-warning',
  pending: 'bg-muted text-muted-foreground',
  cancelled: 'bg-destructive/10 text-destructive',
};

export function RecentSales() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="stat-card"
    >
      <div className="mb-5">
        <h3 className="text-lg font-semibold">Recent Sales</h3>
        <p className="text-sm text-muted-foreground">Latest transactions</p>
      </div>
      <div className="space-y-3">
        {recentSalesData.map((sale, index) => (
          <motion.div
            key={sale.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.05 }}
            className="flex items-center gap-3 py-1"
          >
            <Avatar className="h-9 w-9 shrink-0">
              <AvatarImage src={sale.avatar} alt={sale.customer} />
              <AvatarFallback className="text-xs bg-primary/10 text-primary font-semibold">
                {sale.customer.split(' ').map((n) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{sale.customer}</p>
              <p className="text-xs text-muted-foreground truncate">{sale.product}</p>
            </div>
            <div className="text-right shrink-0 space-y-0.5">
              <p className="text-sm font-semibold">${sale.amount.toLocaleString()}</p>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium capitalize ${
                  statusStyles[sale.status] ?? statusStyles.pending
                }`}
              >
                {sale.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
