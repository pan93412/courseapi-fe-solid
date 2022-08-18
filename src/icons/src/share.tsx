import { lightDarkFillClass } from "./consts";
import type { Component } from "solid-js";

/**
 * 分享圖示。
 *
 * 內建亮暗色變體，使用 `dark` class 開關。
 *
 * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=311%3A2407
 */
export const ShareIcon: Component = () => (
	<svg
		width="14"
		height="14"
		viewBox="0 0 14 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M3.5385 12.8573H10.073C10.6692 12.8573 11.116 12.7091 11.4141 12.4127C11.7122 12.117 11.8615 11.676 11.8615 11.0915V5.40633C11.8615 4.82125 11.7122 4.38083 11.4141 4.0845C11.116 3.78817 10.6692 3.64 10.073 3.64H8.48342V4.55758H10.0555C10.3367 4.55758 10.5548 4.63342 10.7106 4.78508C10.8663 4.93733 10.9445 5.16133 10.9445 5.45708V11.0402C10.9445 11.3365 10.8663 11.5605 10.7106 11.7122C10.5548 11.8644 10.3367 11.9402 10.0555 11.9402H3.55017C3.2655 11.9402 3.04675 11.8644 2.89508 11.7122C2.74283 11.5605 2.667 11.3365 2.667 11.0402V5.45708C2.667 5.16133 2.74283 4.93733 2.89508 4.78508C3.04675 4.63342 3.2655 4.55758 3.55017 4.55758H5.12808V3.64H3.5385C2.94233 3.64 2.4955 3.78758 2.19742 4.08158C1.89933 4.37617 1.75 4.81717 1.75 5.40633V11.0915C1.75 11.6801 1.89933 12.1217 2.19742 12.4157C2.4955 12.7102 2.94233 12.8573 3.5385 12.8573ZM6.80283 8.39708C6.92825 8.39708 7.03558 8.35333 7.12483 8.26583C7.21408 8.17833 7.25842 8.07392 7.25842 7.95258V2.10233L7.22458 1.24775L7.60608 1.652L8.47175 2.57483C8.55167 2.66583 8.65433 2.71133 8.77975 2.71133C8.89758 2.71133 8.99617 2.67342 9.07608 2.59758C9.15542 2.52175 9.19567 2.42492 9.19567 2.30708C9.19567 2.20092 9.15017 2.10233 9.05858 2.01075L7.13358 0.154C7.07642 0.0968333 7.02217 0.0571667 6.97083 0.0344167C6.9195 0.0116667 6.8635 0 6.80283 0C6.74567 0 6.692 0.0116667 6.64067 0.0344167C6.58933 0.0571667 6.53333 0.0968333 6.47267 0.154L4.54708 2.01075C4.45958 2.10233 4.41583 2.20092 4.41583 2.30708C4.41583 2.42492 4.45375 2.52175 4.53017 2.59758C4.606 2.67342 4.70458 2.71133 4.82592 2.71133C4.95542 2.71133 5.05983 2.66583 5.13975 2.57483L5.99958 1.652L6.38692 1.24775L6.35308 2.10233V7.95258C6.35308 8.07392 6.39742 8.17833 6.48667 8.26583C6.57592 8.35333 6.6815 8.39708 6.80283 8.39708Z"
			class={lightDarkFillClass}
		/>
	</svg>
);
