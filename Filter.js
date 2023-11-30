// Uppercase Filter
Enter first name:<input type = "text" ng-model = "student.firstName">
Enter last name: <input type = "text" ng-model = "student.lastName">
Name in Upper Case: {{student.fullName() | uppercase}}

// Lowercase Filter
Enter first name:<input type = "text" ng-model = "student.firstName">
Enter last name: <input type = "text" ng-model = "student.lastName">
Name in Lower Case: {{student.fullName() | lowercase}}

// Currency Filter
Enter fees: <input type = "text" ng-model = "student.fees">
fees: {{student.fees | currency}}

// Subject Filter
Enter subject: <input type = "text" ng-model = "subjectName">
Subject:
<ul>
  <li ng-repeat = "subject in student.subjects | filter: subjectName">
     {{ subject.name + ', marks:' + subject.marks }}
  </li>
</ul>

// OrderBy Filter
Subject:
<ul>
  <li ng-repeat = "subject in student.subjects | orderBy:'marks'">
     {{ subject.name + ', marks:' + subject.marks }}
  </li>
</ul>

