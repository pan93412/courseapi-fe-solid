import { lightDarkFillClass } from "./consts";
import type { Component } from "solid-js";

/**
 * 搜尋圖示。
 *
 * 內建亮暗色變體，使用 `dark` class 開關。
 *
 * @see https://www.figma.com/file/AxsteaioMaZvVEJQwc9UrG/CourseAPI-UI-Design-v2-(Public-Beta)?node-id=311%3A2430
 */
export const SearchIcon: Component = () => (
	<svg
		width="14"
		height="14"
		viewBox="0 0 14 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9.04167 8.16667H8.58083L8.4175 8.00917C8.98917 7.34417 9.33333 6.48083 9.33333 5.54167C9.33333 3.4475 7.63583 1.75 5.54167 1.75C3.4475 1.75 1.75 3.4475 1.75 5.54167C1.75 7.63583 3.4475 9.33333 5.54167 9.33333C6.48083 9.33333 7.34417 8.98917 8.00917 8.4175L8.16667 8.58083V9.04167L11.0833 11.9525L11.9525 11.0833L9.04167 8.16667ZM5.54167 8.16667C4.08917 8.16667 2.91667 6.99417 2.91667 5.54167C2.91667 4.08917 4.08917 2.91667 5.54167 2.91667C6.99417 2.91667 8.16667 4.08917 8.16667 5.54167C8.16667 6.99417 6.99417 8.16667 5.54167 8.16667Z"
			class={lightDarkFillClass}
		/>
	</svg>
);
