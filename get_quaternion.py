#Quaternion Calculator
import numpy as np

alfa=0*3.14/180 #X
beta=0*3.14/180 #Y
gamma=-90*3.14/180 #Z

q1 = np.sin(gamma/2) * np.cos(beta/2) * np.cos(alfa/2) - np.cos(gamma/2) * np.sin(beta/2) * np.sin(alfa/2)
q2 = np.cos(gamma/2) * np.sin(beta/2) * np.cos(alfa/2) + np.sin(gamma/2) * np.cos(beta/2) * np.sin(alfa/2)
q3 = np.cos(gamma/2) * np.cos(beta/2) * np.sin(alfa/2) - np.sin(gamma/2) * np.sin(beta/2) * np.cos(alfa/2)
q0 = np.cos(gamma/2) * np.cos(beta/2) * np.cos(alfa/2) + np.sin(gamma/2) * np.sin(beta/2) * np.sin(alfa/2)
 

print("{x:"+str(q1)+", "+"y:"+str(q2)+", "+"z:"+str(q3)+", "+"w:"+str(q0)+"}")
