String = "dcdev" "3435" "true" "ve4t" 'efef'
Number = 8778 898787 9887878787 989.787 .989
Boolean = true/false
null
undefined

/////////////
Es5 > Ecma Script 5
Es6 > Ecma Script 6

/////Es5/////
var a = "Hi"
var b = 10
var c = true


typeof(a)
"string"
typeof(b)
"number"
typeof(c)
"boolean"

var d = "34353"
typeof(d)
"string"
var e = "true"
typeof(e)
"string"

var f = 5345.646
typeof(f)
"number"

var f = '33frgreg'
typeof(f)
"string"

////basic operation/////
var a = 10
var b = 5
a+b
15
a-b
5
a*b
50
a/b
2
a%b
0


2%4
3%4
4%4

1,1,1


2%4
2
3%4
3
4%3
1
4%3
1
4%2
0
4%4
0


> if we take modules of smaller to larger output is always smaller

100%101
100


////String/////
var a = "Hi"
var b = "javaScript"
undefined
a+b (concat)
"HijavaScript"
a-b
NaN(not a number)
a*b
NaN
a/b
NaN
a%b
NaN

a+b
"HijavaScript"
a+c
"Hi10"
a-b
NaN
a-c
NaN

c+a
"10Hi"

string+string = string
string+number = string
number+string = string
number+number = number

10+"20"+30
"1020"+30
"102030"

"10"+20+30
"1020"+30
"102030"


10+20+"30"
30+"30"
"3030"


10+"20"+30-1
"102030"-1
102029
"10"+20+30-1
"102030"-1
102029
10+20+"30"-1
"3030"-1
3029


var a = 10
undefined
var b = "10"
undefined
a+b
"1010"
a-b
0
a*b
100
a/b
1

var a = 10
undefined
var b = "10a"
undefined
a-b
NaN
b-a
NaN
var c = "3455"
undefined
c-a
3445
c+a 
"345510"
c*a
34550
c/a
345.5

if there pure number both side even in quotes 
it will do all opt 
except + is still concat

"10"-1+"10"-1
9+"10"-1
"910"-1
909
