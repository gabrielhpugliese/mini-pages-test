if (Meteor.isClient) {
    
    Meteor.pages({
        '/' : { to : 'index' }
    });
    
    Deps.autorun(function () {
        console.log('Meteor.router.path(): '+Meteor.router.path());
        if (!Meteor.router)
            return;
        console.log('Meteor.router.path() after: '+Meteor.router.path());

        var active = _.find($('.nav-list li a'), function (item) {
            return $(item).attr('href') === Meteor.router.path();
        });
        console.log('Meteor.router.path() after 2: '+Meteor.router.path());
        $('.nav-list li').removeClass('active');
        $(active).parent().addClass('active');
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
