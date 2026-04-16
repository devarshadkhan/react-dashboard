import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown, ArrowUpDown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ApiUser, SortOrder } from '@/types/user';

interface UserTableProps {
  users: ApiUser[];
  sortOrder: SortOrder;
  onSort: () => void;
  onClearFilters: () => void;
}

function SortIcon({ order }: { order: SortOrder }) {
  if (order === 'asc') return <ArrowUp className="w-3.5 h-3.5 ml-1 inline" />;
  if (order === 'desc') return <ArrowDown className="w-3.5 h-3.5 ml-1 inline" />;
  return <ArrowUpDown className="w-3.5 h-3.5 ml-1 inline opacity-50" />;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const avatarColors = [
  'bg-blue-500/20 text-blue-600',
  'bg-green-500/20 text-green-600',
  'bg-purple-500/20 text-purple-600',
  'bg-orange-500/20 text-orange-600',
  'bg-rose-500/20 text-rose-600',
  'bg-cyan-500/20 text-cyan-600',
  'bg-yellow-500/20 text-yellow-600',
  'bg-indigo-500/20 text-indigo-600',
];

export function UserTable({ users, sortOrder, onSort, onClearFilters }: UserTableProps) {
  if (users.length === 0) {
    return (
      <div className="py-20 flex flex-col items-center justify-center gap-3 text-center">
        <div className="p-4 rounded-full bg-muted">
          <Users className="w-8 h-8 text-muted-foreground" />
        </div>
        <p className="font-medium text-lg">No users found</p>
        <p className="text-sm text-muted-foreground max-w-xs">
          No users match your current search or filters. Try adjusting them.
        </p>
        <Button variant="outline" size="sm" onClick={onClearFilters}>
          Clear all filters
        </Button>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent border-border/60">
          <TableHead className="w-12 text-center">#</TableHead>
          <TableHead>
            <button
              onClick={onSort}
              className="flex items-center gap-0.5 hover:text-foreground transition-colors font-medium"
            >
              Name <SortIcon order={sortOrder} />
            </button>
          </TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>City</TableHead>
          <TableHead className="hidden md:table-cell">Phone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <motion.tr
            key={user.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.04 }}
            className="table-row-hover border-b border-border/40 last:border-0 group"
          >
            {/* ID */}
            <TableCell className="text-center">
              <span className="text-xs font-mono text-muted-foreground">{user.id}</span>
            </TableCell>

            {/* Name + Username */}
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarFallback
                    className={`text-xs font-bold ${
                      avatarColors[(user.id - 1) % avatarColors.length]
                    }`}
                  >
                    {getInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="font-semibold text-sm leading-tight">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">@{user.username}</p>
                </div>
              </div>
            </TableCell>

            {/* Email */}
            <TableCell>
              <a
                href={`mailto:${user.email}`}
                className="text-sm text-primary hover:underline underline-offset-2"
              >
                {user.email}
              </a>
            </TableCell>

            {/* Company */}
            <TableCell>
              <div className="min-w-0">
                <p className="text-sm font-medium leading-tight truncate max-w-[180px]">
                  {user.company.name}
                </p>
                <p className="text-xs text-muted-foreground truncate max-w-[180px]">
                  {user.company.catchPhrase}
                </p>
              </div>
            </TableCell>

            {/* City */}
            <TableCell>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary whitespace-nowrap">
                {user.address.city}
              </span>
            </TableCell>

            {/* Phone */}
            <TableCell className="hidden md:table-cell">
              <span className="text-sm text-muted-foreground">{user.phone}</span>
            </TableCell>
          </motion.tr>
        ))}
      </TableBody>
    </Table>
  );
}
