"use strict";

var LoggerFactory = require('norbilogger');

class UberClass{
	
	constructor() {
		this.logger=LoggerFactory.getLogger(this.constructor.name);
	}
	
}

module.exports=UberClass

