export const foodListings = [
  {
    id: 1,
    title: "Fresh Bakery Items",
    description: "Assorted bread, pastries, and cookies from today's baking. All items are fresh and delicious!",
    category: "bakery",
    quantity: "high",
    location: "Downtown Bakery",
    distance: 0.8,
    availableUntil: "Today, 8:00 PM",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&auto=format&fit=crop",
    donorName: "Downtown Bakery",
    donorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop",
    dietaryInfo: ["vegetarian"],
  },
  {
    id: 2,
    title: "Organic Produce Box",
    description: "Mixed vegetables and fruits from our local farm. Includes carrots, lettuce, apples, and more.",
    category: "produce",
    quantity: "medium",
    location: "Green Farms Market",
    distance: 2.3,
    availableUntil: "Tomorrow, 12:00 PM",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&auto=format&fit=crop",
    donorName: "Green Farms Market",
    donorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
    dietaryInfo: ["vegan", "gluten-free"],
  },
  {
    id: 3,
    title: "Prepared Lunch Meals",
    description: "Vegetarian lunch boxes with rice, vegetables, and tofu. Perfect for a quick and healthy meal.",
    category: "prepared",
    quantity: "medium",
    location: "Healthy Eats Cafe",
    distance: 1.5,
    availableUntil: "Today, 3:00 PM",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop",
    donorName: "Healthy Eats Cafe",
    donorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
    dietaryInfo: ["vegetarian"],
  },
  {
    id: 4,
    title: "Canned Goods Assortment",
    description: "Various canned goods including beans, soups, and vegetables. All items are within expiration date.",
    category: "grocery",
    quantity: "high",
    location: "Community Food Bank",
    distance: 3.7,
    availableUntil: "Friday, 5:00 PM",
    image: "https://images.unsplash.com/photo-1584263347416-85a696b4eda7?w=800&auto=format&fit=crop",
    donorName: "Community Food Bank",
    donorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
    dietaryInfo: [],
  },
  {
    id: 5,
    title: "Fresh Pizza Slices",
    description: "Leftover pizza slices from today's lunch rush. Varieties include cheese, pepperoni, and vegetable.",
    category: "prepared",
    quantity: "low",
    location: "Mario's Pizzeria",
    distance: 0.6,
    availableUntil: "Today, 9:00 PM",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop",
    donorName: "Mario's Pizzeria",
    donorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
    dietaryInfo: [],
  },
  {
    id: 6,
    title: "Dairy Products",
    description: "Assorted dairy items including milk, yogurt, and cheese. All items are refrigerated and fresh.",
    category: "grocery",
    quantity: "medium",
    location: "Fresh Mart",
    distance: 4.2,
    availableUntil: "Tomorrow, 10:00 AM",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&auto=format&fit=crop",
    donorName: "Fresh Mart",
    donorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
    dietaryInfo: ["vegetarian"],
  },
]

export const categories = [
  {
    id: 1,
    name: "bakery",
    description: "Bread, pastries, and baked goods",
  },
  {
    id: 2,
    name: "produce",
    description: "Fresh fruits and vegetables",
  },
  {
    id: 3,
    name: "prepared",
    description: "Ready-to-eat meals and prepared foods",
  },
  {
    id: 4,
    name: "grocery",
    description: "Packaged foods and pantry items",
  },
  {
    id: 5,
    name: "dairy",
    description: "Milk, cheese, and other dairy products",
  },
]

export const mockUser = {
  id: "user-123",
  email: "nilovar@example.com",
  user_metadata: {
    first_name: "Nilovar",
    last_name: "Nolan",
    avatar_url: "/images/profile-picture.png",
    role: "individual",
  },
}

export const mockMessages = [
  {
    id: 1,
    sender: {
      id: "user-456",
      name: "Downtown Bakery",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop",
    },
    listing: {
      id: 1,
      title: "Fresh Bakery Items",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&auto=format&fit=crop",
    },
    lastMessage:
      "Hi Nilovar, your request for the bakery items has been accepted! When would you like to pick them up?",
    timestamp: "2023-05-15T14:30:00Z",
    unread: true,
  },
  {
    id: 2,
    sender: {
      id: "user-789",
      name: "Green Farms Market",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
    },
    listing: {
      id: 2,
      title: "Organic Produce Box",
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&auto=format&fit=crop",
    },
    lastMessage: "Thank you for your interest in our produce box. We're available for pickup between 2-5pm tomorrow.",
    timestamp: "2023-05-14T09:15:00Z",
    unread: false,
  },
  {
    id: 3,
    sender: {
      id: "user-101",
      name: "Healthy Eats Cafe",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
    },
    listing: {
      id: 3,
      title: "Prepared Lunch Meals",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop",
    },
    lastMessage:
      "Hi there! We have 5 lunch boxes available. They're all vegetarian with tofu, rice, and fresh veggies.",
    timestamp: "2023-05-13T16:45:00Z",
    unread: false,
  },
]

export const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&auto=format&fit=crop",
    alt: "People sharing food at community table",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&auto=format&fit=crop",
    alt: "Fresh produce market",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506484381205-f7945653044d?w=1200&auto=format&fit=crop",
    alt: "Community garden harvest",
  },
]

export const myListings = [
  {
    id: 101,
    title: "Homemade Bread Loaves",
    description: "Three freshly baked sourdough bread loaves. Made this morning and perfect for sandwiches or toast.",
    category: "bakery",
    quantity: "medium",
    location: "My Home Kitchen",
    status: "available",
    availableUntil: "Today, 8:00 PM",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=800&auto=format&fit=crop",
    requests: 2,
    dietaryInfo: ["vegetarian"],
  },
  {
    id: 102,
    title: "Organic Vegetables",
    description:
      "Extra vegetables from my garden including tomatoes, cucumbers, and bell peppers. All organic and freshly picked.",
    category: "produce",
    quantity: "high",
    location: "My Home",
    status: "available",
    availableUntil: "Tomorrow, 12:00 PM",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&auto=format&fit=crop",
    requests: 1,
    dietaryInfo: ["vegan", "gluten-free"],
  },
  {
    id: 103,
    title: "Leftover Birthday Cake",
    description: "Half of a chocolate birthday cake from yesterday's party. Still fresh and delicious!",
    category: "bakery",
    quantity: "low",
    location: "My Home",
    status: "claimed",
    availableUntil: "Yesterday, 9:00 PM",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop",
    requests: 3,
    dietaryInfo: ["vegetarian"],
  },
  {
    id: 104,
    title: "Pasta Dinner",
    description: "Extra pasta with tomato sauce and vegetables. Made for dinner but we have too much.",
    category: "prepared",
    quantity: "medium",
    location: "My Home",
    status: "expired",
    availableUntil: "Last Week, 7:00 PM",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&auto=format&fit=crop",
    requests: 0,
    dietaryInfo: ["vegetarian"],
  },
]

// Add notifications
export const mockNotifications = [
  {
    id: "1",
    type: "request",
    title: "New Request",
    message: "Sarah Johnson has requested your 'Fresh Vegetables' listing",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    actionUrl: "/messages/1",
    relatedId: "1",
  },
  {
    id: "2",
    type: "message",
    title: "New Message",
    message: "You have a new message from Michael Chen",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    actionUrl: "/messages/2",
    relatedId: "2",
  },
  {
    id: "3",
    type: "listing",
    title: "Listing Expiring Soon",
    message: "Your 'Bakery Items' listing will expire in 24 hours",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
    actionUrl: "/my-listings",
    relatedId: "3",
  },
  {
    id: "4",
    type: "system",
    title: "Welcome to FoodShare",
    message: "Thank you for joining our community! Start by browsing available food or sharing your own.",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days ago
    actionUrl: "/browse",
    relatedId: null,
  },
  {
    id: "5",
    type: "request",
    title: "Request Accepted",
    message: "Your request for 'Canned Goods' has been accepted",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
    actionUrl: "/messages/3",
    relatedId: "4",
  },
]
