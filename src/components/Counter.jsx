import React, { useEffect, useState } from "react";

const PageViewCounter = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // 从 localStorage 获取访问次数
    const currentCount = parseInt(localStorage.getItem("page_view_count") || "0");
    const newCount = currentCount + 1;

    // 更新访问次数并存入 localStorage
    localStorage.setItem("page_view_count", newCount.toString());
    setViewCount(newCount);
  }, []);

  return <div>Page visits: {viewCount}</div>;
};

export default PageViewCounter;
