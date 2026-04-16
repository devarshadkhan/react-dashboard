import { motion } from 'framer-motion';
import { topProducts } from '@/lib/mockData';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function TopProducts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
      className="stat-card"
    >
      <div className="mb-5">
        <h3 className="text-lg font-semibold">Top Selling Products</h3>
        <p className="text-sm text-muted-foreground">Best performers this month</p>
      </div>
      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 + index * 0.06 }}
            className="flex items-center gap-3"
          >
            {/* Rank */}
            <span className="text-xs font-bold text-muted-foreground w-5 text-center">
              #{index + 1}
            </span>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-10 h-10 rounded-lg object-cover shrink-0 bg-muted"
            />

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{product.name}</p>
              <p className="text-xs text-muted-foreground">{product.category}</p>
            </div>

            {/* Stats */}
            <div className="text-right shrink-0">
              <p className="text-sm font-semibold">${product.revenue.toLocaleString()}</p>
              <p
                className={`text-xs flex items-center justify-end gap-0.5 ${
                  product.growth >= 0 ? 'text-[hsl(var(--success))]' : 'text-destructive'
                }`}
              >
                {product.growth >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {product.growth >= 0 ? '+' : ''}{product.growth}%
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
