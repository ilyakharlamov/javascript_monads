var functionToTest = function () {
	return "fuck";
};


function chainMonad (p) {
    var value = p;
    var monad = function monad_resolver (f) {
    	if (typeof f=='function') {
    		return function () {
    			return f(value);
    		}
    	}
    	return value;
    };
    monad.add = function(addend) { 
    	/*if (addend==1) {
    		window.abc-5;
    	} */
    	value += addend; return this;

    },
    monad.sub = function(subtra) { value -= subtra; return this; },
    monad.get = function() { return value; }
    return  monad;
}

var monadPrototype = function monadPrototype () {};
var monad = function monad_constructor ( value ) {
	var monad_generator = function monad_generator () {
		function monad () {
			console.log('arguments', arguments)
			if ( !arguments.length ) {
				return value;
			}
			if ( typeof arguments[0]==='function' ) {
				return monad_generator();
			}
		}
		monad.prototype = monadPrototype;
		return monad;
	};
	return monad_generator();
}
exports.functionToTest=functionToTest;
exports.monad=monad;
exports.monadPrototype = monadPrototype;
exports.chainMonad = chainMonad;