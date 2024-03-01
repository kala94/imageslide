let s=document.getElementsByClassName("slide");
console.log(s);
let j=s.length;
function preslide()
{
  console.log(j);
  if(j<0)
  {
	j=s.length-1;
	s[0].classList.remove("active");
	s[0].classList.add("hide");
    s[j].classList.remove("hide");
	s[j].classList.add("active"); 
  }
  else if(j<s.length)
  {
    for(let i=0;i<s.length;i++)
	{	
      s[i].classList.remove("active");
	  s[i].classList.add("hide");
	}
	s[j].classList.remove("hide");
  }
  j--;
} 
j=0;
function nextslide()
{
  j++;
  console.log(j);
  if(j<s.length)
  {
	for(i=0;i<s.length;i++)
	{
	  s[i].classList.remove("active");
	  s[i].classList.add("hide");
    }
    s[j].classList.remove("hide");
	s[j].classList.add("active");
  }
  else 
  {
	j=0;
	console.log(j);
    s[s.length-1].classList.remove("active");
    s[s.length-1].classList.add("hide");
    s[j].classList.add("active");
  }
}