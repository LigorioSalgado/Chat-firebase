(function () {


var chat = {
	controller:chatCtrl,
	templateUrl:'app/components/chat_component/chat.html'
}

angular
	.module('chatApp')
	.component('chat',chat);

	function chatCtrl(chatData){
		var chat = this;


		chat.messages =chatData;
		chat.addMessage = addMessage;

		function addMessage(){
			chat.messages.$add({

				user:chat.user,
				message:chat.message
			})

			chat.message="";

		}




	}
	
		
})();