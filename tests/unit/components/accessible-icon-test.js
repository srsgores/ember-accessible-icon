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

test("it has aria-hidden attribute", function(assert) {
	var component = this.subject();
	Ember.run(()=> {
			component.set("icon", "wrench");
		}
	);
	this.render();

	assert.equal(this.$().attr("aria-hidden"), "true");
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

test("it has properly-namespaced class name", function(assert) {
	assert.expect(2);

	var component = this.subject();
	Ember.run(()=> {
			component.setProperties({
				namespace: "custom-icon",
				icon: "wrench"
			});
		}
	);
	this.render();

	assert.ok(this.$().hasClass("custom-icon"));
	assert.ok(this.$().hasClass("icon-wrench"));
});
