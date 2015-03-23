import {
	moduleForComponent,
	test
} from "ember-qunit";

moduleForComponent("accessible-icon", {
	// specify the other units that are required for this test
	// needs: ["component:foo", "helper:bar"]
});

test("it renders", (assert) => {
	assert.expect(2);

	// creates the component instance
	var component = this.subject();
	assert.equal(component._state, "preRender");

	// renders the component to the page
	this.render();
	assert.equal(component._state, "inDOM");
});

test("it has aria-hidden attribute when decorative", (assert) => {
	var component = this.subject();
	Ember.run(()=> {
			component.set("isDecorative", true);
		}
	);
	this.render();

	assert.equal(this.$().attr("aria-hidden"), "true");
});
