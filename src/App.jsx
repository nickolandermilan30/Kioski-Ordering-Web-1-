import React, { useState } from 'react';
// IMPORT NATIN ANG MGA ASSETS
import logoImg from './assets/Image/logo.png'; 
import bannerImg from './assets/Image/banner.png'; // Banner para sa McSavers

const FoodIcons = {
  All: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  Burgers: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
      <path d="M3 11c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v1H3v-1z" />
      <path d="M3 15h18v2c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4v-2z" />
      <line x1="2" y1="13" x2="22" y2="13" />
    </svg>
  ),
  Platters: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
      <circle cx="12" cy="12" r="9" />
      <path d="M7 8v4a1 1 0 001 1h1a1 1 0 001-1V8M9 13v4M15 7v10M17 7v3a2 2 0 01-2 2M14 7v3a2 2 0 002 2" />
    </svg>
  ),
  Drinks: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
      <path d="M6 8l1.5 12c.2 1.1 1.2 2 2.3 2h4.4c1.1 0 2.1-.9 2.3-2L18 8" />
      <path d="M5 8h14l.5-2H4.5L5 8z" />
      <path d="M15 2l-2 4" />
    </svg>
  ),
  Sweets: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
      <path d="M12 21.5c-1.5 0-3-1.5-3-3 0-1.5 1.5-5 3-7.5 1.5 2.5 3 6 3 7.5 0 1.5-1.5 3-3 3z" />
      <path d="M7 10c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.5-.5 2.5-1.5 3.5L12 11l-3.5 2.5C7.5 12.5 7 11.5 7 10z" />
      <circle cx="12" cy="7" r="3" />
    </svg>
  ),
  McSavers: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
      <path d="M15 5l-1.5-1.5L9 8l4 4-4 4 4.5 4.5L15 19l5-7-5-7z" />
      <path d="M7 11h.01M7 15h.01M10 13h.01" />
      <circle cx="6" cy="9" r="1" />
      <rect x="2" y="5" width="10" height="14" rx="2" />
    </svg>
  )
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('Burgers');
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderDetails, setOrderDetails] = useState({ table: 0, id: '', date: '' });

  const products = [
    { id: 1, name: 'Classic Beef Burger', price: 215, category: 'Burgers', img: '/src/assets/Image/Burger/Big Mac.png' },
    { id: 2, name: 'Burger Beef Special', price: 55, category: 'Burgers', img: '/src/assets/Image/Burger/Burger McDo.png' },
    { id: 3, name: 'Cheese Explosion', price: 79, category: 'Burgers', img: '/src/assets/Image/Burger/Cheeseburger.png' },
    { id: 4, name: 'Double Stacked', price: 145, category: 'Burgers', img: '/src/assets/Image/Burger/Double Cheeseburger.png' },
    { id: 5, name: 'Crispy Chicken Sandwich', price: 165, category: 'Burgers', img: '/src/assets/Image/Burger/McChicken Sandwich.png' },
    { id: 6, name: 'Zesty Crispy Fillet', price: 185, category: 'Burgers', img: '/src/assets/Image/Burger/McCrispy Chicken Sandwich.png' },
    { id: 7, name: 'Quarter Master', price: 205, category: 'Burgers', img: '/src/assets/Image/Burger/Quarter Pounder with Cheese.png' },
    { id: 9, name: 'Coke', price: 55, category: 'Drinks', img: '/src/assets/Image/Drinks/Coke.png' },
    { id: 10, name: 'Coke Zero', price: 55, category: 'Drinks', img: '/src/assets/Image/Drinks/Coke Zero.png' },
    { id: 11, name: 'Coke Float', price: 75, category: 'Drinks', img: '/src/assets/Image/Drinks/Coke McFloat.png' },
    { id: 12, name: 'Orange Juice', price: 65, category: 'Drinks', img: '/src/assets/Image/Drinks/Orange Juice.png' },
    { id: 13, name: 'Premium Roast Coffee', price: 50, category: 'Drinks', img: '/src/assets/Image/Drinks/McCafé Premium Roast Coffee.png' },
    { id: 14, name: 'Apple Pie', price: 45, category: 'Sweets', img: '/src/assets/Image/Drinks/Apple Pie.png' },
    { id: 15, name: 'Hot Caramel Sundae', price: 59, category: 'Sweets', img: '/src/assets/Image/Drinks/Hot Caramel Sundae.png' },
    { id: 16, name: 'Hot Fudge Sundae', price: 59, category: 'Sweets', img: '/src/assets/Image/Drinks/Hot Fudge Sundae.png' },
    { id: 17, name: 'Creamy Oreo Flurry', price: 69, category: 'Sweets', img: '/src/assets/Image/Drinks/McFlurry with Oreo Cookies.png' },
    { id: 18, name: 'Vanilla Sundae Cone', price: 20, category: 'Sweets', img: '/src/assets/Image/Drinks/Vanilla Sundae Cone.png' },
    { id: 19, name: 'Chicken with Spaghetti', price: 155, category: 'Platters', img: '/src/assets/Image/Chicken/1pc. Chicken McDo with McSpaghetti.png' },
    { id: 20, name: 'Chicken with Rice', price: 125, category: 'Platters', img: '/src/assets/Image/Chicken/1pc. Chicken McDo with Rice.png' },
    { id: 21, name: '2pc. Chicken with Rice', price: 195, category: 'Platters', img: '/src/assets/Image/Chicken/2pc. Chicken McDo with Rice.png' },
    { id: 22, name: '6pc. Nuggets with Fries', price: 150, category: 'Platters', img: '/src/assets/Image/Chicken/6pc. Chicken McNuggets with Fries.png' },
    { id: 23, name: 'Crispy Fillet with Rice', price: 99, category: 'Platters', img: '/src/assets/Image/Chicken/Crispy Chicken Fillet with Rice.png' },
    
    // MCSAVERS ITEMS - UPDATED PRICES
    { id: 24, name: 'Smokey Melt Chicken Sandwich', price: 59, category: 'McSavers', img: '/src/assets/Image/Sale/NEW Smokey Melt Chicken Sandwich.png' },
    { id: 25, name: 'Regular McShaker Fries', price: 59, category: 'McSavers', img: '/src/assets/Image/Sale/Regular McShaker Fries .png' },
  ];

  const categories = [
    { name: 'All', icon: <FoodIcons.All /> },
    { name: 'Burgers', icon: <FoodIcons.Burgers /> },
    { name: 'Platters', icon: <FoodIcons.Platters /> },
    { name: 'Drinks', icon: <FoodIcons.Drinks /> },
    { name: 'Sweets', icon: <FoodIcons.Sweets /> },
    { name: 'McSavers', icon: <FoodIcons.McSavers /> }
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
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
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans overflow-hidden text-slate-800 w-full max-w-7xl mx-auto relative sm:border-x border-slate-200">
      
      {/* SIDEBAR */}
      <aside className="fixed bottom-0 w-full h-24 bg-white/90 backdrop-blur-md border-t border-slate-200 flex flex-row items-center justify-around px-4 z-50 sm:relative sm:w-56 sm:h-full sm:flex-col sm:border-t-0 sm:border-r sm:justify-start sm:py-10 sm:gap-4 overflow-y-auto custom-scrollbar">
        <div className="hidden sm:block mb-6 transform hover:scale-110 transition-transform duration-500 cursor-pointer">
          <div className="w-32 h-32 rounded-[2.5rem] shadow-2xl border-4 border-white bg-white flex items-center justify-center overflow-hidden">
            <img 
              src={logoImg} 
              alt="Logo" 
              className="w-full h-full object-contain p-6" 
              onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Logo"; }} 
            />
          </div>
        </div>
        
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setCategory(cat.name)}
            className={`flex flex-col items-center justify-center min-w-[70px] h-20 sm:w-40 sm:min-h-[120px] rounded-[2.5rem] transition-all duration-500 relative group ${
              category === cat.name 
              ? 'bg-red-600 text-white shadow-xl scale-105' 
              : 'bg-white text-slate-400 hover:text-red-500'
            }`}
          >
            <div className="mb-2 transform group-hover:rotate-12 transition-transform duration-300">
                {cat.icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.1em] text-center">{cat.name}</span>
          </button>
        ))}
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="p-8 sm:p-10 flex justify-between items-center bg-white/50 backdrop-blur-sm">
          <div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tighter leading-none">FOOD KIOSK</h1>
            <p className="text-slate-400 text-xs font-bold mt-3 tracking-[0.4em] uppercase">Premium Order Experience</p>
          </div>
          <div className="hidden md:flex flex-col items-end">
              <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-[10px] font-black tracking-widest uppercase">System Online</span>
              <p className="text-slate-400 text-[10px] mt-2 font-bold uppercase tracking-tighter">{new Date().toDateString()}</p>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-6 sm:px-12 py-4 custom-scrollbar">
          {category === 'McSavers' && (
            <div className="w-full mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={bannerImg} 
                  alt="McSavers Promo" 
                  className="w-full h-auto object-cover max-h-64"
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
              </div>
            </div>
          )}

          {/* GRID CONFIGURATION: Kapag McSavers, mas malapad ang columns */}
          <div className={`grid gap-8 pb-52 ${category === 'McSavers' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 xs:grid-cols-2 lg:grid-cols-3'}`}>
            {products
              .filter(p => category === 'All' || p.category === category)
              .map((product) => (
                <div 
                  key={product.id}
                  className={`bg-white p-5 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 group relative border border-slate-100 flex ${product.category === 'McSavers' ? 'flex-row gap-6 items-center min-h-[220px]' : 'flex-col'}`}
                >
                  {/* Image Container */}
                  <div className={`bg-slate-50 rounded-[3rem] overflow-hidden flex items-center justify-center shrink-0 ${product.category === 'McSavers' ? 'w-1/2 h-40' : 'h-52 sm:h-64 mb-6'}`}>
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className={`px-3 flex-1 flex flex-col justify-between ${product.category === 'McSavers' ? 'h-40' : ''}`}>
                    <div>
                      <h3 className={`font-black text-slate-800 tracking-tight leading-tight mb-2 ${product.category === 'McSavers' ? 'text-xl' : 'text-lg sm:text-xl'}`}>
                        {product.name}
                      </h3>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                        {product.category === 'McSavers' ? 'Exclusive Deal' : product.category}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center h-14 relative overflow-hidden">
                      <div className="flex justify-between items-center w-full group-hover:translate-y-16 transition-all duration-500">
                          <span className="text-red-600 font-black text-2xl italic">₱{product.price}</span>
                          <div className="w-12 h-12 bg-slate-900 rounded-2xl text-white flex items-center justify-center text-2xl font-bold">+</div>
                      </div>
                      <button 
                          onClick={() => addToCart(product)}
                          className="absolute inset-0 bg-red-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] translate-y-16 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center shadow-lg"
                      >
                          Add to Tray
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </main>

        {/* FLOATING CART */}
        <section className={`absolute bottom-28 sm:bottom-10 left-4 right-4 sm:left-64 sm:right-12 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl transition-all duration-700 z-40 ${cart.length > 0 ? 'h-28 sm:h-36 opacity-100' : 'h-0 opacity-0 pointer-events-none'}`}>
          <div className="h-full flex items-center justify-between px-8 sm:px-14">
            <div className="flex items-center gap-6 overflow-hidden">
              <div className="hidden lg:flex -space-x-4 items-center">
                  {cart.slice(-4).map((item, i) => (
                      <img key={i} src={item.img} 
                      className="w-16 h-16 rounded-2xl border-4 border-slate-900 object-cover bg-white" />
                  ))}
                  {cart.length > 4 && <div className="w-14 h-14 rounded-2xl border-4 border-slate-900 bg-red-600 flex items-center justify-center font-black text-sm">+{cart.length - 4}</div>}
              </div>
              <div className="ml-2">
                <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">Grand Total</p>
                <p className="text-2xl sm:text-4xl font-black italic text-yellow-400">₱{total.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
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
            <div className="h-6 bg-red-600 w-full" />
            <div className="p-10">
                <div className="text-center border-b border-slate-100 pb-8 mb-8">
                    <div className="w-24 h-24 mx-auto rounded-3xl mb-4 shadow-lg border-2 border-slate-50 bg-white flex items-center justify-center overflow-hidden">
                      <img src={logoImg} alt="Logo" className="w-full h-full object-contain p-4" onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Logo"; }}/>
                    </div>
                    <h2 className="text-2xl font-black tracking-tighter uppercase text-slate-900">Order Placed</h2>
                    <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase mt-2">{orderDetails.id}</p>
                </div>
                <div className="space-y-6 mb-8">
                    <div className="flex justify-between items-center bg-slate-50 p-6 rounded-3xl">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">Table Location</span>
                        <span className="text-4xl font-black text-red-600 italic">#{orderDetails.table}</span>
                    </div>
                    <div className="max-h-40 overflow-y-auto pr-2 custom-scrollbar space-y-4">
                        {cart.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm font-bold">
                              <div className="flex items-center gap-3">
                                  <img src={item.img} 
                                  className="w-10 h-10 rounded-lg object-cover bg-slate-50 border" />
                                  <span className="text-slate-600">1x {item.name}</span>
                              </div>
                              <span className="text-slate-900 font-black">₱{item.price.toFixed(2)}</span>
                          </div>
                        ))}
                    </div>
                    <div className="border-t-2 border-dashed border-slate-200 pt-6 flex justify-between items-center">
                        <span className="font-black text-slate-400 uppercase tracking-widest text-xs">Total Amount</span>
                        <span className="text-3xl font-black text-slate-900">₱{total.toFixed(2)}</span>
                    </div>
                </div>
                <button onClick={resetAll} className="w-full py-6 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.4em] rounded-[2.5rem] active:scale-95 transition-all">Done & Reset</button>
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