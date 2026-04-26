import React, { useState } from 'react';
// MAIN ASSETS
import logoImg from './assets/Image/logo.png'; 
import bannerImg from './assets/Image/banner.png'; 

// BURGER IMAGES
import bigMac from './assets/Image/Burger/Big Mac.png';
import burgerMcDo from './assets/Image/Burger/Burger McDo.png';
import cheeseburger from './assets/Image/Burger/Cheeseburger.png';
import doubleCheeseburger from './assets/Image/Burger/Double Cheeseburger.png';
import mcChicken from './assets/Image/Burger/McChicken Sandwich.png';
import mcCrispy from './assets/Image/Burger/McCrispy Chicken Sandwich.png';
import quarterPounder from './assets/Image/Burger/Quarter Pounder with Cheese.png';

// DRINKS IMAGES
import coke from './assets/Image/Drinks/Coke.png';
import cokeZero from './assets/Image/Drinks/Coke Zero.png';
import cokeFloat from './assets/Image/Drinks/Coke McFloat.png';
import orangeJuice from './assets/Image/Drinks/Orange Juice.png';
import coffee from './assets/Image/Drinks/McCafé Premium Roast Coffee.png';

// SWEETS IMAGES
import applePie from './assets/Image/Drinks/Apple Pie.png';
import caramelSundae from './assets/Image/Drinks/Hot Caramel Sundae.png';
import fudgeSundae from './assets/Image/Drinks/Hot Fudge Sundae.png';
import oreoFlurry from './assets/Image/Drinks/McFlurry with Oreo Cookies.png';
import vanillaCone from './assets/Image/Drinks/Vanilla Sundae Cone.png';

// CHICKEN IMAGES
import chickenSpag from './assets/Image/Chicken/1pc. Chicken McDo with McSpaghetti.png';
import chickenRice from './assets/Image/Chicken/1pc. Chicken McDo with Rice.png';
import chickenRice2pc from './assets/Image/Chicken/2pc. Chicken McDo with Rice.png';
import nuggetsFries from './assets/Image/Chicken/6pc. Chicken McNuggets with Fries.png';
import filletRice from './assets/Image/Chicken/Crispy Chicken Fillet with Rice.png';

// BREAKFAST IMAGES
import hotcakesSausage from './assets/Image/Breakfast/2pc. Hotcakes with Sausage.png';
import hotcakes from './assets/Image/Breakfast/2pc. Hotcakes.png';
import eggdesal from './assets/Image/Breakfast/Cheesy Eggdesal.png';
import eggMcMuffin from './assets/Image/Breakfast/Egg McMuffin.png';
import hashBrowns from './assets/Image/Breakfast/Hash Browns.png';
import sausageMcMuffin from './assets/Image/Breakfast/Sausage McMuffin with Egg.png';
import sausagePlatter from './assets/Image/Breakfast/Sausage Platter with Rice.png';

// SALE/DEALS IMAGES
import smokeyMelt from './assets/Image/Sales2/NEW Smokey Melt Chicken Sandwich.png';
import mcShakerFries from './assets/Image/Sales2/Regular McShaker Fries.png';

const App = () => {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('Burgers'); 
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderDetails, setOrderDetails] = useState({ table: 0, id: '', date: '' });

  const products = [
    { id: 101, name: '2pc. Hotcakes with Sausage', price: 145, category: 'Breakfast', img: hotcakesSausage },
    { id: 102, name: '2pc. Hotcakes', price: 99, category: 'Breakfast', img: hotcakes },
    { id: 103, name: 'Cheesy Eggdesal', price: 55, category: 'Breakfast', img: eggdesal },
    { id: 104, name: 'Egg McMuffin', price: 110, category: 'Breakfast', img: eggMcMuffin },
    { id: 105, name: 'Hash Browns', price: 45, category: 'Breakfast', img: hashBrowns },
    { id: 106, name: 'Sausage McMuffin with Egg', price: 125, category: 'Breakfast', img: sausageMcMuffin },
    { id: 107, name: 'Sausage Platter with Rice', price: 135, category: 'Breakfast', img: sausagePlatter },
    { id: 1, name: 'Double Big Mac®', price: 215, category: 'Burgers', img: bigMac },
    { id: 2, name: 'Big Mac®', price: 155, category: 'Burgers', img: bigMac },
    { id: 3, name: 'Double Quarter Pounder® with Cheese', price: 205, category: 'Burgers', img: quarterPounder },
    { id: 4, name: 'McDouble®', price: 145, category: 'Burgers', img: doubleCheeseburger },
    { id: 5, name: 'Quarter Pounder® with Cheese Bacon', price: 225, category: 'Burgers', img: quarterPounder },
    { id: 6, name: 'Burger McDo', price: 55, category: 'Burgers', img: burgerMcDo },
    { id: 7, name: 'Cheeseburger', price: 79, category: 'Burgers', img: cheeseburger },
    { id: 8, name: 'McChicken Sandwich', price: 165, category: 'Burgers', img: mcChicken },
    { id: 19, name: 'Chicken with Spaghetti', price: 155, category: 'Chicken', img: chickenSpag },
    { id: 20, name: 'Chicken with Rice', price: 125, category: 'Chicken', img: chickenRice },
    { id: 21, name: '2pc. Chicken with Rice', price: 195, category: 'Chicken', img: chickenRice2pc },
    { id: 22, name: '6pc. Nuggets with Fries', price: 150, category: 'Chicken', img: nuggetsFries },
    { id: 23, name: 'Crispy Fillet with Rice', price: 99, category: 'Chicken', img: filletRice },
    { id: 9, name: 'Coke', price: 55, category: 'Drinks', img: coke },
    { id: 10, name: 'Coke Zero', price: 55, category: 'Drinks', img: cokeZero },
    { id: 11, name: 'Coke Float', price: 75, category: 'Drinks', img: cokeFloat },
    { id: 12, name: 'Orange Juice', price: 65, category: 'Drinks', img: orangeJuice },
    { id: 13, name: 'Premium Roast Coffee', price: 50, category: 'Drinks', img: coffee },
    { id: 14, name: 'Apple Pie', price: 45, category: 'Sweets', img: applePie },
    { id: 15, name: 'Hot Caramel Sundae', price: 59, category: 'Sweets', img: caramelSundae },
    { id: 16, name: 'Hot Fudge Sundae', price: 59, category: 'Sweets', img: fudgeSundae },
    { id: 17, name: 'McFlurry with Oreo', price: 69, category: 'Sweets', img: oreoFlurry },
    { id: 18, name: 'Vanilla Sundae Cone', price: 20, category: 'Sweets', img: vanillaCone },
    { id: 24, name: 'Smokey Melt Sandwich', price: 59, category: 'Deals', img: smokeyMelt },
    { id: 25, name: 'McShaker Fries', price: 59, category: 'Deals', img: mcShakerFries },
  ];

  const categories = [
    { name: 'Deals', img: smokeyMelt },
    { name: 'Chicken', img: chickenRice },
    { name: 'Breakfast', img: hotcakes },
    { name: 'Burgers', img: bigMac },
    { name: 'Sweets', img: vanillaCone },
    { name: 'Drinks', img: orangeJuice },
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleProceed = () => {
    if (cart.length === 0) return;
    setOrderDetails({ 
        table: Math.floor(Math.random() * 20) + 1, 
        id: 'ORD-' + Math.random().toString(36).substr(2, 6).toUpperCase(), 
        date: new Date().toLocaleString() 
    });
    setShowReceipt(true);
  };

  return (
    <div className="flex flex-col h-screen bg-[#f4f4f4] max-w-[1200px] mx-auto overflow-hidden font-black shadow-2xl relative select-none">
      
      {/* BANNER AREA */}
      <div className="w-full h-32 md:h-44 shrink-0 overflow-hidden border-b-4 border-yellow-400">
        <img src={bannerImg} alt="Promo" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        {/* SIDEBAR CAROUSEL NAVIGATION */}
        <nav className="w-28 md:w-40 bg-white border-r-2 border-gray-100 flex flex-col items-center py-4 overflow-hidden relative">
          <img src={logoImg} alt="Logo" className="w-12 md:w-16 mb-4 shrink-0 z-30" />
          
          <div className="flex-1 w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar py-[100px]">
            <div className="flex flex-col gap-2 items-center px-4">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setCategory(cat.name)}
                  className={`snap-center transition-all duration-300 w-full aspect-square rounded-[2rem] flex flex-col items-center justify-center p-4 border-2 
                    ${category === cat.name 
                      ? 'bg-white border-yellow-400 scale-105 shadow-xl z-20' 
                      : 'bg-gray-50 border-transparent scale-90 opacity-60'
                    }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: category === cat.name 
                      ? 'perspective(1000px) translateZ(30px)' 
                      : 'perspective(1000px) translateZ(0px)'
                  }}
                >
                  <img src={cat.img} alt={cat.name} 
                  className="w-full h-full object-contain mb-1 drop-shadow-md" />
                  <span className="text-[8px] md:text-[10px] font-black uppercase text-gray-900 text-center leading-tight">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Fading Effects at the ends */}
          <div className="absolute top-16 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </nav>

        {/* MAIN AREA */}
        <main className="flex-1 flex flex-col bg-white">
          <header className="px-6 py-4 bg-white border-b border-gray-100">
            <h1 className="text-2xl md:text-4xl font-black text-red-600 tracking-tighter uppercase drop-shadow-sm">
              {category} Specials
            </h1>
          </header>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#fcfcfc]">
            {category === 'Deals' ? (
              <div className="flex flex-col gap-10 py-10">
                {products
                  .filter((p) => p.category === 'Deals')
                  .map((product, idx) => (
                    <div
                      key={product.id}
                      onClick={() => addToCart(product)}
                      className={`relative w-full max-w-[480px] h-48 md:h-52 bg-white rounded-[2.5rem] p-6 shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 border-4 border-yellow-400 group overflow-visible ${
                        idx % 2 === 0 ? 'self-start rotate-[-1.5deg]' : 'self-end rotate-[1.5deg]'
                      }`}
                    >
                      <div className="absolute -top-10 -right-4 w-40 h-40 md:w-56 md:h-56 group-hover:scale-110 transition-transform duration-500 ease-out z-10">
                        <img
                          src={product.img}
                          alt={product.name}
                          className="w-full h-full object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
                        />
                      </div>

                      <div className="flex flex-col justify-center h-full w-3/5">
                        <span className="bg-red-600 text-white text-[10px] px-3 py-1 rounded-full w-fit mb-2 animate-bounce tracking-tight">
                          🔥 MEGA DEAL
                        </span>
                        <h3 className="text-lg md:text-xl font-black text-gray-900 leading-tight uppercase mb-1">
                          {product.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs text-gray-400 line-through">₱{(product.price + 40).toFixed(2)}</span>
                          <div className="text-3xl md:text-4xl font-black text-red-600">
                            ₱{product.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {products
                  .filter((p) => p.category === category)
                  .map((product) => (
                    <div
                      key={product.id}
                      onClick={() => addToCart(product)}
                      className="bg-white rounded-[1.5rem] p-4 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-90 group border-2 border-transparent hover:border-yellow-400"
                    >
                      <div className="h-24 md:h-32 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                        <img
                          src={product.img}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain drop-shadow-md"
                        />
                      </div>
                      <h3 className="text-[10px] md:text-xs font-black text-gray-800 h-8 mb-1 uppercase overflow-hidden">
                        {product.name}
                      </h3>
                      <div className="text-sm md:text-lg font-black text-red-600 bg-yellow-100 px-3 py-0.5 rounded-full">
                        ₱{product.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* FOOTER BAR */}
      {cart.length > 0 && (
        <footer className="bg-white border-t-4 border-red-600 z-20 animate-in slide-in-from-bottom duration-500">
          <div className="bg-[#9c1c1c] text-white px-6 py-2 flex justify-between items-center text-xs">
             <span className="font-black uppercase tracking-widest">Reviewing Your Order</span>
             <span className="bg-white text-red-700 px-3 py-0.5 rounded-full font-black uppercase">
                {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
             </span>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div className="h-28 flex items-center bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-300 overflow-hidden px-6 gap-4 overflow-x-auto no-scrollbar">
                {cart.map((item, i) => (
                  <div key={i} className="shrink-0 w-20 flex flex-col items-center bg-white p-2 rounded-xl border border-gray-100 shadow-sm relative">
                    <div className="absolute -top-1 -right-1 bg-yellow-400 text-black font-black text-[8px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm z-10">1</div>
                    <img src={item.img} 
                    className="w-10 h-10 object-contain mb-1" alt={item.name} />
                    <span className="text-[7px] font-black text-gray-500 uppercase truncate w-full text-center">{item.name}</span>
                  </div>
                ))}
            </div>
            <div className="flex gap-4 h-14 md:h-16">
              <button onClick={() => setCart([])} className="flex-1 bg-gray-200 text-gray-600 rounded-2xl font-black uppercase text-sm hover:bg-red-600 hover:text-white transition-all">Clear</button>
              <button onClick={handleProceed} className="flex-[3] bg-[#006241] text-white rounded-2xl font-black uppercase text-lg md:text-2xl shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-between px-10">
                <span>Check Out Order</span>
                <div className="border-l border-white/20 pl-10 flex items-center gap-3">
                  <span className="text-yellow-400 text-sm">TOTAL:</span>
                  <span>₱{total.toFixed(2)}</span>
                </div>
              </button>
            </div>
          </div>
        </footer>
      )}

      {/* RECEIPT MODAL */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="py-10 flex flex-col items-center bg-yellow-400 relative">
              <div className="bg-white p-4 rounded-[1.5rem] shadow-xl mb-3">
                 <img src={logoImg} alt="M" className="w-16 h-16 object-contain" />
              </div>
              <p className="font-black text-red-700 text-sm tracking-[0.2em] uppercase">Order Success!</p>
            </div>
            <div className="p-8">
              <div className="flex justify-between border-b-4 border-gray-100 pb-4 mb-6 font-black text-gray-400 uppercase text-[10px]">
                <span>ID: {orderDetails.id}</span>
                <span>TABLE {orderDetails.table}</span>
              </div>
              <div className="space-y-3 mb-8 max-h-52 overflow-y-auto no-scrollbar font-bold text-gray-700">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm uppercase">
                    <span>1x {item.name}</span>
                    <span className="font-black text-gray-900">₱{item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t-4 border-red-600 pt-6 flex justify-between items-center mb-8">
                <span className="text-xl font-black text-gray-900 uppercase">Paid</span>
                <span className="text-3xl font-black text-red-600">₱{total.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => {setCart([]); setShowReceipt(false);}} 
                className="w-full py-5 bg-red-600 text-white font-black rounded-2xl uppercase text-xl shadow-xl hover:bg-red-700 active:scale-95 transition-all"
              >
                Close & Restart
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
        div, button, span, h1, h3 { font-family: 'Archivo Black', sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .perspective-container {
          perspective: 1200px;
        }
      `}</style>
    </div>
  );
};

export default App;