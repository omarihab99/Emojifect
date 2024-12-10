export type AnimationType = Readonly<'Floating' | 'Sliding' | 'Fading' | 'Bouncing'>;
export interface AnimationDetails {
    animationType: AnimationType;
    animationDuration: string;
    animationTimingFunction: string;
    animationDelay: string;
    animationDirection: string;
    animationFillMode: string;
    animationPlayState: string;
    animationIterationCount: string;
}