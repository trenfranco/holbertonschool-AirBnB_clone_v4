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
