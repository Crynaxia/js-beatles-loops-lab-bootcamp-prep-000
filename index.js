function theBeatlesPlay(musicians, instruments)
{
  var array = [];
  
  for(let i = 0, l = musicians.length; i < l; i++)
  {
    array.push(`${musicians[i]} plays the ${instruments[i]}`)
  }
  return array
}

