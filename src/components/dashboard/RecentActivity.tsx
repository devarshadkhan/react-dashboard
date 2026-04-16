import { motion } from 'framer-motion';
import { recentActivities } from '@/lib/mockData';
import { ShoppingCart, User, Package, Star } from 'lucide-react';

const iconMap = {
  order: ShoppingCart,
  user: User,
  product: Package,
  review: Star,
};

const colorMap = {
  order: 'bg-primary/10 text-primary',
  user: 'bg-success/10 text-success',
  product: 'bg-warning/10 text-warning',
  review: 'bg-chart-4/10 text-chart-4',
};

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="stat-card"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest actions in the system</p>
      </div>
      <div className="space-y-4">
        {recentActivities.map((activity) => {
          const Icon = iconMap[activity.type as keyof typeof iconMap] || ShoppingCart;
          const colorClass = colorMap[activity.type as keyof typeof colorMap] || 'bg-muted text-muted-foreground';

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: activity.id * 0.05 }}
              className="flex items-start gap-3"
            >
              <div className={`p-2 rounded-lg ${colorClass}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-xs text-muted-foreground">
                  by {activity.user} • {activity.time}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
