export function Icon({ name, size = 20, weight = 'bold', color = 'currentColor', style, ...rest }) {
  return (
    <i
      className={`ph-${weight} ph-${name}`}
      aria-hidden="true"
      style={{ fontSize: size, color, lineHeight: 1, display: 'inline-flex', flexShrink: 0, ...style }}
      {...rest}
    />
  );
}
