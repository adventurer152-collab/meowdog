import { Icon } from './Icon.jsx';
import { usePress } from './usePress.js';

const TONES = {
  primary: { bg: 'var(--honey-400)', hover: 'var(--honey-300)', press: 'var(--honey-500)', fg: 'var(--ink-900)', border: 'var(--ink-900)', sticker: true },
  secondary: { bg: 'var(--cream-50)', hover: 'var(--white)', press: 'var(--cream-200)', fg: 'var(--ink-900)', border: 'var(--ink-900)', sticker: true },
};
const SIZES = { sm: [32, 16], md: [42, 20], lg: [52, 24] };

export function IconButton({ icon, label, variant = 'secondary', size = 'md', active = false, disabled = false, onClick, style, ...rest }) {
  const t = TONES[variant] || TONES.secondary;
  const [d, iconSize] = SIZES[size] || SIZES.md;
  const [hover, press, bind] = usePress(disabled);
  const lift = t.sticker && !disabled ? (press ? 3 : hover ? -1 : 0) : 0;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={active || undefined}
      disabled={disabled}
      onClick={onClick}
      {...bind}
      style={{
        width: d,
        height: d,
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: `var(--stroke) solid ${disabled ? 'var(--ink-300)' : t.border}`,
        background: disabled ? 'var(--ink-100)' : press ? t.press : hover ? t.hover : t.bg,
        color: disabled ? 'var(--ink-500)' : active ? 'var(--sakura-500)' : t.fg,
        boxShadow: t.sticker && !disabled ? (press ? 'none' : hover ? '0 4px 0 var(--ink-900)' : 'var(--shadow-sticker)') : 'none',
        transform: `translateY(${lift}px)`,
        transition: 'transform var(--dur-fast) var(--ease-bounce), box-shadow var(--dur-fast), background var(--dur-fast)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: 0,
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={iconSize} weight={active ? 'fill' : 'bold'} />
    </button>
  );
}
