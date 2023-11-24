import { lightDefaultTheme, darkDefaultTheme, Theme } from "@blocknote/react";

const lightTheme = {
  colors: {
    editor: {
      text: "#222222",
      background: "#e5e5e5",
    },
    menu: {
      text: "#222222",
      background: "#f5f5f5",
    },
    tooltip: {
      text: "#222222",
      background: "#d4d4d4",
    },
    hovered: {
      text: "#222222",
      background: "#e5e5e5",
    },
    selected: {
      text: "#222222",
      background: "#e5e5e5",
    },
    disabled: {
      text: "#d4d4d4",
      background: "#f5f5f5",
    },
    shadow: "#f5f5f5",
    border: "#f5f5f5",
    sideMenu: "#a1a1aa",
    highlightColors: lightDefaultTheme.colors.highlightColors,
  },
  borderRadius: 4,
  fontFamily: "Inter",
  componentStyles: () => ({
    Editor: {
      a: {
        color: "#737373",
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  }),
} satisfies Theme;

const darkTheme = {
  colors: {
    editor: {
      text: "#ffffff",
      background: "#525252",
    },
    menu: {
      text: "#ffffff",
      background: "#404040",
    },
    tooltip: {
      text: "#ffffff",
      background: "#262626",
    },
    hovered: {
      text: "#ffffff",
      background: "#737373",
    },
    selected: {
      text: "#ffffff",
      background: "#737373",
    },
    disabled: {
      text: "#737373",
      background: "#404040",
    },
    shadow: "#404040",
    border: "#404040",
    sideMenu: "#bababa",
    highlightColors: darkDefaultTheme.colors.highlightColors,
  },
  borderRadius: 4,
  fontFamily: "Inter",
  componentStyles: () => ({
    Editor: {
      a: {
        color: "#bcbcbc",
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  }),
} satisfies Theme;

// Combining the custom themes into a single theme object.
export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
