$(document).ready(function() {
    let searchform = {};
    $(document).on('change', "input[type='checkbox']", function() {
        if (this.checked) {
            searchform[$(this).data('id')] = $(this).data('name');
        } else {
            delete searchform[$(this).data('id')];
        }
        let name = [];
        $.each(searchform, function(key, value) {
            name.push(key);
        });
        if (name.length === 0) {
            $('.amenities h4').html('&nbsp;');
        } else {
            $('.amenities h4').text(searchform.join(', '));
        }
        });
        });
        const api = 'http://' + window.location.hostname + ':5001/api/v1/status';
        $.get(api, function (data) {
          if (data.status === 'OK') {
            $('#api_status').addClass('available');
          } else {
            $('#api_status').removeClass('available');
          }
        });
     });
