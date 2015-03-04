function findYoungestPerson(persons)
{
    var name = "";
    var age = Number.MAX_VALUE;
    for(var i = 0; i < persons.length;i++)
    {
        if(persons[i]['age'] < age)
        {
            name = persons[i]['firstname'] + " " + persons[i]['lastname'];
            age = persons[i]['age'];
        }
    }
    console.log("The youngest person is " + name);
    return name;
}

var persons = [
  { firstname : 'George', lastname: 'Kolev', age: 32}, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81},
  { firstname : 'Baba', lastname: 'Ginka', age: 40}]

findYoungestPerson(persons);