declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(force?: boolean): void;
    paused(value?: boolean): boolean;
    kill(): void;
    scrollTop(value?: number): number | void;
    scrollTo(target: any, smooth?: boolean, position?: string | number): void;
  }
}
