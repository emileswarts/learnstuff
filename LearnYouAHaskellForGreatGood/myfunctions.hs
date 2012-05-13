doubleMe x = x + x
doubleUs x y = doubleMe x + doubleMe y
doubleSmallNumber x = if x > 100
						then x
						else x*2
doubleSmallNumber' x = (if x > 100 then x else x*2) + 1
conanO'Brien = "It's a-me, Conan O'Brien!"
a = [1,2,3,4]
b = [[1,2,3,4],[5,3,3,3,3],[1,2,2,3,4],[1,2,3]]

--LIST FUNCTIONS

--head - return first element in list
myhead x = head x

--list - chop off head and return the rest
mytail x = tail x

--last - return last element
mylast x = last x 

--init - return everything but last element
myinit x = init x

--length - return length of list
mylength x = length x

--null - checks if null
mynull x = null x
