$(document).ready(function () {
    let searchform = {};
    $(document).on('change', "input[type='checkbox']", function () {
        if (this.checked) {
            searchform[$(this).data('id')] = $(this).data('name');
        } else {
            delete searchform[$(this).data('id')];
        }
        let name = [];
        $.each(searchform, function (key, value) {
            name.push(key);
        });
        if (name.length === 0) {
            $('.amenities h4').html('&nbsp;');
        } else {
            $('.amenities h4').text(searchform.join(', '));
        }
    });
    const api = '0.0.0.0:5001/api/v1/status';
    $.getJSON(api, function (data) {
    if (data.status === 'OK') {
        $('#api_status').addClass('available');
    } else {
        $('#api_status').removeClass('available');
    }
    });
});
$.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: '{}',
    success: function (data) {
		//recorremos con k y v
      $.each(data, function (k, v) {
			<article>
    <div class="title">
        <h2>${v.name}</h2>
        <div class="price_by_night">
            ${v.price_by_night}
        </div>
    </div>
    <div class="information">
        <div class="max_guest">
            <i class="rooms_num"></i>
            ${v.max_guest} Guests
        </div>
        <div class="number_rooms">
            <i class="rooms_num"></i>
            ${v.number_rooms} Bedrooms
        </div>
        <div class="number_bathrooms">
            <i class="rooms_num"></i>
            ${v.number_bathrooms} Bathroom
        </div>
    </div>
    <div class="user">
    </div>
    <div class="description">
        ${v.description}
    </div>
</article>
