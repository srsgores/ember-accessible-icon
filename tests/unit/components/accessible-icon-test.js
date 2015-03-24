import {moduleForComponent, test} from "ember-qunit";
import Ember from "ember";

moduleForComponent("accessible-icon", {
	// specify the other units that are required for this test
	// needs: ["component:foo", "helper:bar"]
});

test("it renders", function(assert) {
	assert.expect(2);

	// creates the component instance
	var component = this.subject();
	assert.equal(component._state, "preRender");

	// renders the component to the page
	this.render();
	assert.equal(component._state, "inDOM");
});

test("it contains an icon with aria-hidden attribute", function(assert) {
	var component = this.subject();
	Ember.run(()=> {
			component.set("icon", "wrench");
		}
	);
	this.render();

	assert.equal(this.$().find(".icon:first").attr("aria-hidden"), "true");
});

test("it has aria role=presentation attribute when decorative", function(assert) {
	var component = this.subject();
	Ember.run(() => {
			component.set("isDecorative", true);
		}
	);
	this.render();

	assert.equal(this.$().attr("role"), "presentation");
});

test("it has an icon with properly-namespaced class name", function(assert) {
	assert.expect(2);

	var component = this.subject(),
		testIcon = "wrench",
		testNamespace = "custom-namespace";

	Ember.run(()=> {
			component.setProperties({
				namespace: testNamespace,
				icon: testIcon
			});
		}
	);
	this.render();
	let $icon = this.$().find(`.${testNamespace}:first`);
	assert.ok($icon.length);
	assert.ok($icon.hasClass(`${testNamespace}-${testIcon}`));
});

test("it omits the icon when none is passed in", function(assert) {
	let component = this.subject();
	let namespace = component.get("namespace");
	this.render();
	let $icon = this.$().find(`.${namespace}:first`);
	assert.equal($icon.length, 0);
});

// fallbacks

test("it has proper fallback class name", function(assert) {
	var component = this.subject(),
		testNamespace = "testNamespace",
		testFallback = true,
		testFallbackType = "text";
	Ember.run(()=> {
			component.setProperties({
				fallback: testFallback,
				fallbackType: testFallbackType,
				namespace: testNamespace
			});
		}
	);
	this.render();
	assert.ok(this.$().hasClass(`${testNamespace}-fallback-${testFallbackType}`));
});

test("it omits fallback text when fallback is disabled", function(assert) {
	var component = this.subject(),
		fallbackEnabled = false,
		fallbackType = "text",
		namespace = "icon";
	Ember.run(()=> {
			component.setProperties({
				fallback: fallbackEnabled,
				fallbackType: fallbackType,
				namespace: namespace
			});
		}
	);
	this.render();
	let $fallbackText = this.$().find(`.${namespace}-fallback-${fallbackType}`);
	assert.equal($fallbackText.length, 0);
});
