export interface ButtonOptions {
  //
  name?: string;
  attributes?: Map<string, string>;
  styles?: {
      padding?: string,
      margin?: string,
      border?: string,
      cursor?: string,
      color?: string,
      background?: string,
      "border-color"?: string,
      "border-radius"?: string,
      "box-sizing"?: string,
      width?: string,
      height?: string,
      "text-transform"?: string,
      "box-shadow"?: string,
      hover?: {
          background?: string,
          "border-color"?: string,
          "box-shadow"?: string
      }
  }
}