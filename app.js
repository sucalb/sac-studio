/* =========================================================
   SẮC Studio — tương tác cửa hàng
   ========================================================= */
(() => {
  const img = (id, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
  const CLOTHES = ['S', 'M', 'L', 'XL'];
  const SHOES = ['35', '36', '37', '38', '39', '40'];
  const CAT_LABEL = { nu: 'Nữ', nam: 'Nam', phukien: 'Phụ kiện', giay: 'Giày' };

  // Ảnh sản phẩm: nền trắng / sáng, chỉ trang phục hoặc nửa thân người
  const PRODUCTS = [
    { id: 'p01', name: 'Blazer Ngà Oversize', cat: 'nu', price: 2290000, img: '1632149877166-f75d49000351', tag: 'Mới', colors: [['Trắng ngà', '#f1ece2'], ['Đen', '#1a1a1a']], sizes: CLOTHES, out: ['XL'], rank: 1, added: 16,
      desc: 'Phom oversize vai đứng, vải tuytsi pha linen thoáng mát. Mặc cùng quần ống suông hoặc chân váy ngắn đều chuẩn.' },
    { id: 'p02', name: 'Áo Len Đỏ Retro', cat: 'nu', price: 890000, img: '1485230895905-ec40ba36b9bc', tag: 'Mới', colors: [['Đỏ cờ', '#c2412d'], ['Kem', '#efe6d4']], sizes: CLOTHES, rank: 2, added: 15,
      desc: 'Len cotton dệt kim dày dặn, cổ tròn bo gân. Gam đỏ cờ đặc trưng của mùa này.' },
    { id: 'p03', name: 'Áo Khoác Da Rebel', cat: 'nam', price: 3590000, img: '1551028719-00167b16eac5', tag: 'Bán chạy', colors: [['Đen', '#1a1a1a']], sizes: CLOTHES, out: ['S'], rank: 3, added: 6,
      desc: 'Da cừu thuộc mềm, khóa kéo lệch kiểu biker cổ điển. Càng mặc càng lên màu đẹp.' },
    { id: 'p04', name: 'Bomber Terracotta', cat: 'nam', price: 1490000, img: '1591047139829-d91aecb6caea', tag: 'Bán chạy', colors: [['Đất nung', '#b8714f'], ['Rêu', '#5b5f3c']], sizes: CLOTHES, rank: 4, added: 8,
      desc: 'Bomber dù lụa nhẹ, lót lưới thoáng khí. Bo gấu và cổ tay co giãn giữ form gọn gàng.' },
    { id: 'p05', name: 'Đầm Midi Bordeaux', cat: 'nu', price: 1490000, img: '1585487000160-6ebcfceb0d03', colors: [['Bordeaux', '#6b1f2a']], sizes: CLOTHES, rank: 5, added: 12,
      desc: 'Đầm nhung tăm cổ trụ, xếp ly eo, dáng xòe nhẹ tới bắp chân. Thanh lịch từ công sở tới tiệc tối.' },
    { id: 'p06', name: 'Áo Thun Neko Original', cat: 'nam', price: 450000, img: '1576566588028-4147f3842f27', tag: 'Mới', colors: [['Kem', '#ebe5d8'], ['Trắng', '#ffffff']], sizes: CLOTHES, rank: 6, added: 14,
      desc: 'Cotton 100% định lượng 250gsm, in lụa họa tiết mèo Neko phong cách poster retro Nhật.' },
    { id: 'p07', name: 'Đầm Ôm Đỏ Rực', cat: 'nu', price: 1290000, was: 1690000, img: '1612336307429-8a898d10e223', colors: [['Đỏ', '#c3232d']], sizes: CLOTHES, out: ['L'], rank: 7, added: 9,
      desc: 'Đầm body dài tay, cổ cao, xẻ tà táo bạo. Chất thun gân co giãn bốn chiều ôm dáng.' },
    { id: 'p08', name: 'Sơ Mi Denim Indigo', cat: 'nam', price: 790000, img: '1596755094514-f87e34085b2c', colors: [['Indigo', '#3d5a80'], ['Xanh nhạt', '#9fb4cf']], sizes: CLOTHES, rank: 8, added: 7,
      desc: 'Denim chambray mỏng nhẹ, túi ngực cổ điển, cúc ngọc trai. Mặc riêng hoặc khoác ngoài.' },
    { id: 'p09', name: 'Áo Len Cam Hoàng Hôn', cat: 'nu', price: 950000, was: 1290000, img: '1578587018452-892bacefd3f2', colors: [['Cam', '#e07a2c'], ['Vàng', '#f4c430']], sizes: CLOTHES, rank: 9, added: 5,
      desc: 'Len lông cừu pha, phom rộng, tay bồng nhẹ. Màu cam ấm áp như nắng chiều cuối thu.' },
    { id: 'p10', name: 'Blouse Trắng Ngà', cat: 'nu', price: 690000, img: '1583846783214-7229a91b20ed', colors: [['Trắng ngà', '#f4efe6']], sizes: CLOTHES, rank: 10, added: 11,
      desc: 'Lụa satin mềm rủ, cổ đức thanh lịch, tay dài bo chun. Dễ phối, dễ mặc mỗi ngày.' },
    { id: 'p11', name: 'Áo Thun Essential', cat: 'nam', price: 390000, img: '1521572163474-6864f9cf17ab', colors: [['Trắng', '#ffffff'], ['Đen', '#1a1a1a'], ['Xám', '#9a9a9a']], sizes: CLOTHES, rank: 11, added: 3,
      desc: 'Chiếc áo thun cơ bản hoàn hảo: cotton Supima, cổ bo dày không bai, phom vừa vặn.' },
    { id: 'p12', name: 'Quần Jogger Hồng Đất', cat: 'nu', price: 690000, was: 890000, img: '1594633312681-425c7b97ccd1', colors: [['Hồng đất', '#d9a593']], sizes: CLOTHES, rank: 12, added: 4,
      desc: 'Lụa dù mềm, cạp chun thắt dây, bo gấu. Thoải mái mà vẫn đủ chỉn chu để xuống phố.' },
    { id: 'p13', name: 'Túi Xách Xanh Ngọc', cat: 'phukien', price: 1890000, img: '1594223274512-ad4803739b7c', tag: 'Mới', colors: [['Xanh ngọc', '#1f7a7a'], ['Đỏ', '#c2412d']], sizes: ['One size'], rank: 13, added: 13,
      desc: 'Da bò thật, khóa kim loại mạ vàng, kèm dây đeo chéo tháo rời. Vừa điện thoại, ví và son.' },
    { id: 'p14', name: 'Túi Hộp Hồng Phấn', cat: 'phukien', price: 990000, was: 1390000, img: '1566150905458-1bf1fc113f0d', colors: [['Hồng phấn', '#e8b9b5']], sizes: ['One size'], rank: 14, added: 2,
      desc: 'Túi hộp nhỏ xinh với đường cắt chữ V tương phản, dây xích mảnh đeo vai.' },
    { id: 'p15', name: 'Sneaker Cổ Điển', cat: 'giay', price: 1590000, img: '1560769629-975ec94e6a86', colors: [['Trắng kem', '#f2efe8']], sizes: SHOES, rank: 15, added: 10,
      desc: 'Đế cao su lưu hóa, thân da lộn phối lưới. Thiết kế chạy bộ thập niên 80 tái sinh.' },
    { id: 'p16', name: 'Cao Gót Navy Mũi Nhọn', cat: 'giay', price: 1690000, img: '1515347619252-60a4bf4fff4f', colors: [['Navy', '#1f2a4a'], ['Đen', '#1a1a1a']], sizes: SHOES, out: ['40'], rank: 16, added: 1,
      desc: 'Da nhung mũi nhọn, gót 9cm có đệm êm. Kéo dài đôi chân trong mọi bộ cánh.' },
  ];

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const vnd = (n) => new Intl.NumberFormat('vi-VN').format(n) + '₫';
  const byId = (id) => PRODUCTS.find((p) => p.id === id);

  // ---------- Lưu trữ (an toàn khi bị chặn) ----------
  const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* bỏ qua */ } },
  };
  let cart = store.get('sac-cart', []);
  let wish = new Set(store.get('sac-wish', []));
  const state = { filter: 'all', sort: 'featured', query: '', wishOnly: false };

  // ---------- Toast ----------
  const toastEl = $('[data-toast]');
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-show'), 2400);
  }

  // ---------- Lưới sản phẩm ----------
  const grid = $('[data-grid]');
  const heart = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 21s-7.5-4.6-9.5-9.2C1 8.2 3.3 4.5 7 4.5c2.1 0 3.6 1.1 5 3 1.4-1.9 2.9-3 5-3 3.7 0 6 3.7 4.5 7.3C19.5 16.4 12 21 12 21z"/></svg>';

  function visibleProducts() {
    const q = state.query.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => {
      if (state.wishOnly && !wish.has(p.id)) return false;
      if (state.filter === 'sale') return !!p.was;
      if (state.filter !== 'all' && p.cat !== state.filter) return false;
      return true;
    });
    if (q) list = list.filter((p) => (p.name + ' ' + CAT_LABEL[p.cat] + ' ' + p.desc).toLowerCase().includes(q));
    const sorters = {
      featured: (a, b) => a.rank - b.rank,
      new: (a, b) => b.added - a.added,
      'price-asc': (a, b) => a.price - b.price,
      'price-desc': (a, b) => b.price - a.price,
    };
    return list.sort(sorters[state.sort]);
  }

  function priceHTML(p) {
    return p.was ? `<b>${vnd(p.price)}</b><s>${vnd(p.was)}</s>` : `<b>${vnd(p.price)}</b>`;
  }

  function renderGrid() {
    const list = visibleProducts();
    $('[data-result-count]').textContent = `${list.length} sản phẩm${state.wishOnly ? ' yêu thích' : ''}`;
    $('[data-empty]').hidden = list.length > 0;
    grid.innerHTML = list.map((p, i) => {
      const tags = [];
      if (p.was) tags.push(`<span class="tag tag--sale">-${Math.round((1 - p.price / p.was) * 100)}%</span>`);
      if (p.tag === 'Mới') tags.push('<span class="tag">Mới</span>');
      if (p.tag === 'Bán chạy') tags.push('<span class="tag tag--best">Bán chạy</span>');
      return `
        <article class="card" style="animation-delay:${Math.min(i, 8) * 50}ms" data-id="${p.id}">
          <div class="card__media" data-quick="${p.id}">
            <img src="${img(p.img, 700)}" alt="${p.name}" loading="lazy">
            <div class="card__tags">${tags.join('')}</div>
            <button class="card__wish ${wish.has(p.id) ? 'is-on' : ''}" data-wish="${p.id}" aria-label="Thêm ${p.name} vào yêu thích" aria-pressed="${wish.has(p.id)}">${heart}</button>
            <button class="card__quick" data-quick="${p.id}">Xem nhanh +</button>
          </div>
          <div class="card__body">
            <span class="card__cat">${CAT_LABEL[p.cat]}</span>
            <h3 class="card__name" data-quick="${p.id}">${p.name}</h3>
            <div class="card__price ${p.was ? 'is-sale' : ''}">${priceHTML(p)}</div>
            <div class="card__swatches">${p.colors.map(([n, c]) => `<i style="background:${c}" title="${n}"></i>`).join('')}</div>
          </div>
        </article>`;
    }).join('');
  }

  function setFilter(f) {
    state.filter = f;
    state.wishOnly = false;
    $$('[data-filter]').forEach((b) => {
      const on = b.dataset.filter === f;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', on);
    });
    renderGrid();
  }

  $$('[data-filter]').forEach((b) => b.addEventListener('click', () => setFilter(b.dataset.filter)));
  $$('[data-filter-link]').forEach((a) => a.addEventListener('click', () => {
    setFilter(a.dataset.filterLink);
    closeMenu();
  }));
  $('[data-sort]').addEventListener('change', (e) => { state.sort = e.target.value; renderGrid(); });

  // ---------- Yêu thích ----------
  function updateWishBadge() {
    const b = $('[data-wish-count]');
    b.textContent = wish.size;
    b.hidden = wish.size === 0;
  }
  grid.addEventListener('click', (e) => {
    const w = e.target.closest('[data-wish]');
    if (w) {
      e.stopPropagation();
      const id = w.dataset.wish;
      if (wish.has(id)) { wish.delete(id); toast('Đã bỏ khỏi danh sách yêu thích'); }
      else { wish.add(id); toast('♥ Đã thêm vào yêu thích'); }
      store.set('sac-wish', [...wish]);
      w.classList.toggle('is-on', wish.has(id));
      w.setAttribute('aria-pressed', wish.has(id));
      updateWishBadge();
      if (state.wishOnly) renderGrid();
      return;
    }
    const q = e.target.closest('[data-quick]');
    if (q) openModal(q.dataset.quick);
  });
  $('[data-open-wishlist]').addEventListener('click', () => {
    if (!wish.size) { toast('Bạn chưa có sản phẩm yêu thích nào'); return; }
    setFilter('all');
    state.wishOnly = true;
    renderGrid();
    $('#shop').scrollIntoView();
  });

  // ---------- Tìm kiếm ----------
  const searchBox = $('[data-search]');
  const searchInput = $('[data-search-input]');
  $('[data-open-search]').addEventListener('click', () => {
    searchBox.hidden = !searchBox.hidden;
    if (!searchBox.hidden) searchInput.focus();
  });
  $('[data-close-search]').addEventListener('click', () => {
    searchBox.hidden = true;
    searchInput.value = '';
    state.query = '';
    renderGrid();
  });
  let searchTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = searchInput.value;
      renderGrid();
      if (state.query) $('#shop').scrollIntoView();
    }, 250);
  });

  // ---------- Menu di động ----------
  const menu = $('[data-menu]');
  function closeMenu() { menu.classList.remove('is-open'); menu.setAttribute('aria-hidden', 'true'); }
  $('[data-open-menu]').addEventListener('click', () => { menu.classList.add('is-open'); menu.setAttribute('aria-hidden', 'false'); });
  $('[data-close-menu]').addEventListener('click', closeMenu);
  $$('a', menu).forEach((a) => a.addEventListener('click', closeMenu));

  // ---------- Xem nhanh ----------
  const modal = $('[data-modal]');
  const m = { id: null, color: 0, size: null, qty: 1 };

  function openModal(id) {
    const p = byId(id);
    Object.assign(m, { id, color: 0, size: p.sizes.length === 1 ? p.sizes[0] : null, qty: 1 });
    $('[data-m-img]').src = img(p.img, 1000);
    $('[data-m-img]').alt = p.name;
    $('[data-m-cat]').textContent = CAT_LABEL[p.cat];
    $('[data-m-name]').textContent = p.name;
    const price = $('[data-m-price]');
    price.innerHTML = priceHTML(p);
    price.classList.toggle('is-sale', !!p.was);
    $('[data-m-desc]').textContent = p.desc;
    renderModalOpts();
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    $('[data-close-modal]').focus();
  }
  function renderModalOpts() {
    const p = byId(m.id);
    $('[data-m-color-name]').textContent = p.colors[m.color][0];
    $('[data-m-colors]').innerHTML = p.colors.map(([n, c], i) =>
      `<button class="swatch ${i === m.color ? 'is-active' : ''}" style="background:${c}" data-color="${i}" aria-label="${n}"></button>`).join('');
    $('[data-m-sizes]').innerHTML = p.sizes.map((s) => {
      const out = (p.out || []).includes(s);
      return `<button class="size ${s === m.size ? 'is-active' : ''} ${out ? 'is-out' : ''}" data-size="${s}" ${out ? 'disabled aria-label="' + s + ' — hết hàng"' : ''}>${s}</button>`;
    }).join('');
    $('[data-m-qty]').textContent = m.qty;
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('[data-close-modal]')) return closeModal();
    const c = e.target.closest('[data-color]');
    if (c) { m.color = +c.dataset.color; renderModalOpts(); return; }
    const s = e.target.closest('[data-size]');
    if (s) { m.size = s.dataset.size; renderModalOpts(); return; }
    const q = e.target.closest('[data-qty]');
    if (q) { m.qty = Math.max(1, Math.min(10, m.qty + +q.dataset.qty)); renderModalOpts(); return; }
    if (e.target.closest('[data-m-add]')) {
      if (!m.size) {
        const sizes = $('[data-m-sizes]');
        sizes.classList.remove('shake'); void sizes.offsetWidth; sizes.classList.add('shake');
        toast('Vui lòng chọn kích cỡ');
        return;
      }
      const p = byId(m.id);
      addToCart(m.id, p.colors[m.color][0], m.size, m.qty);
      closeModal();
      openCart();
    }
  });

  // ---------- Giỏ hàng ----------
  const FREE_SHIP = 999000;
  const SHIP_FEE = 30000;
  const drawer = $('[data-cart]');
  const overlay = $('[data-overlay]');

  function addToCart(id, color, size, qty) {
    const key = `${id}|${color}|${size}`;
    const line = cart.find((l) => l.key === key);
    if (line) line.qty = Math.min(10, line.qty + qty);
    else cart.push({ key, id, color, size, qty });
    saveCart();
    const badge = $('[data-cart-count]');
    badge.classList.remove('pop'); void badge.offsetWidth; badge.classList.add('pop');
    toast(`Đã thêm ${byId(id).name} vào giỏ`);
  }
  function saveCart() { store.set('sac-cart', cart); renderCart(); }

  function renderCart() {
    const count = cart.reduce((s, l) => s + l.qty, 0);
    const sub = cart.reduce((s, l) => s + byId(l.id).price * l.qty, 0);
    const badge = $('[data-cart-count]');
    badge.textContent = count;
    badge.hidden = count === 0;
    $('[data-cart-count-inline]').textContent = `(${count})`;

    const left = Math.max(0, FREE_SHIP - sub);
    $('[data-ship-msg]').innerHTML = left > 0
      ? `Mua thêm <b>${vnd(left)}</b> để được miễn phí giao hàng`
      : '🎉 Bạn được <b>miễn phí giao hàng</b>!';
    $('[data-ship-fill]').style.width = `${Math.min(100, (sub / FREE_SHIP) * 100)}%`;

    const ship = sub === 0 ? 0 : sub >= FREE_SHIP ? 0 : SHIP_FEE;
    $('[data-subtotal]').textContent = vnd(sub);
    $('[data-shipping]').textContent = sub === 0 ? '—' : ship === 0 ? 'Miễn phí' : vnd(ship);
    $('[data-total]').textContent = vnd(sub + ship);
    $('[data-checkout]').disabled = count === 0;

    const body = $('[data-cart-items]');
    if (!cart.length) {
      body.innerHTML = `<div class="drawer__empty"><p>Giỏ hàng đang trống.</p><a href="#shop" class="btn btn--yellow" data-close-cart>Khám phá ngay →</a></div>`;
      return;
    }
    body.innerHTML = cart.map((l) => {
      const p = byId(l.id);
      return `
        <div class="line" data-key="${l.key}">
          <img src="${img(p.img, 200)}" alt="${p.name}">
          <div>
            <h4>${p.name}</h4>
            <small>${l.color} / ${l.size}</small>
            <div class="qty">
              <button aria-label="Giảm" data-line-qty="-1">−</button>
              <span>${l.qty}</span>
              <button aria-label="Tăng" data-line-qty="1">+</button>
            </div>
          </div>
          <div class="line__right">
            <span class="line__price">${vnd(p.price * l.qty)}</span>
            <button class="line__remove" data-line-remove>Xóa</button>
          </div>
        </div>`;
    }).join('');
  }

  function openCart() {
    overlay.hidden = false;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    overlay.hidden = true;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  $('[data-open-cart]').addEventListener('click', openCart);
  overlay.addEventListener('click', closeCart);
  drawer.addEventListener('click', (e) => {
    if (e.target.closest('[data-close-cart]')) return closeCart();
    const lineEl = e.target.closest('[data-key]');
    if (!lineEl) return;
    const line = cart.find((l) => l.key === lineEl.dataset.key);
    const q = e.target.closest('[data-line-qty]');
    if (q) {
      line.qty += +q.dataset.lineQty;
      if (line.qty < 1) cart = cart.filter((l) => l !== line);
      else line.qty = Math.min(10, line.qty);
      saveCart();
    }
    if (e.target.closest('[data-line-remove]')) {
      cart = cart.filter((l) => l !== line);
      saveCart();
    }
  });
  $('[data-checkout]').addEventListener('click', () => {
    toast('Cảm ơn bạn! Trang thanh toán sẽ sớm ra mắt.');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!modal.hidden) closeModal();
    else if (drawer.classList.contains('is-open')) closeCart();
    else if (menu.classList.contains('is-open')) closeMenu();
  });

  // ---------- Đếm ngược flash sale ----------
  // Kết thúc vào nửa đêm Chủ nhật gần nhất (giờ máy khách)
  const end = new Date();
  end.setHours(24, 0, 0, 0);
  end.setDate(end.getDate() + ((7 - end.getDay()) % 7));
  const pad = (n) => String(n).padStart(2, '0');
  function tick() {
    let s = Math.max(0, Math.floor((end - Date.now()) / 1000));
    const d = Math.floor(s / 86400); s %= 86400;
    const h = Math.floor(s / 3600); s %= 3600;
    const mi = Math.floor(s / 60); s %= 60;
    $('[data-cd="d"]').textContent = pad(d);
    $('[data-cd="h"]').textContent = pad(h);
    $('[data-cd="m"]').textContent = pad(mi);
    $('[data-cd="s"]').textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);

  // ---------- Bản tin ----------
  $('[data-newsletter]').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset();
    toast('Đăng ký thành công! Mã SAC10 đã được gửi tới email của bạn.');
  });

  renderGrid();
  renderCart();
  updateWishBadge();
})();
