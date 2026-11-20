"use client";

export default function GlobalError({ reset }) {
  return (
    <html lang="es">
      <body>
        <h2>Something went wrong</h2>
        <button type="button" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
