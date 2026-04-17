import React, { useMemo, useState } from "react";
import { ShoppingCart, Search, Menu, Star, Truck, ShieldCheck, Phone, ChevronRight, Plus, Minus } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "Paslode IM350+ Plus Cordless Gas Nailer 1st Fix", sku: "906500", price: 549.0, oldPrice: 599.0, category: "Nail Guns", badge: "Featured", image: "https://www.securallfastenings.ie/wp-content/uploads/2025/05/Paslode-IM350-Plus-Cordless-Gas-Nailer-1st-Fix-02-1.webp", description: "Trade-grade first-fix cordless gas nailer for framing, roofing, and site work.", features: ["1st fix", "High demand", "Trade favourite"] },
  { id: 2, name: "Paslode IM65 Straight Brad Nailer", sku: "013323", price: 539.0, oldPrice: 579.0, category: "Nail Guns", badge: "Finish", image: "https://iflpaslodecentre.ie/wp-content/uploads/TOOL-IM65-PASLODE-013323-01-600x450.jpg", description: "Straight brad nailer for finish carpentry, interiors, and clean second-fix work.", features: ["Straight brad", "Finish work", "Cordless"] },
  { id: 3, name: "Paslode IM360Xi Framing Nailer", sku: "019700", price: 565.0, oldPrice: 615.0, category: "Nail Guns", badge: "Framing", image: "https://iflpaslodecentre.ie/wp-content/uploads/Paslode-360Xi-600x600.jpg", description: "Framing nailer built for timber framing and demanding professional site use.", features: ["Framing", "Cordless", "Trade demand"] },
  { id: 4, name: "Paslode PPNXi Joist Hanger Nailer", sku: "019790", price: 695.0, oldPrice: 749.0, category: "Nail Guns", badge: "Specialist", image: "https://iflpaslodecentre.ie/wp-content/uploads/34063-paslode-ppnxi-600x600.jpg", description: "Specialist joist hanger nailer for structural fixing and positive placement applications.", features: ["Joist hanger", "Specialist", "Trade tool"] },
  { id: 5, name: "Paslode Fuel Cell IM65 / IM65A / IM50 / IM200", sku: "300341", price: 17.95, oldPrice: 19.95, category: "Nails & Fuel", badge: "Fast Moving", image: "https://www.paslodenailguns.ie/wp-content/uploads/2022/08/Fuel-Cell-IM65-IM65A-IM50-gas-finishing-nailers-and-IM200-Stapler-600x600.jpg", description: "Fast-moving fuel cell for selected Paslode finish nailers and staplers.", features: ["Fuel cell", "Repeat order", "Trade consumable"] },
  { id: 6, name: "Paslode Lithium Battery", sku: "018880", price: 64.27, oldPrice: 74.95, category: "Batteries", badge: "High Margin", image: "https://www.paslodenailguns.ie/wp-content/uploads/2022/08/Paslode-ACCESSORIES-018880-Battery-01-small-600x600.jpg", description: "Replacement lithium battery for Paslode cordless nailers.", features: ["Battery", "Replacement part", "Easy to ship"] },
  { id: 7, name: "Paslode Cleaning Kit", sku: "013690", price: 31.46, oldPrice: 36.95, category: "Accessories", badge: "Upsell", image: "https://www.paslodenailguns.ie/wp-content/uploads/2022/08/Paslode-ACCESSORIES-013690-Cleaningkit01-small-600x600.jpg", description: "Cleaning kit to help keep Paslode tools reliable and ready for site work.", features: ["Maintenance", "Upsell", "Trade essential"] },
  { id: 8, name: "Paslode Lithium Battery Charger", sku: "018882", price: 60.2, oldPrice: 70.35, category: "Batteries", badge: "Accessory", image: "https://www.paslodenailguns.ie/wp-content/uploads/2022/08/Paslode-ACCESSORIES-018882-BatteryCharger-01-small-600x600.jpg", description: "Lithium battery charger for Paslode cordless nailers and workshop backup charging.", features: ["Charger", "Accessory", "Workshop essential"] },
];

const CATEGORIES = ["All", "Nail Guns", "Nails & Fuel", "Batteries", "Accessories"];
const euro = (v) => `€${Number(v).toFixed(2)}`;

function ProductCard({ product, onView, onAdd }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">{product.badge}</div>
      </div>
      <div className="p-5">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{product.category} · SKU {product.sku}</div>
        <h3 className="mt-2 text-xl font-bold leading-7 text-slate-900">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="mt-4 flex items-end gap-3">
          <span className="text-2xl font-bold text-slate-950">{euro(product.price)}</span>
          <span className="text-sm text-slate-400 line-through">{euro(product.oldPrice)}</span>
        </div>
        <div className="mt-5 flex gap-3">
          <button onClick={() => onAdd(product)} className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white">Add to Cart</button>
          <button onClick={() => onView(product)} className="rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-800">View</button>
        </div>
      </div>
    </div>
  );
}

function QuantityControl({ qty, onChange }) {
  return (
    <div className="inline-flex items-center rounded-2xl border border-slate-300 bg-white">
      <button onClick={() => onChange(Math.max(1, qty - 1))} className="px-3 py-2 text-slate-700"><Minus size={16} /></button>
      <span className="min-w-10 text-center text-sm font-semibold">{qty}</span>
      <button onClick={() => onChange(qty + 1)} className="px-3 py-2 text-slate-700"><Plus size={16} /></button>
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([{ productId: 1, qty: 1 }]);

  const filteredProducts = useMemo(() => PRODUCTS.filter((p) => {
    const categoryMatch = category === "All" || p.category === category;
    const q = search.trim().toLowerCase();
    const searchMatch = !q || `${p.name} ${p.sku} ${p.description}`.toLowerCase().includes(q);
    return categoryMatch && searchMatch;
  }), [search, category]);

  const cartItems = cart.map((item) => ({ ...item, product: PRODUCTS.find((p) => p.id === item.productId) })).filter((x) => x.product);
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const shipping = subtotal > 100 ? 0 : 9.95;
  const total = subtotal + shipping;

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((x) => x.productId === product.id);
      if (existing) return prev.map((x) => x.productId === product.id ? { ...x, qty: x.qty + 1 } : x);
      return [...prev, { productId: product.id, qty: 1 }];
    });
    setCurrentPage("cart");
  };
  const updateQty = (productId, qty) => setCart((prev) => prev.map((item) => item.productId === productId ? { ...item, qty } : item));

  const NavButton = ({ id, children }) => (
    <button onClick={() => { setCurrentPage(id); setMobileMenuOpen(false); }} className={`rounded-full px-4 py-2 text-sm font-medium transition ${currentPage === id ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>{children}</button>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm">
          <div className="flex items-center gap-2"><Truck size={16} /> Free delivery over €100</div>
          <div className="hidden items-center gap-6 text-slate-300 md:flex">
            <span className="flex items-center gap-2"><ShieldCheck size={16} /> Secure checkout</span>
            <span className="flex items-center gap-2"><Phone size={16} /> Trade support available</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <button onClick={() => setCurrentPage("home")} className="text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-white font-black">S</div>
              <div>
                <div className="text-3xl font-black tracking-tight text-slate-950">Sitebox.ie</div>
                <div className="text-xs font-semibold text-orange-600">Trade Tools & Fixings</div>
              </div>
            </div>
            <div className="text-sm text-slate-500">Tools, fixings, Paslode and trade essentials</div>
          </button>

          <div className="hidden flex-1 px-10 lg:block">
            <div className="flex items-center rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3">
              <Search size={18} className="text-slate-400" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products, SKUs, batteries, nails..." className="ml-3 w-full bg-transparent text-sm outline-none" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setMobileMenuOpen((v) => !v)} className="rounded-2xl border border-slate-300 p-3 lg:hidden"><Menu size={20} /></button>
            <button onClick={() => setCurrentPage("cart")} className="relative rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
              <span className="inline-flex items-center gap-2"><ShoppingCart size={18} /> Cart</span>
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">{cart.reduce((sum, item) => sum + item.qty, 0)}</span>
            </button>
          </div>
        </div>

        <div className="mx-auto hidden max-w-7xl gap-2 px-6 pb-4 lg:flex flex-wrap">
          <NavButton id="home">Home</NavButton>
          <NavButton id="shop">Shop</NavButton>
          <NavButton id="product">Product</NavButton>
          <NavButton id="cart">Cart</NavButton>
          <NavButton id="checkout">Checkout</NavButton>
          <NavButton id="contact">Contact</NavButton>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
            <div className="mb-4 flex items-center rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3">
              <Search size={18} className="text-slate-400" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="ml-3 w-full bg-transparent text-sm outline-none" />
            </div>
            <div className="flex flex-wrap gap-2">
              <NavButton id="home">Home</NavButton>
              <NavButton id="shop">Shop</NavButton>
              <NavButton id="product">Product</NavButton>
              <NavButton id="cart">Cart</NavButton>
              <NavButton id="checkout">Checkout</NavButton>
              <NavButton id="contact">Contact</NavButton>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        {currentPage === "home" && (
          <div className="space-y-14">
            <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">Launch-ready sales website</div>
                <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950 md:text-6xl">A working Irish sales website for tools, fixings and Paslode products.</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Sitebox.ie is designed to start with Paslode and scale into a broader trade store. This test build includes shopping, product pages, cart totals, checkout layout, and contact details.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button onClick={() => setCurrentPage("shop")} className="rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white">Shop Products</button>
                  <button onClick={() => { setSelectedProduct(PRODUCTS[0]); setCurrentPage("product"); }} className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-900">View Featured Product</button>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-slate-200">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 to-slate-700 p-7 text-white">
                  <div className="text-sm text-slate-300">Featured offer</div>
                  <div className="mt-2 text-3xl font-black">{PRODUCTS[0].name}</div>
                  <p className="mt-3 max-w-md text-slate-300">A featured trade product from your live Paslode catalogue, ready to drive higher-value orders.</p>
                  <div className="mt-6 flex items-end gap-3"><div className="text-4xl font-black">{euro(PRODUCTS[0].price)}</div><div className="pb-1 text-slate-400 line-through">{euro(PRODUCTS[0].oldPrice)}</div></div>
                  <button onClick={() => addToCart(PRODUCTS[0])} className="mt-6 rounded-2xl bg-white px-5 py-3 font-bold text-slate-900">Add Featured Product</button>
                </div>
              </div>
            </section>

            <section>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><div className="font-black">Fast Delivery</div><div className="mt-2 text-sm text-slate-600">Free delivery on orders over €100. Orders placed before 10:00am qualify for same-day dispatch.</div></div>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><div className="font-black">Secure Payment</div><div className="mt-2 text-sm text-slate-600">Test mode only. Stripe and PayPal will be connected later.</div></div>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><div className="font-black">Returns Policy</div><div className="mt-2 text-sm text-slate-600">Clear 14-day returns structure for unused items in original packaging.</div></div>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><div className="font-black">Trade Contact</div><div className="mt-2 text-sm text-slate-600">stevemcevoyservices@gmail.com<br/>086 255 8941</div></div>
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-end justify-between"><div><h2 className="text-3xl font-black tracking-tight">Featured products</h2><p className="mt-2 text-slate-600">Strong starting products for conversion and repeat business.</p></div></div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{PRODUCTS.slice(0, 6).map((product) => <ProductCard key={product.id} product={product} onView={(p) => { setSelectedProduct(p); setCurrentPage("product"); }} onAdd={addToCart} />)}</div>
            </section>
          </div>
        )}

        {currentPage === "shop" && (
          <section>
            <div className="mb-6"><h2 className="text-4xl font-black tracking-tight">Shop products</h2><p className="mt-2 text-slate-600">Browse a sales-ready starter catalogue for Sitebox.ie.</p></div>
            <div className="mb-6 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">{CATEGORIES.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${category === item ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}>{item}</button>)}</div>
              <div className="text-sm text-slate-500">{filteredProducts.length} products found</div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onView={(p) => { setSelectedProduct(p); setCurrentPage("product"); }} onAdd={addToCart} />)}</div>
          </section>
        )}

        {currentPage === "product" && (
          <section>
            <div className="mb-6"><h2 className="text-4xl font-black tracking-tight">Product page</h2></div>
            <div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:grid-cols-[1fr_0.95fr]">
              <div><div className="overflow-hidden rounded-[2rem] bg-slate-100"><img src={selectedProduct.image} alt={selectedProduct.name} className="h-[420px] w-full object-cover" /></div></div>
              <div>
                <div className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-700">{selectedProduct.badge}</div>
                <div className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500">{selectedProduct.category} · SKU {selectedProduct.sku}</div>
                <h3 className="mt-2 text-4xl font-black tracking-tight">{selectedProduct.name}</h3>
                <div className="mt-5 flex items-end gap-3"><div className="text-4xl font-black text-slate-950">{euro(selectedProduct.price)}</div><div className="pb-1 text-base text-slate-400 line-through">{euro(selectedProduct.oldPrice)}</div></div>
                <div className="mt-4 flex items-center gap-1 text-amber-500">{[1,2,3,4,5].map((n) => <Star key={n} size={18} fill="currentColor" />)}<span className="ml-2 text-sm font-medium text-slate-600">Trusted by trade customers</span></div>
                <p className="mt-6 text-lg leading-8 text-slate-600">{selectedProduct.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">{selectedProduct.features.map((f) => <div key={f} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">{f}</div>)}</div>
                <div className="mt-6 rounded-3xl bg-orange-50 p-5 ring-1 ring-orange-200">
                  <div className="text-lg font-black text-slate-900">Add to your order</div>
                  <p className="mt-1 text-sm text-slate-600">Trade customers typically add fuel and nails with this tool.</p>
                  <div className="mt-4 grid gap-3">{PRODUCTS.filter((p) => p.category === "Nails & Fuel").slice(0,3).map((item) => <div key={item.id} className="flex items-center justify-between rounded-2xl bg-white p-3 ring-1 ring-slate-200"><div><div className="text-sm font-bold">{item.name}</div><div className="text-xs text-slate-500">SKU {item.sku}</div></div><button onClick={() => addToCart(item)} className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white">Add</button></div>)}</div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row"><button onClick={() => addToCart(selectedProduct)} className="flex-1 rounded-2xl bg-slate-900 px-6 py-4 font-bold text-white">Add to Cart</button><button onClick={() => setCurrentPage("checkout")} className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-900">Buy Now</button></div>
              </div>
            </div>
          </section>
        )}

        {currentPage === "cart" && (
          <section>
            <div className="mb-6"><h2 className="text-4xl font-black tracking-tight">Cart</h2></div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="space-y-4">{cartItems.map((item) => <div key={item.productId} className="grid gap-4 rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200 sm:grid-cols-[120px_1fr_auto] sm:items-center"><img src={item.product.image} alt={item.product.name} className="h-28 w-full rounded-2xl object-cover" /><div><div className="text-lg font-bold">{item.product.name}</div><div className="text-sm text-slate-500">SKU {item.product.sku}</div><div className="mt-4 flex flex-wrap items-center gap-3"><QuantityControl qty={item.qty} onChange={(qty) => updateQty(item.productId, qty)} /></div></div><div className="text-right"><div className="text-xl font-black">{euro(item.product.price * item.qty)}</div><div className="text-sm text-slate-500">{euro(item.product.price)} each</div></div></div>)}</div>
              </div>
              <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 h-fit">
                <div className="text-2xl font-black">Order summary</div>
                <div className="mt-5 space-y-3 text-sm"><div className="flex items-center justify-between"><span className="text-slate-600">Subtotal</span><span className="font-bold">{euro(subtotal)}</span></div><div className="flex items-center justify-between"><span className="text-slate-600">Shipping</span><span className="font-bold">{shipping === 0 ? "Free" : euro(shipping)}</span></div><div className="border-t border-slate-200 pt-3 flex items-center justify-between"><span className="text-base font-bold">Total</span><span className="text-2xl font-black">{euro(total)}</span></div></div>
                <button onClick={() => setCurrentPage("checkout")} className="mt-6 w-full rounded-2xl bg-slate-900 px-6 py-4 font-bold text-white">Proceed to Checkout</button>
              </div>
            </div>
          </section>
        )}

        {currentPage === "checkout" && (
          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-black">Checkout</h2>
            <p className="mt-3 text-slate-600">Test mode checkout only. Stripe and PayPal are not connected yet.</p>
          </section>
        )}

        {currentPage === "contact" && (
          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-black">Contact</h2>
            <div className="mt-6 space-y-3 text-slate-700">
              <div className="flex items-center gap-3"><Phone size={18} /> 086 255 8941</div>
              <div className="flex items-center gap-3">stevemcevoyservices@gmail.com</div>
              <div className="flex items-center gap-3"><Truck size={18} /> Nationwide Ireland delivery</div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">
          <div><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-white font-black">S</div><div><div className="text-2xl font-black">Sitebox.ie</div><div className="text-xs text-slate-500">Trade Tools & Fixings</div></div></div><p className="mt-3 text-sm leading-6 text-slate-600">A modern Irish tools and fixings store built to start with Paslode and grow into a wider trade catalogue.</p></div>
          <div><div className="text-sm font-black uppercase tracking-wide text-slate-900">Shop</div><div className="mt-3 space-y-2 text-sm text-slate-600"><button onClick={() => setCurrentPage("shop")}>All products</button><br /><button onClick={() => { setCategory("Nail Guns"); setCurrentPage("shop"); }}>Nail guns</button><br /><button onClick={() => { setCategory("Nails & Fuel"); setCurrentPage("shop"); }}>Nails & fuel</button></div></div>
          <div><div className="text-sm font-black uppercase tracking-wide text-slate-900">Customer info</div><div className="mt-3 space-y-2 text-sm text-slate-600"><button onClick={() => setCurrentPage("checkout")}>Checkout</button><br /><button onClick={() => setCurrentPage("contact")}>Contact</button></div></div>
          <div><div className="text-sm font-black uppercase tracking-wide text-slate-900">Business</div><div className="mt-3 space-y-2 text-sm text-slate-600"><button onClick={() => setCurrentPage("home")}>Home</button><br /><button onClick={() => setCurrentPage("shop")}>Shop</button></div></div>
        </div>
      </footer>
    </div>
  );
}
