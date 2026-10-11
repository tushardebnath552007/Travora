/**
 * TRAVORA - Handcrafted Luxury Travel Web Experience
 * Pure Vanilla JavaScript (ES6+) - Zero TypeScript, Zero External Bundler Required
 * Engineered for port 5500 (Live Server) and modern web browsers
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA REPOSITORY (Curated Havens, Experiences, Map Pins, Gallery)
  // =========================================================================
  const DESTINATIONS = [
    {
      id: 'kashmir',
      name: 'Kashmir Valley',
      region: 'North India',
      category: 'mountains',
      tagline: 'Paradise on Earth: shikara rides, alpine meadows & snow spires',
      priceINR: 18500,
      days: 6,
      rating: 4.9,
      image: 'assets/images/dest_kashmir_paradise_1791217715653.jpg',
      highlights: ['Dal Lake Houseboat', 'Gulmarg Gondola', 'Pahalgam Valley of Shepherds', 'Betaab Valley'],
      bestSeason: 'March to October (Summer & Autumn)',
      desc: 'Experience pure serenity in Kashmir. Drift along mystical Dal Lake in a wooden Shikara, ride the world-renowned Gulmarg Gondola over pine peaks, and taste saffron kahwa beside roaring rivers.'
    },
    {
      id: 'goa',
      name: 'South Goa Serenity',
      region: 'West India',
      category: 'beaches',
      tagline: 'Bohemian golden sunsets, coconut groves & tranquil coastal bays',
      priceINR: 14200,
      days: 5,
      rating: 4.8,
      image: 'assets/images/goa_sunset_palms_1791610909763.jpg',
      highlights: ['Palolem & Agonda Beach', 'Cabo de Rama Fort', 'Spice Plantations', 'Bohemian Lantern Shacks'],
      bestSeason: 'November to April',
      desc: 'Escape to gentle ocean breezes, sun-drenched sands, candlelit beach huts, and fresh seafood by the Arabian Sea. South Goa offers unmatched relaxation and peaceful tropical vibes.'
    },
    {
      id: 'rajasthan',
      name: 'Royal Rajasthan',
      region: 'West India',
      category: 'heritage',
      tagline: 'Majestic forts, candlelit palaces, and golden Thar desert twilight',
      priceINR: 22800,
      days: 7,
      rating: 4.9,
      image: 'assets/images/rajasthan_fort_palace_1791610927685.jpg',
      highlights: ['Mehrangarh Citadel', 'Lake Pichola Twilight', 'Sam Sand Dunes Glamping', 'Hawa Mahal'],
      bestSeason: 'October to March',
      desc: 'Walk among royal heritage and timeless grandeur. Marvel at cliffside sandstone forts, dine in floating palaces on Lake Pichola, and sleep under desert stars in luxury tented camps.'
    },
    {
      id: 'alps',
      name: 'Swiss Matterhorn Alps',
      region: 'Global Haven',
      category: 'mountains',
      tagline: 'Iconic pyramid peak, crystal alpine reflections & crisp mountain air',
      priceINR: 85000,
      days: 7,
      rating: 5.0,
      image: 'assets/images/grand_matterhorn_alps_1791222654485.jpg',
      highlights: ['Gornergrat Panoramic Railway', 'Zermatt Car-Free Village', 'Stellisee Reflection Lake', 'Glacier Paradise'],
      bestSeason: 'December to April (Snow) / June to September (Hiking)',
      desc: 'Witness the world’s most photographed peak in Zermatt. Enjoy panoramic cogwheel trains, sparkling high-altitude lakes, world-class fondue dining, and crisp Swiss alpine bliss.'
    },
    {
      id: 'iceland',
      name: 'Iceland Northern Lights',
      region: 'Global Haven',
      category: 'aurora',
      tagline: 'Celestial emerald auroras dancing over glaciers & volcanic spires',
      priceINR: 92000,
      days: 8,
      rating: 4.9,
      image: 'assets/images/dest_iceland_aurora_1791217726046.jpg',
      highlights: ['Aurora Borealis Hunt', 'Blue Lagoon Geothermal Spa', 'Jökulsárlón Glacier Lagoon', 'Golden Circle'],
      bestSeason: 'September to March',
      desc: 'An otherworldly journey through ice caves, roaring waterfalls, steaming thermal springs, and emerald ribbons of the Aurora Borealis blazing across the Arctic night sky.'
    },
    {
      id: 'patagonia',
      name: 'Patagonia Torres del Paine',
      region: 'Global Haven',
      category: 'mountains',
      tagline: 'Dramatic granite horns, turquoise glacial lakes & wild frontiers',
      priceINR: 98000,
      days: 9,
      rating: 4.9,
      image: 'assets/images/dest_patagonia_torres_1791217704007.jpg',
      highlights: ['Mirador Las Torres Trek', 'Grey Glacier Navigation', 'French Valley', 'Guanaco Wildlife Tracking'],
      bestSeason: 'November to March',
      desc: 'Step into the wildest landscapes on Earth. Hike through breathtaking Andean valleys, gaze at sheer granite towers rising above jade waters, and experience true wilderness adventure.'
    }
  ];

  const BACKGROUND_PRESETS = [
    { id: 'alps', name: 'Matterhorn Alps Sunrise', url: 'assets/images/grand_matterhorn_alps_1791222654485.jpg' },
    { id: 'goa', name: 'Goa Sunset Palms', url: 'assets/images/goa_sunset_palms_1791610909763.jpg' },
    { id: 'rajasthan', name: 'Rajasthan Fort Twilight', url: 'assets/images/rajasthan_fort_palace_1791610927685.jpg' },
    { id: 'kashmir', name: 'Kashmir Dal Lake', url: 'assets/images/dest_kashmir_paradise_1791217715653.jpg' },
    { id: 'iceland', name: 'Iceland Emerald Aurora', url: 'assets/images/dest_iceland_aurora_1791217726046.jpg' },
    { id: 'patagonia', name: 'Patagonia Torres', url: 'assets/images/dest_patagonia_torres_1791217704007.jpg' },
    { id: 'taj', name: 'Taj Mahal Marble Dawn', url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1920&q=85' },
    { id: 'himalaya', name: 'Himalayan Prayer-Flag Ridge', url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=85' },
    { id: 'tropical', name: 'Andaman Coral Shore', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85' },
    { id: 'misty', name: 'Misty Tea Valley', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=85' }
  ];

  // =========================================================================
  // 2. MOVABLE BACKGROUND ENGINE (Parallax + Auto-Drift + Inertia)
  // =========================================================================
  let bgElement = null;
  let bgState = {
    mouseX: 0,
    mouseY: 0,
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    isAutoDrifting: true,
    driftAngle: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    dragOffsetX: 0,
    dragOffsetY: 0
  };

  function initMovableBackground() {
    bgElement = document.getElementById('movable-bg');
    if (!bgElement) return;

    // Mouse Parallax tracking
    window.addEventListener('mousemove', function (e) {
      const normX = (e.clientX / window.innerWidth) - 0.5;
      const normY = (e.clientY / window.innerHeight) - 0.5;
      bgState.targetX = normX * -50; // max shift in pixels
      bgState.targetY = normY * -40;
    });

    // Mobile Gyroscope / Device Orientation Support
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function (e) {
        if (e.gamma !== null && e.beta !== null) {
          const tiltX = Math.max(-30, Math.min(30, e.gamma));
          const tiltY = Math.max(-30, Math.min(30, e.beta - 45));
          bgState.targetX = (tiltX / 30) * -35;
          bgState.targetY = (tiltY / 30) * -30;
        }
      });
    }

    // Drag-to-Pan Event Listeners
    window.addEventListener('mousedown', function (e) {
      // Don't drag if clicking buttons, inputs, links, or cards
      if (e.target.closest('button, input, select, a, .dest-card, .calculator-box, .modal-window')) return;
      bgState.isDragging = true;
      bgState.dragStartX = e.clientX - bgState.dragOffsetX;
      bgState.dragStartY = e.clientY - bgState.dragOffsetY;
    });

    window.addEventListener('mousemove', function (e) {
      if (!bgState.isDragging) return;
      bgState.dragOffsetX = e.clientX - bgState.dragStartX;
      bgState.dragOffsetY = e.clientY - bgState.dragStartY;
      // Clamp drag offset
      bgState.dragOffsetX = Math.max(-100, Math.min(100, bgState.dragOffsetX));
      bgState.dragOffsetY = Math.max(-70, Math.min(70, bgState.dragOffsetY));
    });

    window.addEventListener('mouseup', function () {
      bgState.isDragging = false;
    });

    // Render loop using requestAnimationFrame for buttery smooth 60fps
    function renderFrame() {
      // Smooth lerp towards target
      let autoX = 0;
      let autoY = 0;

      if (bgState.isAutoDrifting) {
        bgState.driftAngle += 0.008;
        autoX = Math.sin(bgState.driftAngle) * 18;
        autoY = Math.cos(bgState.driftAngle * 0.7) * 12;
      }

      const desiredX = bgState.targetX + autoX + (bgState.dragOffsetX * 0.4);
      const desiredY = bgState.targetY + autoY + (bgState.dragOffsetY * 0.4);

      bgState.currentX += (desiredX - bgState.currentX) * 0.08;
      bgState.currentY += (desiredY - bgState.currentY) * 0.08;

      bgElement.style.transform = `translate3d(${bgState.currentX.toFixed(2)}px, ${bgState.currentY.toFixed(2)}px, 0) scale(1.07)`;
      requestAnimationFrame(renderFrame);
    }
    requestAnimationFrame(renderFrame);

    // Automatic picture rotation — crossfade through every preset
    bgState.autoRotate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    bgState.rotateTimer = null;
    const ROTATE_MS = 14000;
    // Start from whichever preset matches the page's opening backdrop
    const presetIndexFromBg = function () {
      const bg = bgElement && bgElement.style ? bgElement.style.backgroundImage : '';
      const m = /([^\/'")]+)$/.exec(bg || '');
      const file = m ? m[1] : '';
      if (!file) return -1;
      return BACKGROUND_PRESETS.findIndex(function (p) { return p.url.slice(-file.length) === file; });
    };
    bgState.presetIndex = presetIndexFromBg();
    // Preload so rotation never flashes blank
    BACKGROUND_PRESETS.forEach(function (p) {
      const im = new Image();
      im.src = p.url;
    });
    const scheduleRotate = function () {
      if (bgState.rotateTimer) clearTimeout(bgState.rotateTimer);
      bgState.rotateTimer = setTimeout(function () {
        if (!document.hidden && bgState.autoRotate && bgElement) {
          bgState.presetIndex = (bgState.presetIndex + 1) % BACKGROUND_PRESETS.length;
          const next = BACKGROUND_PRESETS[bgState.presetIndex];
          bgElement.style.opacity = '0.25';
          setTimeout(function () {
            bgElement.style.backgroundImage = "url('" + next.url + "')";
            bgElement.style.opacity = '1';
          }, 450);
        }
        scheduleRotate();
      }, ROTATE_MS);
    };
    scheduleRotate();
  }

  // Picture Switcher function
  window.changeBackgroundPicture = function (presetId) {
    const found = BACKGROUND_PRESETS.find(p => p.id === presetId);
    if (!found || !bgElement) return;
    bgElement.style.opacity = '0.4';
    setTimeout(() => {
      bgElement.style.backgroundImage = `url('${found.url}')`;
      bgElement.style.opacity = '1';
      const sel = document.getElementById('bg-selector');
      if (sel) sel.value = found.id;
      showToast(`Wallpaper switched to: ${found.name}`);
    }, 200);
  };

  window.toggleAutoDrift = function () {
    bgState.isAutoDrifting = !bgState.isAutoDrifting;
    const btn = document.getElementById('drift-toggle-btn');
    if (btn) {
      btn.innerHTML = bgState.isAutoDrifting ? '🌊 Motion: Active' : '⏸ Motion: Paused';
    }
    showToast(bgState.isAutoDrifting ? 'Movable background motion resumed' : 'Background motion paused');
  };

  // =========================================================================
  // 3. FIXED NAVIGATION BAR BEHAVIOR
  // =========================================================================
  function initHeaderNav() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Mobile menubar: floating button + sidebar button both toggle the drawer
    const menuBtns = document.querySelectorAll('.hamburger-btn, .menubar-fab');
    const setMenu = function (open) {
      if (open) header.classList.add('open');
      else header.classList.remove('open');
      const isOpen = header.classList.contains('open');
      menuBtns.forEach(function (b) { b.innerHTML = isOpen ? '✕' : '☰'; });
    };
    menuBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setMenu(!header.classList.contains('open'));
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // =========================================================================
  // 4. SEARCH BAR UNDER NAVIGATION (Live Autocomplete + Category Filters)
  // =========================================================================
  function initUnderNavSearch() {
    const searchInput = document.getElementById('under-nav-input');
    const dropdown = document.getElementById('search-dropdown');
    const filterChips = document.querySelectorAll('.filter-chip');

    if (!searchInput || !dropdown) return;

    // Keyboard shortcut (Slash '/' or Cmd+K)
    window.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
        showToast('Search bar activated');
      }
    });

    // Input handler with highlighted matches, counts, and recent history
    const findMatches = function (query) {
      return DESTINATIONS.filter(function (d) {
        return d.name.toLowerCase().includes(query) ||
          d.region.toLowerCase().includes(query) ||
          d.tagline.toLowerCase().includes(query) ||
          d.highlights.some(function (h) { return h.toLowerCase().includes(query); });
      });
    };

    const escRe = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
    const hi = function (text, q) {
      try {
        return String(text).replace(new RegExp('(' + escRe(q) + ')', 'ig'), '<mark>$1</mark>');
      } catch (e) {
        return text;
      }
    };

    const getRecents = function () {
      try {
        return JSON.parse(localStorage.getItem('travora_recent_search') || '[]');
      } catch (e) {
        return [];
      }
    };
    const renderRecents = function () {
      const wrap = document.querySelector('.search-inner-wrapper');
      if (!wrap) return;
      let row = document.getElementById('recent-row');
      if (!row) {
        row = document.createElement('div');
        row.id = 'recent-row';
        row.className = 'recent-row';
        wrap.appendChild(row);
      }
      const recents = getRecents();
      row.innerHTML = recents.length
        ? '<span class="recent-lbl">🕘 Recent:</span>' + recents.map(function (r) {
          return '<button class="recent-chip" onclick="setQuickSearch(\'' + r.replace(/'/g, "\\'") + '\')">' + r + '</button>';
        }).join('')
        : '';
    };
    const saveRecent = function (q) {
      q = (q || '').trim();
      if (!q) return;
      const recents = getRecents().filter(function (x) { return x.toLowerCase() !== q.toLowerCase(); });
      recents.unshift(q);
      try {
        localStorage.setItem('travora_recent_search', JSON.stringify(recents.slice(0, 5)));
      } catch (e) {
        // storage unavailable
      }
      renderRecents();
    };

    searchInput.addEventListener('input', function () {
      const raw = searchInput.value.trim();
      const q = raw.toLowerCase();
      if (!q) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        return;
      }

      const matches = findMatches(q);

      if (matches.length === 0) {
        dropdown.innerHTML = '<div class="search-empty">😕 No havens match “' + raw.replace(/</g, '&lt;') + '”. Try Goa, Kashmir, or Alps.</div>' +
          '<button class="search-clear" onclick="clearSearch()">Clear search ✕</button>';
      } else {
        dropdown.innerHTML = '<div class="search-count">✨ ' + matches.length + ' haven' + (matches.length > 1 ? 's' : '') +
          ' found — click any card for its full dossier</div>' + matches.map(function (d) {
            return '<div class="search-item" onclick="pickSearchResult(\'' + d.id + '\', \'' + d.name.replace(/'/g, "\\'") + '\')">' +
              '<div class="search-item-info">' +
              '<img src="' + d.image + '" class="search-item-thumb" alt="' + d.name + '" />' +
              '<div><div class="search-item-title">' + hi(d.name, q) + '</div>' +
              '<div class="search-item-subtitle">' + hi(d.region, q) + ' · ' + d.days + ' Days</div></div>' +
              '</div>' +
              '<div><span class="search-item-price">₹' + d.priceINR.toLocaleString('en-IN') + '</span><span class="search-go">→</span></div>' +
              '</div>';
          }).join('');
      }
      dropdown.classList.add('open');
    });

    // Enter picks the top hit and remembers it
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        const top = findMatches(searchInput.value.trim().toLowerCase())[0];
        if (top) pickSearchResult(top.id, top.name);
      }
    });

    renderRecents();

    // Close dropdown on outside click
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search-input-box')) {
        dropdown.classList.remove('open');
      }
    });

    // Category Filter Chips
    filterChips.forEach(chip => {
      chip.addEventListener('click', function () {
        filterChips.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const cat = this.getAttribute('data-category');
        filterDestinationsByCategory(cat);
      });
    });
  }

  function filterDestinationsByCategory(category) {
    const cards = document.querySelectorAll('.dest-card');
    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  window.setQuickSearch = function (destName) {
    const input = document.getElementById('under-nav-input');
    if (input) {
      input.value = destName;
      input.dispatchEvent(new Event('input'));
      input.focus();
    }
  };

  window.pickSearchResult = function (id, name) {
    try {
      const q = (name || '').trim();
      if (q) {
        let recents = [];
        try {
          recents = JSON.parse(localStorage.getItem('travora_recent_search') || '[]');
        } catch (e) {
          recents = [];
        }
        recents = recents.filter(function (x) { return x.toLowerCase() !== q.toLowerCase(); });
        recents.unshift(q);
        try {
          localStorage.setItem('travora_recent_search', JSON.stringify(recents.slice(0, 5)));
        } catch (e) {
          // storage unavailable
        }
      }
    } catch (e) {
      // ignore
    }
    openDestinationModal(id);
  };

  window.clearSearch = function () {
    const input = document.getElementById('under-nav-input');
    const dropdown = document.getElementById('search-dropdown');
    if (input) { input.value = ''; input.focus(); }
    if (dropdown) { dropdown.classList.remove('open'); dropdown.innerHTML = ''; }
  };

  window.handleQuote = function (e) {
    e.preventDefault();
    const name = authField('quote-name');
    const email = authField('quote-email');
    const havenSel = document.getElementById('quote-haven');
    const haven = havenSel ? havenSel.options[havenSel.selectedIndex].text : 'your haven';
    if (!name || !email) {
      showToast('Please share your name and email for the quotation. 📩');
      return;
    }
    showToast('Quotation locked for ' + haven + '! Concierge will email ' + email + ' within 2 hours. 📩');
    e.target.reset();
  };

  window.handleAsk = function (e) {
    e.preventDefault();
    const q = authField('ask-text');
    const name = authField('ask-name') || 'Anonymous Explorer';
    if (!q) {
      showToast('Please write your question first. 💬');
      return;
    }
    const list = document.getElementById('wisdom-faq');
    if (list) {
      const item = document.createElement('div');
      item.className = 'faq-item open';
      item.innerHTML = '<div class="faq-header"><span>' + escapeAuth(q) + '</span><span class="faq-icon-arrow">▼</span></div>' +
        '<div class="faq-body">Thanks ' + escapeAuth(name) + '! Our concierge will answer within 24 hours — meanwhile, the codex above covers most trails.</div>';
      list.prepend(item);
      item.querySelector('.faq-header').addEventListener('click', function () {
        item.classList.toggle('open');
      });
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    showToast('Question received! The codex grows smarter. 💬');
    e.target.reset();
  };

  window.handleContact = function (e) {
    e.preventDefault();
    const name = authField('contact-name');
    const email = authField('contact-email');
    const message = authField('contact-msg');
    const sel = document.getElementById('contact-subject');
    const subject = sel ? sel.options[sel.selectedIndex].text : 'General enquiry';
    if (!name || !email || !message) {
      showToast('Please fill your name, email, and message. ✉️');
      return;
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, subject: subject, message: message })
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          if (!res.ok) throw new Error(data.error || 'Could not send. Please try again.');
          return data;
        });
      })
      .then(function () {
        showToast('Message received, ' + name.split(' ')[0] + '! Concierge replies within 2 hours. 📩');
        e.target.reset();
      })
      .catch(function (err) {
        showToast(err.message || 'Could not send. Please try again!');
      });
  };

  // =========================================================================
  // 5. DESTINATIONS RENDERER & MODAL POPUP
  // =========================================================================
  function renderDestinationsGrid() {
    const container = document.getElementById('destinations-container');
    if (!container) return;

    container.innerHTML = DESTINATIONS.map(d => `
      <div class="dest-card" data-category="${d.category}">
        <div class="dest-card-media">
          <img src="${d.image}" class="dest-card-img" alt="${d.name}" loading="lazy" />
          <span class="dest-badge-category">${d.category}</span>
          <button class="dest-btn-like" onclick="toggleWishlist('${d.id}', event)" title="Save to Wishlist" id="wishlist-btn-${d.id}">
            ♥
          </button>
        </div>
        <div class="dest-card-content">
          <div class="dest-meta-row">
            <span>📍 ${d.region}</span>
            <span>⭐ ${d.rating} · ${d.days} Days</span>
          </div>
          <h3 class="dest-card-title">${d.name}</h3>
          <p class="dest-card-tagline">${d.tagline}</p>
          <div class="dest-card-footer">
            <div>
              <div class="dest-price-label">Starting Price</div>
              <div class="dest-price-val">₹${d.priceINR.toLocaleString('en-IN')}</div>
            </div>
            <button class="dest-btn-view" onclick="openDestinationModal('${d.id}')">
              Explore Haven →
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  window.openDestinationModal = function (destId) {
    const dest = DESTINATIONS.find(d => d.id === destId);
    if (!dest) return;

    const modal = document.getElementById('generic-modal');
    const content = document.getElementById('modal-inner-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="position: relative; margin-bottom: 24px;">
        <img src="${dest.image}" style="width: 100%; height: 280px; object-fit: cover; border-radius: 14px;" alt="${dest.name}" />
        <div style="position: absolute; bottom: 16px; left: 16px; background: rgba(0,0,0,0.75); backdrop-filter: blur(10px); padding: 8px 18px; border-radius: 30px; border: 1px solid #f59e0b;">
          <span style="color: #fde68a; font-weight: 800; font-family: var(--font-mono);">⭐ ${dest.rating} Rating · ${dest.days} Days / ${dest.days - 1} Nights</span>
        </div>
      </div>
      <h2 style="font-family: var(--font-display); font-size: 2.2rem; color: #fff; margin-bottom: 8px;">${dest.name}</h2>
      <p style="color: #06b6d4; font-weight: 700; margin-bottom: 16px;">📍 ${dest.region} · Best Season: ${dest.bestSeason}</p>
      <p style="color: #cbd5e1; font-size: 1.1rem; line-height: 1.7; margin-bottom: 24px;">${dest.desc}</p>
      
      <h4 style="font-size: 1.15rem; color: #f59e0b; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Curated Highlights</h4>
      <ul style="list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 28px;">
        ${dest.highlights.map(h => `<li style="background: rgba(255,255,255,0.06); padding: 8px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); color: #fff;">✨ ${h}</li>`).join('')}
      </ul>

      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
        <div>
          <span style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase;">All-Inclusive Package</span>
          <div style="font-family: var(--font-mono); font-size: 1.8rem; font-weight: 800; color: #f59e0b;">₹${dest.priceINR.toLocaleString('en-IN')}</div>
        </div>
        <div style="display: flex; gap: 12px;">
          <button class="dest-btn-view" onclick="toggleWishlist('${dest.id}'); showToast('Saved to your wishlist!');">♥ Save Haven</button>
          <button class="btn-plan-trip" onclick="bookNow('${dest.name}')">Book Custom Package</button>
        </div>
      </div>
    `;

    modal.classList.add('open');
  };

  window.closeModal = function () {
    const modal = document.getElementById('generic-modal');
    if (modal) modal.classList.remove('open');
  };

  window.bookNow = function (destName) {
    closeModal();
    showToast(`Booking initiated for ${destName}! Our concierge will contact you.`);
  };

  // =========================================================================
  // 6. WISHLIST MANAGEMENT (Persistent via localStorage)
  // =========================================================================
  let wishlist = JSON.parse(localStorage.getItem('travora_wishlist') || '[]');

  function updateWishlistBadge() {
    const badges = document.querySelectorAll('.wishlist-count-badge');
    badges.forEach(b => b.textContent = wishlist.length);

    // Update heart icons on cards
    DESTINATIONS.forEach(d => {
      const btn = document.getElementById(`wishlist-btn-${d.id}`);
      if (btn) {
        if (wishlist.includes(d.id)) {
          btn.classList.add('liked');
        } else {
          btn.classList.remove('liked');
        }
      }
    });
  }

  window.toggleWishlist = function (destId, event) {
    if (event) event.stopPropagation();
    const idx = wishlist.indexOf(destId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast('Removed from Wishlist');
    } else {
      wishlist.push(destId);
      showToast('Added to your Wishlist ♥');
    }
    localStorage.setItem('travora_wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
  };

  window.openWishlistDrawer = function () {
    const modal = document.getElementById('generic-modal');
    const content = document.getElementById('modal-inner-content');
    if (!modal || !content) return;

    if (wishlist.length === 0) {
      content.innerHTML = `
        <h2 style="font-family: var(--font-display); font-size: 2rem; color: #fff; margin-bottom: 12px;">Your Saved Havens</h2>
        <p style="color: #94a3b8; font-size: 1.1rem; margin-bottom: 24px;">You haven't saved any destinations yet. Click the heart icon on any haven to save it for your next trip!</p>
        <button class="btn-hero-primary" onclick="closeModal()">Explore Destinations</button>
      `;
    } else {
      const savedItems = DESTINATIONS.filter(d => wishlist.includes(d.id));
      content.innerHTML = `
        <h2 style="font-family: var(--font-display); font-size: 2rem; color: #fff; margin-bottom: 16px;">Your Saved Havens (${savedItems.length})</h2>
        <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px;">
          ${savedItems.map(d => `
            <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.06); padding: 12px 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
              <div style="display: flex; align-items: center; gap: 14px;">
                <img src="${d.image}" style="width: 54px; height: 54px; border-radius: 8px; object-fit: cover;" alt="${d.name}" />
                <div>
                  <div style="font-weight: 700; color: #fff; font-size: 1.1rem;">${d.name}</div>
                  <div style="font-size: 0.85rem; color: #06b6d4;">₹${d.priceINR.toLocaleString('en-IN')} · ${d.days} Days</div>
                </div>
              </div>
              <div style="display: flex; gap: 10px;">
                <button class="dest-btn-view" onclick="openDestinationModal('${d.id}')">View</button>
                <button style="background: none; border: none; color: #f43f5e; cursor: pointer; font-size: 1.2rem;" onclick="toggleWishlist('${d.id}'); openWishlistDrawer();">✕</button>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="btn-plan-trip" onclick="showToast('Itinerary request submitted for all saved havens!'); closeModal();">Create Multi-City Route</button>
      `;
    }
    modal.classList.add('open');
  };

  // =========================================================================
  // 7. LIVE TRIP BUDGET ESTIMATOR ENGINE
  // =========================================================================
  let budgetState = {
    days: 6,
    travelers: 2,
    tier: 'balanced' // 'budget', 'balanced', 'luxury'
  };

  const TIER_RATES = {
    budget: { stayPerNight: 2200, foodPerDay: 800, activities: 700, transport: 1500 },
    balanced: { stayPerNight: 4800, foodPerDay: 1600, activities: 1400, transport: 3000 },
    luxury: { stayPerNight: 12500, foodPerDay: 3500, activities: 3200, transport: 7500 }
  };

  function initBudgetCalculator() {
    const daysSlider = document.getElementById('calc-days-slider');
    const travelersSlider = document.getElementById('calc-travelers-slider');
    const tierButtons = document.querySelectorAll('.tier-btn');

    if (daysSlider) {
      daysSlider.addEventListener('input', function () {
        budgetState.days = parseInt(this.value, 10);
        document.getElementById('calc-days-val').textContent = `${budgetState.days} Days`;
        recalculateBudget();
      });
    }

    if (travelersSlider) {
      travelersSlider.addEventListener('input', function () {
        budgetState.travelers = parseInt(this.value, 10);
        document.getElementById('calc-travelers-val').textContent = `${budgetState.travelers} ${budgetState.travelers === 1 ? 'Traveler' : 'Travelers'}`;
        recalculateBudget();
      });
    }

    tierButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        tierButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        budgetState.tier = this.getAttribute('data-tier');
        recalculateBudget();
      });
    });

    recalculateBudget();
  }

  function recalculateBudget() {
    const rates = TIER_RATES[budgetState.tier];
    const nights = Math.max(1, budgetState.days - 1);
    const rooms = Math.ceil(budgetState.travelers / 2);

    const staysCost = nights * rooms * rates.stayPerNight;
    const foodCost = budgetState.days * budgetState.travelers * rates.foodPerDay;
    const activitiesCost = budgetState.days * budgetState.travelers * rates.activities;
    const transportCost = budgetState.travelers * rates.transport;

    const totalCost = staysCost + foodCost + activitiesCost + transportCost;
    const perPerson = Math.round(totalCost / budgetState.travelers);

    // Update DOM elements
    const totalEl = document.getElementById('calc-total-val');
    const perPersonEl = document.getElementById('calc-perperson-val');
    const staysEl = document.getElementById('calc-stays-val');
    const foodEl = document.getElementById('calc-food-val');
    const activitiesEl = document.getElementById('calc-activities-val');
    const transportEl = document.getElementById('calc-transport-val');

    if (totalEl) totalEl.textContent = `₹${totalCost.toLocaleString('en-IN')}`;
    if (perPersonEl) perPersonEl.textContent = `₹${perPerson.toLocaleString('en-IN')} / person`;
    if (staysEl) staysEl.textContent = `₹${staysCost.toLocaleString('en-IN')}`;
    if (foodEl) foodEl.textContent = `₹${foodCost.toLocaleString('en-IN')}`;
    if (activitiesEl) activitiesEl.textContent = `₹${activitiesCost.toLocaleString('en-IN')}`;
    if (transportEl) transportEl.textContent = `₹${transportCost.toLocaleString('en-IN')}`;
  }

  // =========================================================================
  // 8. FAQ ACCORDION HANDLERS
  // =========================================================================
  function initFaqAccordion() {
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach(hdr => {
      hdr.addEventListener('click', function () {
        const item = this.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    });
  }

  // =========================================================================
  // 9. PHOTO GALLERY LIGHTBOX
  // =========================================================================
  window.openLightbox = function (imgUrl, caption) {
    const modal = document.getElementById('generic-modal');
    const content = document.getElementById('modal-inner-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div style="text-align: center;">
        <img src="${imgUrl}" style="max-height: 70vh; width: 100%; object-fit: contain; border-radius: 12px; margin-bottom: 16px;" alt="${caption}" />
        <h3 style="font-family: var(--font-display); font-size: 1.5rem; color: #fff;">${caption}</h3>
        <p style="color: #06b6d4; font-size: 0.95rem;">TRAVORA Cinematic Dispatches</p>
      </div>
    `;
    modal.classList.add('open');
  };

  // =========================================================================
  // 10. TOAST NOTIFICATIONS
  // =========================================================================
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<span>✨</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
  window.showToast = showToast;

  // Newsletter form handler
  window.handleNewsletter = function (event) {
    event.preventDefault();
    const input = document.getElementById('newsletter-email');
    if (input && input.value) {
      showToast(`Subscribed! Travel dispatches sent to ${input.value}`);
      input.value = '';
    }
  };

  // =========================================================================
  // 10b. MAP EXPLORER v2 — dossier panel, readout, per-pin activation
  // =========================================================================
  function mapDetailHTML(d, variant) {
    const rows =
      '<div class="map-detail-rows">' +
      '<div class="map-detail-row"><span>🌡 Conditions</span><span>' + d.weather + '</span></div>' +
      '<div class="map-detail-row"><span>📅 Best months</span><span>' + d.months + '</span></div>' +
      '<div class="map-detail-row"><span>🧭 Ideal duration</span><span>' + d.days + '</span></div>' +
      '<div class="map-detail-row"><span>💰 Trips from</span><span>' + d.price + '</span></div>' +
      (variant === 'full'
        ? '<div class="map-detail-row"><span>🗺 Blueprint</span><span>' + d.route + '</span></div>'
        : '') +
      '</div>';
    return (
      '<div class="map-detail-eyebrow">📍 Pin Dossier · Live</div>' +
      '<h3 class="map-detail-title">' + d.name + '</h3>' +
      '<div class="map-detail-coords">' + d.coords + '</div>' +
      (d.img ? '<img src="' + d.img + '" class="map-detail-img" alt="' + d.name + '" loading="lazy">' : '') +
      rows +
      '<p class="map-detail-blurb">' + d.blurb + '</p>' +
      '<div class="map-detail-actions">' +
      (d.dest
        ? '<button class="dest-btn-view" onclick="openDestinationModal(\'' + d.dest + '\')">Open Guide →</button>'
        : '') +
      '<a class="map-detail-ghost" href="budget-estimator.html">Price It 📊</a>' +
      '</div>'
    );
  }

  function initMapExplorer() {
    const boards = document.querySelectorAll('[data-map-explorer]');
    if (!boards.length) return;

    boards.forEach(function (board) {
      const grid = board.closest('.map-explorer-grid');
      const scope = grid || board.parentElement || document;
      const panel = scope.querySelector('[data-map-detail]');
      const readout = board.querySelector('[data-map-readout]');
      const variant = board.getAttribute('data-map-variant') || 'compact';
      const pins = board.querySelectorAll('.map-pin[data-name]');

      const activate = function (pin) {
        pins.forEach(function (p) { p.classList.remove('active'); });
        pin.classList.add('active');
        if (panel) panel.innerHTML = mapDetailHTML(pin.dataset, variant);
      };

      pins.forEach(function (pin) {
        pin.addEventListener('click', function (e) {
          e.stopPropagation();
          activate(pin);
        });
      });

      if (readout) {
        board.addEventListener('mousemove', function (e) {
          const r = board.getBoundingClientRect();
          const x = Math.min(0.999, Math.max(0, (e.clientX - r.left) / r.width));
          const y = Math.min(0.999, Math.max(0, (e.clientY - r.top) / r.height));
          const lon = (x * 360 - 180).toFixed(2);
          const lat = (90 - y * 180).toFixed(2);
          readout.textContent = '◉ ' + Math.abs(lat) + '° ' + (lat >= 0 ? 'N' : 'S') + ' · ' + Math.abs(lon) + '° ' + (lon >= 0 ? 'E' : 'W');
        });
        readout.textContent = '◉ Move across the chart…';
      }

      if (pins.length && panel && !panel.getAttribute('data-init')) {
        panel.setAttribute('data-init', '1');
        activate(pins[0]);
      }
    });
  }

  // =========================================================================
  // 10c. FOOTER YEAR
  // =========================================================================
  function initFooterYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  // =========================================================================
  // 10d. CATCHY INTERACTIONS — progress bar, reveal, tilt, glow, typing
  // =========================================================================
  function initScrollProgress() {
    let bar = document.querySelector('.scroll-progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'scroll-progress';
      document.body.prepend(bar);
    }
    const update = function () {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = document.querySelectorAll(
      '.page-section, .dest-card, .testimonial-card, .gallery-item, .faq-item, .hero-glass-card'
    );
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          const el = e.target;
          setTimeout(function () { el.style.transitionDelay = '0ms'; }, 950);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = ((i % 4) * 70) + 'ms';
      io.observe(el);
    });
  }

  function initTilt() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.dest-card, .hero-glass-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          'perspective(900px) rotateY(' + (x * 7).toFixed(2) + 'deg) rotateX(' + (-y * 7).toFixed(2) + 'deg) translateY(-6px)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    });
  }

  function initCursorGlow() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    let x = -500, y = -500, tx = x, ty = y;
    window.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; }, { passive: true });
    (function loop() {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      glow.style.left = x + 'px';
      glow.style.top = y + 'px';
      requestAnimationFrame(loop);
    })();
  }

  function initMagnetic() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.btn-hero-primary, .btn-plan-trip').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        const r = btn.getBoundingClientRect();
        btn.style.transform =
          'translate(' + ((e.clientX - r.left - r.width / 2) * 0.12).toFixed(1) + 'px,' +
          ((e.clientY - r.top - r.height / 2) * 0.18).toFixed(1) + 'px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }

  function initTypingPlaceholder() {
    const input = document.getElementById('under-nav-input');
    if (!input) return;
    const base = input.getAttribute('placeholder') || 'Search...';
    const phrases = [
      'Search Kashmir valleys…',
      'Search aurora nights…',
      'Search palace banquets…',
      'Search beach shacks…',
      'Search toy-train loops…'
    ];
    let pi = 0, ci = 0, del = false;
    (function tick() {
      if (document.activeElement === input && input.value) { setTimeout(tick, 1500); return; }
      const p = phrases[pi];
      ci += del ? -1 : 1;
      input.setAttribute('placeholder', ci ? p.slice(0, ci) : base);
      if (!del && ci === p.length) { del = true; setTimeout(tick, 1600); return; }
      if (del && ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
      setTimeout(tick, del ? 28 : 55);
    })();
  }

  // =========================================================================
  // 10e. AUTH FORMS + SIDEBAR ACCOUNT STATE (vanilla login/signup pages)
  // =========================================================================
  function authField(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function escapeAuth(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function submitAuth(url, body, errId, btn, remember) {
    const errBox = document.getElementById(errId);
    if (errBox) { errBox.style.display = 'none'; errBox.textContent = ''; }
    if (btn) { btn.disabled = true; btn.style.opacity = '0.6'; }
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          if (!res.ok) throw new Error(data.error || 'Request failed. Please try again.');
          return data;
        });
      })
      .then(function (data) {
        // Remember me → localStorage, otherwise this-tab-only sessionStorage.
        const store = remember === false ? sessionStorage : localStorage;
        try {
          store.setItem('travora_auth_token', data.token);
          store.setItem('travora_auth_user', JSON.stringify(data.user));
        } catch (e) {
          // storage unavailable
        }
        showToast('Welcome, ' + data.user.name + '! ✈️');
        let next = null;
        try {
          next = new URLSearchParams(window.location.search).get('next');
        } catch (e) {
          next = null;
        }
        const safeNext = next && next.charAt(0) === '/' && next.slice(0, 2) !== '//' ? next : 'index.html';
        setTimeout(function () { window.location.href = safeNext; }, 900);
      })
      .catch(function (err) {
        if (errBox) { errBox.textContent = err.message || 'Something went wrong.'; errBox.style.display = 'block'; }
        if (btn) { btn.disabled = false; btn.style.opacity = ''; }
      });
  }

  function readSession() {
    let user = null, token = null;
    try {
      user = JSON.parse(localStorage.getItem('travora_auth_user') || sessionStorage.getItem('travora_auth_user') || 'null');
      token = localStorage.getItem('travora_auth_token') || sessionStorage.getItem('travora_auth_token');
    } catch (e) {
      user = null;
      token = null;
    }
    return user && token ? { user: user, token: token } : null;
  }

  function passwordScore(pw) {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
    if (/\d/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    if (pw.length >= 12) score++;
    return Math.min(score, 4);
  }

  function initAuthForms() {
    // Show/hide password eyes
    document.querySelectorAll('.pass-eye').forEach(function (eye) {
      eye.addEventListener('click', function () {
        const target = document.getElementById(eye.getAttribute('data-eye'));
        if (!target) return;
        const show = target.type === 'password';
        target.type = show ? 'text' : 'password';
        eye.textContent = show ? '🙈' : '👁';
        eye.title = show ? 'Hide password' : 'Show password';
      });
    });

    // Strength meter on signup
    const passInput = document.getElementById('signup-pass');
    const passBar = document.getElementById('pass-bar');
    const passHint = document.getElementById('pass-hint');
    if (passInput && passBar) {
      const labels = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];
      const colors = ['#f43f5e', '#f43f5e', '#f59e0b', '#a3e635', '#34d399'];
      passInput.addEventListener('input', function () {
        const v = passInput.value;
        const s = v ? passwordScore(v) : 0;
        passBar.style.width = v ? ((s + 1) * 20) + '%' : '0';
        passBar.style.background = colors[s];
        if (passHint) passHint.textContent = v ? 'Strength: ' + labels[s] : '';
      });
    }

    // Already signed in? Show the account panel instead of the forms.
    const session = readSession();
    const signedPanel = document.getElementById('auth-signed');
    if (session && signedPanel) {
      ['login-form', 'signup-form'].forEach(function (id) {
        const f = document.getElementById(id);
        if (f) f.style.display = 'none';
      });
      document.querySelectorAll('.auth-tabs, .auth-switch').forEach(function (el) { el.style.display = 'none'; });
      signedPanel.style.display = 'block';
      const manageSection = document.getElementById('manage-section');
      if (manageSection) manageSection.style.display = 'block';
      const msg = document.getElementById('auth-signed-msg');
      if (msg) msg.textContent = 'Signed in as ' + session.user.name + ' (' + session.user.email + ')';
      const go = document.getElementById('auth-continue');
      if (go) {
        go.addEventListener('click', function () {
          let next = null;
          try {
            next = new URLSearchParams(window.location.search).get('next');
          } catch (e) {
            next = null;
          }
          window.location.href = next && next.charAt(0) === '/' && next.slice(0, 2) !== '//' ? next : 'index.html';
        });
      }
    }
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const rememberEl = document.getElementById('login-remember');
        submitAuth(
          '/api/auth/login',
          { email: authField('login-email'), password: authField('login-pass') },
          'login-error',
          loginForm.querySelector('button[type="submit"]'),
          !rememberEl || rememberEl.checked
        );
      });
    }
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const pw = document.getElementById('signup-pass');
        const pw2 = document.getElementById('signup-pass2');
        const terms = document.getElementById('signup-terms');
        const errBox = document.getElementById('signup-error');
        const fail = function (msg) {
          if (errBox) { errBox.textContent = msg; errBox.style.display = 'block'; }
        };
        if (pw && pw.value.length < 6) {
          fail('Password must be at least 6 characters.');
          return;
        }
        if (pw && pw2 && pw.value !== pw2.value) {
          fail('Passwords do not match. Please retype them.');
          return;
        }
        if (terms && !terms.checked) {
          fail('Please accept the Terms & Fair-Use Policy to continue.');
          return;
        }
        submitAuth(
          '/api/auth/signup',
          { name: authField('signup-name'), email: authField('signup-email'), password: pw ? pw.value : '' },
          'signup-error',
          signupForm.querySelector('button[type="submit"]'),
          true
        );
      });
    }

    // Forgot-password flow (login page)
    const forgotToggle = document.getElementById('forgot-toggle');
    const forgotBox = document.getElementById('forgot-box');
    if (forgotToggle && forgotBox) {
      forgotToggle.addEventListener('click', function () {
        const open = forgotBox.style.display === 'block';
        forgotBox.style.display = open ? 'none' : 'block';
        const lf = document.getElementById('login-form');
        if (lf) lf.style.display = open ? '' : 'none';
      });
      const back = document.getElementById('forgot-back');
      if (back) {
        back.addEventListener('click', function () {
          forgotBox.style.display = 'none';
          const lf = document.getElementById('login-form');
          if (lf) lf.style.display = '';
        });
      }
      const send = document.getElementById('forgot-send');
      if (send) {
        send.addEventListener('click', function () {
          const email = authField('forgot-email');
          if (!email) {
            showToast('Enter your account email first. ✉️');
            return;
          }
          send.disabled = true;
          fetch('/api/auth/forgot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
          })
            .then(function (res) { return res.json().catch(function () { return {}; }); })
            .then(function (data) {
              showToast('If that email is registered, a reset code is on its way. 📩');
              if (data && data.demoToken) {
                const step2 = document.getElementById('forgot-step2');
                const code = document.getElementById('forgot-code');
                const tok = document.getElementById('reset-token');
                if (step2) step2.style.display = 'block';
                if (code) code.textContent = data.demoToken;
                if (tok) tok.value = data.demoToken;
              }
            })
            .catch(function () { showToast('Could not reach the server. Try again!'); })
            .then(function () { send.disabled = false; });
        });
      }
      const resetGo = document.getElementById('reset-go');
      if (resetGo) {
        resetGo.addEventListener('click', function () {
          const token = authField('reset-token');
          const np = document.getElementById('reset-pass');
          const npVal = np ? np.value : '';
          if (!token || !npVal) {
            showToast('Paste the code and choose a new password. 🔑');
            return;
          }
          resetGo.disabled = true;
          fetch('/api/auth/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: token, newPassword: npVal })
          })
            .then(function (res) {
              return res.json().catch(function () { return {}; }).then(function (data) {
                if (!res.ok) throw new Error(data.error || 'Reset failed.');
                return data;
              });
            })
            .then(function () {
              showToast('Password updated! Log in with the new one. ✅');
              forgotBox.style.display = 'none';
              const lf = document.getElementById('login-form');
              if (lf) lf.style.display = '';
            })
            .catch(function (err) { showToast(err.message || 'Reset failed.'); })
            .then(function () { resetGo.disabled = false; });
        });
      }
    }
  }

  function initAuthState() {
    let user = null;
    try {
      user = JSON.parse(
        localStorage.getItem('travora_auth_user') || sessionStorage.getItem('travora_auth_user') || 'null'
      );
    } catch (e) {
      user = null;
    }
    let token = null;
    try {
      token = localStorage.getItem('travora_auth_token') || sessionStorage.getItem('travora_auth_token');
    } catch (e) {
      token = null;
    }
    if (user && token) {
      const panel = document.getElementById('nav-account');
      if (panel) {
        panel.style.display = 'flex';
        const setText = function (id, text) {
          const el = document.getElementById(id);
          if (el) el.textContent = text;
        };
        setText('nav-account-avatar', user.name.charAt(0).toUpperCase());
        setText('nav-account-name', user.name);
        setText('nav-account-email', user.email);
        document.querySelectorAll('.auth-row').forEach(function (row) { row.style.display = 'none'; });
      } else {
        document.querySelectorAll('.auth-row').forEach(function (row) {
          row.innerHTML =
            '<div class="auth-chip"><span class="auth-chip-avatar">' + escapeAuth(user.name.charAt(0).toUpperCase()) + '</span>' +
            '<span class="auth-chip-name">' + escapeAuth(user.name) + '</span>' +
            '<button class="auth-chip-out" onclick="logoutUser()" title="Sign out">⎋</button></div>';
        });
      }
    }
  }

  window.logoutUser = function () {
    try {
      localStorage.removeItem('travora_auth_token');
      localStorage.removeItem('travora_auth_user');
      sessionStorage.removeItem('travora_auth_token');
      sessionStorage.removeItem('travora_auth_user');
    } catch (e) {
      // storage unavailable
    }
    showToast('Signed out. See you on the next odyssey! 👋');
    setTimeout(function () { window.location.reload(); }, 700);
  };

  function initManageForms() {
    const hasProfile = document.getElementById('profile-form');
    const hasPassword = document.getElementById('password-form');
    if (!hasProfile && !hasPassword) return;
    const session = readSession();
    if (!session) return;
    const user = session.user;
    const setText = function (id, text) {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    // Edit profile details (name + email)
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
      const nameInput = document.getElementById('profile-name');
      const emailInput = document.getElementById('profile-email');
      if (nameInput) nameInput.value = user.name;
      if (emailInput) emailInput.value = user.email;
      profileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const errBox = document.getElementById('profile-error');
        if (errBox) { errBox.style.display = 'none'; errBox.textContent = ''; }
        const btn = profileForm.querySelector('button[type="submit"]');
        if (btn) { btn.disabled = true; btn.style.opacity = '0.6'; }
        fetch('/api/auth/profile', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + ((readSession() || {}).token || '') },
          body: JSON.stringify({ name: nameInput ? nameInput.value : '', email: emailInput ? emailInput.value : '' })
        })
          .then(function (res) {
            return res.json().catch(function () { return {}; }).then(function (data) {
              if (!res.ok) throw new Error(data.error || 'Update failed.');
              return data;
            });
          })
          .then(function (data) {
            const store = localStorage.getItem('travora_auth_token') ? localStorage : sessionStorage;
            try {
              store.setItem('travora_auth_user', JSON.stringify(data.user));
            } catch (err) {
              // storage unavailable
            }
            setText('account-avatar', data.user.name.charAt(0).toUpperCase());
            setText('account-name', data.user.name);
            setText('account-email', data.user.email);
            setText('nav-account-avatar', data.user.name.charAt(0).toUpperCase());
            setText('nav-account-name', data.user.name);
            setText('nav-account-email', data.user.email);
            showToast('Account details updated! ✅');
          })
          .catch(function (err) {
            if (errBox) { errBox.textContent = err.message || 'Update failed.'; errBox.style.display = 'block'; }
          })
          .then(function () {
            if (btn) { btn.disabled = false; btn.style.opacity = ''; }
          });
      });
    }

    // Change password
    const passwordForm = document.getElementById('password-form');
    if (passwordForm) {
      passwordForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const errBox = document.getElementById('password-error');
        if (errBox) { errBox.style.display = 'none'; errBox.textContent = ''; }
        const cur = document.getElementById('pw-current');
        const nw = document.getElementById('pw-new');
        const cf = document.getElementById('pw-confirm');
        const curVal = cur ? cur.value : '';
        const nwVal = nw ? nw.value : '';
        const cfVal = cf ? cf.value : '';
        const fail = function (msg) {
          if (errBox) { errBox.textContent = msg; errBox.style.display = 'block'; }
        };
        if (!curVal) {
          fail('Enter your current password.');
          return;
        }
        if (nwVal.length < 6) {
          fail('New password must be at least 6 characters.');
          return;
        }
        if (nwVal !== cfVal) {
          fail('New passwords do not match.');
          return;
        }
        const btn = passwordForm.querySelector('button[type="submit"]');
        if (btn) { btn.disabled = true; btn.style.opacity = '0.6'; }
        fetch('/api/auth/password', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + ((readSession() || {}).token || '') },
          body: JSON.stringify({ currentPassword: curVal, newPassword: nwVal })
        })
          .then(function (res) {
            return res.json().catch(function () { return {}; }).then(function (data) {
              if (!res.ok) throw new Error(data.error || 'Password change failed.');
              return data;
            });
          })
          .then(function () {
            showToast('Password changed! Other sessions signed out. 🔑');
            passwordForm.reset();
          })
          .catch(function (err) {
            if (errBox) { errBox.textContent = err.message || 'Password change failed.'; errBox.style.display = 'block'; }
          })
          .then(function () {
            if (btn) { btn.disabled = false; btn.style.opacity = ''; }
          });
      });
    }
  }

  // =========================================================================
  // 11. INITIALIZATION ON DOM READY
  // =========================================================================
  document.addEventListener('DOMContentLoaded', function () {
    initMovableBackground();
    initHeaderNav();
    initUnderNavSearch();
    renderDestinationsGrid();
    updateWishlistBadge();
    initBudgetCalculator();
    initFaqAccordion();
    initMapExplorer();
    initFooterYear();
    initScrollProgress();
    initScrollReveal();
    initTilt();
    initCursorGlow();
    initMagnetic();
    initTypingPlaceholder();
    initAuthForms();
    initAuthState();
    initManageForms();
  });

})();
