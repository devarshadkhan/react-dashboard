// Mock data for the admin dashboard

export interface DashboardStats {
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  totalProducts: number;
  userGrowth: number;
  orderGrowth: number;
  revenueGrowth: number;
  productGrowth: number;
}

export interface ChartData {
  name: string;
  value: number;
  revenue?: number;
  orders?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
  status: 'active' | 'inactive';
  avatar: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive';
  image: string;
  createdAt: string;
}

export interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
}

// Dashboard Statistics
export const dashboardStats: DashboardStats = {
  totalUsers: 12453,
  totalOrders: 8234,
  totalRevenue: 523420,
  totalProducts: 342,
  userGrowth: 12.5,
  orderGrowth: 8.2,
  revenueGrowth: 15.3,
  productGrowth: 5.1,
};

// Chart Data
export const revenueChartData: ChartData[] = [
  { name: 'Jan', value: 32000, revenue: 32000, orders: 120 },
  { name: 'Feb', value: 28000, revenue: 28000, orders: 98 },
  { name: 'Mar', value: 45000, revenue: 45000, orders: 156 },
  { name: 'Apr', value: 38000, revenue: 38000, orders: 142 },
  { name: 'May', value: 52000, revenue: 52000, orders: 189 },
  { name: 'Jun', value: 48000, revenue: 48000, orders: 178 },
  { name: 'Jul', value: 61000, revenue: 61000, orders: 223 },
  { name: 'Aug', value: 55000, revenue: 55000, orders: 198 },
  { name: 'Sep', value: 67000, revenue: 67000, orders: 245 },
  { name: 'Oct', value: 72000, revenue: 72000, orders: 267 },
  { name: 'Nov', value: 68000, revenue: 68000, orders: 254 },
  { name: 'Dec', value: 85000, revenue: 85000, orders: 312 },
];

export const categoryChartData: ChartData[] = [
  { name: 'Electronics', value: 35 },
  { name: 'Clothing', value: 25 },
  { name: 'Home & Garden', value: 20 },
  { name: 'Sports', value: 12 },
  { name: 'Other', value: 8 },
];

export const trafficSourceData: ChartData[] = [
  { name: 'Direct', value: 42 },
  { name: 'Organic', value: 28 },
  { name: 'Referral', value: 18 },
  { name: 'Social', value: 12 },
];

// Users Data
export const users: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', createdAt: '2024-01-15' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'manager', status: 'active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane', createdAt: '2024-02-20' },
  { id: '3', name: 'Bob Wilson', email: 'bob@example.com', role: 'user', status: 'inactive', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob', createdAt: '2024-03-10' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'user', status: 'active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice', createdAt: '2024-03-15' },
  { id: '5', name: 'Charlie Davis', email: 'charlie@example.com', role: 'manager', status: 'active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie', createdAt: '2024-04-01' },
  { id: '6', name: 'Diana Evans', email: 'diana@example.com', role: 'user', status: 'active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diana', createdAt: '2024-04-15' },
  { id: '7', name: 'Edward Fox', email: 'edward@example.com', role: 'user', status: 'inactive', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Edward', createdAt: '2024-05-01' },
  { id: '8', name: 'Fiona Green', email: 'fiona@example.com', role: 'user', status: 'active', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fiona', createdAt: '2024-05-20' },
];

// Products Data
export const products: Product[] = [
  { id: '1', name: 'MacBook Pro 16"', category: 'Electronics', price: 2499, stock: 45, status: 'active', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop', createdAt: '2024-01-10' },
  { id: '2', name: 'iPhone 15 Pro', category: 'Electronics', price: 1199, stock: 120, status: 'active', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop', createdAt: '2024-01-15' },
  { id: '3', name: 'Nike Air Max', category: 'Clothing', price: 180, stock: 89, status: 'active', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop', createdAt: '2024-02-01' },
  { id: '4', name: 'Sony WH-1000XM5', category: 'Electronics', price: 350, stock: 67, status: 'active', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop', createdAt: '2024-02-15' },
  { id: '5', name: 'Smart Watch Pro', category: 'Electronics', price: 299, stock: 0, status: 'inactive', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop', createdAt: '2024-03-01' },
  { id: '6', name: 'Premium Backpack', category: 'Accessories', price: 89, stock: 156, status: 'active', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop', createdAt: '2024-03-15' },
];

// Orders Data
export const orders: Order[] = [
  { id: 'ORD-001', customer: 'John Doe', email: 'john@example.com', product: 'MacBook Pro 16"', amount: 2499, status: 'delivered', date: '2024-12-01' },
  { id: 'ORD-002', customer: 'Jane Smith', email: 'jane@example.com', product: 'iPhone 15 Pro', amount: 1199, status: 'shipped', date: '2024-12-05' },
  { id: 'ORD-003', customer: 'Bob Wilson', email: 'bob@example.com', product: 'Nike Air Max', amount: 180, status: 'processing', date: '2024-12-10' },
  { id: 'ORD-004', customer: 'Alice Brown', email: 'alice@example.com', product: 'Sony WH-1000XM5', amount: 350, status: 'pending', date: '2024-12-12' },
  { id: 'ORD-005', customer: 'Charlie Davis', email: 'charlie@example.com', product: 'Smart Watch Pro', amount: 299, status: 'cancelled', date: '2024-12-14' },
  { id: 'ORD-006', customer: 'Diana Evans', email: 'diana@example.com', product: 'Premium Backpack', amount: 89, status: 'delivered', date: '2024-12-15' },
  { id: 'ORD-007', customer: 'Edward Fox', email: 'edward@example.com', product: 'MacBook Pro 16"', amount: 2499, status: 'processing', date: '2024-12-18' },
  { id: 'ORD-008', customer: 'Fiona Green', email: 'fiona@example.com', product: 'iPhone 15 Pro', amount: 1199, status: 'shipped', date: '2024-12-20' },
];

// Recent activities for dashboard
export const recentActivities = [
  { id: 1, action: 'New order placed', user: 'John Doe', time: '5 minutes ago', type: 'order' },
  { id: 2, action: 'User registered', user: 'Alice Brown', time: '15 minutes ago', type: 'user' },
  { id: 3, action: 'Product updated', user: 'Admin', time: '1 hour ago', type: 'product' },
  { id: 4, action: 'Order shipped', user: 'System', time: '2 hours ago', type: 'order' },
  { id: 5, action: 'New review added', user: 'Bob Wilson', time: '3 hours ago', type: 'review' },
];

// Top products for sales dashboard
export interface TopProduct {
  id: string;
  name: string;
  category: string;
  revenue: number;
  growth: number;
  image: string;
}

export const topProducts: TopProduct[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    category: 'Electronics',
    revenue: 112455,
    growth: 18.2,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=80&h=80&fit=crop',
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    category: 'Electronics',
    revenue: 95880,
    growth: 12.4,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=80&h=80&fit=crop',
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    category: 'Electronics',
    revenue: 42350,
    growth: 7.1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop',
  },
  {
    id: '4',
    name: 'Nike Air Max',
    category: 'Footwear',
    revenue: 28440,
    growth: -3.5,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&h=80&fit=crop',
  },
  {
    id: '5',
    name: 'Premium Backpack',
    category: 'Accessories',
    revenue: 18920,
    growth: 5.8,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=80&h=80&fit=crop',
  },
];

// Recent sales / transactions
export interface RecentSale {
  id: string;
  customer: string;
  avatar: string;
  product: string;
  amount: number;
  status: 'delivered' | 'shipped' | 'processing' | 'pending' | 'cancelled';
}

export const recentSalesData: RecentSale[] = [
  {
    id: 'TXN-001',
    customer: 'John Doe',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    product: 'MacBook Pro 16"',
    amount: 2499,
    status: 'delivered',
  },
  {
    id: 'TXN-002',
    customer: 'Jane Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    product: 'iPhone 15 Pro',
    amount: 1199,
    status: 'shipped',
  },
  {
    id: 'TXN-003',
    customer: 'Bob Wilson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    product: 'Nike Air Max',
    amount: 180,
    status: 'processing',
  },
  {
    id: 'TXN-004',
    customer: 'Alice Brown',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    product: 'Sony WH-1000XM5',
    amount: 350,
    status: 'pending',
  },
  {
    id: 'TXN-005',
    customer: 'Charlie Davis',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    product: 'Premium Backpack',
    amount: 89,
    status: 'delivered',
  },
];
