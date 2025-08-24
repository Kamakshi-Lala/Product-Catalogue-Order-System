/*
  # Sample Data for E-commerce Application

  1. Sample Products
    - Various categories with different price ranges
    - Stock quantities for testing

  2. Admin User
    - Create an admin profile (will need to be manually updated after user registration)
*/

-- Insert sample products
INSERT INTO products (name, description, price, stock_quantity, category, image_url) VALUES
('Wireless Headphones', 'High-quality wireless headphones with noise cancellation', 199.99, 25, 'electronics', 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg'),
('Smart Watch', 'Feature-rich smartwatch with health monitoring', 299.99, 15, 'electronics', 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg'),
('Laptop Backpack', 'Durable laptop backpack with multiple compartments', 79.99, 30, 'accessories', 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg'),
('Coffee Mug', 'Premium ceramic coffee mug with ergonomic handle', 24.99, 50, 'home', 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'),
('Bluetooth Speaker', 'Portable bluetooth speaker with excellent sound quality', 149.99, 20, 'electronics', 'https://images.pexels.com/photos/1549196/pexels-photo-1549196.jpeg'),
('Desk Lamp', 'Modern LED desk lamp with adjustable brightness', 89.99, 18, 'home', 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg'),
('Phone Case', 'Protective phone case with shock absorption', 29.99, 75, 'accessories', 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg'),
('Water Bottle', 'Insulated stainless steel water bottle', 34.99, 40, 'accessories', 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg'),
('Gaming Mouse', 'Ergonomic gaming mouse with customizable buttons', 69.99, 22, 'electronics', 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg'),
('Plant Pot', 'Decorative ceramic plant pot for indoor plants', 19.99, 35, 'home', 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg');