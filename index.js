$(function(){
	var domain = 'http://jsonplaceholder.typicode.com'
	var photosTmpl = Handlebars.compile($('#photos_tempalte').html())
	var albumTmpl = Handlebars.compile($('#album_tempalte').html())

	$.get(domain + '/albums')
		.then(function (albums) {
			$('main').html('')
			albums.forEach(function (album) {
				$.get(domain + '/albums/' + album.id + '/photos')
					.then(function (albumPhotos) {
						var photosHtml = photosTmpl(albumPhotos)
						album.photos = photosHtml
						$('main').append(albumTmpl(album))
				})
			})
		})	
		.fail(function () {
			console.log('Failed!')
		})
		
})