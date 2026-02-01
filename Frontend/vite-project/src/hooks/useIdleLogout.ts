import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useIdleLogout = (timeout: number = 30 * 60 * 1000) => {
  const navigate = useNavigate();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const logout = async () => {
      console.log("User logged out due to inactivity");

      try {
        await fetch("http://localhost:3000/user/logout", {
          method: "POST",
          credentials: "include", // 🔥 important for cookies
        });
      } catch (err) {
        console.error("Logout error", err);
      }

      navigate("/login");
    };

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(logout, timeout);
    };

    const events = ["mousemove", "keydown", "scroll", "click"];

    events.forEach((event) =>
      window.addEventListener(event, resetTimer)
    );

    resetTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((event) =>
        window.removeEventListener(event, resetTimer)
      );
    };
  }, [navigate, timeout]);
};

export default useIdleLogout;
