const gradientSettings = {
  type: "linear-gradient",
  deg: "180deg",
  repeat: "repeat-x"
}

export const coreTheme = {
  color: {
      primary: "#1B2430",
      secondary: "gray",
      tertiary: "purple",
      special: "f2f2f2f0",
      hover: {
          primary: "white",
          secondary: "rgba(242,242,242,.941176)"
      }                    
  },

  "box-shadow": {
      primary: "3px 3px 6px #ccc, -3px -3px 6px #e6e6e6;",
      hover: {
          primary: "inset 2px 2px 5px #ccc, inset -3px -3px 7px #e6e6e6"
      }
  },

  bgColor: {
      primary: "white",
      secondary: "dimgray",
      tertiary: "white",
      primaryGradient: `#f2f2f2f0 ${gradientSettings.type}(${gradientSettings.deg},rgba(240,240,241,.95),#f2f2f2f0) ${gradientSettings.repeat}`,
      hover: {
          primary: "rgba(223,223,223,.941176) linear-gradient(180deg,rgba(224,224,225,.95),rgba(223,223,223,.941176)) repeat-x;"
      }
  },

  spacing: {
      elementPaddingMedium: ".55rem 0.95rem",
      elementPaddingCompact: ".25rem 0.45rem",

      elementMarginMedium: ".45rem 0.45rem",
      elementMarginCompact: ".15rem 0.15rem",
  },

  border: {
      slim: ".0625rem solid",
      normal: ".12rem solid",
      none: "none",
      primary: "#d1d9e6",
      secondary: "transparent",
      rounded: "5rem",
      square: "0rem",
      hover: {
          primary: "transparent" //"rgba(242,242,242,.941176)"
      }
  }

}