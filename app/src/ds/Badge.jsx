const TONES = {
  honey: ['var(--honey-100)', 'var(--honey-700)', 'var(--honey-400)'],
  sakura: ['var(--sakura-100)', 'var(--sakura-700)', 'var(--sakura-500)'],
  lavender: ['var(--lavender-100)', 'var(--lavender-700)', 'var(--lavender-500)'],
  matcha: ['var(--matcha-100)', 'var(--matcha-700)', 'var(--matcha-500)'],
  soda: ['var(--soda-100)', 'var(--soda-700)', 'var(--soda-500)'],
  apricot: ['var(--apricot-100)', 'var(--apricot-700)', 'var(--apricot-500)'],
};

export function Badge({ children, tone = 'honey', solid = false, style }) {
  const [bg, fg, sol] = TONES[tone] || TONES.honey;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        minWidth: 20,
        height: 22,
        padding: '0 8px',
        justifyContent: 'center',
        borderRadius: 999,
        background: solid ? sol : bg,
        color: solid ? 'var(--ink-900)' : fg,
        border: solid ? '1.5px solid var(--ink-900)' : '1.5px solid transparent',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
