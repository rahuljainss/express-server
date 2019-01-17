function diamond(n)
{ console.log('printing diamond for',n,'row');
    let pattern='';

    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=n-i;j++)
        pattern+=' ';
        for(j=1;j<=i;j++)
        {
            pattern+='* ';
        }
        pattern+='\n';

    }
    for(let k=0;k<n;k++)
    {
      for(let m=n;m>n-k;m--)
      pattern+=' ';
      for(m=n;m>k;m--)
        {
            pattern+='* ';
        }
        pattern+='\n';
    }
    console.log(pattern)
}
diamond(5);
diamond(10);
