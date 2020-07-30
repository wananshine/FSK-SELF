#test.py

TemStr = input("请输入带有符号的温度值")

if TemStr in ['F', 'f']:
    c = (eval(TemStr[0:-1]) - 32)/1.8
    print("转换后的温度是{:.2f}C").format(c)
elif TemStr in ['C', 'c']:
    c = 1.8 * eval(TemStr[0:-1]) + 32
    print("转换后的温度是{:.2f}C").format(c)
else:
    print("格式错误")