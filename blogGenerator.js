const data = require("./data.json");

const formatData = function(content) {
	return (
		"<div class='subdiv'><h1>" +
		content["title"] +
		"</h1><p>" +
		content["content"] +
		"</p></div>"
	);
};

const pageHeader = function() {
	return "<h1 class='header'>Blogger</h1>";
};

const createBlogBody = function(content) {
	let body = "<div class='main_div' id='change'>" + content.join("") + "</div>";
	return "<body>" + pageHeader() + body + "</body>";
};

const appendHeadTags = function(content) {
	return (
		"<html><link rel='stylesheet' href='stylesheet.css'><head></head>" +
		content +
		"</html>"
	);
};

const generatePage = function() {
	let content = data.map(formatData);
	let body = createBlogBody(content);
	return appendHeadTags(body);
};

console.log(generatePage());
