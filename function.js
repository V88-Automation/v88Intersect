window.function = function (required,available)
{

  // Initialise our local variables
  let r = required.value ?? '';
  let a = available.value ?? '';
  
  // Check if required is empty
  if (r == '')
  {
    return(true);
  }
  
  // Create arrays
  let ar = r.split(',');
  let aa = a.split(',');
  
  // Create array of elements in ar and in aa
  let ai = aa.filter(value => ar.includes(value));

  // Return false if intersection is empty
  if (ai.length == 0)
  {
    return(false);
  }
  else
  {
    return(true);
  }
}
