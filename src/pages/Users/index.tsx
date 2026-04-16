import { motion } from 'framer-motion';
import { Users, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApiUsers } from '@/hooks/useApiUsers';
import { UserFilters } from './components/UserFilters';
import { UserTable } from './components/UserTable';
import { UserPagination } from './components/UserPagination';

export default function UsersPage() {
  const {
    paginatedUsers,
    filteredUsers,
    cities,
    loading,
    error,
    search,
    sortOrder,
    cityFilter,
    currentPage,
    totalPages,
    itemsPerPage,
    fetchUsers,
    handleSearch,
    handleCityFilter,
    toggleSort,
    setCurrentPage,
    clearFilters,
  } = useApiUsers();

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-muted-foreground">
            Live data from JSONPlaceholder API via Axios
          </p>
        </div>

        {!loading && !error && (
          <div className="flex items-center gap-3">
            {/* Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                {filteredUsers.length}
                <span className="text-muted-foreground font-normal"> users</span>
              </span>
            </div>
            {/* Refresh */}
            <Button
              variant="outline"
              size="icon"
              onClick={fetchUsers}
              title="Refresh data"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* ── Loading State ── */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass rounded-xl py-24 flex flex-col items-center justify-center gap-4"
        >
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
          <p className="text-muted-foreground font-medium">
            Fetching users from API…
          </p>
        </motion.div>
      )}

      {/* ── Error State ── */}
      {error && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-xl py-20 flex flex-col items-center justify-center gap-4 border border-destructive/30"
        >
          <div className="p-4 rounded-full bg-destructive/10">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
          <div className="text-center space-y-1">
            <p className="font-semibold text-lg">Failed to load users</p>
            <p className="text-sm text-muted-foreground max-w-sm">{error}</p>
          </div>
          <Button onClick={fetchUsers} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </motion.div>
      )}

      {/* ── Main Content ── */}
      {!loading && !error && (
        <>
          {/* Filters Row */}
          <UserFilters
            search={search}
            sortOrder={sortOrder}
            cityFilter={cityFilter}
            cities={cities}
            onSearch={handleSearch}
            onSort={toggleSort}
            onCityFilter={handleCityFilter}
            onClear={clearFilters}
          />

          {/* Table Card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl overflow-hidden"
          >
            <UserTable
              users={paginatedUsers}
              sortOrder={sortOrder}
              onSort={toggleSort}
              onClearFilters={clearFilters}
            />

            {/* Pagination */}
            <UserPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredUsers.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </motion.div>
        </>
      )}
    </div>
  );
}
