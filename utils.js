(function () {
  function getRandom(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function capitalizeWords(value) {
    return String(value || '')
      .replace(' (Calories)', '')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function showToast(message, toastId) {
    const id = toastId || 'toast';
    const toast = document.getElementById(id);
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function getDurationMinutes(duration, options) {
    const opts = options || {};
    if (duration === 'short') return opts.short || 7;
    if (duration === 'long') return opts.long || 20;
    return opts.medium || 12;
  }

  function parseDurationBounds(text) {
    const value = String(text || '');
    const rangeMatch = value.match(/(\d+)\s*[-–]\s*(\d+)\s*minute/i);
    if (rangeMatch) {
      return { min: Number(rangeMatch[1]), max: Number(rangeMatch[2]) };
    }
    const singleMatch = value.match(/(\d+)\s*minute/i);
    if (singleMatch) {
      const minutes = Number(singleMatch[1]);
      return { min: minutes, max: minutes };
    }
    return null;
  }

  function classifyDuration(minutes) {
    if (minutes <= 7) return 'short';
    if (minutes <= 15) return 'medium';
    return 'long';
  }

  function getWodDurationBucket(wod) {
    const source = [wod && wod.format, wod && wod.content].filter(Boolean).join(' ');
    const bounds = parseDurationBounds(source);
    if (!bounds) return null;
    const avg = (bounds.min + bounds.max) / 2;
    return classifyDuration(avg);
  }

  function filterWodsByDuration(wods, duration) {
    if (!Array.isArray(wods)) return [];
    const filtered = wods.filter((wod) => getWodDurationBucket(wod) === duration);
    return filtered.length ? filtered : wods;
  }

  function safeFetchJson(url, fallbackValue) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .catch((error) => {
        console.warn(`Failed to load ${url}:`, error);
        return fallbackValue;
      });
  }

  window.FWUtils = {
    getRandom,
    capitalizeWords,
    showToast,
    getDurationMinutes,
    parseDurationBounds,
    classifyDuration,
    getWodDurationBucket,
    filterWodsByDuration,
    safeFetchJson
  };
})();
