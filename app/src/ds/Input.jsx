import { useState } from 'react';
import { Icon } from './Icon.jsx';

export function Input({ icon, placeholder, type = 'text', value, defaultValue, onChange, style, inputStyle, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: 'var(--control-md)',
          padding: '0 14px',
          background: 'var(--white)',
          border: `var(--stroke) solid ${focus ? 'var(--ink-900)' : 'var(--ink-300)'}`,
          borderRadius: 'var(--radius-md)',
          boxShadow: focus ? 'var(--ring-focus)' : 'none',
          transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
          color: 'var(--text-muted)',
        }}
      >
        {icon && <Icon name={icon} size={18} />}
        <input
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, border: 0, outline: 'none', background: 'transparent', font: 'var(--type-body)', color: 'var(--text-strong)', ...inputStyle }}
          {...rest}
        />
      </span>
    </label>
  );
}
