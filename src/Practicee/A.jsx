import React, { useState, useEffect } from "react";

export default function LoadingExample() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading, please wait...</h2>
      ) : (
        <h2>Data Loaded Successfully!</h2>
      )}
    </div>
  );
}
