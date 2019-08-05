








    var data = {//Contains all of the data in the App
        allExercises:{//All of the Exercises and the Workouts they are Associated with
            Push: [],
            Pull: [],
            Legs: [],
            Upper: [],
            Lower: [],
            Other: []
            
        },
        allSets: {//All of the Sets and the Workouts they are Associated with
     Push: [],
            Pull: [],
            Legs: [],
            Upper: [],
            Lower: [],
            Other: []
        },
       allReps: {//All of the Reps and the Workouts they are Associated with
          Push: [],
            Pull: [],
            Legs: [],
            Upper: [],
            Lower: [],
            Other: []
           
       }
              
    };
var getData = function(){
    
}

 

document.addEventListener('keypress', function(event) {//How the Data is initialised into the system

                             if(event.keyCode === 13 || event.which === 13){
                                    var WorkoutTitle =  document.querySelector('#Workout').value;
                                  if((document.querySelector('#Exercise').value == 0) || (document.querySelector('.Sets').value == 0) || (document.querySelector('.Reps').value == 0)){
                                        alert('Please Fill out all sections.');
     
                                        }
   else{
                                if(WorkoutTitle == 'Push'){
                                    var lengthchange = data.allExercises.Push.length;
                                    data.allExercises.Push[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Push[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Push[lengthchange] = document.querySelector('.Reps').value;
                                }
                           else if(WorkoutTitle == 'Pull'){
                                var lengthchange = data.allExercises.Pull.length;
                                    data.allExercises.Pull[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Pull[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Pull[lengthchange] = document.querySelector('.Reps').value;
                                }
                        else if(WorkoutTitle == 'Legs'){
                             var lengthchange = data.allExercises.Legs.length;
                                    data.allExercises.Legs[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Legs[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Legs[lengthchange] = document.querySelector('.Reps').value;
                                }
                        else if(WorkoutTitle == 'Upper'){
                             var lengthchange = data.allExercises.Upper.length;
                                    data.allExercises.Upper[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Upper[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Upper[lengthchange] = document.querySelector('.Reps').value;
                                }
              else if(WorkoutTitle == 'Lower'){
                             var lengthchange = data.allExercises.Lower.length;
                                    data.allExercises.Lower[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Lower[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Lower[lengthchange] = document.querySelector('.Reps').value;
                                }
                           else if(WorkoutTitle == 'Other'){
                                var lengthchange = data.allExercises.Other.length;
                                    data.allExercises.Other[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Other[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Other[lengthchange] = document.querySelector('.Reps').value;
                                }
                                 
   console.log(WorkoutTitle);
                                        clearFields();
   }
                             }
                             
   
                                 
                                 
                       });


document.querySelector('.btn').addEventListener('click', function() {
                  var WorkoutTitle =  document.querySelector('#Workout').value;
                                  if((document.querySelector('#Exercise').value == 0) || (document.querySelector('.Sets').value == 0) ||   ( document.querySelector('.Reps').value == 0)){
                                        alert('Please Fill out all sections.');
     
                                        }
   else{
                                if(WorkoutTitle == 'Push'){
                                    var lengthchange = data.allExercises.Push.length;
                                    data.allExercises.Push[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Push[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Push[lengthchange] = document.querySelector('.Reps').value;
                                }
                           else if(WorkoutTitle == 'Pull'){
                                var lengthchange = data.allExercises.Pull.length;
                                    data.allExercises.Pull[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Pull[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Pull[lengthchange] = document.querySelector('.Reps').value;
                                }
                        else if(WorkoutTitle == 'Legs'){
                             var lengthchange = data.allExercises.Legs.length;
                                    data.allExercises.Legs[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Legs[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Legs[lengthchange] = document.querySelector('.Reps').value;
                                }
          else if(WorkoutTitle == 'Upper'){
                             var lengthchange = data.allExercises.Upper.length;
                                    data.allExercises.Upper[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Upper[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Upper[lengthchange] = document.querySelector('.Reps').value;
                                }
              else if(WorkoutTitle == 'Lower'){
                             var lengthchange = data.allExercises.Lower.length;
                                    data.allExercises.Lower[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Lower[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Lower[lengthchange] = document.querySelector('.Reps').value;
                                }
                           else if(WorkoutTitle == 'Other'){
                                var lengthchange = data.allExercises.Other.length;
                                    data.allExercises.Other[lengthchange] = document.querySelector('#Exercise').value;
                                   data.allSets.Other[lengthchange] = document.querySelector('.Sets').value;
                                     data.allReps.Other[lengthchange] = document.querySelector('.Reps').value;
                                }
    clearFields();
   }});

document.addEventListener('keypress', function(event, WorkoutTitle) {
                      if(event.keyCode === 102 || event.which === 102){
                                 
                                   console.log(document.querySelector('#Exercise').value) ;
                                  console.log(document.querySelector('.Sets').value);
                                     console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
                          console.log(data);
                                 }
                                 });

document.querySelector('.PushImg').addEventListener('click', function(){//Works and manages to display workouts
   
    var fullWorkout = '';
    for(var i = 0; i < data.allExercises.Push.length; i++){
        fullWorkout += (data.allExercises.Push[i] + ' : ' + data.allReps.Push[i] + ' X ' + data.allSets.Push[i] + '\n');
    }
    
    if(data.allExercises.Push.length === 0){//Checks whether or not There is a workout to Display
        alert('No workout entered.')
    }
    else{
    

alert('Push Workout \n' + fullWorkout);//Displays the full workout
        
    }
});

document.querySelector('.PullImg').addEventListener('click', function(){//Works and manages to displa workouts
   
    var fullWorkout = '';
    for(var i = 0; i < data.allExercises.Pull.length; i++){
        fullWorkout += (data.allExercises.Pull[i] + ' : ' + data.allReps.Pull[i] + ' X ' + data.allSets.Pull[i] + '\n');
    }
    
    if(data.allExercises.Pull.length === 0){
        alert('No workout entered.')
    }
    else{
    

alert('Pull Workout \n' + fullWorkout);
        
    }
});


document.querySelector('.LegsImg').addEventListener('click', function(){//Works and manages to display workouts
   
    var fullWorkout = '';
    for(var i = 0; i < data.allExercises.Legs.length; i++){
        fullWorkout += (data.allExercises.Legs[i] + ' : ' + data.allReps.Legs[i] + ' X ' + data.allSets.Legs[i] + '\n');
    }
    
    if(data.allExercises.Legs.length === 0){
        alert('No workout entered.')
    }
    else{
    

alert('Legs Workout \n' + fullWorkout);
        
    }
});


document.querySelector('.UpperImg').addEventListener('click', function(){//Works and manages to displa workouts
   
    var fullWorkout = '';
    for(var i = 0; i < data.allExercises.Upper.length; i++){
        fullWorkout += (data.allExercises.Upper[i] + ' : ' + data.allReps.Upper[i] + ' X ' + data.allSets.Upper[i] + '\n');
    }
    
    if(data.allExercises.Upper.length === 0){
        alert('No workout entered.')
    }
    else{
    

alert('Upper Workout \n' + fullWorkout);
        
    }
});


document.querySelector('.LowerImg').addEventListener('click', function(){//Works and manages to displa workouts
   
    var fullWorkout = '';
    for(var i = 0; i < data.allExercises.Lower.length; i++){
        fullWorkout += (data.allExercises.Lower[i] + ' : ' + data.allReps.Lower[i] + ' X ' + data.allSets.Lower[i] + '\n');
    }
    
    if(data.allExercises.Lower.length === 0){
        alert('No workout entered.')
    }
    else{
    

alert('Lower Workout \n' + fullWorkout);
        
    }
});

document.querySelector('.OtherImg').addEventListener('click', function(){//Works and manages to displa workouts
   
    var fullWorkout = '';
    for(var i = 0; i < data.allExercises.Other.length; i++){
        fullWorkout += (data.allExercises.Other[i] + ' : ' + data.allReps.Other[i] + ' X ' + data.allSets.Other[i] + '\n');
    }
    
    if(data.allExercises.Other.length === 0){
        alert('No workout entered.')
    }
    else{
    

alert('Other Workout \n' + fullWorkout);
        
    }
});



     var clearFields = function() {
            var fields, fieldsArr;
         fields = document.querySelectorAll('#Exercise' + ',' + '.Sets' + ',' + '.Reps');
       fieldsArr = Array.prototype.slice.call(fields); //thinks the function is being given an array when it actually takes a list
        
            fieldsArr.forEach(function(current, index, array) {//applies a function to all of an array
                current.value = "";
            });
            fieldsArr[0].focus();
        };



document.querySelector('.ion-ios-help').addEventListener('click', function(){//A help button for users if they are unaware of what to do
   
   alert('Select a workout type, input the name of the exercise, number of sets and reps.\n Press the button on the right or the enter key to save it.\n Then select the workout button below to view the entire workout');
});







