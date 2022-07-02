import {createYoffeeElement, html, YoffeeElement} from "yoffee";
import { EventEmitter } from 'events';
import { ButtonOptions } from "./ButtonOptions";
import { coreTheme } from "./CoreTheme";

export class Button {
    options: ButtonOptions;
    emitter: EventEmitter;

    constructor(options: ButtonOptions) {
        this.options = options;
        this.options.styles = this.options.styles ?? {};
        this.options.styles.hover = this.options.styles.hover ?? {};

        this.defaultOptions();
        this.createComponent();
        this.emitters();
    }

    defaultOptions() {
        this.options.name = this.options.name ?? "y-button";
        this.options.styles.hover = this.options.styles.hover ?? { background: undefined, "border-color": undefined};
        this.options.styles = {
            padding: this.options.styles.padding ?? coreTheme.spacing.elementPaddingMedium,
            margin: this.options.styles.margin ?? coreTheme.spacing.elementMarginMedium,
            border: this.options.styles.border ?? `${coreTheme.border.slim} ${coreTheme.border.secondary}`,
            cursor: this.options.styles.cursor ?? "pointer",
            color: this.options.styles.color ?? coreTheme.color.primary,
            background: this.options.styles.background ?? coreTheme.bgColor.primaryGradient,
            "border-color": this.options.styles["border-color"] ?? coreTheme.border.primary,
            "border-radius": this.options.styles["border-radius"] ?? coreTheme.border.rounded,
            "box-sizing": this.options.styles["box-sizing"] ?? "border-box",
            width: this.options.styles.width ?? "auto",
            height: this.options.styles.height ?? "auto",
            "text-transform": this.options.styles["text-transform"] ?? "none",
            "box-shadow": this.options.styles["box-shadow"] ?? coreTheme["box-shadow"].primary,
            // TODO arrange a better Object structure for nested Objects
            hover: {
                background: this.options.styles.hover.background ?? coreTheme.bgColor.hover.primary,
                "border-color": this.options.styles.hover["border-color"] ?? coreTheme.border.hover.primary,
                "box-shadow": this.options.styles.hover["box-shadow"] ?? coreTheme["box-shadow"].hover.primary
            }
        }
    }

    emitters() {
        this.emitter = new EventEmitter()
    }

    onclick(e: YoffeeElement) {
        console.log("emmitting onclick ");
        console.log(e);

        this.emitter.emit('onclick', { element: e })
    }

    createComponent() {
        let styles = "";
        for (const k in this.options.styles) {  // const k: string
            const v = this.options.styles[k];
            if(typeof v !== 'object' ) {
                styles = styles + "\n" + k + ": " + v + ";";
            }
        }

        let hoverStyles = "";
        for (const k in this.options.styles.hover) {  // const k: string
            const v = this.options.styles.hover[k];
            if(typeof v !== 'object' ) {
                hoverStyles = hoverStyles + "\n" + k + ": " + v + ";";
            }
        }
            
        createYoffeeElement(this.options.name, (props, element) => {
            return html(this.options)`

            <style> 
                .${() => this.options.name} {
                    ${() => styles}
                }
                .${() => this.options.name}:hover {
                    ${() => hoverStyles}
                }
            </style>
            <button class="${ () => this.options.name}" onclick=${() => this.onclick(element)}>
                ${ () => element.textContent}
            </button>
            `
        })
    }
}

