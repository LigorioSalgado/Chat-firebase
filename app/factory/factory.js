(function () {

	angular
	.module('chatApp')
	.factory('chatData',chatData);


	function chatData($firebaseArray){

		var ref = firebase.database().ref().child("messages");

		return $firebaseArray(ref);

		//var link = new Firebase('https://chatnegrabatch10.firebaseio.com/message');
		//return $firebaseArray(link);



	}
		
})();