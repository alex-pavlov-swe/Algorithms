def merge(original, toAdd, toDelete):
    result = []

    if original:
        if original[0] not in toDelete:
            result.append(original[0])

    slow = 0

    for fast in range(1, len(original)):
        if original[fast] in toDelete:
            continue
        if original[fast] != original[slow]:
            result.append(original[fast])
            slow += 1

    for i in toAdd:
        if i not in result and i not in toDelete:
            result.append(i)

    result.sort(key=str, reverse=True)
    result.sort(key=len, reverse=True)

    return result


print(merge(['one', 'two', 'three'],
            ['one', 'two', 'five', 'six'],
            ['two', 'five']))

print(merge([], ['two'], []))

"""
l = ['one', 'one', 'two', 'two', 'two', 'three']
deleteDuplicates(l)
print(l)
"""
