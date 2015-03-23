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
	classNameBindings: ["namespace", "iconClassName", "fallbackClassName"],
	title: null,
	attributeBindings: ["role", "aria-hidden", "title"],
	text: Ember.computed("icon", ()=>{
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
	isDecorative: Ember.computed.notEmpty("title"),
	role: Ember.computed("isDecorative", () => {
			return this.get("isDecorative") ? "presentation" : null;
		}
	),
	"aria-hidden": Ember.computed.alias("isDecorative"),
	titleClassName: Ember.computed("namespace", ()=>{
		return this.getNamespacedClassName("description");
	}),
	iconClassName: Ember.computed("icon", () => {
			return this.getNamespacedClassName(this.get("icon"));
		}
	),
	fallbackClassName: Ember.computed("namespae", ()=> {
		return this.getNamespacedClassName("fallback-glyph");
	}),
	fallbackTextClassName: Ember.computed("namespace", ()=>{
		return this.getNamespacedClassName("fallback-text")
	}),
	/**
	 * Get the dasherized CSS-namespaced class name for a given string, using the current CSS namespace
	 * @note returns null if provided string is empty
	 * @param className
	 * @returns {*}
	 */
	getNamespacedClassName: (className=null) => {
		if (!className || Ember.isBlank(className)) {
			return null;
		}
		else {
			return this.get("namespace") ? `${this.get("namespace")}-${className}` : className
		}
	}
});
