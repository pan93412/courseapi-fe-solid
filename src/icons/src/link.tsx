import { lightDarkFillClass } from "./consts";
import type { Component } from "solid-js";

/**
 * 連結圖示。
 *
 * 內建亮暗色變體，使用 `dark` class 開關。
 *
 * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=311%3A2422
 */
export const LinkIcon: Component = () => (
	<svg
		width="14"
		height="14"
		viewBox="0 0 14 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_21_339)">
			<path
				d="M7.06586 4.28661L6.18993 5.17571C6.62462 5.21083 6.99015 5.29206 7.28652 5.41939C7.58285 5.54671 7.83858 5.71795 8.05372 5.93309C8.43574 6.31946 8.69042 6.74426 8.81774 7.20748C8.94507 7.67066 8.94615 8.13276 8.82098 8.59377C8.69586 9.05479 8.4423 9.47629 8.06033 9.85827L5.90674 12.0053C5.52476 12.3873 5.10326 12.6419 4.64225 12.7692C4.18123 12.8966 3.71912 12.8977 3.25592 12.7725C2.79271 12.6474 2.37011 12.3939 1.98813 12.0119C1.60615 11.6255 1.35149 11.2007 1.22416 10.7375C1.09683 10.2743 1.09683 9.81221 1.22416 9.35119C1.35149 8.89017 1.60615 8.46867 1.98813 8.0867L3.27897 6.79583C3.18676 6.58948 3.12859 6.36886 3.10444 6.13396C3.08029 5.89906 3.08578 5.67404 3.1209 5.4589L1.18465 7.38856C0.662164 7.91544 0.312013 8.4972 0.134193 9.13383C-0.0436265 9.77046 -0.0447242 10.4082 0.1309 11.047C0.306524 11.6859 0.659969 12.2709 1.19124 12.8022C1.72689 13.3379 2.31413 13.6935 2.95296 13.8691C3.5918 14.0447 4.22953 14.0436 4.86617 13.8658C5.50281 13.688 6.08237 13.3378 6.60485 12.8154L8.85726 10.5564C9.3841 10.0295 9.73643 9.44776 9.91424 8.81113C10.0921 8.1745 10.0932 7.53677 9.91755 6.89794C9.74194 6.25909 9.3863 5.67404 8.85065 5.14278C8.64429 4.93203 8.40061 4.75531 8.11961 4.61261C7.83861 4.46992 7.48736 4.36125 7.06586 4.28661ZM6.90124 9.71341L7.77715 8.82428C7.34248 8.78917 6.97695 8.70795 6.68058 8.58062C6.38422 8.4533 6.12847 8.28207 5.91333 8.06694C5.52695 7.68055 5.2701 7.25575 5.14278 6.79253C5.01545 6.32933 5.01545 5.86723 5.14278 5.40622C5.2701 4.9452 5.52476 4.5237 5.90674 4.14172L8.05372 1.99471C8.4401 1.61273 8.8638 1.35807 9.32482 1.23075C9.78584 1.10342 10.2469 1.10232 10.7079 1.22746C11.1689 1.35259 11.5926 1.60834 11.979 1.99471C12.361 2.37669 12.6156 2.79929 12.7429 3.2625C12.8703 3.72571 12.8703 4.18782 12.7429 4.64884C12.6156 5.10985 12.361 5.53135 11.979 5.91333L10.6881 7.20418C10.7803 7.41491 10.8385 7.63663 10.8626 7.86934C10.8868 8.10205 10.8813 8.32597 10.8462 8.5411L12.7825 6.61143C13.3049 6.08456 13.6551 5.50281 13.8329 4.86617C14.0107 4.22953 14.0118 3.5918 13.8362 2.95296C13.6605 2.31413 13.3071 1.72908 12.7758 1.19782C12.2402 0.662163 11.653 0.306524 11.0141 0.1309C10.3753 -0.0447242 9.73755 -0.0436265 9.10092 0.134193C8.46429 0.312013 7.88253 0.66436 7.35565 1.19124L5.10985 3.44361C4.58298 3.97048 4.23063 4.55224 4.05281 5.18888C3.87499 5.82552 3.87389 6.46325 4.04952 7.10208C4.22514 7.74091 4.58078 8.32597 5.11644 8.85726C5.32279 9.06799 5.56647 9.2447 5.84747 9.38741C6.12847 9.53011 6.47972 9.63878 6.90124 9.71341Z"
				class={lightDarkFillClass}
			/>
		</g>
		<defs>
			<clipPath id="clip0_21_339">
				<rect width="14" height="14" fill="white" />
			</clipPath>
		</defs>
	</svg>
);
