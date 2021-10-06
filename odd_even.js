<script>
// A simple JavaScript program to
// check for even or odd
 
// Returns true if n is
// even, else odd
function isEven(n)
{
     
    // n & 1 is 1, then
    // odd, else even
    return (!(n & 1));
}
 
// Driver code
let n = 101;
isEven(n)? document.write("Even") :
        document.write("Odd");

</script>
