import { useMemo, useState } from "react";

type IconName =
  | "arrow"
  | "bag"
  | "box"
  | "chart"
  | "check"
  | "chevron"
  | "heart"
  | "menu"
  | "message"
  | "search"
  | "spark"
  | "upload"
  | "user"
  | "x";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  bag: <><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
  box: <><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="m4 7 8 4v10l-8-4V7Zm16 0-8 4v10l8-4V7Z" /></>,
  chart: <><path d="M4 19V9m6 10V5m6 14v-7m4 7H2" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m8 10 4 4 4-4" />,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  spark: <><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></>,
  upload: <><path d="M12 16V4m-5 5 5-5 5 5" /><path d="M5 14v6h14v-6" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  x: <><path d="m6 6 12 12M18 6 6 18" /></>,
};

function Icon({ name, size = 20, filled = false }: { name: IconName; size?: number; filled?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill={filled ? "currentColor" : "none"}
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

const categories = [
  ["PERFUMES", "Fragancias originales e importadas", "01"],
  ["GORRAS", "Drops, viseras y clásicos", "02"],
  ["AURICULARES", "Audio que rota rápido", "03"],
  ["CELULARES", "Equipos nuevos y reacondicionados", "04"],
  ["STREETWEAR", "Remeras, buzos y pantalones", "05"],
  ["SNEAKERS", "Pares que todos buscan", "06"],
  ["MOCHILAS", "Urbano, viaje y estudio", "07"],
  ["ELECTRÓNICA", "Gadgets y accesorios", "08"],
];

const products = [
  {
    name: "Air Street / White Orange",
    category: "SNEAKERS",
    price: 48200,
    retail: 78900,
    margin: 39,
    min: 3,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    name: "Headphones Pro Black",
    category: "ELECTRÓNICA",
    price: 21900,
    retail: 38900,
    margin: 44,
    min: 5,
    image:
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    name: "High Top Concrete",
    category: "SNEAKERS",
    price: 39500,
    retail: 64900,
    margin: 39,
    min: 3,
    image:
      "https://images.unsplash.com/photo-1578269174432-a8073d86c2e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
];

const perfumeProducts = [
  {
    name: "Noir Intense 100ml",
    family: "AMADERADO",
    gender: "HOMBRE",
    price: 28900,
    retail: 52900,
    margin: 45,
    min: 3,
    stock: 42,
    image: "https://images.unsplash.com/photo-1624811742200-69166e7b7bcc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
  {
    name: "Blue Night 100ml",
    family: "FRESCO",
    gender: "HOMBRE",
    price: 34200,
    retail: 59900,
    margin: 43,
    min: 3,
    stock: 18,
    image: "https://images.unsplash.com/photo-1732828912093-a776288edfed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
  {
    name: "Velvet Oud 80ml",
    family: "ORIENTAL",
    gender: "UNISEX",
    price: 31500,
    retail: 57900,
    margin: 46,
    min: 4,
    stock: 31,
    image: "https://images.unsplash.com/photo-1664470740442-f5de3e512e8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
  {
    name: "Leather District 100ml",
    family: "CUERO",
    gender: "UNISEX",
    price: 39800,
    retail: 68900,
    margin: 42,
    min: 3,
    stock: 12,
    image: "https://images.unsplash.com/photo-1654617058572-f1f473581778?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
  {
    name: "Ocean Muse 90ml",
    family: "FLORAL",
    gender: "MUJER",
    price: 26900,
    retail: 48900,
    margin: 45,
    min: 5,
    stock: 56,
    image: "https://images.unsplash.com/photo-1593688471439-ec139fc55fb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
  {
    name: "Urban Black 100ml",
    family: "ESPECIADO",
    gender: "HOMBRE",
    price: 29700,
    retail: 54900,
    margin: 46,
    min: 3,
    stock: 24,
    image: "https://images.unsplash.com/photo-1618261325436-dc799dca3874?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
  {
    name: "Wild Cedar 100ml",
    family: "AMADERADO",
    gender: "UNISEX",
    price: 36500,
    retail: 64900,
    margin: 44,
    min: 3,
    stock: 15,
    image: "https://images.unsplash.com/photo-1637257073432-8da762a87b36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
  {
    name: "Electric Rose 75ml",
    family: "FLORAL",
    gender: "MUJER",
    price: 24800,
    retail: 45900,
    margin: 46,
    min: 6,
    stock: 63,
    image: "https://images.unsplash.com/photo-1705936118918-870095881e61?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
];

const money = new Intl.NumberFormat("es-AR");

const supplierApplications = [
  {
    id: 1,
    business: "Distrito Fragancias",
    owner: "Camila Torres",
    email: "camila@distritofragancias.com",
    phone: "+54 9 11 4588 2091",
    location: "Flores, CABA",
    taxId: "CUIT 27-38492104-3",
    since: "Solicitud recibida hace 2 h",
    description: "Importadora de perfumería selectiva y equivalencias premium. Venta mayorista desde 2019.",
    image: perfumeProducts[0].image,
    catalog: perfumeProducts.slice(0, 5),
  },
  {
    id: 2,
    business: "Block Supply",
    owner: "Nicolás Peralta",
    email: "ventas@blocksupply.com",
    phone: "+54 9 351 611 9034",
    location: "Córdoba Capital",
    taxId: "CUIT 20-41093382-7",
    since: "Solicitud recibida ayer",
    description: "Distribuidor de streetwear, gorras y accesorios urbanos con stock nacional.",
    image: products[2].image,
    catalog: products,
  },
  {
    id: 3,
    business: "Norte Tech",
    owner: "Valentina Suárez",
    email: "hola@nortetech.ar",
    phone: "+54 9 381 503 4490",
    location: "San Miguel de Tucumán",
    taxId: "CUIT 27-39746218-5",
    since: "Solicitud recibida hace 3 días",
    description: "Tecnología de consumo, audio y accesorios con garantía oficial y despacho en 24 horas.",
    image: products[1].image,
    catalog: products.slice(1, 3),
  },
];

const extraMarketplaceProducts = [
  {
    name: "District Cap Black",
    category: "GORRAS",
    price: 8900,
    retail: 16900,
    margin: 47,
    min: 8,
    rating: 4.8,
    discount: 18,
    image: "https://images.unsplash.com/photo-1783310418495-aa53b0a74a05?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
  {
    name: "Concrete Hoodie Heavy",
    category: "STREETWEAR",
    price: 22400,
    retail: 41900,
    margin: 47,
    min: 5,
    rating: 4.7,
    discount: 12,
    image: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
  {
    name: "Urban Pack 24L",
    category: "MOCHILAS",
    price: 18700,
    retail: 34900,
    margin: 46,
    min: 4,
    rating: 4.5,
    discount: 20,
    image: "https://images.unsplash.com/photo-1529266417172-5a552bc39ab9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
  {
    name: "Smartphone Pro 256GB",
    category: "CELULARES",
    price: 589000,
    retail: 749000,
    margin: 21,
    min: 2,
    rating: 4.9,
    discount: 10,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
  {
    name: "Street Tee Oversize",
    category: "STREETWEAR",
    price: 11200,
    retail: 22900,
    margin: 51,
    min: 8,
    rating: 4.4,
    discount: 25,
    image: "https://images.unsplash.com/photo-1512977141980-8cc662e38a0c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
  },
];

function ExplorePage({
  initialCategory,
  onHome,
  onLogin,
}: {
  initialCategory: string;
  onHome: () => void;
  onLogin: () => void;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory || "TODAS");
  const [price, setPrice] = useState("TODOS");
  const [discount, setDiscount] = useState("0");
  const [rating, setRating] = useState("0");
  const [sort, setSort] = useState("destacados");
  const [filterOpen, setFilterOpen] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);

  const marketplaceProducts = [
    ...perfumeProducts.map((item, index) => ({
      ...item,
      category: "PERFUMES",
      rating: [4.9, 4.8, 4.6, 4.9, 4.5, 4.7, 4.6, 4.8][index],
      discount: [20, 15, 25, 10, 30, 18, 12, 22][index],
    })),
    ...products.map((item, index) => ({
      ...item,
      rating: [4.9, 4.7, 4.6][index],
      discount: [15, 20, 12][index],
    })),
    ...extraMarketplaceProducts,
  ];

  const filtered = marketplaceProducts
    .filter((item) => {
      const matchesQuery = `${item.name} ${item.category}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "TODAS" || item.category === category;
      const matchesPrice = price === "TODOS" || item.price <= Number(price);
      return matchesQuery && matchesCategory && matchesPrice && item.discount >= Number(discount) && item.rating >= Number(rating);
    })
    .sort((a, b) => {
      if (sort === "precio-asc") return a.price - b.price;
      if (sort === "precio-desc") return b.price - a.price;
      if (sort === "descuento") return b.discount - a.discount;
      if (sort === "rating") return b.rating - a.rating;
      return b.margin - a.margin;
    });

  const clearFilters = () => {
    setQuery("");
    setCategory("TODAS");
    setPrice("TODOS");
    setDiscount("0");
    setRating("0");
  };

  return (
    <main className="explore-page">
      <div className="top-strip"><div className="ticker">CATÁLOGO MAYORISTA <span>✦</span> STOCK REAL <span>✦</span> MARGEN PARA CRECER <span>✦</span> ENVÍOS A TODO EL PAÍS</div></div>
      <header className="explore-header">
        <button className="brand" onClick={onHome}>STREET<span>WHOLE</span><b>.</b></button>
        <div className="explore-nav">
          <button onClick={onHome}><Icon name="arrow" /> VOLVER AL INICIO</button>
          <button className="explore-login" onClick={onLogin}><Icon name="user" /> INGRESAR</button>
        </div>
      </header>

      <section className="explore-hero">
        <div className="section-shell">
          <span className="section-number">MARKET / TODOS LOS DROPS</span>
          <h1>EXPLORÁ.<br /><em>ENCONTRÁ.</em> REVENDÉ.</h1>
          <p>Productos mayoristas con stock verificado, márgenes transparentes y proveedores listos para despachar.</p>
          <label className="explore-search">
            <Icon name="search" size={25} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="¿Qué querés revender hoy?" />
            <span>{filtered.length} RESULTADOS</span>
          </label>
        </div>
      </section>

      <div className="explore-body section-shell">
        <button className="mobile-filter-toggle" onClick={() => setFilterOpen(!filterOpen)}>
          FILTROS {filterOpen ? "— CERRAR" : `— ${category === "TODAS" ? "VER TODOS" : category}`}
        </button>
        <aside className={filterOpen ? "explore-filters open" : "explore-filters"}>
          <div className="filter-title"><strong>FILTRAR PRODUCTOS</strong><button onClick={clearFilters}>LIMPIAR</button></div>
          <fieldset>
            <legend>CATEGORÍA</legend>
            {["TODAS", ...categories.map(([name]) => name)].map((name) => (
              <label key={name}>
                <input type="radio" name="category" checked={category === name} onChange={() => setCategory(name)} />
                <span>{name}</span>
                <small>{name === "TODAS" ? marketplaceProducts.length : marketplaceProducts.filter((item) => item.category === name).length}</small>
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>PRECIO MAYORISTA</legend>
            <select value={price} onChange={(event) => setPrice(event.target.value)}>
              <option value="TODOS">Todos los precios</option>
              <option value="15000">Hasta $15.000</option>
              <option value="30000">Hasta $30.000</option>
              <option value="50000">Hasta $50.000</option>
              <option value="100000">Hasta $100.000</option>
              <option value="600000">Hasta $600.000</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>DESCUENTO MÍNIMO</legend>
            {[0, 10, 20, 25].map((value) => (
              <label key={value}>
                <input type="radio" name="discount" checked={discount === String(value)} onChange={() => setDiscount(String(value))} />
                <span>{value === 0 ? "Todos" : `${value}% o más`}</span>
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>CALIFICACIÓN</legend>
            {[0, 4, 4.5, 4.8].map((value) => (
              <label key={value}>
                <input type="radio" name="rating" checked={rating === String(value)} onChange={() => setRating(String(value))} />
                <span className="rating-filter">{value === 0 ? "Todas" : `★ ${value} o más`}</span>
              </label>
            ))}
          </fieldset>
          <button className="apply-mobile" onClick={() => setFilterOpen(false)}>VER {filtered.length} PRODUCTOS</button>
        </aside>

        <section className="explore-results">
          <div className="explore-results-head">
            <div><span>CATÁLOGO / {category}</span><strong>{filtered.length} PRODUCTOS</strong></div>
            <label>ORDENAR POR
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="destacados">Destacados</option>
                <option value="precio-asc">Menor precio</option>
                <option value="precio-desc">Mayor precio</option>
                <option value="descuento">Mayor descuento</option>
                <option value="rating">Mejor calificados</option>
              </select>
            </label>
          </div>
          <div className="explore-grid">
            {filtered.map((item) => {
              const isSaved = saved.includes(item.name);
              return (
                <article className="explore-product" key={`${item.category}-${item.name}`}>
                  <div className="explore-product-image">
                    <img src={item.image} alt={item.name} />
                    <span className="discount-tag">-{item.discount}%</span>
                    <button
                      className={isSaved ? "favorite active" : "favorite"}
                      onClick={() => setSaved((current) => isSaved ? current.filter((name) => name !== item.name) : [...current, item.name])}
                      aria-label={isSaved ? "Quitar de favoritos" : "Agregar a favoritos"}
                    >
                      <Icon name="heart" filled={isSaved} />
                    </button>
                  </div>
                  <div className="explore-product-info">
                    <div className="product-meta"><span>{item.category}</span><b>★ {item.rating}</b></div>
                    <h2>{item.name}</h2>
                    <div className="explore-pricing">
                      <div><small>MAYORISTA</small><strong>${money.format(item.price)}</strong></div>
                      <div><small>VENTA SUG.</small><del>${money.format(item.retail)}</del></div>
                    </div>
                    <div className="explore-margin"><span>MARGEN ESTIMADO</span><strong>+{item.margin}%</strong></div>
                    <footer><span><Icon name="box" size={15} /> MÍN. {item.min} U.</span><button>VER PRODUCTO <Icon name="arrow" size={16} /></button></footer>
                  </div>
                </article>
              );
            })}
            {filtered.length === 0 && <div className="explore-empty"><Icon name="search" size={35} /><h2>NO HAY DROPS CON ESOS FILTROS</h2><p>Probá cambiando el precio, descuento o calificación.</p><button onClick={clearFilters}>LIMPIAR FILTROS</button></div>}
          </div>
        </section>
      </div>
    </main>
  );
}

function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<"overview" | "suppliers" | "catalog" | "settings">("overview");
  const [selectedSupplier, setSelectedSupplier] = useState(0);
  const [approved, setApproved] = useState<number[]>([]);
  const [rejected, setRejected] = useState<number[]>([]);
  const [catalogQuery, setCatalogQuery] = useState("");
  const [catalogCategory, setCatalogCategory] = useState("TODOS");

  const allCatalog = [
    ...perfumeProducts.map((item) => ({ ...item, category: "PERFUMES", provider: "Distrito Fragancias" })),
    ...products.map((item) => ({
      ...item,
      family: item.category,
      gender: "UNISEX",
      stock: 28,
      category: item.category,
      provider: item.category === "ELECTRÓNICA" ? "Norte Tech" : "Block Supply",
    })),
  ];

  const visibleCatalog = allCatalog.filter((item) => {
    const text = `${item.name} ${item.category} ${item.provider}`.toLowerCase();
    return text.includes(catalogQuery.toLowerCase()) && (catalogCategory === "TODOS" || item.category === catalogCategory);
  });

  const supplier = supplierApplications[selectedSupplier];
  const pendingCount = supplierApplications.length - approved.length - rejected.length;

  return (
    <main className="admin-app">
      <aside className="admin-sidebar">
        <div className="admin-logo">STREET<span>WHOLE</span><b>.</b><small>ADMIN</small></div>
        <nav aria-label="Panel administrativo">
          <button className={tab === "overview" ? "active" : ""} onClick={() => setTab("overview")}><Icon name="chart" /><span>Resumen</span></button>
          <button className={tab === "suppliers" ? "active" : ""} onClick={() => setTab("suppliers")}><Icon name="user" /><span>Proveedores</span><i>{pendingCount}</i></button>
          <button className={tab === "catalog" ? "active" : ""} onClick={() => setTab("catalog")}><Icon name="bag" /><span>Catálogo</span></button>
          <button className={tab === "settings" ? "active" : ""} onClick={() => setTab("settings")}><Icon name="spark" /><span>Configuración</span></button>
        </nav>
        <button className="admin-logout" onClick={onLogout}><Icon name="arrow" /> Cerrar sesión</button>
      </aside>

      <section className="admin-content">
        <header className="admin-header">
          <div>
            <span>CONTROL CENTRAL / STREETWHOLE</span>
            <h1>{tab === "overview" ? "RESUMEN" : tab === "suppliers" ? "PROVEEDORES" : tab === "catalog" ? "CATÁLOGO GLOBAL" : "CONFIGURACIÓN"}</h1>
          </div>
          <div className="admin-user"><span><b>ADMIN</b>Super administrador</span><strong>A</strong></div>
        </header>

        {tab === "overview" && (
          <div className="admin-overview">
            <div className="admin-stats">
              <article><span>VENTAS DEL MES</span><strong>$18.4M</strong><small>↑ 18.2% vs. mes anterior</small></article>
              <article className="yellow"><span>PROVEEDORES PENDIENTES</span><strong>{String(pendingCount).padStart(2, "0")}</strong><button onClick={() => setTab("suppliers")}>REVISAR AHORA <Icon name="arrow" size={16} /></button></article>
              <article><span>PRODUCTOS ACTIVOS</span><strong>{allCatalog.length + 1247}</strong><small>46 publicados esta semana</small></article>
              <article className="dark"><span>USUARIOS ACTIVOS</span><strong>28.4K</strong><small>↑ 742 nuevos registros</small></article>
            </div>
            <div className="admin-overview-grid">
              <article className="admin-chart-card">
                <div><span>VOLUMEN DE OPERACIONES</span><b>ÚLTIMOS 7 DÍAS</b></div>
                <div className="admin-bars">{[42, 65, 52, 78, 69, 88, 95].map((height, index) => <i key={index} style={{ height: `${height}%` }}><small>{["L", "M", "X", "J", "V", "S", "D"][index]}</small></i>)}</div>
              </article>
              <article className="admin-activity">
                <div><span>ACTIVIDAD RECIENTE</span><button>VER TODO</button></div>
                {[
                  ["Distrito Fragancias", "Nueva solicitud de proveedor", "Hace 2 h"],
                  ["Air Street / White Orange", "Producto actualizado", "Hace 4 h"],
                  ["Pedido #SW-8291", "Venta mayorista confirmada", "Hace 6 h"],
                  ["Norte Tech", "Documentación cargada", "Ayer"],
                ].map(([title, text, time]) => <p key={title}><i /><span><strong>{title}</strong>{text}</span><small>{time}</small></p>)}
              </article>
            </div>
          </div>
        )}

        {tab === "suppliers" && (
          <div className="supplier-admin">
            <div className="supplier-list">
              <div className="admin-search"><Icon name="search" size={18} /><input placeholder="Buscar proveedor..." /></div>
              <div className="supplier-list-title"><span>SOLICITUDES</span><b>{pendingCount} PENDIENTES</b></div>
              {supplierApplications.map((item, index) => {
                const status = approved.includes(item.id) ? "APROBADO" : rejected.includes(item.id) ? "RECHAZADO" : "PENDIENTE";
                return (
                  <button className={selectedSupplier === index ? "active" : ""} onClick={() => setSelectedSupplier(index)} key={item.id}>
                    <img src={item.image} alt="" />
                    <span><strong>{item.business}</strong><small>{item.owner} · {item.location}</small></span>
                    <i className={status.toLowerCase()}>{status}</i>
                  </button>
                );
              })}
            </div>
            <div className="supplier-review">
              <div className="review-banner">
                <div className="review-photo"><img src={supplier.image} alt={`Identidad visual de ${supplier.business}`} /></div>
                <div><span>SOLICITUD DE ALTA</span><h2>{supplier.business}</h2><p>{supplier.description}</p></div>
              </div>
              <div className="provider-data">
                <div><span>TITULAR</span><strong>{supplier.owner}</strong></div>
                <div><span>EMAIL</span><strong>{supplier.email}</strong></div>
                <div><span>TELÉFONO</span><strong>{supplier.phone}</strong></div>
                <div><span>UBICACIÓN</span><strong>{supplier.location}</strong></div>
                <div><span>IDENTIFICACIÓN FISCAL</span><strong>{supplier.taxId}</strong></div>
                <div><span>INGRESO</span><strong>{supplier.since}</strong></div>
              </div>
              <div className="provider-docs">
                <span>DOCUMENTACIÓN PRESENTADA</span>
                <div><p><Icon name="check" size={16} /> Constancia fiscal verificada</p><p><Icon name="check" size={16} /> Identidad del titular verificada</p><p><Icon name="check" size={16} /> Cuenta bancaria validada</p></div>
              </div>
              <div className="provider-catalog-head"><div><span>CATÁLOGO DECLARADO</span><strong>{supplier.catalog.length} PRODUCTOS</strong></div><small>Revisá precios y stock antes de aprobar</small></div>
              <div className="provider-catalog">
                {supplier.catalog.map((item) => (
                  <article key={item.name}>
                    <img src={item.image} alt={item.name} />
                    <div><span>{("family" in item ? item.family : item.category)}</span><strong>{item.name}</strong><small>Mayorista: ${money.format(item.price)} · Mín. {item.min} u.</small></div>
                    <b>+{item.margin}%</b>
                  </article>
                ))}
              </div>
              <div className="review-actions">
                <button className="reject" onClick={() => { setRejected((items) => [...new Set([...items, supplier.id])]); setApproved((items) => items.filter((id) => id !== supplier.id)); }}>RECHAZAR SOLICITUD</button>
                <button className="approve" onClick={() => { setApproved((items) => [...new Set([...items, supplier.id])]); setRejected((items) => items.filter((id) => id !== supplier.id)); }}><Icon name="check" /> CONFIRMAR PROVEEDOR</button>
              </div>
            </div>
          </div>
        )}

        {tab === "catalog" && (
          <div className="admin-catalog">
            <div className="admin-catalog-tools">
              <label><Icon name="search" /><input value={catalogQuery} onChange={(event) => setCatalogQuery(event.target.value)} placeholder="Buscar producto, proveedor o categoría..." /></label>
              <select value={catalogCategory} onChange={(event) => setCatalogCategory(event.target.value)}>
                {["TODOS", "PERFUMES", "SNEAKERS", "ELECTRÓNICA"].map((category) => <option key={category}>{category}</option>)}
              </select>
              <button><Icon name="upload" /> NUEVO PRODUCTO</button>
            </div>
            <div className="catalog-table-head"><span>PRODUCTO</span><span>PROVEEDOR</span><span>PRECIO</span><span>STOCK</span><span>MARGEN</span><span>ESTADO</span></div>
            <div className="catalog-table">
              {visibleCatalog.map((item) => (
                <article key={`${item.provider}-${item.name}`}>
                  <div className="catalog-product"><img src={item.image} alt="" /><span><strong>{item.name}</strong><small>{item.category}</small></span></div>
                  <span>{item.provider}</span>
                  <strong>${money.format(item.price)}</strong>
                  <span>{item.stock} u.</span>
                  <b>+{item.margin}%</b>
                  <i>ACTIVO</i>
                </article>
              ))}
            </div>
            <div className="catalog-table-footer"><span>Mostrando {visibleCatalog.length} de {allCatalog.length} productos</span><button>EXPORTAR CATÁLOGO</button></div>
          </div>
        )}

        {tab === "settings" && (
          <div className="admin-settings">
            <article><span>CONFIGURACIÓN GENERAL</span><h2>DATOS DEL MARKETPLACE</h2><label>Nombre público<input defaultValue="STREETWHOLE" /></label><label>Email de soporte<input defaultValue="hola@streetwhole.com" /></label><label>Comisión de plataforma<input defaultValue="6.5%" /></label><button>GUARDAR CAMBIOS</button></article>
            <article><span>REGLAS MAYORISTAS</span><h2>OPERACIÓN</h2><label>Compra mínima global<input defaultValue="$25.000" /></label><label>Tiempo máximo de respuesta<input defaultValue="24 horas" /></label><label className="setting-switch"><input type="checkbox" defaultChecked /><span>Requerir verificación de proveedores</span></label><label className="setting-switch"><input type="checkbox" defaultChecked /><span>Revisión manual de productos</span></label><button>ACTUALIZAR REGLAS</button></article>
          </div>
        )}
      </section>
    </main>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "explore">("home");
  const [exploreCategory, setExploreCategory] = useState("TODAS");
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [authMessage, setAuthMessage] = useState("");
  const [authRole, setAuthRole] = useState<"buyer" | "supplier">("buyer");
  const [supplierPhoto, setSupplierPhoto] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeRole, setActiveRole] = useState<"buyer" | "supplier">("buyer");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([1]);
  const [perfumeFavorites, setPerfumeFavorites] = useState<number[]>([]);
  const [perfumeFilter, setPerfumeFilter] = useState("TODOS");
  const [maxPrice, setMaxPrice] = useState("Todos");
  const [minMargin, setMinMargin] = useState("Todos");

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesQuery = `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase());
        const matchesPrice = maxPrice === "Todos" || product.price <= Number(maxPrice);
        const matchesMargin = minMargin === "Todos" || product.margin >= Number(minMargin);
        return matchesQuery && matchesPrice && matchesMargin;
      }),
    [query, maxPrice, minMargin],
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openAuth = () => {
    setAuthOpen(true);
    setMenuOpen(false);
    setAuthMessage("");
  };

  const submitAuth = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (authMode === "login" && form.get("identity") === "Admin" && form.get("password") === "StreetWhole") {
      setAuthOpen(false);
      setIsAdmin(true);
      setAuthMessage("");
      return;
    }
    if (authMode === "register" && form.get("password") !== form.get("confirmPassword")) {
      setAuthMessage("Las contraseñas no coinciden.");
      return;
    }
    setAuthMessage(authMode === "login" ? "¡Listo! Tu sesión fue iniciada." : "¡Tu cuenta ya está lista para vender!");
  };

  const toggleFavorite = (index: number) => {
    setFavorites((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  const openExplore = (category = "TODAS") => {
    setExploreCategory(category);
    setCurrentPage("explore");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isAdmin) {
    return <AdminPanel onLogout={() => setIsAdmin(false)} />;
  }

  if (currentPage === "explore") {
    return (
      <ExplorePage
        initialCategory={exploreCategory}
        onHome={() => { setCurrentPage("home"); window.scrollTo({ top: 0 }); }}
        onLogin={() => { setCurrentPage("home"); setAuthOpen(true); }}
      />
    );
  }

  return (
    <main>
      <div className="top-strip">
        <div className="ticker">
          COMPRA MAYORISTA <span>✦</span> VENDÉ MÁS <span>✦</span> CONECTÁ DIRECTO <span>✦</span>
          COMPRA MAYORISTA <span>✦</span> VENDÉ MÁS
        </div>
      </div>

      <header className="site-header">
        <button className="brand" onClick={() => scrollTo("inicio")} aria-label="Ir al inicio">
          STREET<span>WHOLE</span><b>.</b>
        </button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Navegación principal">
          <button onClick={() => scrollTo("categorias")}>Categorías</button>
          <button onClick={() => openExplore()}>Explorar</button>
          <button onClick={() => scrollTo("comunidad")}>Comunidad</button>
          <button className="nav-login" onClick={openAuth}><Icon name="user" /> Ingresar</button>
          <button className="nav-cta" onClick={() => { setActiveRole("supplier"); scrollTo("panel"); }}>
            Vender ahora <Icon name="arrow" />
          </button>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "x" : "menu"} size={25} />
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span>HECHO PARA MOVER STOCK</span> #01 MARKETPLACE B2B</div>
          <h1>
            ENCONTRÁ PRODUCTOS
            <br />
            PARA <em>REVENDER</em> HOY
          </h1>
          <p>
            Conectamos tu próximo negocio con proveedores reales. Encontrá productos con margen, comprá mayorista y
            empezá a vender.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo("categorias")}>
              Ver categorías <Icon name="arrow" />
            </button>
            <button className="btn btn-ghost" onClick={() => { setActiveRole("supplier"); scrollTo("panel"); }}>
              <Icon name="upload" /> Subir productos
            </button>
          </div>
          <div className="hero-trust">
            <div><strong>+12K</strong><span>PRODUCTOS</span></div>
            <div><strong>840</strong><span>PROVEEDORES</span></div>
            <div><strong>24/7</strong><span>NUEVOS DROPS</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-frame">
            <img
              src="https://images.unsplash.com/photo-1603808033176-9d134e6f2c74?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1200"
              alt="Sneaker urbana sobre una superficie de cemento"
            />
          </div>
          <div className="hero-sticker sticker-yellow">HOT<br />DROP</div>
          <div className="hero-tag"><span>DESDE</span><strong>$39.500</strong><small>PRECIO MAYORISTA</small></div>
          <div className="scribble">Stock que<br />se mueve →</div>
        </div>
      </section>

      <section className="categories section-shell" id="categorias">
        <div className="section-heading">
          <div>
            <span className="section-number">01 / CATEGORÍAS</span>
            <h2>BUSCÁ TU<br /><em>PRÓXIMO HIT</em></h2>
          </div>
          <p>Todo lo que tiene salida, directo de proveedores mayoristas verificados.</p>
        </div>
        <div className="category-grid">
          {categories.map(([name, description, number]) => (
            <button
              className="category-card"
              key={name}
              onClick={() => openExplore(name)}
            >
              <span className="category-no">{number}</span>
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <span className="category-arrow"><Icon name="arrow" size={22} /></span>
            </button>
          ))}
        </div>
      </section>

      <section className="perfume-section" id="perfumes">
        <div className="section-shell">
          <div className="perfume-heading">
            <div>
              <span className="section-number light">DROP 01 / PERFUMES</span>
              <h2>AROMAS QUE<br /><em>DEJAN MARGEN.</em></h2>
            </div>
            <div className="perfume-intro">
              <p>Catálogo mayorista de perfumes con stock real, compra mínima baja y envío a todo el país.</p>
              <span><Icon name="check" size={15} /> PROVEEDORES VERIFICADOS</span>
            </div>
          </div>

          <div className="catalog-toolbar">
            <div className="catalog-chips" aria-label="Filtrar perfumes">
              {["TODOS", "HOMBRE", "MUJER", "UNISEX"].map((filter) => (
                <button
                  key={filter}
                  className={perfumeFilter === filter ? "active" : ""}
                  onClick={() => setPerfumeFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="catalog-meta">
              <span>{perfumeProducts.filter((item) => perfumeFilter === "TODOS" || item.gender === perfumeFilter).length} PRODUCTOS</span>
              <label>
                ORDENAR:
                <select defaultValue="margen">
                  <option value="margen">Mayor margen</option>
                  <option value="precio">Menor precio</option>
                  <option value="stock">Más stock</option>
                </select>
              </label>
            </div>
          </div>

          <div className="perfume-grid">
            {perfumeProducts
              .filter((item) => perfumeFilter === "TODOS" || item.gender === perfumeFilter)
              .map((perfume, index) => {
                const isFavorite = perfumeFavorites.includes(index);
                return (
                  <article className="perfume-card" key={perfume.name}>
                    <div className="perfume-image">
                      <img src={perfume.image} alt={`Perfume ${perfume.name}`} />
                      <span className="perfume-family">{perfume.family}</span>
                      <button
                        className={isFavorite ? "favorite active" : "favorite"}
                        onClick={() =>
                          setPerfumeFavorites((current) =>
                            isFavorite ? current.filter((item) => item !== index) : [...current, index],
                          )
                        }
                        aria-label={isFavorite ? "Quitar perfume de favoritos" : "Agregar perfume a favoritos"}
                      >
                        <Icon name="heart" filled={isFavorite} />
                      </button>
                      <span className="stock-label">{perfume.stock} EN STOCK</span>
                    </div>
                    <div className="perfume-info">
                      <div className="perfume-type"><span>EAU DE PARFUM</span><span>{perfume.gender}</span></div>
                      <h3>{perfume.name}</h3>
                      <div className="perfume-price">
                        <div><small>MAYORISTA</small><strong>${money.format(perfume.price)}</strong></div>
                        <div><small>PRECIO SUG.</small><del>${money.format(perfume.retail)}</del></div>
                        <span>+{perfume.margin}%</span>
                      </div>
                      <div className="perfume-action">
                        <span><Icon name="box" size={15} /> MÍNIMO {perfume.min} U.</span>
                        <button>VER DETALLE <Icon name="arrow" size={17} /></button>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
          <div className="catalog-note">
            <Icon name="spark" size={27} />
            <p><strong>¿NECESITÁS PRECIO POR VOLUMEN?</strong><span>Armá una lista y hablá directo con el proveedor.</span></p>
            <button><Icon name="message" size={18} /> HABLAR CON VENTAS</button>
          </div>
        </div>
      </section>

      <section className="search-section" id="buscar">
        <div className="section-shell">
          <span className="section-number light">02 / ENCONTRÁ. CALCULÁ. VENDÉ.</span>
          <h2>¿QUÉ QUERÉS <em>REVENDER?</em></h2>
          <div className="search-console">
            <label className="search-field">
              <Icon name="search" size={25} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscá sneakers, perfumes, celulares..."
                aria-label="Buscar productos"
              />
            </label>
            <div className="filter-row">
              <label>
                <span>PRECIO MÁXIMO</span>
                <select value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)}>
                  <option>Todos</option>
                  <option value="25000">Hasta $25.000</option>
                  <option value="40000">Hasta $40.000</option>
                  <option value="50000">Hasta $50.000</option>
                </select>
                <Icon name="chevron" size={16} />
              </label>
              <label>
                <span>MARGEN MÍNIMO</span>
                <select value={minMargin} onChange={(event) => setMinMargin(event.target.value)}>
                  <option>Todos</option>
                  <option value="30">+30%</option>
                  <option value="40">+40%</option>
                </select>
                <Icon name="chevron" size={16} />
              </label>
              <label>
                <span>PROVEEDOR</span>
                <select defaultValue="Verificados">
                  <option>Verificados</option>
                  <option>Todos</option>
                  <option>Top ventas</option>
                </select>
                <Icon name="chevron" size={16} />
              </label>
              <button className="search-button" aria-label="Aplicar búsqueda"><Icon name="arrow" size={26} /></button>
            </div>
          </div>

          <div className="results-head">
            <p><strong>{filteredProducts.length}</strong> OPORTUNIDADES ENCONTRADAS</p>
            <span>Ordenar: <b>Mayor margen</b></span>
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => {
              const originalIndex = products.indexOf(product);
              const isFavorite = favorites.includes(originalIndex);
              return (
                <article className="product-card" key={product.name}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <span className="margin-badge">+{product.margin}% MARGEN</span>
                    <button
                      className={isFavorite ? "favorite active" : "favorite"}
                      onClick={() => toggleFavorite(originalIndex)}
                      aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                    >
                      <Icon name="heart" filled={isFavorite} />
                    </button>
                  </div>
                  <div className="product-content">
                    <span className="product-category">{product.category} / STOCK INMEDIATO</span>
                    <h3>{product.name}</h3>
                    <div className="price-line">
                      <div><small>MAYORISTA</small><strong>${money.format(product.price)}</strong></div>
                      <div><small>VENTA SUG.</small><del>${money.format(product.retail)}</del></div>
                    </div>
                    <div className="product-footer">
                      <span><Icon name="box" size={16} /> Mín. {product.min} u.</span>
                      <button>VER PRODUCTO <Icon name="arrow" size={17} /></button>
                    </div>
                  </div>
                </article>
              );
            })}
            {filteredProducts.length === 0 && (
              <div className="no-results">
                <Icon name="search" size={34} />
                <h3>NO ENCONTRAMOS ESE DROP</h3>
                <button onClick={() => { setQuery(""); setMaxPrice("Todos"); setMinMargin("Todos"); }}>Limpiar filtros</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="platform section-shell" id="panel">
        <div className="platform-title">
          <span className="section-number">03 / TU NEGOCIO, TU PANEL</span>
          <h2>UNA PLATAFORMA.<br /><em>DOS FORMAS DE CRECER.</em></h2>
        </div>
        <div className="role-tabs" role="tablist" aria-label="Elegir tipo de usuario">
          <button className={activeRole === "buyer" ? "active" : ""} onClick={() => setActiveRole("buyer")}>
            QUIERO COMPRAR
          </button>
          <button className={activeRole === "supplier" ? "active" : ""} onClick={() => setActiveRole("supplier")}>
            SOY PROVEEDOR
          </button>
        </div>

        {activeRole === "buyer" ? (
          <div className="dashboard buyer-dashboard">
            <div className="dashboard-sidebar">
              <div className="mini-brand">SW<span>.</span></div>
              {[
                ["bag", "Explorar"],
                ["heart", "Favoritos"],
                ["chart", "Mi margen"],
                ["message", "Mensajes"],
              ].map(([icon, label], index) => (
                <button className={index === 1 ? "selected" : ""} key={label}>
                  <Icon name={icon as IconName} /><span>{label}</span>
                </button>
              ))}
            </div>
            <div className="dashboard-main">
              <div className="dash-head">
                <div><small>BUEN DÍA, MATEO</small><h3>TUS FAVORITOS</h3></div>
                <div className="avatar">MP</div>
              </div>
              <div className="dash-stats">
                <div><span>PRODUCTOS GUARDADOS</span><strong>12</strong><small>+3 esta semana</small></div>
                <div className="dark"><span>MARGEN POTENCIAL</span><strong>$184K</strong><small>Si vendés todo</small></div>
                <div><span>CHATS ACTIVOS</span><strong>04</strong><small>2 sin leer</small></div>
              </div>
              <div className="margin-tool">
                <div>
                  <span className="tiny-tag">CALCULADORA EXPRESS</span>
                  <h4>PROYECTÁ TU GANANCIA</h4>
                  <p>Inversión inicial</p>
                  <strong>$ 250.000</strong>
                  <div className="fake-slider"><i /></div>
                </div>
                <div className="margin-result">
                  <small>GANANCIA ESTIMADA</small>
                  <strong>$172.500</strong>
                  <span>CON UN MARGEN PROMEDIO DEL 41%</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="dashboard supplier-dashboard">
            <div className="supplier-intro">
              <span className="tiny-tag">PANEL PROVEEDOR</span>
              <h3>SUBÍ STOCK.<br />CERRÁ VENTAS.</h3>
              <p>Publicá en minutos, llegá a miles de revendedores y administrá todo desde un mismo lugar.</p>
              <button className="btn btn-primary"><Icon name="upload" /> Subir nuevo producto</button>
            </div>
            <div className="supplier-ui">
              <div className="dash-head">
                <div><small>RESUMEN / ÚLTIMOS 30 DÍAS</small><h3>TU TIENDA</h3></div>
                <span className="verified"><Icon name="check" size={14} /> VERIFICADO</span>
              </div>
              <div className="dash-stats">
                <div><span>VENTAS</span><strong>187</strong><small>↑ 24% vs. mes anterior</small></div>
                <div className="yellow"><span>FACTURACIÓN</span><strong>$4.8M</strong><small>Meta al 82%</small></div>
                <div><span>CONSULTAS</span><strong>26</strong><small>Respuesta: 8 min</small></div>
              </div>
              <div className="bar-chart">
                {[35, 58, 44, 72, 62, 86, 95].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="start-section">
        <div className="section-shell">
          <div className="start-heading">
            <div><span className="section-number light">04 / CERO EXCUSAS</span><h2>EMPEZÁ A<br /><em>EMPRENDER.</em></h2></div>
            <p>No hace falta saberlo todo. Hace falta arrancar. Te damos las herramientas.</p>
          </div>
          <div className="guide-grid">
            {[
              ["01", "ELEGÍ QUÉ VENDER", "Detectá productos con demanda y compará márgenes reales.", "5 MIN"],
              ["02", "CALCULÁ TU MARGEN", "Aprendé a poner precios sin perder plata en el camino.", "3 MIN"],
              ["03", "ARMÁ TU PRIMERA COMPRA", "Cuánto invertir, qué cantidad pedir y cómo negociar.", "7 MIN"],
              ["04", "PUBLICÁ Y VENDÉ", "Fotos, textos y canales para mover tu stock rápido.", "6 MIN"],
            ].map(([number, title, text, time], index) => (
              <article className={index === 1 ? "guide-card featured" : "guide-card"} key={number}>
                <div><span>{number}</span><small>{time} DE LECTURA</small></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <button>LEER GUÍA <Icon name="arrow" size={18} /></button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="community section-shell" id="comunidad">
        <div className="community-head">
          <div><span className="section-number">05 / GENTE QUE LA ESTÁ HACIENDO</span><h2>DE LA CALLE<br /><em>AL NEGOCIO.</em></h2></div>
          <div className="community-count"><strong>+28K</strong><span>PERSONAS YA<br />MUEVEN STOCK</span></div>
        </div>
        <div className="testimonial-wall">
          <article className="testimonial photo-card">
            <img
              src="https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700"
              alt="Emprendedor con auriculares en la ciudad"
            />
            <span className="tape">DESDE CÓRDOBA</span>
          </article>
          <article className="testimonial quote-card red">
            <span className="quote">“</span>
            <p>Arranqué con 5 auriculares. Hoy vendo más de 80 por mes y ya sumé celulares.</p>
            <footer><strong>LUCHO / 24</strong><span>@LUCHO.TECH</span></footer>
          </article>
          <article className="testimonial quote-card yellow rotate">
            <span className="sticker">NEGOCIO REAL</span>
            <p>“Lo mejor es ver el margen antes de comprar. Dejé de elegir productos a ciegas.”</p>
            <footer><strong>MALE / 29</strong><span>ROSARIO, SF</span></footer>
          </article>
          <article className="testimonial quote-card black">
            <Icon name="spark" size={32} />
            <p>Compré mi primer drop de gorras con $120K. Se fue completo en 9 días.</p>
            <footer><strong>NICO / 21</strong><span>@BLOCK.CAPS</span></footer>
          </article>
        </div>
      </section>

      <section className="final-cta">
        <div className="section-shell">
          <span className="scribble-label">TU PRÓXIMO NEGOCIO</span>
          <h2>NO ESPERES<br />EL MOMENTO.<br /><em>HACELO.</em></h2>
          <div>
            <p>Miles de productos, proveedores verificados y todo lo que necesitás para empezar.</p>
            <button className="btn btn-light" onClick={() => openExplore()}>Explorar productos <Icon name="arrow" /></button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main section-shell">
          <div className="footer-brand">
            <div className="brand static">STREET<span>WHOLE</span><b>.</b></div>
            <p>El marketplace mayorista para los que hacen que las cosas pasen.</p>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="whatsapp">
              <Icon name="message" /> HABLAR POR WHATSAPP
            </a>
          </div>
          <div className="footer-links">
            <div><strong>EXPLORAR</strong><a href="#categorias">Categorías</a><a href="#buscar">Productos</a><a href="#panel">Proveedores</a></div>
            <div><strong>AYUDA</strong><a href="#guias">Cómo comprar</a><a href="#guias">Cómo vender</a><a href="#faq">Preguntas frecuentes</a></div>
            <div><strong>CONTACTO</strong><a href="mailto:hola@streetwhole.com">hola@streetwhole.com</a><a href="#comunidad">Instagram</a><a href="#comunidad">TikTok</a></div>
          </div>
        </div>
        <div className="footer-bottom section-shell">
          <span>© 2025 STREETWHOLE</span><span>HECHO PARA LOS QUE EMPRENDEN.</span><span>TÉRMINOS / PRIVACIDAD</span>
        </div>
      </footer>

      {authOpen && (
        <div className="auth-backdrop" role="presentation" onMouseDown={() => setAuthOpen(false)}>
          <section
            className="auth-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="auth-art">
              <span className="auth-edition">MEMBER ACCESS / 2025</span>
              <div className="mini-brand">STREET<span>WHOLE</span><b>.</b></div>
              <h2>TU PRÓXIMO<br /><em>NEGOCIO</em><br />EMPIEZA ACÁ.</h2>
              <div className="auth-benefits">
                <span><Icon name="check" size={15} /> Guardá productos y listas</span>
                <span><Icon name="check" size={15} /> Hablá directo con proveedores</span>
                <span><Icon name="check" size={15} /> Calculá tu margen real</span>
              </div>
            </div>
            <div className="auth-panel">
              <button className="auth-close" onClick={() => setAuthOpen(false)} aria-label="Cerrar">
                <Icon name="x" />
              </button>
              <div className="auth-tabs">
                <button
                  className={authMode === "login" ? "active" : ""}
                  onClick={() => { setAuthMode("login"); setAuthMessage(""); }}
                >
                  INGRESAR
                </button>
                <button
                  className={authMode === "register" ? "active" : ""}
                  onClick={() => { setAuthMode("register"); setAuthMessage(""); }}
                >
                  CREAR CUENTA
                </button>
              </div>
              <span className="auth-kicker">{authMode === "login" ? "BIENVENIDO DE VUELTA" : "SUMATE A LA COMUNIDAD"}</span>
              <h2 id="auth-title">{authMode === "login" ? "INICIÁ SESIÓN" : "CREÁ TU CUENTA"}</h2>
              <p>{authMode === "login" ? "Ingresá para seguir moviendo tu negocio." : "Empezá como comprador o proveedor mayorista."}</p>
              <form onSubmit={submitAuth}>
                {authMode === "login" ? (
                  <>
                    <label><span>USUARIO O EMAIL</span><input required name="identity" placeholder="Tu usuario" autoComplete="username" /></label>
                    <label><span>CONTRASEÑA</span><input required name="password" type="password" placeholder="Tu contraseña" autoComplete="current-password" /></label>
                  </>
                ) : (
                  <>
                    <div className="account-type">
                      <span>¿CÓMO QUERÉS USAR STREETWHOLE?</span>
                      <div>
                        <button type="button" className={authRole === "buyer" ? "active" : ""} onClick={() => setAuthRole("buyer")}>
                          <Icon name="bag" size={18} /> COMPRAR
                        </button>
                        <button type="button" className={authRole === "supplier" ? "active" : ""} onClick={() => setAuthRole("supplier")}>
                          <Icon name="upload" size={18} /> PUBLICAR
                        </button>
                      </div>
                    </div>
                    {authRole === "supplier" ? (
                      <>
                        <label><span>NOMBRE COMPLETO</span><input required name="fullName" placeholder="Nombre del responsable" /></label>
                        <label><span>MAIL</span><input required name="email" type="email" placeholder="negocio@email.com" /></label>
                        <label><span>NOMBRE DEL NEGOCIO</span><input required name="business" placeholder="Nombre comercial" /></label>
                        <label className="photo-upload">
                          <span>FOTO DEL NEGOCIO O LOGO</span>
                          <div>
                            {supplierPhoto ? <img src={supplierPhoto} alt="Vista previa del negocio" /> : <Icon name="upload" size={22} />}
                            <strong>{supplierPhoto ? "CAMBIAR FOTO" : "SUBIR FOTO"}</strong>
                            <small>JPG o PNG · Máx. 5 MB</small>
                          </div>
                          <input
                            required
                            type="file"
                            accept="image/png,image/jpeg"
                            onChange={(event) => {
                              const file = event.target.files?.[0];
                              if (file) setSupplierPhoto(URL.createObjectURL(file));
                            }}
                          />
                        </label>
                      </>
                    ) : (
                      <label><span>USUARIO</span><input required name="username" placeholder="Elegí tu usuario" /></label>
                    )}
                    <label><span>CONTRASEÑA</span><input required name="password" type="password" minLength={6} placeholder="Mínimo 6 caracteres" autoComplete="new-password" /></label>
                    <label><span>CONFIRMAR CONTRASEÑA</span><input required name="confirmPassword" type="password" minLength={6} placeholder="Repetí tu contraseña" autoComplete="new-password" /></label>
                  </>
                )}
                <div className="auth-options">
                  <label><input type="checkbox" /> <span>Recordarme</span></label>
                  {authMode === "login" && <button type="button">Olvidé mi contraseña</button>}
                </div>
                <button className="auth-submit" type="submit">
                  {authMode === "login" ? "ENTRAR A MI CUENTA" : "CREAR CUENTA GRATIS"} <Icon name="arrow" />
                </button>
                {authMessage && <div className="auth-message"><Icon name="check" size={17} /> {authMessage}</div>}
              </form>
              <div className="auth-divider"><span>O CONTINUÁ CON</span></div>
              <div className="social-login">
                <button>G&nbsp;&nbsp; GOOGLE</button>
                <button>f&nbsp;&nbsp; FACEBOOK</button>
              </div>
              <small className="auth-legal">Al continuar, aceptás nuestros Términos y Política de privacidad.</small>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
