let wakeDog = function(dogName, dogBreed)
{
  let str = `Wake ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

let leashDog = function(dogName, dogBreed)
{
  let str = `Leash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

let walkToPark = function(dogName, dogBreed)
{
  let str = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

let throwFrisbee = function(dogName, dogBreed)
{
  let str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

let walkHome = function(dogName, dogBreed)
{
  let str = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

let unleashDog = function(dogName, dogBreed)
{
  let str = `Unleash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

let routine = [
  wakeDog, 
  leashDog, 
  walkToPark, 
  throwFrisbee, 
  walkHome, 
  unleashDog
];

function exerciseDog(arr)
{
  let results = [];
  for (let i = 0; i < arr.length; i++)
  {
    results.push(arr[i()]);
  }
  return results;
}
