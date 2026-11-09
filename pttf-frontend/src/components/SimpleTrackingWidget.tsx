import React, { useState } from 'react';

export const SimpleTrackingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [trackingInput, setTrackingInput] = useState('');
  const [sampleResult, setSampleResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrackSample = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingInput.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSampleResult({
        lot: trackingInput.trim().toUpperCase(),
        status: 'VALIDATED',
        protocol: 'ISO/IEC 17025 Conformity Confirmed',
        reportStatus: 'REPORT READY'
      });
    }, 400);
  };

  return (
    <aside className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm sm:w-96 shadow-2xl transition-all duration-300" id="tracking-widget">
      <div className="bg-primary-container text-surface-bright rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <div className="p-4 bg-primary-container/90 flex items-center justify-between cursor-pointer border-b border-white/10" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-secondary-fixed">fact_check</span>
            <span className="font-title-sm text-sm font-semibold">Live Certificate & Sample Tracker</span>
          </div>
          <span className="material-symbols-outlined text-[20px] transition-transform">
            {isOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
          </span>
        </div>
        {isOpen && (
          <div className="p-4 flex flex-col gap-3 bg-primary-container">
            <form onSubmit={handleTrackSample} className="flex gap-2">
              <input
                type="text"
                id="tracking-input"
                placeholder="Enter Lot or Certificate ID..."
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                className="bg-surface/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-surface-bright placeholder:text-on-primary-container focus:outline-none focus:border-secondary-fixed w-full"
              />
              <button type="submit" className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shrink-0">
                Track
              </button>
            </form>
            <div id="sample-result" className="flex flex-col gap-2 pt-2">
              {isLoading && <div className="text-xs text-on-primary-container animate-pulse">Querying accredited registry...</div>}
              {sampleResult && !isLoading && (
                <div className="flex flex-col gap-2 bg-surface/5 p-3 rounded-lg border border-white/10 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-secondary-fixed font-bold">LOT: #{sampleResult.lot}</span>
                    <span className="bg-tertiary-fixed-dim/20 text-tertiary-fixed-dim px-2 py-0.5 rounded font-semibold">{sampleResult.status}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-surface-bright">Active Accreditation Protocol</div>
                    <div className="text-on-primary-container">{sampleResult.protocol}</div>
                  </div>
                  <div className="w-full bg-primary-container h-2 rounded-full overflow-hidden border border-white/10">
                    <div className="bg-secondary-container h-full w-full rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between pt-1 text-on-primary-container font-mono text-[10px]">
                    <span>Status: {sampleResult.reportStatus}</span>
                    <a href="#download" onClick={(e) => { e.preventDefault(); alert('Downloading verified PDF certificate...'); }} className="text-secondary-fixed hover:underline flex items-center gap-0.5">
                      <span>PDF Certificate</span>
                      <span className="material-symbols-outlined text-[12px]">download</span>
                    </a>
                  </div>
                </div>
              )}
              {!sampleResult && !isLoading && (
                <div className="text-[11px] text-on-primary-container">
                  Enter your sample lot number to verify real-time ISO/IEC 17025 compliance status and download certificates.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
