// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

function isItLetter(character) {
  const letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(
    ","
  );
  const letter = letters.filter((x) => x === character.toLowerCase()).join("");

  return letter ? true : false;
}
