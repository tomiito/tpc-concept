angular.module('shared.services.sampleData', [])
  .factory('SampleDataService', function Utils() {

    var sampleData = [{
       title: 'Become a PHP Master and Make Money Fast',
          pictureUrl: '/assets/images/sample/demo-course-1.jpg',
          reviews: 3
       },
       {
        title: 'Why I Use Both WebStorm and Sublime Text',
        pictureUrl: '/assets/images/sample/demo-course-2.jpg',
        reviews: 0
       },
       {
         title: 'Mastering Refactoring'
         pictureUrl: '/assets/images/sample/demo-course-3.jpg',
         reviews: 4
       },
       {
        title: 'How to get better at Learning',
           pictureUrl: '/assets/images/sample/demo-course-4.jpg',
           reviews: 2
        },
        {
         title: 'The future of Web Design',
         pictureUrl: '/assets/images/sample/demo-course-5.jpg',
         reviews: 1
        },
        {
          title: 'Tips for being better Musician'
          pictureUrl: '/assets/images/sample/demo-course-6.jpg',
          reviews: 5
        }
      ];

    var service = {
      getSampleData: sampleData
    };
    return service;
  });
