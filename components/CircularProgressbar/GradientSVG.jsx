const GradientSVG = ({ startColor, endColor, idCSS, rotation }) => {
  const gradientTransform = `rotate(${rotation})`;

  return (
    <svg style={{ height: 0, width: '100%' }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="0%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export { GradientSVG }