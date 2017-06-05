import angular from 'angular'; export default ['$templateCache', $templateCache => {
$templateCache.put('app.component.html','<div class="main-container">\n\t<bg-video visible="($ctrl.sections[0] || $ctrl.sections[2] || $ctrl.sections[4] || $ctrl.sections[6] || $ctrl.sections[7])" mobile="$ctrl.isMobile" sources="$ctrl.sources" fallback="{{ ::$ctrl.videoSources.fallback }}"></bg-video>\n\n\t<page-nav active="!$ctrl.sections[0]"></page-nav>\n\n\t<!-- <ng-include src="\'partials/_section-1.html\'"></ng-include> -->\n\t<page-section template-url="partials/_section-1.html" in-view="$ctrl.sections[0] = $inview"></page-section>\n\t<page-section template-url="partials/_section-2.html" in-view="$ctrl.sections[1] = $inview"></page-section>\n\t<page-section template-url="partials/_section-3.html" in-view="$ctrl.sections[2] = $inview"></page-section>\n\t<page-section template-url="partials/_section-4.html" in-view="$ctrl.sections[3] = $inview"></page-section>\n\t<page-section template-url="partials/_section-5.html" in-view="$ctrl.sections[4] = $inview"></page-section>\n\t<page-section template-url="partials/_section-6.html" in-view="$ctrl.sections[5] = $inview"></page-section>\n\t<page-section template-url="partials/_section-7.html" in-view="$ctrl.sections[6] = $inview"></page-section>\n\t<page-section template-url="partials/_section-8.html" in-view="$ctrl.sections[7] = $inview"></page-section>\n\t\n\t<notification></notification>\n</div>');
$templateCache.put('bg-video/bg-video.component.html','<video autoplay loop\n\tclass="bg-element animated fadeIn"\n\tng-if="$ctrl.visible && !$ctrl.mobile">\n\t<source ng-repeat="source in $ctrl.sources" ng-src="{{ ::source.src }}" type="{{ ::source.type }}" />\n</video>\n<img ng-src="{{ ::$ctrl.fallback }}" alt="Timelapse background" class="bg-element" ng-if="$ctrl.mobile" />');
$templateCache.put('checklist/checklist-item.directive.html','<label>\n\t<input type="checkbox" ng-model="$ctrl.item.complete" ng-change="$ctrl.onToggle()"></input>\n\t<span class="indicator"></span>\n\t<span ng-bind-html="::$ctrl.item.text"></span>\n</label>');
$templateCache.put('checklist/checklist.component.html','<div class="list-container">\n\t<div ng-repeat="item in ::$ctrl.listItems">\n\t\t<h2 class="animated"\n\t\t\tin-view="item.show = $inview"\n\t\t\tin-view-options="{ throttle: 200 }"\n\t\t\tng-class="{\'fadeOutLeft\' : !item.show, \'fadeInLeft\' : item.show}">\n\t\t\t{{ ::item.month }}\n\t\t</h2>\n\t\t<ul>\n\t  \t<li ng-repeat="point in ::item.points" class="animated"\n\t  \t\tng-if="::(!point.level || point.level == $ctrl.level)"\n\t\t\t\tin-view="point.show = $inview"\n\t\t\t\tin-view-options="{ throttle: 200 }"\n\t\t\t\tng-class="{\'fadeOutLeft\' : !point.show, \'fadeInLeft\' : point.show }">\n\t\t\t\t<checklist-item item="point" on-toggle="$ctrl.onToggle()"></checklist-item>\n\t  \t</li>\n\t\t</ul>\n\t</div>\n</div>');
$templateCache.put('notification/notification.component.html','<div class="alert-wrapper"> \n\t<div class="alert-msg animated" ng-class="{ \'fadeInUp\': $ctrl.active, \'fadeOutDown\': !$ctrl.active && $ctrl.shown }">\n\t\t<span class="ion-checkmark-circled"></span>\n\t\t<div class="msg">\n\t\t\tYour progress has been saved!<br/>\n\t\t\t<small>Keep checking back and checking things off so you never forget your <strong>next steps!</strong></small>\n\t\t\t<a class="close-btn ion-close" ng-click="$ctrl.close()"></a>\n\t\t</div>\n\t</div>\n</div>');
$templateCache.put('page-nav/page-nav.component.html','<nav class="page-nav" ng-class="{\'open\': $ctrl.open}">\n\t<ul class="top-list" ng-class="{\'active\': $ctrl.active}">\n\t\t<li ng-repeat="item in ::$ctrl.items" du-scrollspy="{{ ::item.anchor }}">\n\t\t\t<a href="#{{ ::item.anchor }}" title="Jump to {{ ::item.title }} section"  du-smooth-scroll ng-click="$ctrl.open = false">\n\t\t\t\t<span class="{{ ::item.icon }}"></span> {{ ::item.title }}\n\t\t\t</a>\n\t\t\t<span class="smart-start" ng-if="item.items">Faculty of...</span>\n\t\t\t<ul ng-if="item.items" du-spy-context>\n\t\t\t\t<li ng-repeat="subitem in ::item.items" du-scrollspy="{{ ::subitem.anchor }}" offset="200">\n\t\t\t\t\t<a href="#{{ ::subitem.anchor }}" title="Jump to {{ ::subitem.title }} section" du-smooth-scroll ng-click="$ctrl.open = false">\n\t\t\t\t\t\t<span class="{{ ::subitem.icon }}"></span> {{ ::subitem.title }}\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t</ul>\n</nav>\n<button class="nav-btn" ng-click="$ctrl.open = !$ctrl.open" ng-class="{\'open\': $ctrl.open}"><span class="icon icon_menu"></span> Menu</button>');
$templateCache.put('partials/_section-1.html','<section class="section-1">\n\t<div>\n\t\t<img src="images/uoit-logo.svg"\n\t\t\talt="University of Ontario Institute of Technology"\n\t\t\tclass="logo animated fadeIn"\n\t\t\tng-class="{ \'fadeOut\' : !$ctrl.sequence.logo && !$ctrl.sequence.location }" />\n\n\t\t<h1 class="animated"\n\t\t\tng-class="{\'flipInX\' : $ctrl.sequence.heading, \'hidden\' : !$ctrl.sequence.heading, \'bounceOutUp\' : $ctrl.sequence.location }">\n\t\t\tAre you ready for UOIT?<br/>\n\t\t\t<small>We are ready for you!</small>\n\t\t</h1>\n\n\t\t<button class="buttonWhite buttonWhiter animated" \n\t\t\tng-class="{\'bounceInUp\' : $ctrl.sequence.cta, \'hidden\' : !$ctrl.sequence.cta, \'bounceOutDown\' : $ctrl.sequence.location }"\n\t\t\tng-click="$ctrl.scrollTo(\'welcome\')">\n\t\t\tGet ready for September\n\t\t</button>\n\t</div>\n\n</section>');
$templateCache.put('partials/_section-2.html','<section class="section-2" id="welcome" parallax-background parallax-ratio="0.7">\n\t<div class="text-container">\n\t\t<div class="text-container-content">\n\t\t<h1 class="animated"\n\t\t\tin-view="roHeader = $inview"\n\t\t\tin-view-options="{offset: [50, 0, -50, 0], throttle: 200}"\n\t\t\tng-class="{ \'fadeOutLeft\' : !roHeader, \'fadeInLeft\' : roHeader }">\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 105" class="svg-text"><defs><style>.cls-1{font-size:87.62px;fill:#0077ca;font-family:franklin_gothic_fscondensed;}.cls-2{letter-spacing:-4px;}.cls-3{letter-spacing:-1px;}.cls-4{font-size:41.78px;fill:#003c71;}.cls-5{letter-spacing:-2px;}</style></defs><text class="cls-1" transform="translate(0 60.87)">WELCOME<tspan class="cls-2" x="329.96" y="0"> </tspan><tspan class="cls-3" x="347.49" y="0">T</tspan><tspan x="377.1" y="0">O UOIT</tspan><tspan class="cls-4"><tspan x="0" y="41.2">F</tspan><tspan class="cls-3" x="17.09" y="41.2">R</tspan><tspan x="37.39" y="41.2">OM</tspan><tspan class="cls-5" x="89.36" y="41.2"> </tspan><tspan x="97.72" y="41.2">THE REGISTRAR\u2019S OFFICE S</tspan>TAFF!</tspan></text></svg>\n\t\t\t<span class="svg-text-alternative">WELCOME TO UOIT FROM THE REGISTRAR\u2019S OFFICE STAFF!</span>\n\t\t</h1>\n\t\t<div class="animated"\n\t\t\tng-class="{\'fadeOutLeft\' : !roHeader, \'fadeInLeft\' : roHeader}">\n\t\t\t<p>We will be assisting you all the way to graduation with information about registration, financial aid and student awards.</p>\n\t\t\t<p>Here are the steps you need to complete to be ready for class in September. <strong>Check off steps as you complete them and come back later to see your progress!</strong></p>\n\t\t\t<p ng-if="level==105" class="important"><span class="ion-asterisk"></span> Make sure to accept your offer of admission by the date specified in your offer letter!</p>\n\t\t</div>\n\n\t\t<checklist\n\t\t\tlist-items="$ctrl[$ctrl.checklistNames.section2]"\n\t\t\tlevel="{{ ::$ctrl.level }}"\n\t\t\ton-toggle="$ctrl.onChecklistToggle($ctrl.checklistNames.section2)">\n\t\t</checklist>\n\t\t\n\t</div>\n</section>');
$templateCache.put('partials/_section-3.html','<section class="section-3" id="student-life">\n\t<div class="bg-text"\n\t\tng-class="{\'attached\' : $ctrl.stickyHeader.attach, \'unattached\' : $ctrl.stickyHeader.unattach}"\n\t\tin-view="$ctrl.attachHeader($inview, $inviewInfo);"\n\t\tin-view-options="{ generateParts: true }">\n\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 784.38"><defs><style>.cls2-1{font-size:153px;fill:rgba(255,255,255,0.8);font-family:franklin_gothic_fscondensed;}.cls2-2{font-size:367px;}.cls2-3{font-size:122px;}.cls2-4{font-size:352px;}.cls2-5{letter-spacing:-5px;}</style></defs><text class="cls2-1" transform="translate(-1.46 120.41)">STUDENT<tspan class="cls2-2"><tspan x="-20.79" y="270">LIFE</tspan></tspan><tspan class="cls2-3"><tspan x="3.06" y="375">WELCOMES</tspan></tspan><tspan class="cls2-4"><tspan class="cls2-5" x="17.14" y="641">Y</tspan><tspan x="149.84" y="641">OU</tspan></tspan></text></svg>\n\t</div>\n\t<article>\n\t\t<h2>Make the most of your student experience and plan for success.</h2>\n\t\t<p>Learn about and register for upcoming events and workshops available to all first-year students!</p>\n\n\t\t<checklist\n\t\t\tlist-items="$ctrl[$ctrl.checklistNames.section3]"\n\t\t\tlevel="{{ ::$ctrl.level }}"\n\t\t\ton-toggle="$ctrl.onChecklistToggle($ctrl.checklistNames.section3)">\n\t\t</checklist>\n\n\t\t<a href="#ibegin" class="button" title="Register for iBegin" du-smooth-scroll>\n\t\t\t<span class="ion-compose"></span> Learn more and register!\n\t\t</a>\n\t</article>\n</section>');
$templateCache.put('partials/_section-4.html','<section class="section-4" in-view="$ctrl.stickyHeader.unattach = $inview;" id="ibegin">\n\t<article>\n\t\t<h2><span class="ibegin">iBEGIN</span> is the first part of your orientation at the University.</h2>\n\t\t<p>The event is designed to promote your academic and personal success. You will have the opportunity to meet classmates, faculty and staff; learn strategies for attending lectures; and discuss how to make the most of your university experience.</p>\n\t\t<!-- <h2><span class="icon icon_calendar inline-icon"></span> Wednesday, July 26 to Friday, August 4<span class="asterisk">*</span></h2>\n\t\t<p><span class="asterisk">*</span> Please continue to check back for your program\u2019s specific iBEGIN date.</p> -->\n\t</article>\n\t\t<ul class="faculty-bg-list">\n\t\t\t<li class="animated"\n\t\t\t\tng-repeat="item in ::$ctrl[$ctrl.checklistNames.section4] track by $index"\n\t\t\t\tin-view="item.show = $inview;"\n\t\t\t\tin-view-options="{ throttle: 200 }"\n\t\t\t\tng-class="{\'fadeOutLeft\' : !item.show, \'fadeInLeft\' : item.show }">\n\t\t\t\t<div class="faculty-bg-container">\n\t\t\t\t\t<img bh-src-responsive="::[[\'default\', \'images/768/\' + item.image], [\'small\', \'images/1280/\' + item.image], [\'medium\', \'images/1920/\' + item.image]]" class="faculty-bg-image" />\n\t\t\t\t\t<div class="faculty-bg-content">\n\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t<span ng-repeat="faculty in item.faculties track by faculty.name"\n\t\t\t\t\t\t\t\tng-style="::{ color: faculty.color }"\n\t\t\t\t\t\t\t\tid="{{ ::faculty.anchor }}"\n\t\t\t\t\t\t\t\tng-bind-html="::\'Faculty of \' + faculty.name + (!$last ? \'<br>\' : \'\')">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t<h4 ng-repeat="date in ::item.dates">{{ ::date }}</h4>\n\t\t\t\t\t\t<a ng-href="https://studentlife.uoit.ca/student-experience-centre/orientation/ibegin.php?utm_source=nextsteps&utm_medium=web&utm_campaign=ibegin_{{ ::fac.anchor }}" class="button" target="_blank">Learn more about <span class="ibegin">iBEGIN</span> <span class="ion-chevron-right"></span></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n</section>');
$templateCache.put('partials/_section-5.html','<section class="section-5"\n\tid="smart-start">\n\t<h2>Smart Start</h2>\n\t<p>Our Smart Start program will provide a head start in your university career! \xA0Review prerequisite skills, brush up on your writing, get study tips and meet other first years.</p>\n\t<p>Topics in faculty-specific sessions will cover:</p>\n\t<ul class="skill-list">\n\t\t<li><span class="ion-calculator"></span> math</li>\n\t\t<li><span class="icon icon_graduate"></span> prerequisite academic skills</li>\n\t\t<li><span class="icon icon_tablet"></span> study strategies</li>\n\t\t<li><span class="ion-clock"></span> time management</li>\n\t\t<li><span class="icon icon_penwriting"></span> writing</li>\n\t</ul>\n\t<div class="list-container">\n\t\t<ul>\n\t\t\t<li class="cal-item animated"\n\t\t\t\tng-repeat="item in ::$ctrl[$ctrl.checklistNames.section5]"\n\t\t\t\tin-view="item.show = $inview"\n\t\t\t\tin-view-options="{ offset: [50, 0, -50, 0], throttle: 200 }"\n\t\t\t\tng-class="{\'flipOutX\' : !item.show, \'flipInX\' : item.show }">\n\t\t\t\t<h3 ng-repeat="faculty in ::item.faculties"\n\t\t\t\t\tng-style="::{ borderLeft: \'solid 10px \' + faculty.color }">\n\t\t\t\t\t{{ ::faculty.name }}\n\t\t\t\t</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li ng-repeat="date in ::item.dates">{{ ::date }}</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<a href="https://studentlife.uoit.ca/student-learning/smart-start.php?utm_source=nextsteps&utm_medium=web&utm_campaign=smartstart" class="buttonWhite buttonWhiter" target="_blank">Learn more about Smart Start</a>\n</section>');
$templateCache.put('partials/_section-6.html','<section class="section-6" id="accessibility" parallax-background parallax-ratio="0.2" parallax-vertical-offset="{{ mobile ? 0 : 100 }}">\n\t<h2><span class="ion-ios-body"></span><br/>Student Accessibility Services (SAS)</h2>\n\t<article class="animated" \n\t\tin-view="sasHeader = $inview;"\n\t\tin-view-options="{ offset: [50, 0, -50, 0], throttle: 200 }"\n\t\tng-class="{\'fadeOutLeft\' : !sasHeader, \'fadeInLeft\' : sasHeader}">\n\t\t<h3>Transition evening for parents of students with disabilities</h3>\n\t\t<p>This is an opportunity to meet fellow parents of university students with disabilities. Learn about the services offered through the SAS office, how we will support your student and hear some success stories.</p>\n\t\t<p><span class="icon icon_calendar inline-icon"></span>Monday, August 21 from 6 to 8 p.m.</p>\n\t</article>\n\t<article class="animated" \n\t\tin-view="stpHeader = $inview;"\n\t\tin-view-options="{ offset: [50, 0, -50, 0], throttle: 200 }"\n\t\tng-class="{\'fadeOutRight\' : !stpHeader, \'fadeInRight\' : stpHeader}">\n\t\t<h3>Summer Transition Program</h3>\n\t\t<p>The STP is for new students at the university who identify as a person with a disability.</p>\n\t\t<p>This program will help you to:</p>\n\t\t<ul class="block-list">\n\t\t\t<li>understand the real differences between high school and university.</li>\n\t\t\t<li>learn about self-advocacy and how to use your strengths.</li>\n\t\t\t<li>get your campus ID.</li>\n\t\t\t<li>become familiar with the software and learning platforms you will use regularly at UOIT.</li>\n\t\t\t<li>learn some valuable strategies to make the most of your university experience.</li>\n\t\t\t<li>meet some key staff who will arrange your academic and learning supports.</li>\n\t\t\t<li>become familiar with the campus and the Oshawa area.</li>\n\t\t\t<li>make new friends and have some fun!</li>\n\t\t</ul>\n\t\t<p><span class="icon icon_calendar inline-icon"></span>Tuesday, August 22 to Thursday, August 24</p>\n\t</article>\n\t<aside class="cta">\n\t\t<a href="https://studentlife.uoit.ca/student-accessibility-services/summer_transition_program/index.php?utm_source=nextsteps&utm_medium=web&utm_campaign=sas" target="_blank" class="buttonWhite">Learn more about the Summer Transition Program</a>\n\t</aside>\n</section>');
$templateCache.put('partials/_section-7.html','<section class="section-7" id="orientation">\n\t<article>\n\t\t<h2>September Orientation</h2>\n\t\t<p>As an incoming student, September Orientation will provide you with the opportunity to:</p>\n\t\t<ul class="block-list">\n\t\t\t<li>familiarize yourself with the campus.</li>\n\t\t\t<li>learn how to get the most from your university experience.</li>\n\t\t\t<li>meet new friends, faculty, and staff.</li>\n\t\t</ul>\n\t\t<p>Prepare yourself for success in your first year by learning from upper-year students who volunteer their time to welcome you to the university community.</p>\n\t\t<p>\n\t\t\t<span class="icon icon_calendar inline-icon"></span>Tuesday, September 5 and Wednesday, September 6\n\t\t\t<br/>\n\t\t\t<a href="https://studentlife.uoit.ca/student-experience-centre/orientation/september-orientation.php?utm_source=nextsteps&utm_medium=web&utm_campaign=orientation" target="_blank" class="button">Learn more about September Orientation</a>\n\t\t</p>\n\t\t<h3>International Student Orientation (ISO)</h3>\n\t\t<p>ISO gives you the opportunity to:</p>\n\t\t<ul class="block-list">\n\t\t\t<li>meet international students and staff.</li>\n\t\t\t<li>learn more about Canadian culture.</li>\n\t\t\t<li>hear about the transitional experiences of your peers.</li>\n\t\t\t<li>learn about studying in Canada and the differences you can expect from your previous studies.</li>\n\t\t\t<li>find out about the University\'s services and how they can support you during your studies.</li>\n\t\t</ul>\n\t\t<p>\n\t\t\t<span class="icon icon_calendar inline-icon"></span>Friday, September 1\n\t\t\t<br/>\n\t\t\t<a href="https://international.uoit.ca/before-you-arrive/international-students/international-orientation/index.php?utm_source=nextsteps&utm_medium=web&utm_campaign=iso" target="_blank" class="button">Learn more about ISO</a>\n\t\t</p>\n\t</article>\n\n</section>');
$templateCache.put('partials/_section-8.html','<section class="section-8" id="contact">\n\t\t<div class="article-container">\n\t\t\t<article>\n\t\t\t\t<h3>Registrar\u2019s office</h3>\n\t\t\t\t<address>\n\t\t\t\t\t<strong>Admissions</strong><br/>\n\t\t\t\t\t<span class="ion-ios-telephone inline-icon"></span> 905.721.3190<br/>\n\t\t\t\t\t<span class="ion-email inline-icon"></span> <a href="mailto:futurestudent@uoit.ca">futurestudent@uoit.ca</a>\n\t\t\t\t</address>\n\t\t\t\t<address>\n\t\t\t\t\t<strong>Records and Registration</strong><br/>\n\t\t\t\t\t<strong>Student Awards and Financial Aid</strong><br/>\n\t\t\t\t\t<span class="ion-ios-telephone inline-icon"></span> 905.721.3190<br/>\n\t\t\t\t\t<span class="ion-email inline-icon"></span> <a href="mailto:connect@uoit.ca">connect@uoit.ca</a>\n\t\t\t\t</address>\n\t\t\t</article>\n\t\t\t<article>\n\t\t\t\t<h3>Student Life</h3>\n\t\t\t\t<address>\n\t\t\t\t\t<strong>Student Accessibility Services</strong><br/>\n\t\t\t\t\t<span class="ion-ios-telephone inline-icon"></span> 905.721.3266<br/>\n\t\t\t\t\t<span class="ion-email inline-icon"></span> <a href="accessibility@uoit.ca">accessibility@uoit.ca</a>\n\t\t\t\t</address>\n\t\t\t\t<address>\n\t\t\t\t\t<strong>Student Experience Centre</strong><br/>\n\t\t\t\t\t<span class="ion-ios-telephone inline-icon"></span> 905.721.8668 ext. 3833<br/>\n\t\t\t\t\t<span class="ion-email inline-icon"></span> <a href="mailto:askme@uoit.ca">askme@uoit.ca</a>\n\t\t\t\t</address>\n\t\t\t\t<address>\n\t\t\t\t\t<strong>Student Learning Centre</strong><br/>\n\t\t\t\t\t<span class="ion-ios-telephone inline-icon"></span> 905.721.8668 ext. 6578<br/>\n\t\t\t\t\t<span class="ion-email inline-icon"></span> <a href="smartstart@uoit.ca">smartstart@uoit.ca</a>\n\t\t\t\t</address>\n\t\t\t</article>\n\t\t</div>\n</section>');
}];