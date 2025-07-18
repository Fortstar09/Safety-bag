// TradingViewWidget.jsx
import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full flex flex-col items-start justify-start" style={{ minHeight: "calc(100dvh - 20%)", height: '91dvh' }}>
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
      </div>
      {/* <div className="w-full h-40 bg-white">

      </div> */}
    </div>
  );
}

export default memo(TradingViewWidget);
