import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { SalesAreaChart } from '@/components/dashboard/SalesAreaChart';
import { CategoryPieChart } from '@/components/dashboard/CategoryPieChart';
import { TopProducts } from '@/components/dashboard/TopProducts';
import { RecentSales } from '@/components/dashboard/RecentSales';
import { dashboardStats } from '@/lib/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <h1 className="text-3xl font-bold">Sales Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your sales overview.
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Revenue"
          value={`$${dashboardStats.totalRevenue.toLocaleString()}`}
          change={dashboardStats.revenueGrowth}
          icon={DollarSign}
          iconColor="text-primary"
          delay={0}
        />
        <StatCard
          title="Total Orders"
          value={dashboardStats.totalOrders.toLocaleString()}
          change={dashboardStats.orderGrowth}
          icon={ShoppingCart}
          iconColor="text-[hsl(var(--success))]"
          delay={0.1}
        />
        <StatCard
          title="Total Customers"
          value={dashboardStats.totalUsers.toLocaleString()}
          change={dashboardStats.userGrowth}
          icon={Users}
          iconColor="text-[hsl(var(--warning))]"
          delay={0.2}
        />
        <StatCard
          title="Avg. Order Value"
          value={`$${(dashboardStats.totalRevenue / dashboardStats.totalOrders).toFixed(0)}`}
          change={4.7}
          icon={TrendingUp}
          iconColor="text-[hsl(var(--chart-4))]"
          delay={0.3}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesAreaChart />
        </div>
        <CategoryPieChart />
      </div>

      {/* Bottom Row: Recent Sales + Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentSales />
        <TopProducts />
      </div>
    </div>
  );
}
