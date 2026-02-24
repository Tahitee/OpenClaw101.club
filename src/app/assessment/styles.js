export const CSS = `
  .assess-root {
    --c-primary: #e74c3c;
    --c-primary-dark: #c0392b;
    --c-card: #ffffff;
    --c-bg: #f9fafb;
    --c-border: #e5e7eb;
    --c-text: #1a1a2e;
    --c-muted: #6b7280;
    --c-green: #10b981;
    --c-green-bg: #ecfdf5;
    --c-yellow: #f59e0b;
    --c-yellow-bg: #fffbeb;
    --c-red: #ef4444;
    --c-red-bg: #fef2f2;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--c-text);
    background: var(--c-bg);
    min-height: 100vh;
  }
  @media (prefers-color-scheme: dark) {
    .assess-root {
      --c-card: #1e293b;
      --c-bg: #0f172a;
      --c-border: #334155;
      --c-text: #e2e8f0;
      --c-muted: #94a3b8;
      --c-green-bg: #052e16;
      --c-yellow-bg: #422006;
      --c-red-bg: #450a0a;
    }
  }
  .assess-container {
    max-width: 720px;
    margin: 0 auto;
    padding: 24px 16px 80px;
  }
  .assess-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: var(--c-border);
    outline: none;
    cursor: pointer;
  }
  .assess-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: var(--c-primary);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(231,76,60,.4);
    transition: transform 0.15s;
  }
  .assess-slider::-webkit-slider-thumb:hover {
    transform: scale(1.15);
  }
  .assess-slider::-moz-range-thumb {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: var(--c-primary);
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 8px rgba(231,76,60,.4);
  }
  .assess-card {
    background: var(--c-card);
    border-radius: 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,.06);
    padding: 24px;
    margin-bottom: 20px;
    border: 1px solid var(--c-border);
    transition: box-shadow 0.2s;
  }
  .assess-card:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,.08);
  }
  .assess-btn {
    padding: 14px 32px;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .assess-btn:hover { transform: translateY(-1px); }
  .assess-btn-primary {
    background: var(--c-primary);
    color: white;
    box-shadow: 0 4px 14px rgba(231,76,60,.3);
  }
  .assess-btn-primary:hover { background: var(--c-primary-dark); }
  .assess-btn-secondary {
    background: var(--c-card);
    color: var(--c-text);
    border: 1px solid var(--c-border);
  }
  .assess-btn-secondary:hover { background: var(--c-bg); }
  @media (max-width: 480px) {
    .assess-container { padding: 16px 12px 60px; }
    .assess-card { padding: 18px 16px; }
    .assess-btn { padding: 12px 20px; font-size: 0.92rem; }
  }
`
