import { useEffect } from "react";
import "./App.css"; // Import CSS riêng cho animation và responsive

// CẤU HÌNH
const TARGET_URL = "https://chungbaoxmphuong.netlify.app/"; // ĐỔI THÀNH URL TRANG ĐÍCH CỦA BẠN
const LOGO_PATH = "/logo.png";

function App() {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = TARGET_URL;
    }, 30000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="redirect-container">
      <img src={LOGO_PATH} alt="Logo" className="logo" />

      <p className="text fade-in">
        Đang chuyển hướng bạn tới trang đích
        <span className="dots" aria-hidden="true"></span>
      </p>

      <p className="text fade-in delay-1">Vui lòng chờ trong chốc lát</p>
    </div>
  );
}

export default App;
