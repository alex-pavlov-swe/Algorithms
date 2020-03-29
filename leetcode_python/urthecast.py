def deleteDuplicates(original):
    if not original:
        return []
    slow = 0
    for fast in range(1, len(original)):
        if original[slow] != original[fast]:
            slow += 1
            original[slow] = original[fast]
    for i in range(slow, len(original)):
        original[i] = ''


def merge(original, toAdd, toDelete):
    result = []
    deleteDuplicates(original)
    for i in toAdd:
        if i not in original and i not in toDelete:
            result.append(i)
    for i in original:
        if i not in toAdd and i not in toDelete:
            result.append(i)
    return result


print(merge(['one', 'two', 'three'],
            ['one', 'two', 'five', 'six'],
            ['two', 'five']))
"""
l = ['one', 'one', 'two', 'two', 'two', 'three']
deleteDuplicates(l)
print(l)
"""
