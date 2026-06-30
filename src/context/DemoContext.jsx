import React, { createContext, useContext, useState } from 'react';

const DemoContext = createContext();

export const useDemo = () => useContext(DemoContext);

export const DemoProvider = ({ children }) => {
  const [profile] = useState({
    name: "Sarah Johnson",
    memberId: "OR-100245",
    email: "sarah.johnson@example.com",
    phone: "+91 98765 43210",
    membership: "Gold",
    status: "Active",
    joined: "January 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  });

  const [stats] = useState({
    availablePoints: 12450,
    lifetimePoints: 45000,
    rewardsRedeemed: 24,
    referralBonus: 1500,
    walletBalance: 2500
  });

  const [transactions] = useState([
    { id: 1, date: "2026-06-28", merchant: "Amazon", purchase: "₹5,400", earned: 540, redeemed: 0, status: "Completed" },
    { id: 2, date: "2026-06-25", merchant: "Starbucks", purchase: "₹450", earned: 45, redeemed: 0, status: "Completed" },
    { id: 3, date: "2026-06-20", merchant: "Nike Store", purchase: "₹8,999", earned: 900, redeemed: 0, status: "Completed" },
    { id: 4, date: "2026-06-15", merchant: "Reward Redemption", purchase: "-", earned: 0, redeemed: 5000, status: "Redeemed" },
    { id: 5, date: "2026-06-10", merchant: "Uber", purchase: "₹350", earned: 35, redeemed: 0, status: "Completed" },
    { id: 6, date: "2026-06-05", merchant: "Zomato", purchase: "₹850", earned: 85, redeemed: 0, status: "Completed" },
    { id: 7, date: "2026-06-01", merchant: "Apple Store", purchase: "₹1,25,000", earned: 12500, redeemed: 0, status: "Completed" },
    { id: 8, date: "2026-05-28", merchant: "Reward Redemption", purchase: "-", earned: 0, redeemed: 2000, status: "Redeemed" },
    { id: 9, date: "2026-05-20", merchant: "BookMyShow", purchase: "₹600", earned: 60, redeemed: 0, status: "Completed" },
    { id: 10, date: "2026-05-15", merchant: "Referral Bonus", purchase: "-", earned: 500, redeemed: 0, status: "Credited" },
  ]);

  const [notifications] = useState([
    { id: 1, title: "Points Earned", message: "You earned 540 points from Amazon.", time: "2 days ago", read: false, type: "success" },
    { id: 2, title: "Reward Unlocked", message: "You have enough points for a ₹500 Shopping Voucher!", time: "5 days ago", read: false, type: "info" },
    { id: 3, title: "Welcome to Gold", message: "Congratulations! You've been upgraded to Gold Membership.", time: "1 week ago", read: true, type: "star" },
    { id: 4, title: "Seasonal Rewards", message: "New summer rewards are now available in the catalog.", time: "2 weeks ago", read: true, type: "info" },
    { id: 5, title: "Referral Bonus", message: "Your friend signed up! 500 points credited.", time: "1 month ago", read: true, type: "success" },
  ]);

  const [rewards] = useState([
    { id: 1, title: "₹100 Gift Voucher", points: 1000, category: "Shopping", desc: "Redeem for Amazon or Flipkart", color: "blue" },
    { id: 2, title: "₹500 Shopping Voucher", points: 4500, category: "Shopping", desc: "Valid at Lifestyle, Shoppers Stop", color: "purple" },
    { id: 3, title: "10% Discount Coupon", points: 500, category: "Deals", desc: "Valid on electronics at Croma", color: "orange" },
    { id: 4, title: "Free Coffee", points: 300, category: "Food", desc: "One tall handcrafted beverage at Starbucks", color: "green" },
    { id: 5, title: "Free Movie Ticket", points: 2000, category: "Entertainment", desc: "Any 2D movie at PVR Cinemas", color: "red" },
    { id: 6, title: "Premium Upgrade", points: 10000, category: "Membership", desc: "1-month Platinum tier trial", color: "yellow" },
  ]);

  return (
    <DemoContext.Provider value={{
      profile,
      stats,
      transactions,
      notifications,
      rewards
    }}>
      {children}
    </DemoContext.Provider>
  );
};
