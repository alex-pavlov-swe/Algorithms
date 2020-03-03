class MaxStack:

  def __init__(self):
    """
    initialize your data structure here.
    """
    self.stack = []
    self.maxValues = []

  def push(self, val: int) -> None:
    self.stack.append(val)
    if self.maxValues and self.maxValues[-1] > val:
      self.maxValues.append(self.maxValues[-1])
    else:
      self.maxValues.append(val)

  def pop(self) -> int:
    if self.maxValues:
      self.maxValues.pop()
    return self.stack.pop()
      

  def top(self) -> int:
    if len(self.stack) > 0:
      return self.stack[len(self.stack)-1]  

  def peekMax(self) -> int:
    return self.maxValues[-1]
      
  def popMax(self) -> int:
    maxValue = self.maxValues[-1]
    print(f'maxValue={maxValue}')
    temp = []
    val = self.pop()
    while val != maxValue:
      temp.append(val)
      val = self.pop()
    while temp:
      self.push(temp.pop())
    return maxValue
  
  def printStack(self):
    print('self.stack = ', self.stack)


st1 = MaxStack()
st1.push(5)
st1.push(1)

print(st1.popMax())
print(st1.peekMax())