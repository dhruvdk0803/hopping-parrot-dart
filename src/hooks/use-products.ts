import { useState, useEffect } from 'react';
import { defaultProducts, Product } from '@/lib/default-products';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('sk_products');
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      localStorage.setItem('sk_products', JSON.stringify(defaultProducts));
      setProducts(defaultProducts);
    }
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('sk_products', JSON.stringify(newProducts));
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now().toString() };
    saveProducts([newProduct, ...products]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    saveProducts(products.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProduct = (id: string) => {
    saveProducts(products.filter(p => p.id !== id));
  };

  return { products, mounted, addProduct, updateProduct, deleteProduct };
}