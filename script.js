document.addEventListener("DOMContentLoaded", function() {
    const middleSection = document.querySelector('.middle');
    
    const data = [
      { url: "https://ampm1wallet.com/RF7528327", imgSrc: "images/Screenshot 2024-08-12 023532.png", text: "ampm" },
      { url: "https://pubg2like.com/RF322A2A3", imgSrc: "images/screenshot 2024-08-12 024242.png", text: "pubg2" },
      { url: "https://bila2cuci.asia/RF228839A71", imgSrc: "images/Screenshot 2024-08-12 065819.png", text: "bila2cuci" },
      { url: "https://vipklbet2.com/RF16355A919", imgSrc: "images/Screenshot 2024-08-12 103401.png", text: "vipklbet" },
      { url: "##", imgSrc: "https://lucky555a.com/media/0883f6ab8735699206e52.png", text: "##" },
      { url: "##", imgSrc: "https://cashkingbet.net/media/cbf571caa5466ad94abdf.png", text: "##" },
      { url: "##", imgSrc: "##", text: "##" },
      
    ];
    
    data.forEach(item => {
      const newElement = document.createElement('a');
      newElement.href = item.url;
      newElement.className = "responsive-div";
      newElement.target = "_blank";
      newElement.rel = "nofollow noreferrer noopener";
      
      const img = document.createElement('img');
      img.src = item.imgSrc;
      img.alt = item.text;
      
      const p = document.createElement('p');
      p.textContent = item.text;
      
      newElement.appendChild(img);
      newElement.appendChild(p);
      
      middleSection.appendChild(newElement);
    });
  });
  
