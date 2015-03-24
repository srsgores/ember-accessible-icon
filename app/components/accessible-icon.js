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
	classNameBindings: [":accessible-icon", "fallbackClassName"],
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
	isDecorative: Ember.computed.notEmpty("title"),
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
