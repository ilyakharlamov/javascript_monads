var buster = require('buster');
var mymonad = require('./mymonad');
/*buster.testCase("Gizmo", {
	"knows a little math" : function () {
		assert.equals(mymonad.functionToTest(), "fuck");
	},
	"empty resolution should return the actual value" : function () {
		var value = "myvalue";
		var monadInstance = monad( value );
		assert.equals(monadInstance(), value);
	},
	"function resolution should return a monad" : function () {
		var value = "myvalue";
		var monadInstance = monad( value );
		assert.equals(typeof monadInstance(function () {
		}), "function");
	},
	"function resolution should return a monad that returns the actual value after function processing" : function () {
		var value = "myvalue";
		var monadInstance = monad( value );
		assert.equals(monadInstance(function (monad) {
			return monad;
		})(), "myvalue");
	},
	"function resolution should return a monad that returns the actual value after function processing" : function () {
		var value = "myvalue";
		var monadInstance = monad( value );
		assert.equals(monadInstance(function (value) {
			return value+"a";
		})(), value+"a");
	},	
});*/
buster.testCase("chainingMonad", {
	"initial" : function () {
		assert.equals(mymonad.chainMonad(0)(), 0);
		assert.equals(mymonad.chainMonad(0).add(5)(), 5);
		assert.equals(
			mymonad.chainMonad(0)
			.add(5)
			.sub(7)
			.add(1)
			(function ( v ) {
				return v+200;
			})(), 
		199);

	},
});