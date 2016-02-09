/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
    "jobs": [
        {
            "employer": "Viajamus",
            "title": "Junior developer",
            "location": "Barcelona, Spain",
            "dates": "From 06-2011 to 12-2013",
            "description": "Starting to learn what developer skills should I learn"
        },
        {
            "employer": "GrandVoyage",
            "title": "Web Developer",
            "location": "Barcelona, Spain",
            "dates": "From 01-2014 until today",
            "description": "As a Web Developer I created all the websites needed to get the most possible deals"
        }
    ]
};

var projects = {
    "project": [
        {
            "title": "P0: About Me",
            "dates": "November 2015",
            "description": "My first project on udacity Front-End Web Developer",
            "images": ["http://s13.postimg.org/uhk2l3c87/Udacity_P0.png"]

        },
        {
            "title": "P1: Portfolio Site",
            "dates": "December 2015",
            "description": "My portfolio site to show all my projects",
            "images": ["http://s24.postimg.org/mpnhwc5sl/Udacity_P1.png"]

        }]
};

var bio = {
    "name": "Marc Iserte",
    "role": "Web Developer",
    "contacts": {
        "mobile": "675243196",
        "email": "misertej@gmail.com",
        "twitter": "@M_iserte",
        "location": "Barcelona, Spain"
    },
    "welcomeMessage": "Welcome to my resumee",
    "skills": ["HTML", "CSS", "JS", "WORDPRESS"],
    "biopic": "http://i68.tinypic.com/2wfnzet.png"
};

var education = {
    "schools": [
        {
            "name": "Maristes Sabadell",
            "location": "Sabadell, Barcelona, Spain",
            "degree": "Primary and secondary education",
            "majors": ["Technology", "English"],
            "dates": "From 1994 to 2007 ",
            "url": "http://www.maristes.cat/"
        },
        {
            "name": "Jaume Viladoms",
            "location": "Sabadell, Barcelona, Spain",
            "degree": "Bachelor",
            "majors": ["Economics"],
            "dates": "From 2007 to 2009 ",
            "url": "http://www.jviladoms.cat/"
        },
        {
            "name": "Universitat Autònoma de Barcelona",
            "location": "Cerdanyola del Vallès, Barcelona, Spain",
            "degree": "Sociology Degree",
            "majors": ["Politics", "Sociology"],
            "dates": "From 2009 to 2011 ",
            "url": "http://www.uab.cat/"
        },
        {
            "name": "Escoles Univesitàries Gimbernat",
            "location": "Sant Cugat del Vallès, Barcelona, Spain",
            "degree": "IT and Services Degree",
            "majors": ["BPM", "Software Engineering"],
            "dates": "From 2011 to 2016 ",
            "url": "http://www.eug.es/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Nanodegree Front-End Developer",
            "school": "Udacity",
            "date": "2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPicture);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);



    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};



work.display = function () {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function () {

    for (var project in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.project[project].images.length > 0) {
            for (image in projects.project[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }

};

education.display = function () {

    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);

    }

    for (var onlineCourse in education.onlineCourses) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        $(".education-entry:last").append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedSchool);
        
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
        $(".education-entry:last").append(formattedDates);
        
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedUrl);        

    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

