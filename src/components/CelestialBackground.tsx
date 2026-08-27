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
      <svg
  className="celestial-constellation"
  viewBox="0 0 400 220"
  aria-hidden="true"
>
  <path d="M35 150 L95 105 L155 130 L220 70 L285 115 L350 55" />

  <circle cx="35" cy="150" r="3" />
  <circle cx="95" cy="105" r="2.5" />
  <circle cx="155" cy="130" r="3" />
  <circle cx="220" cy="70" r="3" />
  <circle cx="285" cy="115" r="2.5" />
  <circle cx="350" cy="55" r="3" />
</svg>
      <div className="secret-pyramid" title="">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
