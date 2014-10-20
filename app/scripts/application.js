'use strict';

var Foursquareandember = Ember.Application.create();

// expose Foursquareandember globally
window.Foursquareandember = Foursquareandember;

Yocaribou.Router.map(function() {
	this.route('foursquareAPI', {path:'/foursquareAPI'})
});


