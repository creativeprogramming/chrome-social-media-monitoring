function Probe() {
	this.id = undefined;
	this.query = "";
	this.threshold = 0;
	this.shortTermTweetsPerMin = 0;
	this.longTermTweetsPerMin = 0;
	this.serviceId = 'twitter';
	this.searchQuery = "http://search.twitter.com/search.json?&q=" + escape(this.query);
	this.latitude = undefined;
	this.longitude = undefined;
	this.radius = undefined;
	this.state = 1; // 1 = active, 2 = paused
	this.lastupdate = undefined;
	this.locationAddress = undefined;
	this.thresholdRatio = 3;
}

Probe.prototype.setQuery = function(query){
	this.query = query;
}

Probe.prototype.getQuery = function(){
	return this.query;
}
