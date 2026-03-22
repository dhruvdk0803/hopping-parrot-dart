export type Product = {
  id: string;
  name: string;
  price: number;
  interval?: string;
  image_url?: string;
  category: string;
  type: 'Product' | 'Subscription';
  status: 'draft' | 'published';
  description?: string;
};

export const defaultProducts: Product[] = [
  // Memberships
  { id: 'm1', name: "Custom Sponsor Membership", price: 416.67, interval: "per month", category: "Membership Packages", type: "Subscription", status: "published" },
  { id: 'm2', name: "Sponsor with Team 6 Package", price: 700, interval: "per month", category: "Membership Packages", type: "Subscription", status: "published" },
  { id: 'm3', name: "Sponsor with Team 3 Package", price: 400, interval: "per month", category: "Membership Packages", type: "Subscription", status: "published" },
  { id: 'm4', name: "Team 6 Package", price: 400, interval: "per month", category: "Membership Packages", type: "Subscription", status: "published" },
  { id: 'm5', name: "Team 3 Package", price: 250, interval: "per month", category: "Membership Packages", type: "Subscription", status: "published" },
  { id: 'm6', name: "Sponsorship 6 Package", price: 225, interval: "per month", category: "Membership Packages", type: "Subscription", status: "published" },
  { id: 'm7', name: "Sponsorship 3 Package", price: 125, interval: "per month", category: "Membership Packages", type: "Subscription", status: "published" },

  // SK Swag
  { id: 'sk1', name: "Team 365 Men's Zone Performance Quarter-Zip", price: 42, image_url: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=2000&auto=format&fit=crop", category: "Serving Kingdom Swag", type: "Product", status: "published" },
  { id: 'sk2', name: "Russell Athletic Crewneck Sweatshirt", price: 50, image_url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2000&auto=format&fit=crop", category: "Serving Kingdom Swag", type: "Product", status: "published" },
  { id: 'sk3', name: "Tultex Long Sleeve T-Shirt", price: 35, image_url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop", category: "Serving Kingdom Swag", type: "Product", status: "published" },
  { id: 'sk4', name: "Bella + Canvas Heather CVC T-Shirt", price: 32, image_url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop", category: "Serving Kingdom Swag", type: "Product", status: "published" },
  { id: 'sk5', name: "Core 365 Performance Polo", price: 42, image_url: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=2000&auto=format&fit=crop", category: "Serving Kingdom Swag", type: "Product", status: "published" },
  { id: 'sk6', name: "Richardson Laser Perf R-Flex Cap", price: 35, image_url: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2000&auto=format&fit=crop", category: "Serving Kingdom Swag", type: "Product", status: "published" },
  { id: 'sk7', name: "Richardson 225 Casual Performance Hat", price: 37, image_url: "https://images.unsplash.com/photo-1556306535-0f09a536f0ab?q=80&w=2000&auto=format&fit=crop", category: "Serving Kingdom Swag", type: "Product", status: "published" },

  // LG Swag
  { id: 'lg1', name: "Bella + Canvas Hoodie", price: 50, image_url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2000&auto=format&fit=crop", category: "Loading Golf Swag", type: "Product", status: "published" },
  { id: 'lg2', name: "Gildan Heavy Blend Hoodie", price: 48, image_url: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?q=80&w=2000&auto=format&fit=crop", category: "Loading Golf Swag", type: "Product", status: "published" },
  { id: 'lg3', name: "Next Level Long Sleeve", price: 28, image_url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop", category: "Loading Golf Swag", type: "Product", status: "published" },
  { id: 'lg4', name: "Tultex Long Sleeve", price: 25, image_url: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=2000&auto=format&fit=crop", category: "Loading Golf Swag", type: "Product", status: "published" },
  { id: 'lg5', name: "Bella + Canvas T-Shirt", price: 20, image_url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop", category: "Loading Golf Swag", type: "Product", status: "published" },
  { id: 'lg6', name: "Tultex Fine Jersey T-Shirt", price: 20, image_url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop", category: "Loading Golf Swag", type: "Product", status: "published" },
  { id: 'lg7', name: "Richardson Umpqua Snapback", price: 32, image_url: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2000&auto=format&fit=crop", category: "Loading Golf Swag", type: "Product", status: "published" },
  { id: 'lg8', name: "Flexfit Ultrafiber Mesh Cap", price: 30, image_url: "https://images.unsplash.com/photo-1556306535-0f09a536f0ab?q=80&w=2000&auto=format&fit=crop", category: "Loading Golf Swag", type: "Product", status: "published" },
  { id: 'lg9', name: "Port Authority Trucker Cap", price: 23, image_url: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=2000&auto=format&fit=crop", category: "Loading Golf Swag", type: "Product", status: "published" },
];