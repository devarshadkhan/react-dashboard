import { Search, Filter, ArrowUp, ArrowDown, ArrowUpDown, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SortOrder } from '@/types/user';

interface UserFiltersProps {
  search: string;
  sortOrder: SortOrder;
  cityFilter: string;
  cities: string[];
  onSearch: (value: string) => void;
  onSort: () => void;
  onCityFilter: (value: string) => void;
  onClear: () => void;
}

export function UserFilters({
  search,
  sortOrder,
  cityFilter,
  cities,
  onSearch,
  onSort,
  onCityFilter,
  onClear,
}: UserFiltersProps) {
  const hasActiveFilters =
    search !== '' || cityFilter !== 'all' || sortOrder !== null;

  const SortIcon = () => {
    if (sortOrder === 'asc') return <ArrowUp className="w-4 h-4 ml-1.5" />;
    if (sortOrder === 'desc') return <ArrowDown className="w-4 h-4 ml-1.5" />;
    return <ArrowUpDown className="w-4 h-4 ml-1.5 opacity-60" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-4"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="pl-10 input-base"
          />
          {search && (
            <button
              onClick={() => onSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
          {/* City Filter */}
          <Select value={cityFilter} onValueChange={onCityFilter}>
            <SelectTrigger className="w-44">
              <Filter className="w-4 h-4 mr-2 shrink-0 text-muted-foreground" />
              <SelectValue placeholder="Filter by city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort Button */}
          <Button
            variant="outline"
            onClick={onSort}
            className={
              sortOrder !== null
                ? 'border-primary text-primary bg-primary/5 hover:bg-primary/10'
                : ''
            }
          >
            Sort: Name
            <SortIcon />
          </Button>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button variant="ghost" size="icon" onClick={onClear} title="Clear all filters">
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
