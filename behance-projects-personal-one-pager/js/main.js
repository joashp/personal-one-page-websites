
/*!
 * behance-projects-personal-one-pager
 *
 * Created by Joash Pereira
 * Visit us at http://www.joashpereira.com
 *
 */

// Using promises
be('insert-your-behance-api-key-here').user.projects('insert-your-behance-username')
  .then(function success(results) {
    var html = [];
    var projects = results.projects;

    console.log(projects);

    projects.forEach(function(project) {
      html.push('<li class="project col-lg-3 col-md-4 col-sm-6">');
      html.push('<a href="' + project.url + '">');
      html.push('<img class="img-responsive" src="' + project.covers[404] + '">');
      html.push('<span>' + project.name + '</span>');
      html.push('</a></li>');
    });
    $('.projects').html(html.join(''));
  }, function failure(error) {
     console.error(error);
  });

