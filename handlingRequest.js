function order(idOrder, time){
	console.log("id order "+idOrder);
	proses(idOrder, time)
}

function proses(idOrder, time){
	setTimeout(function(){
		console.log("tunggu"+idOrder);
	},time);
}

order(1, 3000);
order(2, 5000);
order(3, 7000);