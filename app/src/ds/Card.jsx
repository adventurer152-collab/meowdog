import { useState } from 'react';

const TONES = {
  cream: 'var(--cream-50)',
  white: 'var(--white)',
  honey: 'var(--honey-100)',
  sakura: 'var(--sakura-100)',
  lavender: 'var(--lavender-100)',
  matcha: 'var(--matcha-100)',
  soda: 'var(--soda-100)',
  apricot: 'var(--apricot-100)',
};

export function Card({ children, tone = 'cream', padding = 'var(--space-5)', interactive = false, as: Tag = 'div', style, ...rest }) {
  const [hover, setHover] = useState(false);
  const lift = interactive && hover;
  return (
    <Tag
      onPointerEnter={interactive ? () => setHover(true) : undefined}
      onPointerLeave={interactive ? () => setHover(false) : undefined}
      style={{
        background: TONES[tone] || tone,
        border: 'var(--stroke) solid var(--ink-900)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: lift ? 'var(--shadow-sticker-lg)' : 'var(--shadow-sticker)',
        transform: lift ? 'translateY(-2px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-bounce), box-shadow var(--dur-base)',
        overflow: 'hidden',
        flexShrink: 0,
        cursor: interactive ? 'pointer' : 'default',
        display: 'flex',
        flexDirection: 'column',
        color: 'inherit',
        textDecoration: 'none',
        ...style,
      }}
      {...rest}
    >
      <div style={{ padding, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', flex: 1 }}>{children}</div>
    </Tag>
  );
}
