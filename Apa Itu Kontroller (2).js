// Apa Itu Kontroller? (2/5)
<script>
   function studentController($scope) {
       $scope.student = {
           firstName: "Telkom",
           lastName: "Corporate",

           fullName: function() {
               var studentObject;
               studentObject = $scope.student;
               return studentObject.firstName + " "       + studentObject.lastName;
           }
       };
   }
</script>
