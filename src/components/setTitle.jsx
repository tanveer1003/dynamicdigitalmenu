

/*
export function setTitle(title) {
    document.title = title;
  
    // Only set favicon once if not already set
    if (!document.querySelector("link[rel*='icon']")) {
      const link = document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'icon';
      link.href = '/favicon.ico'; // Adjust path if needed
      document.head.appendChild(link);
    }
  }
    */
// src/hooks/usePageTitle.js
import { useEffect } from "react";

export default function setTitle(title) {
    useEffect(() => {
          document.title = title;
      
          // Set favicon only once
          const existingLink = document.querySelector("link[rel*='icon']");
          if (!existingLink) {
            const link = document.createElement("link");
            link.rel = "icon";
            link.href = "/favicon.ico"; // adjust this path if needed
            document.head.appendChild(link);
          }
        }, []);
  /*
  useEffect(() => {
    document.title = title;

    if (!document.querySelector("link[rel*='icon']")) {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = '/favicon.ico';
      document.head.appendChild(link);
    }
  }, [title]);
  */
}

  