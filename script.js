let dropdown = $('#breed');
$.get("https://dog.ceo/api/breeds/list/all", function(data, status) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});


function fetchImage(e) {
    e.preventDefault();
    $.get(`https://dog.ceo/api/breed/${dropdown.val()}/images/random`, function(data) {
        var imageUrl = data.message;
        $('#dog').attr('src', imageUrl);
    }).fail(function(xhr, textStatus, errorTrown) {
        console.log('Requset Failed');

    });
}

function fetchNext(e) {
    e.preventDefault();
    $.get(`https://dog.ceo/api/breed/${dropdown.val()}/images/random`, function(data) {
        var imageUrl = data.message;
        $('#dog').attr('src', imageUrl);
    })
}

$('#button').click(fetchImage);
$('#button2').click(fetchNext)