"use client"
import React from 'react';
import { useEffect } from 'react';

declare global {
    interface Window {
      $zoho: any;
    }
  }  

//Zoho Sales Iq Script:
const useScript = (url:string, widgetCode:string) => {
    useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute("type", "text/javascript");

    let code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`
    
    script.appendChild(document.createTextNode(code));
    document.body.appendChild(script);

    return () => {
    document.body.removeChild(script);
    }
}, [url]);
};

export default function SalesIQ() {
    useScript(
        "https://salesiq.zoho.com/widget",
        "siq9569795c2af6dac0818cee990f36c0d731470acc86287e49524d79a290df1b08"
      );
    return (
        <React.Fragment />
    );
}