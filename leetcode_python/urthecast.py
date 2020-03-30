def deleteDuplicates(list):
    if not list:
        return []
    slow = 0
    for fast in range(1, len(list)):
        if list[slow] != list[fast]:
            slow += 1
            list[slow] = list[fast]
    for i in range(slow+1, len(list)):
        list[i] = ''


def delete(list, toDelete):
    if not list:
        return []
    if list[0] in toDelete:
        slow = -1
    else:
        slow = 0
    for fast in range(1, len(list)):
        if list[fast] in toDelete:
            continue
        if list[slow] != list[fast]:
            slow += 1
            list[slow] = list[fast]
    for i in range(slow+1, len(list)):
        list[i] = ''


def merge(original, toAdd, toDelete):
    result = list(original)
    delete(result, toDelete)
    for i in toAdd:
        if i not in toDelete and i not in result:
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
