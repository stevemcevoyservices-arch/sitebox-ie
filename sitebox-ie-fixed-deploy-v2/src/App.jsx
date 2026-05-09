import React, { useMemo, useState } from "react";
const PRODUCTS = [
  {
    "id": 1,
    "name": "Paslode IM350+ Cordless Gas Framing Nailer (1st Fix) - 906500",
    "sku": "906500",
    "price": 549.0,
    "oldPrice": 599.0,
    "category": "Nail Guns",
    "badge": "Featured",
    "image": "https://www.securallfastenings.ie/wp-content/uploads/2025/05/Paslode-IM350-Plus-Cordless-Gas-Nailer-1st-Fix-02-1.webp",
    "description": "Trade-grade cordless framing nailer built for first-fix timber work, roofing, and demanding site use across Ireland.",
    "features": [
      "1st fix framing",
      "Same-day dispatch before 10am",
      "Trade favourite"
    ]
  },
  {
    "id": 2,
    "name": "Paslode IM65 Straight Finish Nailer - 013323",
    "sku": "013323",
    "price": 539.0,
    "oldPrice": 579.0,
    "category": "Nail Guns",
    "badge": "Finish",
    "image": "https://iflpaslodecentre.ie/wp-content/uploads/TOOL-IM65-PASLODE-013323-01-600x450.jpg",
    "description": "Cordless straight finish nailer designed for interior joinery, trim work, skirting, and second-fix carpentry.",
    "features": [
      "Straight finish nailer",
      "Interior joinery",
      "Fast trade delivery"
    ]
  },
  {
    "id": 3,
    "name": "Paslode IM360Xi Cordless Framing Nailer - 019700",
    "sku": "019700",
    "price": 565.0,
    "oldPrice": 615.0,
    "category": "Nail Guns",
    "badge": "Framing",
    "image": "https://iflpaslodecentre.ie/wp-content/uploads/Paslode-360Xi-600x600.jpg",
    "description": "Heavy-duty cordless framing nailer for timber frame construction, first-fix work, and professional site crews.",
    "features": [
      "Timber framing",
      "Professional site use",
      "High-demand line"
    ]
  },
  {
    "id": 4,
    "name": "Paslode IM65A F16 Li-ion Angled Gas Brad Nailer - 013313",
    "sku": "013313",
    "price": 549.0,
    "oldPrice": 589.0,
    "category": "Nail Guns",
    "badge": "Angled",
    "image": "https://iflpaslodecentre.ie/wp-content/uploads/TOOL-IM65A-PASLODE-013313-01-600x600.jpg",
    "description": "Angled gas finish nailer for trim, skirting, kitchens, doors, and second-fix carpentry.",
    "features": [
      "Angled finish nailer",
      "Second-fix work",
      "Trade favourite"
    ]
  },
  {
    "id": 5,
    "name": "Paslode PPNXi Joist Hanger Nailer - 019790",
    "sku": "019790",
    "price": 695.0,
    "oldPrice": 749.0,
    "category": "Nail Guns",
    "badge": "Specialist",
    "image": "https://iflpaslodecentre.ie/wp-content/uploads/34063-paslode-ppnxi-600x600.jpg",
    "description": "Specialist positive placement nailer for joist hangers, metal connectors, and structural timber fixing work.",
    "features": [
      "Joist hanger fixing",
      "Structural timber work",
      "Specialist trade tool"
    ]
  },
  {
    "id": 6,
    "name": "Paslode Fuel Cell for IM65 / IM65A / IM50 / IM200 - 300341",
    "sku": "300341",
    "price": 17.95,
    "oldPrice": 19.95,
    "category": "Nails & Fuel",
    "badge": "Fast Moving",
    "image": "https://www.paslodenailguns.ie/wp-content/uploads/2022/08/Fuel-Cell-IM65-IM65A-IM50-gas-finishing-nailers-and-IM200-Stapler-600x600.jpg",
    "description": "Fast-moving Paslode fuel cell for selected finish nailers and staplers, ideal for repeat site and workshop orders.",
    "features": [
      "Repeat purchase",
      "Compatible accessory",
      "Trade consumable"
    ]
  },
  {
    "id": 7,
    "name": "Paslode Lithium Battery - 018880",
    "sku": "018880",
    "price": 64.27,
    "oldPrice": 74.95,
    "category": "Batteries",
    "badge": "High Margin",
    "image": "https://www.paslodenailguns.ie/wp-content/uploads/2022/08/Paslode-ACCESSORIES-018880-Battery-01-small-600x600.jpg",
    "description": "Genuine replacement lithium battery for Paslode cordless nailers, ideal for backup power and quick swaps on site.",
    "features": [
      "Genuine replacement battery",
      "Backup power on site",
      "Easy to ship"
    ]
  },
  {
    "id": 8,
    "name": "Paslode Cleaning Kit - 013690",
    "sku": "013690",
    "price": 31.46,
    "oldPrice": 36.95,
    "category": "Accessories",
    "badge": "Upsell",
    "image": "https://www.paslodenailguns.ie/wp-content/uploads/2022/08/Paslode-ACCESSORIES-013690-Cleaningkit01-small-600x600.jpg",
    "description": "Essential Paslode cleaning kit to help keep nailers reliable, reduce downtime, and maintain performance on site.",
    "features": [
      "Tool maintenance",
      "Reduce downtime",
      "Trade essential"
    ]
  },
  {
    "id": 9,
    "name": "Paslode Lithium Battery Charger - 018882",
    "sku": "018882",
    "price": 60.2,
    "oldPrice": 70.35,
    "category": "Batteries",
    "badge": "Accessory",
    "image": "https://www.paslodenailguns.ie/wp-content/uploads/2022/08/Paslode-ACCESSORIES-018882-BatteryCharger-01-small-600x600.jpg",
    "description": "Genuine Paslode lithium battery charger for cordless nailers, ideal for workshop charging and spare charging stations.",
    "features": [
      "Genuine charger",
      "Workshop essential",
      "Spare charging setup"
    ]
  },
  {
    "id": 10,
    "name": "Paslode IM350+ Nail Pack 51mm Bright Ring - 141202",
    "sku": "141202",
    "price": 48.92,
    "oldPrice": 55.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM350+ Nail Pack 51mm Bright Ring for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 11,
    "name": "Paslode IM360Ci Nail Pack 90mm Galv Straight - 141070",
    "sku": "141070",
    "price": 79.79,
    "oldPrice": 84.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM360Ci Nail Pack 90mm Galv Straight for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 12,
    "name": "Paslode IM360Ci Nail Pack 75mm Galv Ring - 141072",
    "sku": "141072",
    "price": 74.72,
    "oldPrice": 79.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM360Ci Nail Pack 75mm Galv Ring for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 13,
    "name": "Paslode IM360Ci Nail Pack 63mm Galv Ring - 141073",
    "sku": "141073",
    "price": 68.49,
    "oldPrice": 74.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM360Ci Nail Pack 63mm Galv Ring for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 14,
    "name": "Paslode IM360Ci Nail Pack 51mm Galv - 141075",
    "sku": "141075",
    "price": 81.36,
    "oldPrice": 84.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM360Ci Nail Pack 51mm Galv for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 15,
    "name": "Paslode IM360Ci Nail Pack 90mm Bright Straight Smooth - 141076",
    "sku": "141076",
    "price": 61.15,
    "oldPrice": 69.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM360Ci Nail Pack 90mm Bright Straight Smooth for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 16,
    "name": "Paslode IM360Ci Nail Pack 63mm Bright Ring - 141078",
    "sku": "141078",
    "price": 72.05,
    "oldPrice": 77.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM360Ci Nail Pack 63mm Bright Ring for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 17,
    "name": "Paslode IM360Ci Nail Pack 75mm Bright Ring - 141081",
    "sku": "141081",
    "price": 61.64,
    "oldPrice": 69.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM360Ci Nail Pack 75mm Bright Ring for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 18,
    "name": "Paslode IM360Ci Nail Pack 51mm Bright Ring - 141083",
    "sku": "141083",
    "price": 71.23,
    "oldPrice": 76.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM360Ci Nail Pack 51mm Bright Ring for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 19,
    "name": "Paslode PPN BX2500 35mm Twisted Galv Nail Pack - 141185",
    "sku": "141185",
    "price": 101.57,
    "oldPrice": 109.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode PPN BX2500 35mm Twisted Galv Nail Pack for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 20,
    "name": "Paslode IM45 Loose Fuel Cell - 011784",
    "sku": "011784",
    "price": 16.77,
    "oldPrice": 19.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM45 Loose Fuel Cell for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 21,
    "name": "Paslode IM45GN Metal Roofing Nailer - 018608",
    "sku": "018608",
    "price": 716.29,
    "oldPrice": 799.0,
    "category": "Nail Guns",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM45GN Metal Roofing Nailer for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 22,
    "name": "Paslode Combustion Chamber Assembly - 013749",
    "sku": "013749",
    "price": 93.82,
    "oldPrice": 109.95,
    "category": "Accessories",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode Combustion Chamber Assembly for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 23,
    "name": "Paslode IM350+ Nail Pack 63mm Bright Ring - 141204",
    "sku": "141204",
    "price": 54.95,
    "oldPrice": 62.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM350+ Nail Pack 63mm Bright Ring for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 24,
    "name": "Paslode IM350+ Nail Pack 75mm Bright Ring - 141205",
    "sku": "141205",
    "price": 58.95,
    "oldPrice": 67.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM350+ Nail Pack 75mm Bright Ring for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 25,
    "name": "Paslode IM350+ Nail Pack 90mm Bright Ring - 141206",
    "sku": "141206",
    "price": 63.95,
    "oldPrice": 72.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM350+ Nail Pack 90mm Bright Ring for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 26,
    "name": "Paslode IM350+ Nail Fuel Pack 3.1 x 90mm - 141233",
    "sku": "141233",
    "price": 82.95,
    "oldPrice": 91.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM350+ Nail Fuel Pack 3.1 x 90mm for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 27,
    "name": "Paslode IM65 Straight Brads 32mm - 395032",
    "sku": "395032",
    "price": 23.95,
    "oldPrice": 28.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM65 Straight Brads 32mm for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 28,
    "name": "Paslode IM65 Straight Brads 50mm - 395050",
    "sku": "395050",
    "price": 27.95,
    "oldPrice": 32.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM65 Straight Brads 50mm for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  },
  {
    "id": 29,
    "name": "Paslode IM65A Angled Brads 50mm - 395150",
    "sku": "395150",
    "price": 29.95,
    "oldPrice": 34.95,
    "category": "Nails & Fuel",
    "badge": "Trade Line",
    "image": "",
    "description": "Paslode IM65A Angled Brads 50mm for Paslode trade users, suited to repeat site orders and fast dispatch.",
    "features": [
      "Trade consumable",
      "Repeat order line",
      "Same-day dispatch before 10am"
    ]
  }
];
const CATEGORIES = ["All", "Nail Guns", "Nails & Fuel", "Batteries", "Accessories"];
const SUPPLIERS = [{id:"ifl", name:"Irish Fixings Limited", email:"orders@irishfixingslimited.ie"}, {id:"fallback", name:"Sitebox fallback supplier", email:"stevemcevoyservices@gmail.com"}];
const euro = (v) => `€${Number(v).toFixed(2)}`;
const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='700'%3E%3Crect width='900' height='700' fill='%23f1f5f9'/%3E%3Ctext x='450' y='320' text-anchor='middle' font-family='Arial' font-size='52' font-weight='700' fill='%230f172a'%3ESitebox.ie%3C/text%3E%3Ctext x='450' y='380' text-anchor='middle' font-family='Arial' font-size='28' fill='%23475569'%3EProduct image coming soon%3C/text%3E%3C/svg%3E";
const catFallback = {"Nail Guns": PRODUCTS[0].image, "Nails & Fuel": PRODUCTS[5].image, Batteries: PRODUCTS[6].image, Accessories: PRODUCTS[7].image};
const unique = (items) => items.filter(Boolean).filter((x,i,a)=>a.indexOf(x)===i);
const localImage = (sku) => `/images/products/paslode/paslode-${sku}-main.jpg`;
function Img({p, className}){const srcs=unique([p?.image, p&&localImage(p.sku), p&&catFallback[p.category], FALLBACK_IMAGE]); const [i,setI]=useState(0); return <img src={srcs[i]||FALLBACK_IMAGE} alt={p?.name||"Product image"} className={className} onError={()=>setI(n=>Math.min(n+1, srcs.length-1))}/>}
function Card({p,onView,onAdd}){return <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"><div className="relative h-56 overflow-hidden bg-slate-100"><Img p={p} className="h-full w-full object-cover transition duration-300 group-hover:scale-105"/><div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">{p.badge}</div></div><div className="p-5"><div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{p.category} · SKU {p.sku}</div><h3 className="mt-2 text-xl font-bold leading-7 text-slate-900">{p.name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{p.description}</p><div className="mt-4 flex items-end gap-3"><span className="text-2xl font-bold text-slate-950">{euro(p.price)}</span><span className="text-sm text-slate-400 line-through">{euro(p.oldPrice)}</span></div><div className="mt-5 flex gap-3"><button onClick={()=>onAdd(p)} className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white">Add to Cart</button><button onClick={()=>onView(p)} className="rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-800">View</button></div></div></div>}
function Policy({title,children}){return <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><h3 className="text-xl font-black">{title}</h3><div className="mt-4 text-sm leading-7 text-slate-600">{children}</div></div>}
export default function SiteboxSalesWebsite(){
const [page,setPage]=useState('home'),[search,setSearch]=useState(''),[cat,setCat]=useState('All'),[sort,setSort]=useState('featured'),[sel,setSel]=useState(PRODUCTS[0]),[cart,setCart]=useState([{productId:1,qty:1},{productId:6,qty:2}]),[supplier,setSupplier]=useState(SUPPLIERS[0].id),[note,setNote]=useState('Please confirm availability, lead time, and trade pricing.');
const filtered=useMemo(()=>{let arr=PRODUCTS.filter(p=>(cat==='All'||p.category===cat)&&(!search.trim()||`${p.name} ${p.sku} ${p.description}`.toLowerCase().includes(search.toLowerCase()))); if(sort==='price-low')arr=[...arr].sort((a,b)=>a.price-b.price); if(sort==='price-high')arr=[...arr].sort((a,b)=>b.price-a.price); if(sort==='name')arr=[...arr].sort((a,b)=>a.name.localeCompare(b.name)); return arr},[search,cat,sort]);
const items=cart.map(i=>({...i,product:PRODUCTS.find(p=>p.id===i.productId)})).filter(i=>i.product); const subtotal=items.reduce((s,i)=>s+i.product.price*i.qty,0); const shipping=subtotal>100?0:9.95,total=subtotal+shipping; const sup=SUPPLIERS.find(s=>s.id===supplier)||SUPPLIERS[0];
const open=p=>{setSel(p);setPage('product')}; const add=p=>{setCart(c=>{let e=c.find(i=>i.productId===p.id); return e?c.map(i=>i.productId===p.id?{...i,qty:i.qty+1}:i):[...c,{productId:p.id,qty:1}]});setPage('cart')}; const qty=(id,q)=>setCart(c=>c.map(i=>i.productId===id?{...i,qty:q}:i)); const remove=id=>setCart(c=>c.filter(i=>i.productId!==id));
const emailBody=['Hello '+sup.name,'','Please process the following purchase order request for Sitebox.ie:','',...items.map(i=>`- ${i.product.name} | SKU: ${i.product.sku} | Qty: ${i.qty}`),'',note,'','Regards,','Sitebox.ie'].join('\n'); const mailto=`mailto:${sup.email}?subject=${encodeURIComponent('Sitebox.ie Purchase Order Request')}&body=${encodeURIComponent(emailBody)}`;
const Nav=({id,children})=><button onClick={()=>setPage(id)} className={`rounded-full px-4 py-2 text-sm font-medium ${page===id?'bg-slate-900 text-white':'text-slate-600 hover:bg-slate-100'}`}>{children}</button>;
return <div className="min-h-screen bg-slate-50 text-slate-900"><div className="bg-slate-900 text-white"><div className="mx-auto flex max-w-7xl justify-between px-6 py-3 text-sm"><span>🚚 Free delivery over €100</span><span className="hidden md:block">🔒 Secure checkout · ☎️ Trade support</span></div></div><header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"><button onClick={()=>setPage('home')} className="text-left"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 font-black text-white">S</div><div><div className="text-3xl font-black tracking-tight">Sitebox.ie</div><div className="text-xs font-semibold text-orange-600">Trade Tools & Fixings</div></div></div><div className="text-sm text-slate-500">Tools, fixings, Paslode and trade essentials</div></button><div className="hidden flex-1 px-10 lg:block"><input value={search} onChange={e=>setSearch(e.target.value)} className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none" placeholder="Search products, SKUs, batteries, nails..."/></div><button onClick={()=>setPage('cart')} className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">🛒 Cart ({cart.reduce((s,i)=>s+i.qty,0)})</button></div><div className="mx-auto hidden max-w-7xl flex-wrap gap-2 px-6 pb-4 lg:flex">{['home','shop','product','cart','checkout','supplier','delivery','returns','tracking','faq','about','contact'].map(id=><Nav key={id} id={id}>{id[0].toUpperCase()+id.slice(1)}</Nav>)}</div></header><main className="mx-auto max-w-7xl px-6 py-10">
{page==='home'&&<div className="space-y-14"><section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><div className="mb-4 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">Live test store</div><h1 className="max-w-3xl text-5xl font-black tracking-tight md:text-6xl">Irish trade tools, fixings and Paslode essentials.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Sitebox.ie is built for trade buyers, repeat consumables, and a fast checkout experience.</p><div className="mt-8 flex gap-3"><button onClick={()=>setPage('shop')} className="rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white">Shop Products</button><button onClick={()=>open(PRODUCTS[0])} className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold">View Featured Product</button></div></div><div className="rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-slate-200"><div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 to-slate-700 p-7 text-white"><div className="text-sm text-slate-300">Featured offer</div><div className="mt-2 text-3xl font-black">{PRODUCTS[0].name}</div><div className="mt-6 flex items-end gap-3"><div className="text-4xl font-black">{euro(PRODUCTS[0].price)}</div><div className="pb-1 text-slate-400 line-through">{euro(PRODUCTS[0].oldPrice)}</div></div><button onClick={()=>add(PRODUCTS[0])} className="mt-6 rounded-2xl bg-white px-5 py-3 font-bold text-slate-900">Add Featured Product</button></div></div></section><section className="grid gap-4 md:grid-cols-4"><Policy title="Fast Delivery">Orders before 10:00am qualify for same-day dispatch.</Policy><Policy title="Secure Payment">Stripe and PayPal can be connected next.</Policy><Policy title="Returns Policy">14-day returns for unused items in original packaging.</Policy><Policy title="Order Tracking">Tracking page included for later courier integration.</Policy></section><section><h2 className="mb-6 text-3xl font-black">Featured products</h2><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{PRODUCTS.slice(0,6).map(p=><Card key={p.id} p={p} onView={open} onAdd={add} />)}</div></section></div>}
{page==='shop'&&<section><div className="mb-6"><h2 className="text-4xl font-black tracking-tight">Shop products</h2><p className="mt-2 text-slate-600">Browse the current Sitebox.ie starter catalogue.</p></div><div className="mb-6 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 md:flex-row md:items-center md:justify-between"><div className="flex flex-wrap gap-2">{CATEGORIES.map(c=><button key={c} onClick={()=>setCat(c)} className={`rounded-full px-4 py-2 text-sm font-semibold ${cat===c?'bg-slate-900 text-white':'bg-slate-100 text-slate-700'}`}>{c}</button>)}</div><select value={sort} onChange={e=>setSort(e.target.value)} className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-2"><option value="featured">Sort: Featured</option><option value="price-low">Price: Low to high</option><option value="price-high">Price: High to low</option><option value="name">Name</option></select></div><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map(p=><Card key={p.id} p={p} onView={open} onAdd={add} />)}</div></section>}
{page==='product'&&<section><div className="mb-6"><h2 className="text-4xl font-black tracking-tight">Product page</h2></div><div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:grid-cols-[1fr_0.95fr]"><div><div className="overflow-hidden rounded-[2rem] bg-slate-100"><Img p={sel} className="h-[420px] w-full object-cover"/></div></div><div><div className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-700">{sel.badge}</div><div className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500">{sel.category} · SKU {sel.sku}</div><h3 className="mt-2 text-4xl font-black tracking-tight">{sel.name}</h3><div className="mt-5 flex items-end gap-3"><div className="text-4xl font-black">{euro(sel.price)}</div><div className="pb-1 text-base text-slate-400 line-through">{euro(sel.oldPrice)}</div></div><div className="mt-3 text-sm font-semibold text-emerald-700">✔ In stock — ready for dispatch</div><div className="mt-1 text-sm text-slate-600">Order before 10:00am for same-day dispatch.</div><p className="mt-6 text-lg leading-8 text-slate-600">{sel.description}</p><div className="mt-6 grid gap-3 sm:grid-cols-3">{sel.features.map(f=><div key={f} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">{f}</div>)}</div><div className="mt-6 rounded-3xl bg-orange-50 p-5 ring-1 ring-orange-200"><div className="text-lg font-black">Frequently bought together</div><div className="mt-4 grid gap-3">{PRODUCTS.filter(p=>p.category==='Nails & Fuel'&&p.id!==sel.id).slice(0,3).map(p=><div key={p.id} className="flex items-center justify-between rounded-2xl bg-white p-3 ring-1 ring-slate-200"><div><div className="text-sm font-bold">{p.name}</div><div className="text-xs text-slate-500">SKU {p.sku}</div></div><button onClick={()=>add(p)} className="rounded-xl bg-orange-500 px-3 py-2 text-xs font-bold text-white">Add</button></div>)}</div></div><div className="mt-8 flex gap-3"><button onClick={()=>add(sel)} className="flex-1 rounded-2xl bg-slate-900 px-6 py-4 font-bold text-white">Add to Cart</button><button onClick={()=>setPage('checkout')} className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-bold">Buy Now</button></div></div></div></section>}
{page==='cart'&&<section><h2 className="mb-6 text-4xl font-black">Cart</h2><div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">{items.length===0?<div className="rounded-3xl bg-slate-50 p-8 text-center">Your cart is empty.</div>:<div className="space-y-4">{items.map(i=><div key={i.productId} className="grid gap-4 rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200 sm:grid-cols-[120px_1fr_auto] sm:items-center"><Img p={i.product} className="h-28 w-full rounded-2xl object-cover"/><div><div className="text-lg font-bold">{i.product.name}</div><div className="text-sm text-slate-500">SKU {i.product.sku}</div><div className="mt-4 flex gap-3"><button onClick={()=>qty(i.productId,Math.max(1,i.qty-1))} className="rounded-xl border px-3">−</button><span>{i.qty}</span><button onClick={()=>qty(i.productId,i.qty+1)} className="rounded-xl border px-3">+</button><button onClick={()=>remove(i.productId)} className="text-sm font-semibold text-red-600">Remove</button></div></div><div className="text-right"><div className="text-xl font-black">{euro(i.product.price*i.qty)}</div></div></div>)}</div>}</div><div className="h-fit rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200"><div className="text-2xl font-black">Order summary</div><div className="mt-5 space-y-3 text-sm"><div className="flex justify-between"><span>Subtotal</span><b>{euro(subtotal)}</b></div><div className="flex justify-between"><span>Shipping</span><b>{shipping===0?'Free':euro(shipping)}</b></div><div className="flex justify-between border-t pt-3"><b>Total</b><span className="text-2xl font-black">{euro(total)}</span></div></div><button onClick={()=>setPage('checkout')} className="mt-6 w-full rounded-2xl bg-slate-900 px-6 py-4 font-bold text-white">Proceed to Checkout</button></div></div></section>}
{page==='checkout'&&<section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200"><h2 className="text-4xl font-black">Checkout</h2><p className="mt-2 text-slate-600">Test checkout page. Stripe and PayPal will be connected in the payments phase.</p><button onClick={()=>setPage('confirmation')} className="mt-6 rounded-2xl bg-slate-900 px-6 py-4 font-bold text-white">Place Test Order</button></section>}
{page==='confirmation'&&<section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200"><h2 className="text-4xl font-black text-emerald-700">✓ Order placed successfully</h2><p className="mt-2 text-slate-600">Test confirmation flow.</p></section>}
{page==='supplier'&&<section><h2 className="mb-6 text-4xl font-black">Automatic supplier order email</h2><div className="grid gap-8 lg:grid-cols-2"><div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200"><select value={supplier} onChange={e=>setSupplier(e.target.value)} className="w-full rounded-2xl border p-3">{SUPPLIERS.map(s=><option key={s.id} value={s.id}>{s.name} — {s.email}</option>)}</select><textarea rows={5} value={note} onChange={e=>setNote(e.target.value)} className="mt-4 w-full rounded-2xl border p-3"/><a href={mailto} className="mt-4 inline-flex w-full justify-center rounded-2xl bg-slate-900 px-6 py-4 font-bold text-white">Open Email Draft</a></div><pre className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 whitespace-pre-wrap">{emailBody}</pre></div></section>}
{['delivery','returns','tracking','faq','about','contact'].includes(page)&&<section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200"><h2 className="text-4xl font-black">{page[0].toUpperCase()+page.slice(1)}</h2><p className="mt-4 text-slate-600">Sitebox.ie trade information page. Contact: stevemcevoyservices@gmail.com · 086 255 8941</p></section>}
</main><footer className="border-t border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-6 py-10"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 font-black text-white">S</div><div><div className="text-2xl font-black">Sitebox.ie</div><div className="text-xs text-slate-500">Trade Tools & Fixings</div></div></div></div></footer></div>}
