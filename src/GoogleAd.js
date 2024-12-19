import React, { useEffect } from 'react';

const GoogleAd = ({ client, slot }) => {
  useEffect(() => {
    if (window.adsbygoogle && window.adsbygoogle.length === 0) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + client;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);

      script.onload = () => {
        window.adsbygoogle.push({});
      };

      return () => {
        document.body.removeChild(script);
      };
    } else if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, [client, slot]);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client={client}
         data-ad-slot={slot}
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
};

export default GoogleAd;
