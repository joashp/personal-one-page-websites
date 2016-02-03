
/*!
 * dribbble-shots-personal-one-pager
 *
 * Created by Joash Pereira
 * Visit us at http://www.joashpereira.com
 *
 */

$.jribbble.setToken('insert-your-dribbble-token-here');

/*
  Jribbble methods make ajax requests to the Dribbble API. When
  the requests complete, a Promise is returned. Use `then` to take an action
  on the response from the server.
*/
$.jribbble.users('insert-your-dribbble-username').shots({per_page: 24}).then(function(shots) {
  var html = [];

  shots.forEach(function(shot) {
    // See the Dribbble docs for all available shot properties.
    html.push('<li class="shots--shot col-lg-3 col-md-4 col-sm-6">');
    html.push('<a href="' + shot.html_url + '">');
    html.push('<img class="img-responsive" src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });

  $('.shots').html(html.join(''));
});
