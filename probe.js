function Probe() {
	this.query = "";
	this.threshold = 0;
	this.shortTermTweetsPerHour = 0;
	this.longTermTweetsPerHour = 0;
	this.serviceId = 'twitter';
	this.searchQuery = "http://search.twitter.com/search.json?&q=" + this.query;
	this.latitude = undefined;
	this.longitude = undefined;
	this.radius = undefined;

}

Probe.prototype.setQuery = function(query){
	this.query = query;
}

Probe.prototype.getQuery = function(){
	return this.query;
}