import math

def uclid(a,b):
    q = []
    while b>0:
        if b > a :
            q.append(a//b)
            temp = a
            a = b
            b = temp
        else:
            q.append(a//b)  
            a, b = b, a%b
        
    q.reverse()
    
    return q
    
a, b, d = map(int, input().split())
c = math.gcd(a, b)

x_prime = 1
y_prime = 0

q = uclid(a, b)
print(q)
for i in range(len(q)):
    x = y_prime
    y = x_prime - (y_prime * q[i])
    
    y_prime = y
    x_prime = x
    
    print(x, y)

x = x * (d // c)
y = y * (d // c)

print(x, y)