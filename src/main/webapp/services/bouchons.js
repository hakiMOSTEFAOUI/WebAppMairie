app.service('bouchons', function(arretesService, userService) {
	var users = [

	{
		id : 1,
		username : 'test',
		password : 'test',
		service_id : 1
	} ];

	userService.setUsers(users);

	var arretes = [ {
		id :1,
		num : '001',
		num_an: 2017,
		date_document : new Date(2017, 01, 01, 01, 01, 01, 01),
		type_periode : 1,
		date_deb : new Date(2017, 02, 01, 01, 01, 01, 01),
		date_fin : new Date(2017, 03, 01, 01, 01, 01, 01),
		title : "arrêté exemple",
		topValid : true,
		rues : [ {
			id : 10,
			rue : "Marcel Proust",
			startNumber : 1,
			endNumber : 500
		}, ],
		lois : [ {
			id : 10,
			description : "Loi 10"
		}, ],
		articles : [ {
			id : 10,
			category : "scolaire",
			typeArticle : "type"
		}, ],
	}, {
		id :2,
		num : '002',
		num_an: 2017,
		date_document : new Date(2017, 01, 01, 01, 01, 01, 01),
		type_periode : 1,
		date_deb : new Date(2017, 02, 01, 01, 01, 01, 01),
		date_fin : new Date(2017, 03, 01, 01, 01, 01, 01),
		title : "arrêté exemple",
		topValid : true,
		rues : [ {
			id : 10,
			rue : "Marcel Proust",
			startNumber : 1,
			endNumber : 500
		}, ],
		lois : [ {
			id : 10,
			description : "Loi 10"
		}, ],
		articles : [ {
			id : 10,
			category : "scolaire",
			typeArticle : "type"
		}, ],
	}, {
		id :2,
		num : '003',
		num_an: 2017,
		date_document : new Date(2017, 01, 01, 01, 01, 01, 01),
		type_periode : 1,
		date_deb : new Date(2017, 02, 01, 01, 01, 01, 01),
		date_fin : new Date(2017, 03, 01, 01, 01, 01, 01),
		title : "arrêté exemple",
		topValid : true,
		rues : [ {
			id : 10,
			rue : "Marcel Proust",
			startNumber : 1,
			endNumber : 500
		}, ],
		lois : [ {
			id : 10,
			description : "Loi 10"
		}, ],
		articles : [ {
			id : 10,
			category : "scolaire",
			typeArticle : "type"
		}, ],
	}, {
		id :4,
		num : '004',
		num_an: 2017,
		date_document : new Date(2017, 01, 01, 01, 01, 01, 01),
		type_periode : 1,
		date_deb : new Date(2017, 02, 01, 01, 01, 01, 01),
		date_fin : new Date(2017, 03, 01, 01, 01, 01, 01),
		title : "arrêté exemple",
		topValid : true,
		rues : [ {
			id : 10,
			rue : "Marcel Proust",
			startNumber : 1,
			endNumber : 500
		}, ],
		lois : [ {
			id : 10,
			description : "Loi 10"
		}, ],
		articles : [ {
			id : 10,
			category : "scolaire",
			typeArticle : "type"
		}, ],
	}, ];
	for (i = 0; i < arretes.length; i++) {
		arretesService.insertArrete(arretes[i]);
	}
});
