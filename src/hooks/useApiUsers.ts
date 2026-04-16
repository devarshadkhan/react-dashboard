import { useState, useEffect, useMemo } from 'react';
import axiosInstance from '@/lib/axios';
import { ApiUser, SortOrder } from '@/types/user';

const ITEMS_PER_PAGE = 5;

export function useApiUsers() {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter / sort state
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);
  const [cityFilter, setCityFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsers = () => {
    setLoading(true);
    setError(null);
    axiosInstance
      .get<ApiUser[]>('/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Unique cities derived from data
  const cities = useMemo(
    () => Array.from(new Set(users.map((u) => u.address.city))).sort(),
    [users]
  );

  // Apply search + city filter + sort
  const filteredUsers = useMemo(() => {
    let result = users.filter((user) => {
      const q = search.toLowerCase();
      const matchSearch =
        user.name.toLowerCase().includes(q) ||
        user.email.toLowerCase().includes(q);
      const matchCity =
        cityFilter === 'all' || user.address.city === cityFilter;
      return matchSearch && matchCity;
    });

    if (sortOrder === 'asc') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'desc') {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [users, search, cityFilter, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredUsers.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredUsers, currentPage]);

  // Reset to page 1 whenever filters change
  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCityFilter = (value: string) => {
    setCityFilter(value);
    setCurrentPage(1);
  };

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearch('');
    setCityFilter('all');
    setSortOrder(null);
    setCurrentPage(1);
  };

  return {
    // Data
    users,
    paginatedUsers,
    filteredUsers,
    cities,
    // UI states
    loading,
    error,
    // Filter values
    search,
    sortOrder,
    cityFilter,
    // Pagination
    currentPage,
    totalPages,
    itemsPerPage: ITEMS_PER_PAGE,
    // Actions
    fetchUsers,
    handleSearch,
    handleCityFilter,
    toggleSort,
    setCurrentPage,
    clearFilters,
  };
}
