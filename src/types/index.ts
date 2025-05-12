export type Category = 'Coffee' | 'Tea' | 'Desserts' | 'Sandwiches' | 'All';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Exclude<Category, 'All'>;
}

export interface FilterOptions {
  category: Category;
  searchTerm: string;
  sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
}

export type ThemeMode = 'light' | 'dark'; 