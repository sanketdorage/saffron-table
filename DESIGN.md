---
name: Saffron Table
colors:
  surface: '#f8faf5'
  surface-dim: '#d9dbd6'
  surface-bright: '#f8faf5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4ef'
  surface-container: '#edeee9'
  surface-container-high: '#e7e9e4'
  surface-container-highest: '#e1e3de'
  on-surface: '#191c19'
  on-surface-variant: '#424844'
  inverse-surface: '#2e312e'
  inverse-on-surface: '#f0f1ec'
  outline: '#727974'
  outline-variant: '#c2c8c2'
  surface-tint: '#476556'
  primary: '#042217'
  on-primary: '#ffffff'
  primary-container: '#1b382b'
  on-primary-container: '#82a291'
  inverse-primary: '#adcebc'
  secondary: '#7b5809'
  on-secondary: '#ffffff'
  secondary-container: '#fdcd77'
  on-secondary-container: '#785505'
  tertiary: '#291b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#442e00'
  on-tertiary-container: '#bd9449'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9ead7'
  primary-fixed-dim: '#adcebc'
  on-primary-fixed: '#022015'
  on-primary-fixed-variant: '#304d3f'
  secondary-fixed: '#ffdea7'
  secondary-fixed-dim: '#eebf6b'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#ffdea9'
  tertiary-fixed-dim: '#edbf70'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5f4100'
  background: '#f8faf5'
  on-background: '#191c19'
  surface-variant: '#e1e3de'
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: '0'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  title-lg:
    fontFamily: Playfair Display
    fontSize: 19px
    fontWeight: '500'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies bespoke culinary luxury, sensory richness, and artisanal hospitality. The emotional tone is deliberate, reverent, and deeply intimate—evoking the stillness of linen-draped tables, low warm candlelight, and fragrant heritage spices. 

The aesthetic blends editorial minimalism with tactile heritage craftsmanship. Generous white space, fine-gauge structural linework (0.5px–1px), and carefully calibrated saffron ochre highlights yield a polished yet warmly human atmosphere. Imagery should feature directional, atmospheric lighting with soft depth-of-field, celebrating raw ingredients and plating craft rather than sterile perfection.

## Colors

The palette draws directly from tactile organic elements: raw linen, hand-hammered brass, crushed saffron stigmata, and deep botanicals.

- **Primary (`#1B382B`)**: Deep forest emerald. Anchors critical actions, high-contrast states, and commanding visual elements. Supported by deep shadow green (`#12281E`) for interactive press states and footer zones.
- **Secondary (`#C89D4C`) & Tertiary (`#E5B869`)**: Subtle warm gold and raw saffron ochre. Used intentionally for accents, active states, delicate filigree, dividers, and pill badging. Not to be used for long-form reading.
- **Neutral (`#242724`)**: Warm charcoal for primary typography, preventing the stark harshness of pure black against linen. Secondary copy settles into warm muted taupe-charcoal (`#4A4E49`).
- **Surfaces**: Canvas default rests on `#FAF7F2` (warm cream linen), with cards and inset panels lifting gently via `#F5EFEB` and `#FFFFFF`.
- **Status Tones**: Muted, desaturated earth signals—warm madder rust for errors (`#9E382A`), softened sage for confirmations (`#3E6852`).

## Typography

The pairing creates an intentional dialogue between classic editorial grace and clean contemporary functionality. 

- **Playfair Display** supplies poetic presence for hero moments, course names, and editorial pull-quotes. Italics are reserved for sensory descriptions, vintages, origins, and quiet epigraphs.
- **Plus Jakarta Sans** grounds the system in calm clarity for long-form menus, tasting notes, reservation flows, and pricing.
- Uppercase styling is restricted to micro-labels (`label-md`, `label-sm`), category headers, and table metadata, always styled with expanded tracking (`0.08em` to `0.12em`) to maintain an airy, understated tone.

## Layout & Spacing

A 12-column responsive grid on desktop with generous page margins (`4rem`) and airy column gutters (`2.5rem`), transitioning to a 4-column structure on mobile devices with `1.25rem` outer margins. 

The layout philosophy prioritizes vertical rhythm and breathing room:
- Sections feature ample vertical padding (`4rem` to `6rem`) to let course selections and culinary storytelling register without visual clutter.
- Menu courses utilize asymmetric arrangements: dish descriptions sit across 7–8 columns while price and dietary badges float harmoniously across the remaining columns.
- Reservation and booking forms employ centered, single-column containers bounded at a maximum width of `680px` for focused, calm interaction.

## Elevation & Depth

To maintain the tactile print aesthetic of high-end stationery and linen menus, physical drop shadows are avoided. Visual depth is established through tonal layering, fine hairline borders, and atmospheric ambient diffusion:

- **Tonal Tiers**: Canvas sits on `#FAF7F2`. Elevated surfaces (cards, elevated modals, reservation trays) adopt clean `#FFFFFF` or softened `#F5EFEB`.
- **Low-Contrast Hairlines**: Cards, popovers, and table rows use a subtle `1px` border in `#E8E2D8` or translucent primary green (`rgba(27, 56, 43, 0.08)`).
- **Ambient Shadow (Modals & Overlays Only)**: When overlay depth is strictly necessary (e.g., wine pairing modal, booking drawer), apply an ultra-diffused, warm-tinted shadow: `0 20px 40px -10px rgba(36, 39, 36, 0.08)`.
- **Backdrop Blurs**: Fixed navigation headers use frosted linen opacity (`rgba(250, 247, 242, 0.85)` with `12px` backdrop blur) to blend seamlessly into scrolling content.

## Shapes

The geometric framework balances crisp architectural edges with soft pill curves:

- **Containers & Inputs**: Structural containers, menu panels, image frames, and input fields utilize soft `4px` corner radii (`roundedness: 1`), reinforcing precision and craft.
- **Pill Badges & Tags**: Dietary notes (e.g., *Vegetarian*, *Reserve Cellar*), table badges, and tasting labels use fully rounded pill silhouettes (`rounded-full`) to contrast gracefully against rectilinear borders.
- **Micro-accents**: Divider lines frequently terminate in understated 3px diamond or saffron-point pips.

## Components

### Buttons
- **Primary**: Solid deep emerald green background (`#1B382B`), warm linen text (`#FAF7F2`), subtle `4px` corner radius. Interactive hover shifts to `#12281E` with micro-shift upward (1px).
- **Secondary / Outline**: Transparent fill with `1px` solid ochre border (`#C89D4C`), forest green text. Hover washes to `rgba(200, 157, 76, 0.08)`.
- **Ghost / Editorial**: Text-only button in `#1B382B` with an animated saffron underline (`#C89D4C`) that expands on hover.

### Chips & Badges
- **Pill Badges**: Pill-shaped (`rounded-full`) tags with warm linen backgrounds (`#F5EFEB`), soft gold/ochre border (`#E5B869`), and uppercase charcoal micro-text (`label-sm`).
- **Tasting Menu Indicators**: Circular botanical badges indicating wine pairings or dietary adaptations.

### Lists & Menu Displays
- **Menu Items**: Dish title rendered in `headline-sm` with price aligned opposite. Subtle dotted or hairline divider (`rgba(27, 56, 43, 0.12)`) guides the eye. Sensory descriptions rest below in `body-sm` (`#4A4E49`).
- **Editorial Wine List**: Tabular format with structured columns for vintage, producer, appellation, and bottle price, styled with quiet row dividers and alternating hover states.

### Checkboxes & Radios
- **Controls**: Custom 18px squares/circles in `#FAF7F2` with `1px` border in `#1B382B`.
- **Active State**: Inset filled dot or refined checkmark rendered in warm saffron gold (`#C89D4C`).

### Input Fields
- **Form Controls**: Crisp flat fields with `1px` base border in `#E8E2D8`, crisp `#FAF7F2` background, and `body-md` typography. 
- **Focus State**: Hairline transition to forest green border (`#1B382B`) with a soft saffron glow (`0 0 0 1px #C89D4C`). Floating labels transition to `label-sm` uppercase.

### Cards & Reservation Modules
- **Course & Event Cards**: Contained with clean `1px` borders (`#E8E2D8`), gentle linen background (`#FFFFFF`), generous internal padding (`space-lg`), and full-width imagery framed with a hairline matte border.
- **Time-Slot Selector**: Horizontal pill buttons indicating reservation times; available slots feature ochre border outlines, while selected times flip to deep forest green fills with cream typography.