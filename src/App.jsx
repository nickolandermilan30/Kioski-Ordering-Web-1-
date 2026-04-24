import React, { useState } from 'react';
// IMPORT NG MGA MAIN ASSETS
import logoImg from './assets/Image/logo.png'; 
import bannerImg from './assets/Image/banner.png'; 

// IMPORT NG MGA PRODUCT IMAGES
import bigMac from './assets/Image/Burger/Big Mac.png';
import burgerMcDo from './assets/Image/Burger/Burger McDo.png';
import cheeseburger from './assets/Image/Burger/Cheeseburger.png';
import doubleCheeseburger from './assets/Image/Burger/Double Cheeseburger.png';
import mcChicken from './assets/Image/Burger/McChicken Sandwich.png';
import mcCrispy from './assets/Image/Burger/McCrispy Chicken Sandwich.png';
import quarterPounder from './assets/Image/Burger/Quarter Pounder with Cheese.png';

import coke from './assets/Image/Drinks/Coke.png';
import cokeZero from './assets/Image/Drinks/Coke Zero.png';
import cokeFloat from './assets/Image/Drinks/Coke McFloat.png';
import orangeJuice from './assets/Image/Drinks/Orange Juice.png';
import coffee from './assets/Image/Drinks/McCafé Premium Roast Coffee.png';

import applePie from './assets/Image/Drinks/Apple Pie.png';
import caramelSundae from './assets/Image/Drinks/Hot Caramel Sundae.png';
import fudgeSundae from './assets/Image/Drinks/Hot Fudge Sundae.png';
import oreoFlurry from './assets/Image/Drinks/McFlurry with Oreo Cookies.png';
import vanillaCone from './assets/Image/Drinks/Vanilla Sundae Cone.png';

import chickenSpag from './assets/Image/Chicken/1pc. Chicken McDo with McSpaghetti.png';
import chickenRice from './assets/Image/Chicken/1pc. Chicken McDo with Rice.png';
import chickenRice2pc from './assets/Image/Chicken/2pc. Chicken McDo with Rice.png';
import nuggetsFries from './assets/Image/Chicken/6pc. Chicken McNuggets with Fries.png';
import filletRice from './assets/Image/Chicken/Crispy Chicken Fillet with Rice.png';

import smokeyMelt from './assets/Image/Sale/NEW Smokey Melt Chicken Sandwich.png';
import mcShakerFries from './assets/Image/Sale/Regular McShaker Fries .png';

const FoodIcons = {
  All: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 sm:w-20 sm:h-20">
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </svg>
  ),
  Burgers: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 sm:w-20 sm:h-20">
      <path d="M3 11c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v1H3v-1z" />
      <path d="M3 15h18v2c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4v-2z" />
      <line x1="2" y1="13" x2="22" y2="13" />
    </svg>
  ),
  Platters: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 sm:w-20 sm:h-20">
      <circle cx="12" cy="12" r="9" />
      <path d="M7 8v4a1 1 0 001 1h1a1 1 0 001-1V8M9 13v4M15 7v10M17 7v3a2 2 0 01-2 2M14 7v3a2 2 0 002 2" />
    </svg>
  ),
  Drinks: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 sm:w-20 sm:h-20">
      <path d="M6 8l1.5 12c.2 1.1 1.2 2 2.3 2h4.4c1.1 0 2.1-.9 2.3-2L18 8" />
      <path d="M5 8h14l.5-2H4.5L5 8z" />
      <path d="M15 2l-2 4" />
    </svg>
  ),
  Sweets: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 sm:w-20 sm:h-20">
      <path d="M12 21.5c-1.5 0-3-1.5-3-3 0-1.5 1.5-5 3-7.5 1.5 2.5 3 6 3 7.5 0 1.5-1.5 3-3 3z" />
      <path d="M7 10c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.5-.5 2.5-1.5 3.5L12 11l-3.5 2.5C7.5 12.5 7 11.5 7 10z" />
      <circle cx="12" cy="7" r="3" />
    </svg>
  ),
  McSavers: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 sm:w-20 sm:h-20">
      <path d="M15 5l-1.5-1.5L9 8l4 4-4 4 4.5 4.5L15 19l5-7-5-7z" />
      <rect x="2" y="5" width="10" height="14" rx="2" />
    </svg>
  )
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderDetails, setOrderDetails] = useState({ table: 0, id: '', date: '' });
  const [activeProductId, setActiveProductId] = useState(null);

  const products = [
    { id: 1, name: 'Classic Beef Burger', price: 215, category: 'Burgers', img: bigMac },
    { id: 2, name: 'Burger Beef Special', price: 55, category: 'Burgers', img: burgerMcDo },
    { id: 3, name: 'Cheese Explosion', price: 79, category: 'Burgers', img: cheeseburger },
    { id: 4, name: 'Double Stacked', price: 145, category: 'Burgers', img: doubleCheeseburger },
    { id: 5, name: 'Crispy Chicken Sandwich', price: 165, category: 'Burgers', img: mcChicken },
    { id: 6, name: 'Zesty Crispy Fillet', price: 185, category: 'Burgers', img: mcCrispy },
    { id: 7, name: 'Quarter Master', price: 205, category: 'Burgers', img: quarterPounder },
    { id: 9, name: 'Coke', price: 55, category: 'Drinks', img: coke },
    { id: 10, name: 'Coke Zero', price: 55, category: 'Drinks', img: cokeZero },
    { id: 11, name: 'Coke Float', price: 75, category: 'Drinks', img: cokeFloat },
    { id: 12, name: 'Orange Juice', price: 65, category: 'Drinks', img: orangeJuice },
    { id: 13, name: 'Premium Roast Coffee', price: 50, category: 'Drinks', img: coffee },
    { id: 14, name: 'Apple Pie', price: 45, category: 'Sweets', img: applePie },
    { id: 15, name: 'Hot Caramel Sundae', price: 59, category: 'Sweets', img: caramelSundae },
    { id: 16, name: 'Hot Fudge Sundae', price: 59, category: 'Sweets', img: fudgeSundae },
    { id: 17, name: 'Creamy Oreo Flurry', price: 69, category: 'Sweets', img: oreoFlurry },
    { id: 18, name: 'Vanilla Sundae Cone', price: 20, category: 'Sweets', img: vanillaCone },
    { id: 19, name: 'Chicken with Spaghetti', price: 155, category: 'Platters', img: chickenSpag },
    { id: 20, name: 'Chicken with Rice', price: 125, category: 'Platters', img: chickenRice },
    { id: 21, name: '2pc. Chicken with Rice', price: 195, category: 'Platters', img: chickenRice2pc },
    { id: 22, name: '6pc. Nuggets with Fries', price: 150, category: 'Platters', img: nuggetsFries },
    { id: 23, name: 'Crispy Fillet with Rice', price: 99, category: 'Platters', img: filletRice },
    { id: 24, name: 'Smokey Melt Chicken Sandwich', price: 59, category: 'McSavers', img: smokeyMelt },
    { id: 25, name: 'Regular McShaker Fries', price: 59, category: 'McSavers', img: mcShakerFries },
  ];

  const categories = [
    { name: 'Burgers', icon: <FoodIcons.Burgers />, color: 'bg-orange-500' },
    { name: 'Platters', icon: <FoodIcons.Platters />, color: 'bg-red-600' },
    { name: 'Drinks', icon: <FoodIcons.Drinks />, color: 'bg-blue-500' },
    { name: 'Sweets', icon: <FoodIcons.Sweets />, color: 'bg-pink-500' },
    { name: 'McSavers', icon: <FoodIcons.McSavers />, color: 'bg-yellow-500' },
    { name: 'All', icon: <FoodIcons.All />, color: 'bg-slate-800' }
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
    // Hindi natin i-reset ang activeProductId dito para manatiling naka-show ang button
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleProceed = () => {
    if (cart.length === 0) return;
    const randomTable = Math.floor(Math.random() * 20) + 1;
    const randomID = 'ORD-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    setOrderDetails({ table: randomTable, id: randomID, date: new Date().toLocaleString() });
    setShowReceipt(true);
  };

  const resetAll = () => {
    setCart([]);
    setShowReceipt(false);
    setCategory(null);
    setActiveProductId(null);
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans overflow-hidden text-slate-800 w-full max-w-7xl mx-auto relative sm:border-x border-slate-200">
      
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        
        <header className="p-8 flex justify-between items-center border-b border-slate-100">
          <div className="flex items-center gap-4">
            {category && (
              <button 
                onClick={() => {setCategory(null); setActiveProductId(null);}}
                className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-full hover:bg-red-50 transition-colors"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter leading-none uppercase">
                {category ? category : 'Choose Category'}
              </h1>
              <p className="text-slate-400 text-[10px] font-bold mt-2 tracking-[0.3em] uppercase">Premium Order Experience</p>
            </div>
          </div>
          <img src={logoImg} alt="Logo" className="w-12 h-12 object-contain" />
        </header>

        <main className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10">
          {!category ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-500">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setCategory(cat.name)}
                  className={`${cat.color} group relative h-48 sm:h-64 rounded-[3rem] p-8 flex flex-col items-center justify-center text-white shadow-xl hover:scale-105 transition-all duration-500 overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:rotate-12 transition-transform duration-500">
                    {cat.icon}
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                      {cat.icon}
                    </div>
                    <span className="text-xl sm:text-2xl font-black uppercase tracking-widest">{cat.name}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className={`grid gap-8 pb-52 ${category === 'McSavers' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 xs:grid-cols-2 lg:grid-cols-3'}`}>
              {products
                .filter(p => category === 'All' || p.category === category)
                .map((product) => {
                  const isActive = activeProductId === product.id;
                  return (
                    <div 
                      key={product.id}
                      className="bg-white p-6 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group relative border border-slate-100 flex flex-col"
                    >
                      <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden flex items-center justify-center shrink-0 h-48 sm:h-56 mb-6">
                        <img src={product.img} alt={product.name} 
                        className={`w-full h-full object-contain p-4 transition-transform duration-700 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-black text-slate-800 text-lg leading-tight mb-2 uppercase">{product.name}</h3>
                          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">{product.category}</p>
                        </div>
                        
                        <div className="flex justify-between items-center h-14 relative overflow-hidden">
                          <div className={`flex justify-between items-center w-full transition-all duration-500 ${isActive ? 'translate-y-16 opacity-0' : 'translate-y-0 opacity-100'}`}>
                              <span className="text-red-600 font-black text-2xl italic">₱{product.price}</span>
                              <button 
                                onClick={() => setActiveProductId(product.id)}
                                className="w-12 h-12 bg-slate-900 rounded-2xl text-white flex items-center justify-center text-2xl font-bold hover:bg-red-600 transition-colors"
                              >
                                +
                              </button>
                          </div>
                          <button 
                            onClick={(e) => { e.stopPropagation(); addToCart(product); }} 
                            className={`absolute inset-0 bg-red-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center shadow-lg ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}`}
                          >
                              Add to Tray
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </main>

        {/* FLOATING CART SUMMARY (Ibinalik ang +Badge at Thin Border) */}
        <section className={`fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-slate-900 text-white rounded-[3.5rem] shadow-2xl transition-all duration-700 z-50 ${cart.length > 0 ? 'h-28 sm:h-36 opacity-100 translate-y-0' : 'h-0 opacity-0 translate-y-20 pointer-events-none'}`}>
          <div className="h-full flex items-center justify-between px-8 sm:px-14">
            <div className="flex items-center gap-6 overflow-hidden">
              <div className="hidden lg:flex -space-x-4 items-center">
                  {cart.slice(-4).map((item, i) => (
                      <img key={i} src={item.img} 
                      className="w-16 h-16 rounded-2xl border-2 border-slate-900 object-contain bg-white p-1" />
                  ))}
                  {cart.length > 4 && (
                    <div className="w-14 h-14 rounded-2xl border-2 border-slate-900 bg-red-600 flex items-center justify-center font-black text-sm relative z-10">
                      +{cart.length - 4}
                    </div>
                  )}
              </div>
              <div className="ml-2">
                <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">Grand Total</p>
                <p className="text-2xl sm:text-4xl font-black italic text-yellow-400">₱{total.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => setCart([])} className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors">Clear</button>
              <button onClick={handleProceed} className="px-8 sm:px-16 py-4 sm:py-6 bg-red-600 hover:bg-red-500 text-white rounded-2xl sm:rounded-[2rem] font-black text-xs sm:text-base uppercase tracking-[0.3em] active:scale-95 transition-all">Checkout</button>
            </div>
          </div>
        </section>
      </div>

      {/* RECEIPT MODAL */}
      {showReceipt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl" onClick={() => setShowReceipt(false)} />
          <div className="relative bg-white w-full max-w-sm rounded-[4rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="h-4 bg-red-600 w-full" />
            <div className="p-10">
                <div className="text-center border-b border-slate-100 pb-6 mb-6">
                    <img src={logoImg} alt="Logo" className="w-20 h-20 mx-auto mb-4 object-contain" />
                    <h2 className="text-2xl font-black uppercase text-slate-900 italic">Order Placed</h2>
                    <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase mt-1">{orderDetails.id}</p>
                </div>
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center bg-slate-50 p-6 rounded-[2.5rem]">
                        <span className="text-xs font-black text-slate-400 uppercase">Table</span>
                        <span className="text-4xl font-black text-red-600 italic">#{orderDetails.table}</span>
                    </div>
                    <div className="max-h-40 overflow-y-auto pr-2 custom-scrollbar space-y-3">
                        {cart.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm font-bold">
                              <span className="text-slate-600 uppercase">1x {item.name}</span>
                              <span className="text-slate-900 font-black">₱{item.price.toFixed(2)}</span>
                          </div>
                        ))}
                    </div>
                    <div className="border-t-2 border-dashed border-slate-200 pt-6 flex justify-between items-center">
                        <span className="font-black text-slate-400 uppercase tracking-widest text-xs">Total</span>
                        <span className="text-3xl font-black text-slate-900">₱{total.toFixed(2)}</span>
                    </div>
                </div>
                <button onClick={resetAll} className="w-full py-6 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.4em] rounded-[2.5rem] active:scale-95 transition-all shadow-xl">Done</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default App;