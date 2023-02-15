
# Generate and plot the waveform given below and plot its histogram also.


import matplotlib.pyplot as plt
import numpy as np
import math


#x=sinx if mat.floor(x)%2==0 and x=0 otherwise

x=np.arange(0,4,0.01)





#code for numpy array filtering is by creating a boolean array

# import numpy as np
# arr = np.array([41, 42, 43, 44])
# Create an empty list
# filter_arr = []

# # go through each element in arr
# for element in arr:
#   # if the element is higher than 42, set the value to True, otherwise False:
#   if element > 42:
#     filter_arr.append(True)
#   else:
#     filter_arr.append(False)

# newarr = arr[filter_arr]

# print(filter_arr)
# print(newarr)



# filter_sin=[]
# filter_other=[]


# for i in x:
#     if math.floor(i)%2==0:
#         filter_sin.append(True)
#         filter_other.append(False)
#     else:
#         filter_sin.append(False)
#         filter_other.append(True)

# a_sin_x=x[filter_sin]
# print(a_sin_x)
# a_sin=np.sin(np.pi*a_sin_x)
# print("..............................................")
# print(a_sin)
# aother_x=x[filter_other]

# plt.plot(a_sin_x,a_sin)
# # c=np.arange(0,0,0.01)
# plt.hlines(y=0,aother_x)
# plt.show()










import matplotlib.pyplot as plt
import numpy as np
import math 

x = np.arange(0,4,0.01)
z = np.sin(np.pi*x)
y = np.abs(z)
w = (y + z)/2

plt.plot(x,w)
plt.show()
np.savetxt("waveform.csv",w,delimiter=',')

