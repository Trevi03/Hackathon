import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Home', href: paths.dashboard.overview, icon: 'house' },
  { key: 'booking', title: 'Create Sessions', href: paths.dashboard.booking, icon: 'plugs-connected' },
  { key: 'customers', title: 'Community', href: paths.dashboard.customers, icon: 'users' },
  { key: 'explore', title: 'Explore', href: paths.dashboard.explore, icon: 'x-square' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
