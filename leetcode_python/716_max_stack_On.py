class MaxStack:

  def __init__(self):
    """
    initialize your data structure here.
    """
    self.stack = []

  def push(self, x: int) -> None:
    self.stack.append(x)

  def pop(self) -> int:
    if len(self.stack) > 0:
      return self.stack.pop()
      

  def top(self) -> int:
    if len(self.stack) > 0:
      return self.stack[len(self.stack)-1]
      

  def peekMax(self) -> int:
    maxInStack = 0
    if len(self.stack) > 0:
      maxInStack = self.stack[0]
    for i in range(len(self.stack)):
      if self.stack[i] > maxInStack:
        maxInStack = self.stack[i]
    return maxInStack

  def removeMax(self, pos):
    for i in range(pos, len(self.stack)-1):
      self.stack[i] = self.stack[i+1]
    self.stack.pop()
      
  def popMax(self) -> int:
    maxInStack = 0
    maxPos = 0
    if len(self.stack) > 0:
      maxInStack = self.stack[len(self.stack)-1]
      maxPos = len(self.stack) - 1
    for i in range(len(self.stack)):
      if self.stack[len(self.stack)-1-i] > maxInStack:
        maxInStack = self.stack[len(self.stack)-i-1]
        maxPos = len(self.stack)-i-1
    self.removeMax(maxPos)
    return maxInStack
  
  def printStack(self):
    print('self.stack = ', self.stack)


st1 = MaxStack()
st1.push(5)
st1.push(1)

print(st1.popMax())
print(st1.printStack())
print(st1.peekMax())