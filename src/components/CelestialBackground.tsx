export function CelestialBackground() {
  return (
    <div className="celestial-layer" aria-hidden="true">
      {Array.from({ length: 34 }, (_, index) => (
        <span
          key={index}
          className={index % 7 === 0 ? 'star star--accent' : 'star'}
          style={{
            left: `${4 + ((index * 17) % 92)}%`,
            top: `${5 + ((index * 29) % 84)}%`,
          }}
        />
      ))}
      <div className="secret-pyramid" title="">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
