/* @ds-bundle: {"format":4,"namespace":"KawaiiWarmDesignSystem_239310","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Icon","sourcePath":"components/display/Icon.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"7bdf876e2fa7","components/actions/IconButton.jsx":"685e02c889d2","components/display/Badge.jsx":"e7a42a381417","components/display/Card.jsx":"318684b3cc5c","components/display/Icon.jsx":"72b5bfa4d536","components/display/Tag.jsx":"2db598163db4","components/feedback/Dialog.jsx":"0884096ef59e","components/feedback/Toast.jsx":"1d43228e14c7","components/feedback/Tooltip.jsx":"14d5c78e0ab8","components/forms/Checkbox.jsx":"c862697f392e","components/forms/Input.jsx":"fd6ee08b82b8","components/forms/Radio.jsx":"44d052212908","components/forms/Select.jsx":"a1b793d077b1","components/forms/Switch.jsx":"5afc909fdf3f","components/navigation/Tabs.jsx":"b9d6d5dfba88","ui_kits/corner-shop/App.jsx":"09555d7d6b82","ui_kits/corner-shop/CartScreen.jsx":"9307800c2e8e","ui_kits/corner-shop/Chrome.jsx":"3a14906c70c6","ui_kits/corner-shop/DoneScreen.jsx":"a2f1f47d8132","ui_kits/corner-shop/HomeScreen.jsx":"9adcb2eb8ce1","ui_kits/corner-shop/ShopScreen.jsx":"9d0b66ac03ef","ui_kits/corner-shop/data.jsx":"cf514cc8bc81"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KawaiiWarmDesignSystem_239310 = window.KawaiiWarmDesignSystem_239310 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
const BADGE = {
  honey: ['var(--honey-100)', 'var(--honey-700)', 'var(--honey-400)'],
  sakura: ['var(--sakura-100)', 'var(--sakura-700)', 'var(--sakura-500)'],
  lavender: ['var(--lavender-100)', 'var(--lavender-700)', 'var(--lavender-500)'],
  matcha: ['var(--matcha-100)', 'var(--matcha-700)', 'var(--matcha-500)'],
  soda: ['var(--soda-100)', 'var(--soda-700)', 'var(--soda-500)'],
  apricot: ['var(--apricot-100)', 'var(--apricot-700)', 'var(--apricot-500)']
};
function Badge({
  children,
  tone = 'honey',
  solid = false,
  dot = false,
  style
}) {
  const [bg, fg, sol] = BADGE[tone] || BADGE.honey;
  if (dot) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: sol,
      border: '1.5px solid var(--ink-900)',
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const CARD_TONES = {
  cream: 'var(--cream-50)',
  white: 'var(--white)',
  honey: 'var(--honey-100)',
  sakura: 'var(--sakura-100)',
  lavender: 'var(--lavender-100)',
  matcha: 'var(--matcha-100)',
  soda: 'var(--soda-100)',
  apricot: 'var(--apricot-100)'
};
function Card({
  children,
  tone = 'cream',
  media,
  mediaHeight = 160,
  awning = false,
  padding = 'var(--space-5)',
  interactive = false,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  const lift = interactive && h;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: interactive ? () => setH(true) : undefined,
    onMouseLeave: interactive ? () => setH(false) : undefined,
    style: {
      background: CARD_TONES[tone] || tone,
      border: 'var(--stroke) solid var(--ink-900)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: lift ? 'var(--shadow-sticker-lg)' : 'var(--shadow-sticker)',
      transform: lift ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-bounce), box-shadow var(--dur-base)',
      overflow: 'hidden',
      flexShrink: 0,
      minHeight: 'min-content',
      cursor: interactive ? 'pointer' : 'default',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), awning && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18,
      background: 'var(--pattern-awning)',
      borderBottom: 'var(--stroke) solid var(--ink-900)'
    }
  }), media && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      height: mediaHeight,
      background: `center/cover no-repeat url(${media})`,
      borderBottom: 'var(--stroke) solid var(--ink-900)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      flex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  weight = 'bold',
  color = 'currentColor',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    className: `ph-${weight} ph-${name}`,
    "aria-hidden": "true",
    style: {
      fontSize: size,
      color,
      lineHeight: 1,
      display: 'inline-flex',
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function usePress(disabled) {
  const [h, setH] = useState(false);
  const [p, setP] = useState(false);
  const bind = disabled ? {} : {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  };
  return [h, p, bind];
}
const BTN_TONES = {
  primary: {
    bg: 'var(--honey-400)',
    hover: 'var(--honey-300)',
    press: 'var(--honey-500)',
    fg: 'var(--ink-900)',
    border: 'var(--ink-900)',
    sticker: true
  },
  secondary: {
    bg: 'var(--cream-50)',
    hover: 'var(--white)',
    press: 'var(--cream-200)',
    fg: 'var(--ink-900)',
    border: 'var(--ink-900)',
    sticker: true
  },
  soft: {
    bg: 'var(--lavender-100)',
    hover: 'var(--lavender-300)',
    press: 'var(--lavender-300)',
    fg: 'var(--lavender-700)',
    border: 'transparent',
    sticker: false
  },
  ghost: {
    bg: 'transparent',
    hover: 'var(--cream-200)',
    press: 'var(--cream-300)',
    fg: 'var(--ink-700)',
    border: 'transparent',
    sticker: false
  },
  danger: {
    bg: 'var(--sakura-300)',
    hover: 'var(--sakura-100)',
    press: 'var(--sakura-500)',
    fg: 'var(--ink-900)',
    border: 'var(--ink-900)',
    sticker: true
  }
};
const BTN_SIZES = {
  sm: {
    h: 'var(--control-sm)',
    px: 14,
    fs: 13,
    icon: 16,
    gap: 6
  },
  md: {
    h: 'var(--control-md)',
    px: 20,
    fs: 15,
    icon: 18,
    gap: 8
  },
  lg: {
    h: 'var(--control-lg)',
    px: 26,
    fs: 17,
    icon: 20,
    gap: 10
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const t = BTN_TONES[variant] || BTN_TONES.primary;
  const s = BTN_SIZES[size] || BTN_SIZES.md;
  const [h, p, bind] = usePress(disabled);
  const lift = t.sticker && !disabled ? p ? 3 : h ? -1 : 0 : 0;
  const shadow = t.sticker && !disabled ? p ? '0 0 0 var(--ink-900)' : h ? '0 4px 0 var(--ink-900)' : 'var(--shadow-sticker)' : 'none';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick
  }, bind, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: 'var(--radius-pill)',
      border: `var(--stroke) solid ${disabled ? 'var(--ink-300)' : t.border}`,
      background: disabled ? 'var(--ink-100)' : p ? t.press : h ? t.hover : t.bg,
      color: disabled ? 'var(--ink-500)' : t.fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.fs,
      lineHeight: 1,
      letterSpacing: '.01em',
      boxShadow: shadow,
      transform: `translateY(${lift}px)`,
      transition: 'transform var(--dur-fast) var(--ease-bounce), box-shadow var(--dur-fast) var(--ease-soft), background var(--dur-fast)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      whiteSpace: 'nowrap',
      marginBottom: t.sticker ? 3 : 0,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function usePress(disabled) {
  const [h, setH] = useState(false);
  const [p, setP] = useState(false);
  const bind = disabled ? {} : {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  };
  return [h, p, bind];
}
const BTN_TONES = {
  primary: {
    bg: 'var(--honey-400)',
    hover: 'var(--honey-300)',
    press: 'var(--honey-500)',
    fg: 'var(--ink-900)',
    border: 'var(--ink-900)',
    sticker: true
  },
  secondary: {
    bg: 'var(--cream-50)',
    hover: 'var(--white)',
    press: 'var(--cream-200)',
    fg: 'var(--ink-900)',
    border: 'var(--ink-900)',
    sticker: true
  },
  soft: {
    bg: 'var(--lavender-100)',
    hover: 'var(--lavender-300)',
    press: 'var(--lavender-300)',
    fg: 'var(--lavender-700)',
    border: 'transparent',
    sticker: false
  },
  ghost: {
    bg: 'transparent',
    hover: 'var(--cream-200)',
    press: 'var(--cream-300)',
    fg: 'var(--ink-700)',
    border: 'transparent',
    sticker: false
  },
  danger: {
    bg: 'var(--sakura-300)',
    hover: 'var(--sakura-100)',
    press: 'var(--sakura-500)',
    fg: 'var(--ink-900)',
    border: 'var(--ink-900)',
    sticker: true
  }
};
const IB_SIZES = {
  sm: [32, 16],
  md: [42, 20],
  lg: [52, 24]
};
function IconButton({
  icon,
  label,
  variant = 'secondary',
  size = 'md',
  active = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const t = BTN_TONES[variant] || BTN_TONES.secondary;
  const [d, is] = IB_SIZES[size] || IB_SIZES.md;
  const [h, p, bind] = usePress(disabled);
  const lift = t.sticker && !disabled ? p ? 3 : h ? -1 : 0 : 0;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick
  }, bind, {
    style: {
      width: d,
      height: d,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: `var(--stroke) solid ${disabled ? 'var(--ink-300)' : t.border}`,
      background: disabled ? 'var(--ink-100)' : p ? t.press : h ? t.hover : t.bg,
      color: disabled ? 'var(--ink-500)' : active ? 'var(--sakura-500)' : t.fg,
      boxShadow: t.sticker && !disabled ? p ? 'none' : h ? '0 4px 0 var(--ink-900)' : 'var(--shadow-sticker)' : 'none',
      transform: `translateY(${lift}px)`,
      transition: 'transform var(--dur-fast) var(--ease-bounce), box-shadow var(--dur-fast), background var(--dur-fast)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: is,
    weight: active ? 'fill' : 'bold'
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
const {
  useState
} = React;
function Tag({
  children,
  icon,
  selected = false,
  onClick,
  onRemove,
  style
}) {
  const [h, setH] = useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 32,
      padding: onRemove ? '0 8px 0 14px' : '0 14px',
      borderRadius: 999,
      border: `var(--stroke) solid ${selected ? 'var(--ink-900)' : 'var(--ink-300)'}`,
      background: selected ? 'var(--honey-300)' : clickable && h ? 'var(--cream-200)' : 'var(--white)',
      color: 'var(--ink-900)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: 'nowrap',
      boxShadow: selected ? 'var(--shadow-sticker-sm)' : 'none',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    weight: selected ? 'fill' : 'bold'
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      width: 20,
      height: 20,
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--ink-100)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 11
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  awning = true,
  width = 380,
  inline = false,
  style
}) {
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--cream-50)',
      border: 'var(--stroke) solid var(--ink-900)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-float)',
      overflow: 'hidden',
      ...style
    }
  }, awning && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22,
      background: 'var(--pattern-awning)',
      borderBottom: 'var(--stroke) solid var(--ink-900)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      flex: 1,
      font: 'var(--type-h3)',
      color: 'var(--text-strong)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }, actions)));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'var(--overlay-scrim)'
    }
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TOAST = {
  success: ['var(--matcha-300)', 'check-circle'],
  info: ['var(--soda-300)', 'info'],
  warning: ['var(--honey-300)', 'bell-ringing'],
  danger: ['var(--sakura-300)', 'warning-circle']
};
function Toast({
  message,
  tone = 'success',
  icon,
  action,
  onAction,
  onClose,
  style
}) {
  const [chip, defIcon] = TOAST[tone] || TOAST.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 10px 10px 10px',
      minWidth: 280,
      maxWidth: 420,
      background: 'var(--white)',
      border: 'var(--stroke) solid var(--ink-900)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-float)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      flexShrink: 0,
      borderRadius: '50%',
      background: chip,
      border: 'var(--stroke-thin) solid var(--ink-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || defIcon,
    size: 18,
    weight: "fill"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-body)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, message), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      border: 0,
      background: 'none',
      font: 'var(--type-label)',
      color: 'var(--text-link)',
      cursor: 'pointer',
      padding: '0 6px'
    }
  }, action), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  label,
  children,
  placement = 'top',
  open,
  style
}) {
  const [h, setH] = useState(false);
  const show = open ?? h;
  const top = placement === 'top';
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onFocus: () => setH(true),
    onBlur: () => setH(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      [top ? 'bottom' : 'top']: 'calc(100% + 10px)',
      transform: `translateX(-50%) translateY(${show ? 0 : top ? 4 : -4}px) scale(${show ? 1 : .92})`,
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast), transform var(--dur-base) var(--ease-bounce)',
      pointerEvents: 'none',
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--type-label)',
      whiteSpace: 'nowrap',
      zIndex: 50
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      [top ? 'top' : 'bottom']: '100%',
      marginLeft: -6,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      [top ? 'borderTop' : 'borderBottom']: '6px solid var(--ink-900)'
    }
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  disabled = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: 7,
      border: 'var(--stroke) solid var(--ink-900)',
      background: checked ? 'var(--honey-400)' : 'var(--white)',
      color: 'var(--ink-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: checked ? 'var(--shadow-sticker-sm)' : 'none',
      transition: 'background var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Input({
  label,
  hint,
  error,
  icon,
  value,
  defaultValue,
  placeholder,
  type = 'text',
  disabled = false,
  onChange,
  style,
  inputStyle,
  ...rest
}) {
  const [f, setF] = useState(false);
  const border = error ? 'var(--sakura-500)' : f ? 'var(--ink-900)' : 'var(--ink-300)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 'var(--control-md)',
      padding: '0 14px',
      background: disabled ? 'var(--ink-100)' : 'var(--white)',
      border: `var(--stroke) solid ${border}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: f && !error ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      color: 'var(--text-muted)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body)',
      color: 'var(--text-strong)',
      ...inputStyle
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      color: error ? 'var(--danger-fg)' : 'var(--text-muted)',
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, error && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "warning-circle",
    size: 14
  }), error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: '50%',
      border: 'var(--stroke) solid var(--ink-900)',
      background: 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--apricot-500)',
      transform: `scale(${checked ? 1 : 0})`,
      transition: 'transform var(--dur-base) var(--ease-bounce)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Select({
  label,
  options = [],
  value,
  defaultValue,
  placeholder,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [f, setF] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 'var(--control-md)',
      padding: '0 40px 0 14px',
      background: disabled ? 'var(--ink-100)' : 'var(--white)',
      border: `var(--stroke) solid ${f ? 'var(--ink-900)' : 'var(--ink-300)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: f ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      font: 'var(--type-body)',
      color: 'var(--text-strong)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "caret-down",
    size: 16,
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-700)'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  disabled = false,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 46,
      height: 28,
      flexShrink: 0,
      borderRadius: 999,
      border: 'var(--stroke) solid var(--ink-900)',
      background: checked ? 'var(--matcha-500)' : 'var(--ink-200)',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--white)',
      border: 'var(--stroke) solid var(--ink-900)',
      transition: 'left var(--dur-base) var(--ease-bounce)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  fullWidth = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      gap: 4,
      padding: 4,
      borderRadius: 999,
      background: 'var(--cream-200)',
      border: 'var(--stroke) solid var(--ink-900)',
      ...style
    }
  }, items.map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.id),
      style: {
        flex: fullWidth ? 1 : undefined,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        height: 34,
        padding: '0 16px',
        borderRadius: 999,
        border: `var(--stroke) solid ${on ? 'var(--ink-900)' : 'transparent'}`,
        background: on ? 'var(--white)' : 'transparent',
        color: on ? 'var(--ink-900)' : 'var(--ink-700)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background var(--dur-fast), color var(--dur-fast)'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16,
      weight: on ? 'fill' : 'bold'
    }), it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corner-shop/App.jsx
try { (() => {
const {
  Toast
} = window.KawaiiWarmDesignSystem_239310;
function App() {
  const [tab, setTab] = React.useState('home');
  const [shopId, setShopId] = React.useState(null);
  const [cart, setCart] = React.useState({
    s1: 1,
    s2: 2
  });
  const [favs, setFavs] = React.useState(['laitier']);
  const [done, setDone] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const shop = SHOPS.find(s => s.id === shopId);
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const flash = msg => {
    setToast(msg);
    clearTimeout(window.__t);
    window.__t = setTimeout(() => setToast(null), 2200);
  };
  const add = m => {
    setCart(c => ({
      ...c,
      [m.id]: (c[m.id] || 0) + 1
    }));
    flash('已加入購物袋！');
  };
  const setQty = (id, n) => setCart(c => {
    const x = {
      ...c
    };
    if (n <= 0) delete x[id];else x[id] = n;
    return x;
  });
  const toggleFav = id => setFavs(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id]);
  const goTab = t => {
    setTab(t);
    setShopId(null);
    setDone(false);
  };
  let body;
  if (done) body = /*#__PURE__*/React.createElement(DoneScreen, {
    onHome: () => {
      setDone(false);
      setCart({});
      goTab('home');
    }
  });else if (shop) body = /*#__PURE__*/React.createElement(ShopScreen, {
    shop: shop,
    onBack: () => setShopId(null),
    cart: cart,
    add: add,
    fav: favs.includes(shop.id),
    toggleFav: () => toggleFav(shop.id),
    onCart: () => goTab('cart')
  });else if (tab === 'cart') body = /*#__PURE__*/React.createElement(CartScreen, {
    cart: cart,
    setQty: setQty,
    clear: () => setCart({}),
    onPay: () => setDone(true),
    onBrowse: () => goTab('home')
  });else if (tab === 'home') body = /*#__PURE__*/React.createElement(HomeScreen, {
    onOpen: setShopId,
    favs: favs,
    toggleFav: toggleFav
  });else body = /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
      textAlign: 'center',
      color: 'var(--text-muted)',
      font: '400 17px var(--font-hand)'
    }
  }, "\u9019\u4E00\u9801\u4E0D\u5728\u793A\u7BC4\u7BC4\u570D\u5167");
  return /*#__PURE__*/React.createElement(PhoneFrame, null, body, !shop && !done && /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    onTab: goTab,
    cartCount: count
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 110,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    message: toast,
    action: "\u67E5\u770B",
    onAction: () => {
      setToast(null);
      goTab('cart');
    }
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corner-shop/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corner-shop/CartScreen.jsx
try { (() => {
const {
  Button: CButton,
  IconButton: CIconButton,
  Radio: CRadio,
  Select: CSelect,
  Switch: CSwitch,
  Checkbox: CCheckbox,
  Dialog: CDialog,
  Card: CCard,
  Icon: CIcon
} = window.KawaiiWarmDesignSystem_239310;
function CartScreen({
  cart,
  setQty,
  clear,
  onPay,
  onBrowse
}) {
  const items = SHOPS.flatMap(s => s.menu.map(m => ({
    ...m,
    shop: s.name
  }))).filter(m => cart[m.id]);
  const [pay, setPay] = React.useState('line');
  const [cup, setCup] = React.useState(true);
  const [utensil, setUtensil] = React.useState(false);
  const [ask, setAsk] = React.useState(false);
  const total = items.reduce((a, m) => a + m.price * cart[m.id], 0) - (cup ? 5 : 0);
  if (!items.length) return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      padding: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 88,
      height: 88,
      borderRadius: '50%',
      background: 'var(--honey-100)',
      border: '2px solid var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "shopping-bag",
    size: 40
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)'
    }
  }, "\u8CFC\u7269\u888B\u7A7A\u7A7A\u7684"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, "\u53BB\u9644\u8FD1\u7684\u5C0F\u5E97\u901B\u901B\u5427\uFF01"), /*#__PURE__*/React.createElement(CButton, {
    icon: "storefront",
    onClick: onBrowse
  }, "\u901B\u901B\u5C0F\u5E97"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 20px',
      display: 'grid',
      alignContent: 'start',
      gridAutoRows: 'max-content',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)',
      fontSize: 28
    }
  }, "\u8CFC\u7269\u888B"), /*#__PURE__*/React.createElement(CButton, {
    variant: "ghost",
    size: "sm",
    icon: "trash",
    onClick: () => setAsk(true)
  }, "\u6E05\u7A7A")), /*#__PURE__*/React.createElement(CCard, {
    padding: "6px 14px"
  }, items.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 0',
      borderTop: i ? '1.5px dashed var(--ink-200)' : 0
    }
  }, /*#__PURE__*/React.createElement(ItemChip, {
    icon: m.icon,
    tone: m.tone,
    size: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 15px var(--font-display)',
      color: 'var(--ink-900)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, m.shop, " \xB7 NT$ ", m.price)), /*#__PURE__*/React.createElement(CIconButton, {
    icon: "minus",
    label: "\u6E1B\u5C11",
    size: "sm",
    onClick: () => setQty(m.id, cart[m.id] - 1)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 15px var(--font-display)',
      minWidth: 16,
      textAlign: 'center',
      color: 'var(--ink-900)'
    }
  }, cart[m.id]), /*#__PURE__*/React.createElement(CIconButton, {
    icon: "plus",
    label: "\u589E\u52A0",
    size: "sm",
    variant: "primary",
    onClick: () => setQty(m.id, cart[m.id] + 1)
  })))), /*#__PURE__*/React.createElement(CSelect, {
    label: "\u53D6\u9910\u6642\u9593",
    defaultValue: "08:30",
    options: ['08:00', '08:30', '09:00', '09:30']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, "\u4ED8\u6B3E\u65B9\u5F0F"), [['line', '行動支付'], ['card', '信用卡'], ['cash', '到店付現']].map(([v, l]) => /*#__PURE__*/React.createElement(CRadio, {
    key: v,
    name: "pay",
    value: v,
    label: l,
    checked: pay === v,
    onChange: setPay
  }))), /*#__PURE__*/React.createElement(CSwitch, {
    label: "\u81EA\u5099\u74B0\u4FDD\u676F\uFF08\u6298 NT$5\uFF09",
    checked: cup,
    onChange: setCup
  }), /*#__PURE__*/React.createElement(CCheckbox, {
    label: "\u9700\u8981\u9910\u5177",
    checked: utensil,
    onChange: setUtensil
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: '14px 20px',
      background: 'var(--cream-50)',
      borderTop: '2px solid var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\u5408\u8A08"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 24px var(--font-display)',
      color: 'var(--ink-900)'
    }
  }, "NT$ ", total)), /*#__PURE__*/React.createElement(CButton, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: onPay
  }, "\u7D50\u5E33")), /*#__PURE__*/React.createElement(CDialog, {
    open: ask,
    title: "\u78BA\u5B9A\u8981\u6E05\u7A7A\u8CFC\u7269\u888B\u55CE\uFF1F",
    onClose: () => setAsk(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CButton, {
      variant: "ghost",
      size: "sm",
      onClick: () => setAsk(false)
    }, "\u518D\u60F3\u60F3"), /*#__PURE__*/React.createElement(CButton, {
      variant: "danger",
      size: "sm",
      onClick: () => {
        clear();
        setAsk(false);
      }
    }, "\u6E05\u7A7A"))
  }, "\u888B\u5B50\u88E1\u7684 ", items.length, " \u6A23\u6771\u897F\u6703\u88AB\u62FF\u51FA\u4F86\u5594\u3002"));
}
window.CartScreen = CartScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corner-shop/CartScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corner-shop/Chrome.jsx
try { (() => {
const {
  Icon: KIcon,
  Badge: KBadge
} = window.KawaiiWarmDesignSystem_239310;
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      borderRadius: 48,
      border: '3px solid var(--ink-900)',
      background: 'var(--bg-page)',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 6px 0 var(--ink-900), 0 30px 60px rgba(110,72,40,.2)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px',
      font: '700 14px var(--font-body)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: "cell-signal-high",
    size: 16
  }), /*#__PURE__*/React.createElement(KIcon, {
    name: "wifi-high",
    size: 16
  }), /*#__PURE__*/React.createElement(KIcon, {
    name: "battery-high",
    size: 18
  }))), children);
}
function TabBar({
  tab,
  onTab,
  cartCount
}) {
  const items = [['home', '首頁', 'house'], ['map', '附近', 'map-pin'], ['cart', '購物袋', 'shopping-bag'], ['me', '我的', 'user']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px 12px 26px',
      background: 'var(--cream-50)',
      borderTop: '2px solid var(--ink-900)'
    }
  }, items.map(([id, l, i]) => {
    const on = tab === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onTab(id),
      style: {
        position: 'relative',
        border: 0,
        background: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        color: on ? 'var(--ink-900)' : 'var(--ink-500)',
        font: '700 11px var(--font-body)',
        minWidth: 56
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 30,
        borderRadius: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: on ? 'var(--honey-300)' : 'transparent',
        border: on ? '2px solid var(--ink-900)' : '2px solid transparent'
      }
    }, /*#__PURE__*/React.createElement(KIcon, {
      name: i,
      size: 20,
      weight: on ? 'fill' : 'bold'
    })), l, id === 'cart' && cartCount > 0 && /*#__PURE__*/React.createElement(KBadge, {
      tone: "sakura",
      solid: true,
      style: {
        position: 'absolute',
        top: -4,
        right: 2,
        height: 18,
        minWidth: 18,
        fontSize: 11,
        padding: '0 5px'
      }
    }, cartCount));
  }));
}
function ItemChip({
  icon,
  tone,
  size = 52
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: 16,
      background: TONE_BG[tone],
      border: '2px solid var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: icon,
    size: size * .48
  }));
}
Object.assign(window, {
  PhoneFrame,
  TabBar,
  ItemChip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corner-shop/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corner-shop/DoneScreen.jsx
try { (() => {
const {
  Button: DButton,
  Card: DCard,
  Icon: DIcon,
  Badge: DBadge
} = window.KawaiiWarmDesignSystem_239310;
function DoneScreen({
  onHome
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px',
      display: 'grid',
      alignContent: 'start',
      gridAutoRows: 'max-content',
      justifyItems: 'center',
      gap: 18,
      textAlign: 'center',
      background: 'var(--pattern-dots), var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 40,
      width: 104,
      height: 104,
      borderRadius: '50%',
      background: 'var(--matcha-300)',
      border: '2px solid var(--ink-900)',
      boxShadow: 'var(--shadow-sticker-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "check-fat",
    size: 48,
    weight: "fill"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)',
      fontSize: 30
    }
  }, "\u8A02\u597D\u56C9\uFF01"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      color: 'var(--text-body)'
    }
  }, "\u718A\u8C93\u8001\u95C6\u5DF2\u7D93\u958B\u59CB\u6E96\u5099\u4E86")), /*#__PURE__*/React.createElement(DCard, {
    tone: "white",
    style: {
      width: '100%',
      textAlign: 'left'
    },
    padding: "16px 18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)'
    }
  }, "\u53D6\u9910\u865F\u78BC"), /*#__PURE__*/React.createElement(DBadge, {
    tone: "honey",
    solid: true
  }, "\u6E96\u5099\u4E2D")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 48px/1 var(--font-display)',
      color: 'var(--ink-900)',
      letterSpacing: '.04em'
    }
  }, "A-047"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      fontSize: 14,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "clock",
    size: 16
  }), "08:30 \u5230\u5E97\u53D6\u9910")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 18px var(--font-hand)',
      color: 'var(--apricot-700)'
    }
  }, "\u8CBC\u7D19 +1 \xB7 \u518D 1 \u500B\u5C31\u80FD\u63DB\u8C46\u6F3F \u2661"), /*#__PURE__*/React.createElement(DButton, {
    variant: "secondary",
    icon: "house",
    onClick: onHome
  }, "\u56DE\u5230\u9996\u9801"));
}
window.DoneScreen = DoneScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corner-shop/DoneScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corner-shop/HomeScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Tag,
  Input,
  IconButton,
  Icon
} = window.KawaiiWarmDesignSystem_239310;
function HomeScreen({
  onOpen,
  favs,
  toggleFav
}) {
  const [cat, setCat] = React.useState('all');
  const [q, setQ] = React.useState('');
  const list = SHOPS.filter(s => (cat === 'all' || s.cat === cat) && (s.name + s.en).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 24px',
      display: 'grid',
      alignContent: 'start',
      gridAutoRows: 'max-content',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px var(--font-hand)',
      color: 'var(--apricot-700)'
    }
  }, "\u65E9\u5B89\uFF0C\u5C0F\u718A \u2600"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)',
      fontSize: 28
    }
  }, "\u4ECA\u5929\u60F3\u53BB\u54EA\u5BB6\u5E97\uFF1F")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "\u901A\u77E5"
  })), /*#__PURE__*/React.createElement(Input, {
    icon: "magnifying-glass",
    placeholder: "\u627E\u627E\u4ECA\u5929\u7684\u9EDE\u5FC3\u3001\u82B1\u2026",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, [['all', '全部', 'storefront'], ['bread', '早餐', 'bread'], ['drink', '甜點飲品', 'ice-cream'], ['flower', '花店', 'flower-tulip']].map(([id, l, i]) => /*#__PURE__*/React.createElement(Tag, {
    key: id,
    icon: i,
    selected: cat === id,
    onClick: () => setCat(id)
  }, l))), /*#__PURE__*/React.createElement(Card, {
    tone: "honey",
    awning: true,
    padding: "14px 16px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ItemChip, {
    icon: "gift",
    tone: "sakura",
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 17,
      color: 'var(--ink-900)'
    }
  }, "\u96C6\u6EFF 5 \u500B\u8CBC\u7D19\u9001\u4E00\u676F\u8C46\u6F3F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, "\u4F60\u5DF2\u7D93\u6709 3 \u500B\u4E86\uFF01")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "\u9644\u8FD1\u7684\u5C0F\u5E97"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, list.length, " \u5BB6")), list.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.id,
    media: s.img,
    mediaHeight: 150,
    interactive: true,
    onClick: () => onOpen(s.id),
    padding: "14px 16px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      flex: 1
    }
  }, s.name), /*#__PURE__*/React.createElement(Badge, {
    tone: s.open ? 'matcha' : 'sakura'
  }, s.open ? '營業中' : '休息中'), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "\u6536\u85CF",
    size: "sm",
    variant: "ghost",
    active: favs.includes(s.id),
    onClick: e => {
      e.stopPropagation();
      toggleFav(s.id);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), s.dist), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), s.hours), /*#__PURE__*/React.createElement("span", null, s.keeper)))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 32,
      font: '400 17px var(--font-hand)',
      color: 'var(--text-muted)'
    }
  }, "\u627E\u4E0D\u5230\u9019\u5BB6\u5E97\u8036\u2026\u63DB\u500B\u95DC\u9375\u5B57\u8A66\u8A66\uFF1F"));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corner-shop/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corner-shop/ShopScreen.jsx
try { (() => {
const {
  Tabs: STabs,
  Badge: SBadge,
  IconButton: SIconButton,
  Icon: SIcon,
  Button: SButton,
  Tooltip: STooltip
} = window.KawaiiWarmDesignSystem_239310;
function ShopScreen({
  shop,
  onBack,
  cart,
  add,
  fav,
  toggleFav,
  onCart
}) {
  const [tab, setTab] = React.useState('menu');
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 230,
      background: `center 30%/cover url(${shop.img})`,
      borderBottom: '2px solid var(--ink-900)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 16,
      right: 16,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(SIconButton, {
    icon: "arrow-left",
    label: "\u8FD4\u56DE",
    onClick: onBack
  }), /*#__PURE__*/React.createElement(STooltip, {
    label: fav ? '已收藏' : '收藏這家店',
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(SIconButton, {
    icon: "heart",
    label: "\u6536\u85CF",
    active: fav,
    onClick: toggleFav
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18,
      background: 'var(--pattern-awning)',
      borderBottom: '2px solid var(--ink-900)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      display: 'grid',
      alignContent: 'start',
      gridAutoRows: 'max-content',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)',
      fontSize: 28,
      flex: 1
    }
  }, shop.name), /*#__PURE__*/React.createElement(SBadge, {
    tone: shop.open ? 'matcha' : 'sakura'
  }, shop.open ? '營業中' : '休息中')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, shop.en, " \xB7 ", shop.keeper), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 16px var(--font-hand)',
      color: 'var(--apricot-700)',
      marginTop: 6
    }
  }, "\u270E ", shop.note)), /*#__PURE__*/React.createElement(STabs, {
    fullWidth: true,
    value: tab,
    onChange: setTab,
    items: [{
      id: 'menu',
      label: '菜單',
      icon: 'bowl-food'
    }, {
      id: 'info',
      label: '店家資訊',
      icon: 'storefront'
    }]
  }), tab === 'menu' && shop.menu.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 12,
      background: 'var(--surface-card)',
      border: '2px solid var(--ink-900)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement(ItemChip, {
    icon: m.icon,
    tone: m.tone
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 16px var(--font-display)',
      color: 'var(--ink-900)'
    }
  }, m.name), m.tag && /*#__PURE__*/React.createElement(SBadge, {
    tone: "sakura"
  }, m.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 15px var(--font-body)',
      color: 'var(--apricot-700)'
    }
  }, "NT$ ", m.price)), cart[m.id] ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 14px var(--font-display)',
      color: 'var(--ink-900)',
      minWidth: 20,
      textAlign: 'center'
    }
  }, "\xD7", cart[m.id]) : null, /*#__PURE__*/React.createElement(SIconButton, {
    icon: "plus",
    label: "\u52A0\u5165",
    variant: "primary",
    size: "sm",
    disabled: !shop.open,
    onClick: () => add(m)
  }))), tab === 'info' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 15
    }
  }, [['clock', '營業時間 ' + shop.hours], ['map-pin', '距離你 ' + shop.dist], ['phone', '02-1234-5678'], ['chat-circle', shop.keeper + '說：慢慢來，不用急喔']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: i,
    size: 18
  }), t))))), count > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 18
    }
  }, /*#__PURE__*/React.createElement(SButton, {
    fullWidth: true,
    size: "lg",
    icon: "shopping-bag",
    onClick: onCart
  }, "\u67E5\u770B\u8CFC\u7269\u888B \xB7 ", count, " \u6A23")));
}
window.ShopScreen = ShopScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corner-shop/ShopScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corner-shop/data.jsx
try { (() => {
const IMG = '../../assets/illustrations/';
const SHOPS = [{
  id: 'soy',
  name: '豆漿油條',
  en: 'Soy Milk & Crullers',
  keeper: '熊貓老闆',
  img: IMG + 'soymilk-breakfast-shop.jpg',
  tone: 'honey',
  cat: 'bread',
  dist: '350m',
  hours: '06:00–12:00',
  open: true,
  note: '今天的紫薯饅頭剛出爐',
  menu: [{
    id: 's1',
    name: '鹹豆漿',
    price: 45,
    icon: 'bowl-food',
    tone: 'honey',
    tag: '招牌'
  }, {
    id: 's2',
    name: '油條',
    price: 25,
    icon: 'bread',
    tone: 'apricot'
  }, {
    id: 's3',
    name: '紫薯饅頭',
    price: 30,
    icon: 'cookie',
    tone: 'lavender',
    tag: '限定'
  }, {
    id: 's4',
    name: '手工水餃 (10顆)',
    price: 80,
    icon: 'bowl-steam',
    tone: 'cream'
  }, {
    id: 's5',
    name: '冰豆漿',
    price: 30,
    icon: 'coffee',
    tone: 'soda'
  }]
}, {
  id: 'green',
  name: 'Green hose',
  en: '綠房子花店',
  keeper: '狐狸店長',
  img: IMG + 'green-flower-shop.jpg',
  tone: 'matcha',
  cat: 'flower',
  dist: '600m',
  hours: '09:00–19:00',
  open: true,
  note: '新到一批小盆栽',
  menu: [{
    id: 'g1',
    name: '粉色小花束',
    price: 380,
    icon: 'flower',
    tone: 'sakura',
    tag: 'NEW'
  }, {
    id: 'g2',
    name: '龜背芋小盆',
    price: 520,
    icon: 'plant',
    tone: 'matcha'
  }, {
    id: 'g3',
    name: '雛菊一枝',
    price: 60,
    icon: 'flower-lotus',
    tone: 'honey'
  }]
}, {
  id: 'rabbit',
  name: 'Mr.Rabbit Flower',
  en: '兔子先生花屋 · 47號',
  keeper: '兔子先生',
  img: IMG + 'rabbit-flower-house.jpg',
  tone: 'sakura',
  cat: 'flower',
  dist: '1.2km',
  hours: '10:00–18:00',
  open: false,
  note: '鬱金香季開始囉',
  menu: [{
    id: 'r1',
    name: '鬱金香花束',
    price: 450,
    icon: 'flower-tulip',
    tone: 'sakura',
    tag: '季節'
  }, {
    id: 'r2',
    name: '鈴蘭小盆',
    price: 280,
    icon: 'plant',
    tone: 'matcha'
  }]
}, {
  id: 'laitier',
  name: 'LAITIER',
  en: '牛奶冰淇淋窗口',
  keeper: '北極熊',
  img: IMG + 'ice-cream-laitier.jpg',
  tone: 'soda',
  cat: 'drink',
  dist: '800m',
  hours: '12:00–21:00',
  open: true,
  note: '熱可可霜淇淋 HOT',
  menu: [{
    id: 'l1',
    name: '牛奶霜淇淋',
    price: 70,
    icon: 'ice-cream',
    tone: 'soda',
    tag: '招牌'
  }, {
    id: 'l2',
    name: '水果聖代',
    price: 120,
    icon: 'ice-cream',
    tone: 'sakura'
  }, {
    id: 'l3',
    name: '熱可可',
    price: 90,
    icon: 'coffee',
    tone: 'apricot',
    tag: 'HOT'
  }]
}];
const TONE_BG = {
  honey: 'var(--honey-100)',
  apricot: 'var(--apricot-100)',
  lavender: 'var(--lavender-100)',
  cream: 'var(--cream-200)',
  soda: 'var(--soda-100)',
  sakura: 'var(--sakura-100)',
  matcha: 'var(--matcha-100)'
};
Object.assign(window, {
  SHOPS,
  TONE_BG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corner-shop/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
