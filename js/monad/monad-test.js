var buster = require('buster');
var monad = require('./monad');

buster.testCase("Crockford Monad", {
	"monad first2" : function () {
		var value = "Hello world.";
		var monadIdentity = monad.MONAD();
		var monadIdentityInstance = monadIdentity( value );
		assert.equals(monadIdentityInstance.bind(function () {return arguments[0]}), value);
	},
});