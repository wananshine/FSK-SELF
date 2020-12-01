import math

# s1 = set([1, 1, 2, 2, 3, 3])
# s2 = set([1, 3, 8, 5, 6, 9, 7, 4])
# print(s1 & s2);
# print(s1 | s2);

print(abs(100))

print(abs(-20))

print(abs(12.34))

print(max(1, 2, 3, 6, 4, 800, 8, 100, 7, 8, 7, 8, 8, 8, 8, 8, 8))

#字符串转为整数
print(int('123'))

#字符串转为浮点数
print(float('12.36'))

#数字转为字符串
print(str(12.36))

print(bool(1))

print(bool(''))

n1 = 255;
n2 = 1000;

print(hex(n1))
print(hex(n2))

def my_abs(x):
    if x >=0:
        return x;
    else:
        return -x
print(my_abs(-99))


def nop():
    pass;


# def move(x, step, angle=0):
#     nx = x + step * math.cos(angle)
#     ny = x - step * math.sin(angle)
#     return nx, ny
#
# x, y = move(100, 100, 60, math.pi / 6);
# print(x, y)

def power(x):
    return x * x
print(power(9))

def power1(x, n):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
print(power1(5, 2))

def power2(x, n = 2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
print(power2(5, 3))