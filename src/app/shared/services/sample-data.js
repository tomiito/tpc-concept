angular.module('shared.services.sampleData', [])
  .factory('SampleDataService', function SampleDataService() {

    var sampleMain = [{
      title: 'Become a PHP Master and Make Money Fast',
      pictureUrl: '/assets/images/demo-course-1.jpg'
    },
      {
        title: 'Why I Use Both WebStorm and Sublime Text',
        pictureUrl: '/assets/images/demo-course-2.jpg'
      },
      {
        title: 'Mastering Refactoring',
        pictureUrl: '/assets/images/demo-course-3.jpg'
      },
      {
        title: 'The future of Web Design',
        pictureUrl: '/assets/images/demo-course-5.jpg'
      },
      {
        title: 'Tips for being better Musician',
        pictureUrl: '/assets/images/demo-course-6.jpg'
      }
    ];


    var sampleData = [{
      title: 'Become a PHP Master and Make Money Fast',
      pictureUrl: '/assets/images/demo-course-1.jpg',
      reviews: 3
    },
      {
        title: 'Why I Use Both WebStorm and Sublime Text',
        pictureUrl: '/assets/images/demo-course-2.jpg',
        reviews: 0
      },
      {
        title: 'Mastering Refactoring',
        pictureUrl: '/assets/images/demo-course-3.jpg',
        reviews: 4
      },
      {
        title: 'How to get better at Learning',
        pictureUrl: '/assets/images/demo-course-4.jpg',
        reviews: 2
      },
      {
        title: 'The future of Web Design',
        pictureUrl: '/assets/images/demo-course-5.jpg',
        reviews: 1
      },
      {
        title: 'Tips for being better Musician',
        pictureUrl: '/assets/images/demo-course-6.jpg',
        reviews: 5
      }
    ];

    var sampleNews = [{
      title: 'Become a PHP Master and Make Money Fast',
      pictureUrl: '/assets/images/demo-course-1.jpg'
    },
      {
        title: 'Why I Use Both WebStorm and Sublime Text',
        pictureUrl: '/assets/images/demo-course-2.jpg'
      },
      {
        title: 'Mastering Refactoring',
        pictureUrl: '/assets/images/demo-course-3.jpg'
      }
    ];

    var service = {
      getSampleMain: sampleMain,
      getSampleCourses: sampleData,
      getSampleNews: sampleNews
    };
    return service;
  });
