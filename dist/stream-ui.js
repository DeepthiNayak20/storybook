import { useState as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
// src/components/Button/Button.jsx
var r = ({ label: e, variant: r = "primary", onclick: i, disabled: a = !1, icon: o, size: s = "medium" }) => /* @__PURE__ */ n("button", {
	className: `btn ${r} ${s} ${a ? "disabled" : ""}`,
	onClick: i,
	disabled: a,
	children: [o && /* @__PURE__ */ t("span", {
		className: "icon",
		children: o
	}), e && /* @__PURE__ */ t("span", {
		className: "label",
		children: e
	})]
}), i = ({ label: e, options: r = [], value: i, disabled: a = !1, placeholder: o = "Select an option", onChange: s }) => /* @__PURE__ */ n("div", {
	className: "dropdown",
	children: [e && /* @__PURE__ */ t("label", {
		className: "dropdownLabel",
		children: e
	}), /* @__PURE__ */ n("select", {
		className: "selectDropdown",
		value: i,
		disabled: a,
		onChange: s,
		children: [/* @__PURE__ */ t("option", {
			value: "",
			children: o
		}), r.map((e) => /* @__PURE__ */ t("option", {
			value: e.value,
			children: e.label
		}, e.id))]
	})]
}), a = ({ items: r = [], type: i = "single", disabled: a = !1 }) => {
	let [o, s] = e([]), c = (e) => {
		a || s(i === "single" ? (t) => t.includes(e) ? [] : [e] : (t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	};
	return /* @__PURE__ */ t("div", {
		className: "accordion",
		children: r.map((e) => {
			let r = o.includes(e.id);
			return /* @__PURE__ */ n("div", {
				className: "accordion-item",
				children: [/* @__PURE__ */ n("button", {
					className: "accordion-button",
					onClick: () => c(e.id),
					disabled: a,
					"aria-expanded": r,
					children: [/* @__PURE__ */ t("span", { children: e.title }), /* @__PURE__ */ t("span", {
						className: "accordion-icon",
						children: r ? "−" : "+"
					})]
				}), r && /* @__PURE__ */ t("div", {
					className: "accordion-content",
					children: e.content
				})]
			}, e.id);
		})
	});
};
export { a as Accordion, r as Button, i as Dropdown };
