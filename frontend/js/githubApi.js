// Controllers
angular.module('elixir_front.controllers')
.controller('githubApi', ['$scope', function($scope) {
	function getRequest(){
		var data = null;
		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		xhr.addEventListener("readystatechange", function () {
		  if (this.readyState === 4) {
		    console.log(this.responseText);
		  }
		});
		xhr.open("GET", "https://api.github.com/repos/ValentinMarcon/content/contents/data/1000genomes_assembly_converter/1000genomes_assembly_converter.json?ref=new_1000genomes_assembly_converter_2019-6-5-17-27-31-322");
		xhr.setRequestHeader("cache-control", "no-cache");
		xhr.send(data);
	}
}]);






