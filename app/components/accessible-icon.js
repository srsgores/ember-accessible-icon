import Ember from "ember";

export default Ember.Component.extend({
	icon: null,
	tagName: "icon",
	/**
	 * @property namespace any CSS namespace to be applied to the icon
	 * @example
	 * 	.icon .icon-wrench
	 */
	namespace: "icon",
	iconPrefix: Ember.computed.alias("namespace"),
	/**
	 * @property {string} type whether to use css fonts or SVG
	 * @example
	 * 	"svg", "font"
	 */
	type: "svg",
	svgEnabled: Ember.computed.equal("type", "svg"),
	classNameBindings: [":accessible-icon", "fallbackClassName", "fallback:has-fallback", "iconClass"],
	title: null,
	attributeBindings: ["role", "aria-hidden", "title"],
	text: Ember.computed("icon", function() {
		if(this.get("icon")){
			return `${Ember.String.capitalize(this.get("icon"))}`;
		}
		else if (this.get("title")) {
			return Ember.String.capitalize(this.get("title"));
		}
		else {
			/* TODO: add some sort of default when no title or icon is set
			* 	For now, we don't return anything, resulting in `null` on the `text` fallback
			* */
		}
	}),
	fallback: true,
	fallbackType: "glyph",
	isDecorative: Ember.computed.empty("icon"), /* it's decorative when no icon is passed in */
	role: Ember.computed("isDecorative", function() {
			return this.get("isDecorative") ? "presentation" : null;
		}
	),
	"aria-hidden": Ember.computed.alias("isDecorative"),
	iconClassName: Ember.computed("icon", function() {
			return `${this.get("namespace")} ${this.getNamespacedClassName(this.get("icon"))}`;
		}
	),
	iconHiddenToScreenReader: true,
	fallbackClassName:  Ember.computed("namespace", "fallbackType", "fallback", function() {
		return this.get("fallback") ? this.getNamespacedClassName(`fallback-${this.get("fallbackType")}`) : null;
	}),
	fallbackTextClassName: Ember.computed("namespace", function() {
		return this.getNamespacedClassName("fallback-text");
	}),
	/**
	 * Get the dasherized CSS-namespaced class name for a given string, using the current CSS namespace
	 * @note returns null if provided string is empty
	 * @param className
	 * @returns {*}
	 */
	getNamespacedClassName: function (className) {
		if (!className || Ember.isBlank(className)) {
			return null;
		}
		else {
			return this.get("namespace") ? `${this.get("namespace")}-${className}` : className;
		}
	}
});
