'use strict';

var Foursquareandember = Ember.Application.create();

// expose Foursquareandember globally
window.Foursquareandember = Foursquareandember;

Foursquareandember.Router.map(function() {
	this.route('foursquareAPI', {path:'/foursquareAPI'})
});

Foursquareandember.foursquareAPIRoute = Ember.Route.extend({
	model: function(){
		return {APIstuff: 'oh, hi there ;) '}
	}
});
