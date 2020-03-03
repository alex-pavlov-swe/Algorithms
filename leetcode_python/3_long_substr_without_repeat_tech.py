class Solution:
    def lengthOfLongestSubstring(self, s):
        letters = {}
        tail = -1
        head = 0
        result = 0
        i = 1

        while head < len(s):
            print('**********')
            print(f'bef-{i}: tail={tail}, head={head}, result={result}, string={s[max(0,tail):head]}, s[head]={s[head]}')
            if s[head] in letters:
                tail = max(tail, letters[s[head]])
            letters[s[head]] = head
            result = max(result, head-tail)
            head += 1
            print(f'aft-{i}: tail={tail}, head={head}, result={result}, string={s[max(0,tail):head]}')
            i += 1
        return result


inst = Solution()
print(inst.lengthOfLongestSubstring('pwwkew'))
