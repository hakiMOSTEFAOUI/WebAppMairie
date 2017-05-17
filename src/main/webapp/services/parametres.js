app.service('parametres', function () {
	///BOUCHON
	mairies= [
		{id:1, nom:"Suresnes"}
	];
	
	services = [
		{id:1,mairie_id:1,nom:"Service DDE",sigle:"DDE"},
		{id:2,mairie_id:1,nom:"Service DGSE",sigle:"DGSE"},
		{id:3,mairie_id:1,nom:"Service DSI",sigle:"DSI"},
		{id:4,mairie_id:1,nom:"Service OPS",sigle:"OPS"},
	];
	
    this.getServices= function (idMairie) {	
    	var res=[];
    	for (serv in services) {if (serv['mairie_id']===idMairie) res.push(serv);};
		return res;
    };

 });